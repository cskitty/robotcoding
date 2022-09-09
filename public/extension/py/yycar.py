'''
Copyright (c) 2022 Ningbo Yiyuan
双桥电机驱动，每路电机三根信号线
version:1.0
'''
from machine import Pin,PWM,Timer,time_pulse_us
from utime import sleep
import time

class YYCar:
    #右边电机配置
    m_MOTOR_RIGHT_IN1 = 17 
    m_MOTOR_RIGHT_IN2 = 18 
    m_MOTOR_RIGHT_ENB = 16 

    #左边电机
    m_MOTOR_LEFT_IN1 = 15  
    m_MOTOR_LEFT_IN2 = 14  
    m_MOTOR_LEFT_ENA = 13  
    
    #电机速度
    m_SPEED_DUTY = 36500
    m_SPEED = 50
    
    def __init__(self,MOTOR_RIGHT_IN1=8,MOTOR_RIGHT_IN2=7,MOTOR_RIGHT_ENB=9,
                 MOTOR_LEFT_IN1=6,MOTOR_LEFT_IN2=5,MOTOR_LEFT_ENA=4):
        if MOTOR_RIGHT_IN1 != None:
            self.m_MOTOR_RIGHT_IN1=MOTOR_RIGHT_IN1
        if MOTOR_RIGHT_IN2 != None:
            self.m_MOTOR_RIGHT_IN2=MOTOR_RIGHT_IN2
        if MOTOR_RIGHT_ENB != None:
            self.m_MOTOR_RIGHT_ENB=MOTOR_RIGHT_ENB
        if MOTOR_LEFT_IN1 != None:
            self.m_MOTOR_LEFT_IN1=MOTOR_LEFT_IN1
        if MOTOR_LEFT_IN2 != None:
            self.m_MOTOR_LEFT_IN2=MOTOR_LEFT_IN2
        if MOTOR_LEFT_ENA != None:
            self.m_MOTOR_LEFT_ENA = MOTOR_LEFT_ENA
        self.m_PWM_RIGHT = PWM(Pin(self.m_MOTOR_RIGHT_ENB))
        self.m_PWM_RIGHT.freq(50)
        self.m_PWM_LEFT = PWM(Pin(self.m_MOTOR_LEFT_ENA))
        self.m_PWM_LEFT.freq(50)
    
    def GPIOSet(self,pin,value):
        if value >= 1:Pin(pin, Pin.OUT).on()
        else:Pin(pin, Pin.OUT).off()
        
    #速度转换成pwn duty, speed：0~100
    def SpeedToDuty(self,speed):
        if speed < 0:speed=0
        elif speed > 100:speed=100
        duty = 8000 + round((57000 * speed) / 100)
        return duty
    
    #设置小车行驶速度 speed:0~100
    def SetSpeed(self,speed=50):
        if speed>100 :speed=100
        if speed<0 :speed=0
        self.m_SPEED = speed
        self.m_SPEED_DUTY = self.SpeedToDuty(speed)
    
    # 向前
    def Forward(self,speed=False,time_dur=0):
        if speed > 0  :
            self.m_SPEED = speed
            self.m_SPEED_DUTY = self.SpeedToDuty(speed)
        self.GPIOSet(self.m_MOTOR_LEFT_IN2,False)
        self.GPIOSet(self.m_MOTOR_LEFT_IN1,True)
        self.GPIOSet(self.m_MOTOR_RIGHT_IN1,True)
        self.GPIOSet(self.m_MOTOR_RIGHT_IN2,False)
        self.m_PWM_RIGHT.duty_u16(self.m_SPEED_DUTY)
        self.m_PWM_LEFT.duty_u16(self.m_SPEED_DUTY)
        if time_dur>0 :
            sleep(time_dur)
            self.Stop()
    # 后退
    def Backward(self,speed=False,time_dur=0):
        if speed > 0  :
            self.m_SPEED = speed
            self.m_SPEED_DUTY = self.SpeedToDuty(speed)
        self.GPIOSet(self.m_MOTOR_LEFT_IN2,True)
        self.GPIOSet(self.m_MOTOR_LEFT_IN1,False)
        self.GPIOSet(self.m_MOTOR_RIGHT_IN1,False)
        self.GPIOSet(self.m_MOTOR_RIGHT_IN2,True)
        self.m_PWM_RIGHT.duty_u16(self.m_SPEED_DUTY)
        self.m_PWM_LEFT.duty_u16(self.m_SPEED_DUTY)
        if time_dur>0 :
            sleep(time_dur)
            self.Stop()
    
    #左转 speed:速度 time_dur:时间,<=0：一直转
    def TurnLeft(self,speed=100,time_dur=0):
        if speed < 0 : speed = self.m_SPEED
        if speed >100 : speed = 100
        self.m_SPEED = speed
        self.m_SPEED_DUTY = self.SpeedToDuty(speed)
        self.GPIOSet(self.m_MOTOR_LEFT_IN2,True)
        self.GPIOSet(self.m_MOTOR_LEFT_IN1,False)
        self.GPIOSet(self.m_MOTOR_RIGHT_IN1,True)
        self.GPIOSet(self.m_MOTOR_RIGHT_IN2,False)
        self.m_PWM_RIGHT.duty_u16(self.SpeedToDuty(speed))
        self.m_PWM_LEFT.duty_u16(self.SpeedToDuty(speed))
        if time_dur>0 :
            sleep(time_dur)
            self.Stop()
    
    #右转 speed:速度 time_dur:时间,<=0：一直转
    def TurnRight(self,speed=100,time_dur=0):
        if speed < 0 : speed = self.m_SPEED
        if speed >100 : speed = 100
        self.m_SPEED = speed
        self.m_SPEED_DUTY = self.SpeedToDuty(speed)
        self.GPIOSet(self.m_MOTOR_LEFT_IN1,True)
        self.GPIOSet(self.m_MOTOR_LEFT_IN2,False)
        self.GPIOSet(self.m_MOTOR_RIGHT_IN2,True)
        self.GPIOSet(self.m_MOTOR_RIGHT_IN1,False)
        self.m_PWM_RIGHT.duty_u16(self.SpeedToDuty(speed))
        self.m_PWM_LEFT.duty_u16(self.SpeedToDuty(speed))
        if time_dur>0 :
            sleep(time_dur)
            self.Stop()
    
    #停止
    def Stop(self):
        self.GPIOSet(self.m_MOTOR_LEFT_IN2,False)
        self.GPIOSet(self.m_MOTOR_LEFT_IN1,False)
        self.GPIOSet(self.m_MOTOR_RIGHT_IN1,False)
        self.GPIOSet(self.m_MOTOR_RIGHT_IN2,False)

    #获取当前速度
    def GetSpeed(self):
        return self.m_SPEED
         