from machine import  Pin
from utime import  sleep

s1_pressed_callback = None
s1_release_callback = None
s2_pressed_callback = None
s2_release_callback = None

def yy_s1_callback(n):
    global s1_release_callback,s1_pressed_callback
    if n.value() == 1 :
        if s1_release_callback!=None :
            s1_release_callback()
    else :
        if s1_pressed_callback != None:
            s1_pressed_callback()

def yy_s2_callback(n):
    global s2_release_callback,s2_pressed_callback
    if n.value() == 1 :
        if s2_release_callback!=None :
            s2_release_callback()
    else :
        if s2_pressed_callback != None:
            s2_pressed_callback()
 
def S1Pressed(cb):
    global s1_pressed_callback
    s1_pressed_callback=cb
    DoS1()

def S1Release(cb):
    global s1_release_callback
    s1_release_callback=cb
    DoS1()
    
def S2Pressed(cb):
    global s2_pressed_callback
    s2_pressed_callback=cb
    DoS2()

def S2Release(cb):
    global s2_release_callback
    s2_release_callback=cb
    DoS2()
    
def DoS1():
    yy_p_25 = Pin(25,Pin.IN)
    yy_p_25.irq(trigger=Pin.IRQ_FALLING|Pin.IRQ_RISING, handler=yy_s1_callback)

def DoS2():
    yy_p_24 = Pin(24,Pin.IN)
    yy_p_24.irq(trigger=Pin.IRQ_FALLING|Pin.IRQ_RISING, handler=yy_s2_callback)
