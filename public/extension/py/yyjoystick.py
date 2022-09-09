'''
Copyright (c) 2022 Ningbo Yiyuan
串口手柄操作
date:2022.08.21
version:1.3
'''

import math

speed_min = 10
def GetCommand(buf):
    global speed_min
    x=0
    y=0
    ret = [-1,-1,-1]
    if len(buf)<4:return ret
    spt = buf.split('P')
    if len(spt)==2: #左摇杆
        x=int(spt[1])-128
        spt1=spt[0].split('W')
        if len(spt1)==2:
            y=0-(int(spt1[1])-128)
        if math.fabs(x) <= 20 : x=0
        if math.fabs(y) <= 20 : y=0
        #print(x,y)
        if x>=-128 and x<=-80 and y>=80 and y<=128: #左前
            return [31,-1,-1]
        if x>=80 and x<=128 and y>=80 and y<=128: #右前
            return [32,-1,-1]
        if x>=-128 and x<=-80 and y>=-128 and y<=-80: #左后
            return [33,-1,-1]
        if x>=80 and x<=128 and y>=-128 and y<=-80: #右后
            return [34,-1,-1]
        
        if x==0 and y==0:
            return [0,-1,-1]
        if math.fabs(x)>math.fabs(y):
            if x>0:
                ret[0]=6 #right
            else:
                ret[0]=8 #left
            ret[1]= math.ceil(speed_min+math.fabs(x)*(100-speed_min)/128)
        else:
            if y>0:
                ret[0]=5 #up
            else:
                ret[0]=7 #down
            ret[1] = math.ceil(speed_min+math.fabs(y)*(100-speed_min)/128)
        return ret
    spt = buf.split('S')
    if len(spt)==2: #右摇杆
        x=int(spt[1])-128
        spt1=spt[0].split('Q')
        if len(spt1)==2:
            y=0-(int(spt1[1])-128)
        if math.fabs(x) <= 20 : x=0
        if math.fabs(y) <= 20 : y=0
        if x==0 and y==0:
            return [99,-1,-1]
        if math.fabs(x)>math.fabs(y):
            if x>0:
                ret[0]=14 #right
            else:
                ret[0]=16 #left
            #ret[1]= math.ceil(math.fabs(x))
            ret[2]= math.ceil(speed_min+math.fabs(x)*(100-speed_min)/128)
        else:
            if y>0:
                ret[0]=13 #up
            else:
                ret[0]=15 #down
            #ret[1] = math.ceil(math.fabs(y))
            ret[2] = math.ceil(speed_min+math.fabs(y)*(100-speed_min)/128)
        return ret
    return ret

def DecodeCMD(uart,cmd):
    cmds=[-1,-1,-1]
    buff=''
    if cmd=='W' or cmd=='Q':
        buff = cmd
        while 1:
            if uart.any():
                b=uart.read(1).decode()
                if b=='\n':
                    break
                buff = buff+ b
        buff = buff.strip()
        if len(buff)>=4:
            return GetCommand(buff)
        else:
            pass
    elif cmd == 'A': cmds[0]=25
    elif cmd == 'B': cmds[0]=27
    elif cmd == 'C': cmds[0]=28
    elif cmd == 'D': cmds[0]=26
    elif cmd == 'E': cmds[0]=11
    elif cmd == 'I': cmds[0]=1
    elif cmd == 'L': cmds[0]=2
    elif cmd == 'J': cmds[0]=3
    elif cmd == 'K': cmds[0]=4
    elif cmd == 'M': cmds[0]=12
    elif cmd == 'F': cmds[0]=9
    elif cmd == 'N': cmds[0]=10
    elif cmd == 'G': cmds[0]=29
    elif cmd == 'H': cmds[0]=30
    else:
        print(cmd)
    return cmds
def Clear(uart):
    if uart.any():
        uart.read()
