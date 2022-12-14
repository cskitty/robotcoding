from utime import sleep
from machine import UART,Pin, Timer

class YX9100:
    def __init__(self,uart=1, pin_TX=Pin(8), pin_RX=Pin(9)):
        self.uart = UART(uart, 9600, tx=pin_TX, rx=pin_RX)
        #self.cmd(0x0C)
        self._fadeout_timer = Timer(-1)
        self._volume = 10
        self._max_volume = 30
        self._fadeout_speed = 0

    def cmd(self, command, parameter=0x00):
        query = bytes([0x7E, 0xFF, 0x06, command,0x00, 0x00, parameter, 0xEF])
        self.uart.write(query)
        sleep(0.02)
        
    def _fade_out_process(self, timer):
        new_volume = self._volume - self._fadeout_speed
        if new_volume <= 0:
            print("fadeout finished")
            new_volume = 0
            self._fadeout_timer.deinit()
            self.stop()
            new_volume = self._max_volume # reset volume to max 
        self.volume(new_volume)

    # playback
    def play(self, track_id=False):
        if not track_id:
            self.resume()
        elif track_id == 'next':
            self.cmd(0x01)
        elif track_id == 'prev':
            self.cmd(0x02)
        elif isinstance(track_id, int):
            self.cmd(0x03, track_id)

    def pause(self):
        self.cmd(0x0E)

    def resume(self):
        self.cmd(0x0D)

    def stop(self):
        self.cmd(0x16)

    def fadeout(self, fadeout_ms=1000):
        # more than 500ms and less than 3000ms
        fadeout_ms = int(sorted([500, fadeout_ms, 3000])[1])
        fade_out_step_ms = 100
        self._fadeout_speed = self._volume * \
            fade_out_step_ms / fadeout_ms  # ten steps per second
        self._fadeout_timer.init(
            period=fade_out_step_ms, callback=self._fade_out_process)

    def loop_track(self, track_id):
        self.cmd(0x08, track_id)
        #self.cmd(0x19)

    def loop(self):
        self.cmd(0x19)

    def loop_disable(self):
        self.cmd(0x19, 0x01)

    def volume_up(self):
        if self._volume+1 > self._max_volume:
            return
        self._volume += 1
        
        self.cmd(0x04)

    def volume_down(self):
        if self._volume-1 <0 :
            return 
        self._volume -= 1
        self.cmd(0x05)

    def volume(self, volume=False):
        if volume:
            self._volume = int(sorted([0, volume, self._max_volume])[1])
            #print("volume", self._volume)
            self.cmd(0x06, self._volume)
        return self._volume

    def module_sleep(self):
        self.cmd(0x0A)

    def module_wake(self):
        self.cmd(0x0B)

    def module_reset(self):
        self.cmd(0x0C)