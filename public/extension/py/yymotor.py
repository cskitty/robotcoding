'''
Copyright (c) 2021 Ningbo Yiyuan
date:2022.06.17
version:1.0
'''

from machine import Pin,PWM
from utime import sleep

class YYMotor:
    m_MOTOR_M1_A = 19 
    m_MOTOR_M1_B = 18 
    
    m_MOTOR_M2_A = 21 
    m_MOTOR_M2_B = 20 
    
    def __init__(self):
        self.m_PWM_M1_A = PWM(Pin(self.m_MOTOR_M1_A))
        self.m_PWM_M1_A.freq(50)
        self.m_PWM_M1_B = PWM(Pin(self.m_MOTOR_M1_B))
        self.m_PWM_M1_B.freq(50)
        self.m_PWM_M2_A = PWM(Pin(self.m_MOTOR_M2_A))
        self.m_PWM_M2_A.freq(50)
        self.m_PWM_M2_B = PWM(Pin(self.m_MOTOR_M2_B))
        self.m_PWM_M2_B.freq(50)
        
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
            self.m_PWM_M1_A.duty_u16(duty)
            self.m_PWM_M1_B.duty_u16(0)
        else:
            self.m_PWM_M2_A.duty_u16(duty)
            self.m_PWM_M2_B.duty_u16(0)
  
    def Backward(self,speed=50,m=1):
        duty = self.SpeedToDuty(speed)
        if m==1:
            self.m_PWM_M1_B.duty_u16(duty)
            self.m_PWM_M1_A.duty_u16(0)
        else:
            self.m_PWM_M2_B.duty_u16(duty)
            self.m_PWM_M2_A.duty_u16(0)
      
    #停止
    def Stop(self,m=0):
        if m==1:
            self.m_PWM_M1_B.duty_u16(0)
            self.m_PWM_M1_A.duty_u16(0)
        elif m==2:
            self.m_PWM_M2_B.duty_u16(0)
            self.m_PWM_M2_A.duty_u16(0)
        else:
            self.m_PWM_M1_B.duty_u16(0)
            self.m_PWM_M1_A.duty_u16(0)
            self.m_PWM_M2_B.duty_u16(0)
            self.m_PWM_M2_A.duty_u16(0)
        