from utime import ticks_us, ticks_diff,ticks_ms
from array import array
from machine import Timer, Pin

class IR_RX():
    REPEAT = -1
    # Error codes
    BADSTART = -2
    BADBLOCK = -3
    BADREP = -4
    OVERRUN = -5
    BADDATA = -6
    BADADDR = -7
    
    isduty = 0 
    
    CMDIGNORETIME = 200 #相同指令间隔时间

    def __init__(self, pin, nedges, tblock, callback, *args):  # Optional args for callback
        self._pin = pin
        self._nedges = nedges
        self._tblock = tblock
        self.callback = callback
        self.args = args
        self._errf = lambda _ : None
        self.verbose = False
        self._lastcmd = None
        self._lastcmdtime = None

        self._times = array('i',  (0 for _ in range(nedges + 1)))  # +1 for overrun
        pin.irq(handler = self._cb_pin, trigger = (Pin.IRQ_FALLING | Pin.IRQ_RISING))
        self.edge = 0
        self.tim = Timer(-1)  # Sofware timer
        self.cb = self.decode

    def _cb_pin(self, line):
        t = ticks_us()
        #print(self.edge)
        if self.edge <= self._nedges:  # Allow 1 extra pulse to record overrun
            if not self.edge:  # First edge received
                self.tim.init(period=self._tblock , mode=Timer.ONE_SHOT, callback=self.cb)
            self._times[self.edge] = t
            self.edge += 1
        else:
            self.edge=0

    def do_callback(self, cmd, addr, ext, thresh=0):
        self.edge = 0
        #print(cmd)
        if cmd == -1 and self._lastcmd!=None :
            if self.isduty==1: return
            cmd = self._lastcmd
        if cmd >= thresh:
            #print(ticks_ms())
            #print(cmd)
            #如果1秒内指令相同，则忽略
            if self._lastcmd != cmd :
                self._lastcmd =cmd
                self._lastcmdtime = ticks_ms()
            else :
                if ticks_diff(ticks_ms(),self._lastcmdtime) < self.CMDIGNORETIME :
                    #print("忽略")
                    return
                self._lastcmdtime = ticks_ms()
            self.callback(cmd, addr, ext, *self.args)
            self.isduty = 0
        else:
            self.isduty=1
            self._errf(cmd)
            

    def error_function(self, func):
        self._errf = func

    def close(self):
        self._pin.irq(handler = None)
        self.tim.deinit()


class SONY_ABC(IR_RX):  # Abstract base class
    def __init__(self, pin, bits, callback, *args):
        # 20 bit block has 42 edges and lasts <= 39ms nominal. Add 4ms to time
        # for tolerances except in 20 bit case where timing is tight with a
        # repeat period of 45ms.
        t = int(3 + bits * 1.8) + (1 if bits == 20 else 4)
        super().__init__(pin, 2 + bits * 2, t, callback, *args)
        self._addr = 0
        self._bits = 20

    def decode(self, _):
        try:
            nedges = self.edge  # No. of edges detected
            self.verbose and print('nedges', nedges)
            if nedges > 42:
                raise RuntimeError(self.OVERRUN)
            bits = (nedges - 2) // 2
            if nedges not in (26, 32, 42) or bits > self._bits:
                raise RuntimeError(self.BADBLOCK)
            self.verbose and print('SIRC {}bit'.format(bits))
            width = ticks_diff(self._times[1], self._times[0])
            if not 1800 < width < 3000:  # 2.4ms leading mark for all valid data
                raise RuntimeError(self.BADSTART)
            width = ticks_diff(self._times[2], self._times[1])
            if not 350 < width < 1000:  # 600 space
                raise RuntimeError(self.BADSTART)

            val = 0  # Data received, LSB 1st
            x = 2
            bit = 1
            while x <= nedges - 2:
                if ticks_diff(self._times[x + 1], self._times[x]) > 900:
                    val |= bit
                bit <<= 1
                x += 2
            cmd = val & 0x7f  # 7 bit command
            val >>= 7
            if nedges < 42:
                addr = val & 0xff  # 5 or 8 bit addr
                val = 0
            else:
                addr = val & 0x1f  # 5 bit addr
                val >>= 5  # 8 bit extended
        except RuntimeError as e:
            cmd = e.args[0]
            addr = 0
            val = 0
        self.do_callback(cmd, addr, val)

class SONY_12(SONY_ABC):
    def __init__(self, pin, callback, *args):
        super().__init__(pin, 12, callback, *args)

class SONY_15(SONY_ABC):
    def __init__(self, pin, callback, *args):
        super().__init__(pin, 15, callback, *args)

class SONY_20(SONY_ABC):
    def __init__(self, pin, callback, *args):
        super().__init__(pin, 20, callback, *args)


class NEC_ABC(IR_RX):
    def __init__(self, pin, extended, callback, *args):
        # Block lasts <= 80ms (extended mode) and has 68 edges
        super().__init__(pin, 68, 80, callback, *args)
        self._extended = extended
        self._addr = 0

    def decode(self, _):
        try:
            #print(self.edge)
            if self.edge > 68:
                raise RuntimeError(self.OVERRUN)
            width = ticks_diff(self._times[1], self._times[0])
            if width < 4000:  # 9ms leading mark for all valid data
                raise RuntimeError(self.BADSTART)
            width = ticks_diff(self._times[2], self._times[1])
            if width > 3000:  # 4.5ms space for normal data
                if self.edge < 68:  # Haven't received the correct number of edges
                    raise RuntimeError(self.BADBLOCK)
                val = 0
                for edge in range(3, 68 - 2, 2):
                    val >>= 1
                    if ticks_diff(self._times[edge + 1], self._times[edge]) > 1120:
                        val |= 0x80000000
            elif width > 1700: # 2.5ms space for a repeat code. Should have exactly 4 edges.
                raise RuntimeError(self.REPEAT if self.edge == 4 else self.BADREP)  # Treat REPEAT as error.
            else:
                raise RuntimeError(self.BADSTART)
            addr = val & 0xff  # 8 bit addr
            cmd = (val >> 16) & 0xff
            if cmd != (val >> 24) ^ 0xff:
                raise RuntimeError(self.BADDATA)
            if addr != ((val >> 8) ^ 0xff) & 0xff:  # 8 bit addr doesn't match check
                if not self._extended:
                    raise RuntimeError(self.BADADDR)
                addr |= val & 0xff00  # pass assumed 16 bit address to callback
            self._addr = addr
        except RuntimeError as e:
            cmd = e.args[0]
            addr = self._addr if cmd == self.REPEAT else 0  # REPEAT uses last address
        # Set up for new data burst and run user callback
        self.do_callback(cmd, addr, 0, self.REPEAT)

class NEC_8(NEC_ABC):
    def __init__(self, pin, callback, *args):
        super().__init__(pin, False, callback, *args)

class NEC_16(NEC_ABC):
    def __init__(self, pin, callback, *args):
        super().__init__(pin, True, callback, *args)