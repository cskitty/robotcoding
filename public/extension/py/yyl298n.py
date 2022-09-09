'''
Copyright (c) 2021 Ningbo Yiyuan
date:2022.06.19
version:1.0
'''

from machine import Pin,PWM
from utime import sleep

class YYL298N:
    m_MOTOR_IN_1 = None
    m_MOTOR_IN_2 = None
    m_MOTOR_IN_3 = None
    m_MOTOR_IN_4 = None
    def __init__(self):
       pass
    
    def SetupA(self,in1,in2):
        self.m_MOTOR_IN_1 = PWM(Pin(in1))
        self.m_MOTOR_IN_1.freq(50)
        self.m_MOTOR_IN_2 = PWM(Pin(in2))
        self.m_MOTOR_IN_2.freq(50)
    def SetupB(self,in3,in4):
        self.m_MOTOR_IN_3 = PWM(Pin(in3))
        self.m_MOTOR_IN_3.freq(50)
        self.m_MOTOR_IN_4 = PWM(Pin(in4))
        self.m_MOTOR_IN_4.freq(50)
    
    #速度转换成pwn duty, speed：0~100
    def SpeedToDuty(self,speed):
        smin = 10000
        smax = 65000
        if speed < 0:speed=0
        elif speed > 100:speed=100
        duty = smin + round(((smax-smin) * speed) / 100)
        return duty
    
       # 向前
    def Forward(self,speed=50,m=1):
        duty = self.SpeedToDuty(speed)
        if m==1:
            self.m_MOTOR_IN_1.duty_u16(duty)
            self.m_MOTOR_IN_2.duty_u16(0)
        else:
            self.m_MOTOR_IN_3.duty_u16(duty)
            self.m_MOTOR_IN_4.duty_u16(0)
  
    def Backward(self,speed=50,m=1):
        duty = self.SpeedToDuty(speed)
        if m==1:
            self.m_MOTOR_IN_2.duty_u16(duty)
            self.m_MOTOR_IN_1.duty_u16(0)
        else:
            self.m_MOTOR_IN_4.duty_u16(duty)
            self.m_MOTOR_IN_3.duty_u16(0)
      
    #停止
    def Stop(self,m=0):
        if m==1 :
            if self.m_MOTOR_IN_2 != None:
                self.m_MOTOR_IN_2.duty_u16(0)
            if self.m_MOTOR_IN_1 != None:
                self.m_MOTOR_IN_1.duty_u16(0)
        elif m==2:
            if self.m_MOTOR_IN_4 !=None:
                self.m_MOTOR_IN_4.duty_u16(0)
            if self.m_MOTOR_IN_3 !=None:
                self.m_MOTOR_IN_3.duty_u16(0)
        else:
            if self.m_MOTOR_IN_2 != None:
                self.m_MOTOR_IN_2.duty_u16(0)
            if self.m_MOTOR_IN_1 != None:
                self.m_MOTOR_IN_1.duty_u16(0)
            if self.m_MOTOR_IN_4 !=None:
                self.m_MOTOR_IN_4.duty_u16(0)
            if self.m_MOTOR_IN_3 !=None:
                self.m_MOTOR_IN_3.duty_u16(0)
        