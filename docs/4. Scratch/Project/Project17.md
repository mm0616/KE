### Project 17 Invasion Alarm

**1.  Description**

This invasion alarm system is able to detect invaders in houses or small offices and warn the host to take measures in time. 

In this project, the sensor monitors a certain area. Some device on Arduino board will trigger LED to light up and buzzer to beep for caution if a movement is detected in that zone. What's more, its sensibility is adjustable for a more accurate detection. 

Virtually, this module features practicability, easy installation and low costs. With the exception of home and office, it also applies to factories, warehouses and markets, which, to a large extent, protects property security.

**2. Working Principle**

![](media/image-20251014134046883.png)

Human body(37°C) always emits infrared ray with a wavelength of 10μm, which approximates to that of the sensor detected. 

On this account, this module is able to detects human beings movement. If there is, PIR sensor outputs a high level about 3s and, it outputs a low level. 

**3. Wiring Diagram**

![](media/image-20251014134121391.png)

**4. Test Code**

1. Add the two basic blocks and drag a "baud rate" block from “Serial” between them. Set the serial baud rate to 9600.

![](media/image-20251014134144813.png)

2. Add an "if else" block. Put a "read PIR motion sensor" block in the hexagon box and set the interface to IO5, thus it will determine whether there is a human motion. Add two "serial print" blocks after "then" and "else" and set both modes to "warp". If the condition is satisfied, print “Someone Invaded”. Or else, print “No one”, then add a 1s delay time.

![](media/image-20251014134201482.png)

**Complete Code:**

![](media/image-20251014134215930.png)

**5. Test Result**

After connecting the wiring and uploading code, open serial monitor to set baud rate to 9600. When the sensor detects movement, the serial port prints "Someone Invaded", or else, it prints “No One”.

![](media/image-20251014134243053.png)

**6. Expansion Code**

Let's make an invasion alarm. When the PIR sensor detects human, LED lights up and the buzzer emits sound. In contrast, LED goes off and the buzzer stays quiet. 

**Flow Chart：**

![](media/image-20251014134320436.png)

**Wiring Diagram：**

![](media/image-20251014134333907.png)

**Code：**

![](media/image-20251014134534240.png)

**7.Code Explanation**

When PIR senses human motions, it outputs a high level. Therefore, we can judge whether there is a movement by reading the development board pin connected to this sensor. 

![](media/image-20251014134551515.png)