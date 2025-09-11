2. Product installation
-----------------------

After checking all the parts in this kit, we need to mount the tank
robot. Let’s install the smart car in compliance with the following
instructions.

Assembly Video：

.. raw:: html

   <iframe width="560" height="315" src="https://www.youtube.com/embed/ES0wFdEsX4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="box-sizing: border-box; color: rgb(64, 64, 64); font-family: Lato, proxima-nova, &quot;Helvetica Neue&quot;, Arial, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(252, 252, 252); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">

.. raw:: html

   </iframe>

**Note: Peel the plastic film off the board first when installing smart
car.**

Step 1: Install Bottom Motor

Prepare the parts as follows:

- M4 Nut \* 2
- Metal Motor \*2
- Metal Holder \*2
- Copper Coupler \*2
- Blue Supportive Parts \*2
- M4*12MM Inner Hex Screw \* 2
- M1.5 Hex Key Nickel Plated Allen Wrench \*1
- M3 Hex Key Nickel Plated Allen Wrench \*1
- M2.5 Hex Key Nickel Plated Allen Wrench \*1
- M3*8MM Inner Hex Screw \* 4

|image1|

|image2|

Step 2: Install Driver Wheel

Prepare the parts as follows:

- M4*12MM Inner Hex Screw \* 2
- M4*50MM Inner Hex Screw \* 2
- Tank Load-bearing Wheel \* 2
- Flange Bearing \* 4
- Copper Bush \*2
- Caterpillar Band \*2
- M4 Self-locking Nut \* 2
- M3 Hex Key Nickel Plated Allen Wrench \*1

|image3|

|image4|

|image5|

Step 3: Install the Battery Holder

Prepare the parts as follows:

- Battery Holder \*1
- M3 Nut \* 2
- Blue Metal holder \*2
- M4 Nut \*8
- M3*10MM Flat Head Screw \* 2
- M4*40MM Inner Hex Screw \*4
- M2.5 Hex Key Nickel Plated Allen Wrench*1
- M3 Hex Key Nickel Plated Allen Wrench \*1
- M3*25MM Inner Hex Screw \*4

|image6|

Move to fix the metal holder on the motor wheel with four M4*40MM inner
hex screws and four M4 nuts when the mounting process is completed.

|image7|

|image8|

|image9|

Step 4: Mount Acrylic Board and Sensors

- Acrylic Board \* 2
- L- type Black Bracket \*1
- Photocell Sensor \*2
- IR Receiver Module \*1
- 8X16 LED Panel \*1
- M2 Nut \*4
- M3 Nut \*10
- M3*6MM Inner Hex Screw \* 8
- M2.5 Hex Key Allen Wrench \*1
- M3*12MM Round Head Screw \*7
- M3*10MM Hexagon Copper Bush \*8
- M2*10MM Round Head Screw \* 4

|image10|

|image11|\ Step 5: Install the Servo Platform

Prepare the parts as follows:

- Servo \*1
- Black Gimbal \*1
- Cable Tie \*2
- M2x8 Round Head Cross Tapping Screw \*2
- Ultrasonic Sensor \*1
- M2*4 Screw \*1
- M1.2*5 Screw \*4

Note: for convenient debugging, keep the ultrasonic module straight
ahead and the angle of servo motor at 90°. Therefore, we need to set the
servo to 90° before installing the servo platform.

Set the 90-degree code,Copy the code and upload it to the development
board. The steering gear connected to port D9 will rotate to 90 °.

To upload code, you will need the Arduino IDE. Please first install the
Arduino IDE by following sections 4.2–4.4. (Software Download, Set Up
Arduino IDE, and Add Library)

::

   #define servoPin 9 //servo Pin
   int pos; //the angle variable of servo
   int pulsewidth; // pulse width variable of servo

   void setup() 
   {
       pinMode(servoPin, OUTPUT); //set servo pin to OUTPUT
       procedure(0); //set the angle of servo to 0°
   }

   void loop() 
   {
       procedure(90); // tell servo to go to position in variable 90°
   }

   // function to control servo
   void procedure(int myangle) 
   {
       pulsewidth = myangle * 11 + 500; //calculate the value of pulse width
       digitalWrite(servoPin,HIGH);
       delayMicroseconds(pulsewidth); //The duration of high level is pulse width
       digitalWrite(servoPin,LOW);
       delay((20 - pulsewidth / 1000)); // the cycle is 20ms, the low level last for the rest of time
   }

|image12|

|image13|

Note: You can find M1.2*5 Screws inside the bag of Plastic Platform.

|image14|

Step 6: Install Sensors and Boards

Prepare the parts as follows:

- M3*6MM Round Head Screw \*12
- L298P Shield \*1
- V4.0 Board \*1
- V5 Sensor Shield \*1
- Screwdriver \*1
- Bluetooth Module \*1

|image15|

|image16|

|image17|

|image18|

|image19|

Step 7: Hook-up Guide

|image20|

|image21|

|image22|

|image23|

|image24|

Step 8: Wire Up LED Panel

|image25|

|image26|

|image27|

+-----------------------------------+-----------------------------------+
| LED Panel                         | V5 Sensor Shield                  |
+===================================+===================================+
| GND                               | -(GND)                            |
+-----------------------------------+-----------------------------------+
| VCC                               | +(VCC)                            |
+-----------------------------------+-----------------------------------+
| SDA                               | SDA                               |
+-----------------------------------+-----------------------------------+
| SCL                               | SCL                               |
+-----------------------------------+-----------------------------------+
| |image28|                         | |image29|                         |
+-----------------------------------+-----------------------------------+

Step 9: Install all parts of Acrylic plate

|image30|

|image31|

|image32|

|image33|

|image34|

|image35|

|image36|

|image37|

|image38|

|image39|

|image40|

|image41|

|image42|

Step 10: Tank Robot

Note: Remove the Bluetooth module before uploading test code. Otherwise,
you will fail to upload test code.

|image43|

**Multi-purpose Robot Car**

|image44|

**Description**

In the previous projects, the tank car only performs a single function.
However, in this lesson, we integrate all of its functions to control
smart car via Bluetooth control.

Here is a simple flow chart of multi-purpose robot car for your
reference.

|image45|

**Connection Diagram**

|image46|

Attention：Confirm that every component is connected.

Wire-up Guide:

============== = ===============
8x16 LED panel   Expansion Board
============== = ===============
GND            → -（GND）
VCC            → +（VCC）
SDA            → SDA
SCL            → SCL
============== = ===============

|image47|

================= = ======
Ultrasonic Module   
================= = ======
VCC               → 5v(V)
Trig              → 5(S)
Echo              → 4(S)
Gnd               → Gnd(G)
================= = ======

|image48|

|image49|

=========== = ======
Servo Motor   
=========== = ======
Servo Motor → Gnd(G)
Red Wire    → 5v(V)
Orange Wire → 9
=========== = ======

|image50|

|image51|

======================================= = ========
Bluetooth Module                          
======================================= = ========
RXD                                     → TX
TXD                                     → RX
GND                                     → -（GND）
VCC                                       +（VCC）
No need to attach to STATE and BRK pins   
======================================= = ========

|image52|

|image53|

================== = =============
IR Receiver Module   Sensor Shield
================== = =============
－                 → G（GND）
+                  → V（VCC）
S                  → A0
================== = =============

|image54|

|image55|

==================== = =============
Left photo resistor    Sensor Shield
==================== = =============
－                   → G（GND）
＋                   → V（VCC）
S                    → A1
\                      
Right Photo resistor   Sensor Shield
－                   → G（GND）
＋                   → V（VCC）
S                    → A2
==================== = =============

|image56|

|image57|

Installation complete.

.. |image1| image:: ./media/image-20250902140736210.png
.. |image2| image:: ./media/image-20250902140942804.png
.. |image3| image:: ./media/image-20250902141638628.png
.. |image4| image:: ./media/image-20250902141647465.png
.. |image5| image:: ./media/image-20250902141655301.png
.. |image6| image:: ./media/image-20250902141942631.png
.. |image7| image:: ./media/image-20250902142005846.png
.. |image8| image:: ./media/image-20250902142016755.png
.. |image9| image:: ./media/image-20250902142030395.png
.. |image10| image:: ./media/image-20250902142645393.png
.. |image11| image:: ./media/image-20250902142656507.png
.. |image12| image:: ./media/image-20250902144132371.png
.. |image13| image:: ./media/image-20250902144145590.png
.. |image14| image:: ./media/image-20250902144253220.png
.. |image15| image:: ./media/image-20250902144437089.png
.. |image16| image:: ./media/image-20250902144447362.png
.. |image17| image:: ./media/image-20250902144458658.png
.. |image18| image:: ./media/image-20250902144507781.png
.. |image19| image:: ./media/image-20250902144518161.png
.. |image20| image:: ./media/image-20250902144534790.png
.. |image21| image:: ./media/image-20250902144551034.png
.. |image22| image:: ./media/image-20250902144559983.png
.. |image23| image:: ./media/image-20250902144849310.png
.. |image24| image:: ./media/image-20250902144902221.png
.. |image25| image:: ./media/image-20250902145026905.png
.. |image26| image:: ./media/image-20250902145112884.png
.. |image27| image:: ./media/image-20250902145129382.png
.. |image28| image:: ./media/image-20250902145404151.png
.. |image29| image:: ./media/image-20250902145414755.png
.. |image30| image:: ./media/image-20250902145506652.png
.. |image31| image:: ./media/image-20250902145615504.png
.. |image32| image:: ./media/image-20250902145822634.png
.. |image33| image:: ./media/image-20250902145854886.png
.. |image34| image:: ./media/image-20250902145934002.png
.. |image35| image:: ./media/image-20250902150004173.png
.. |image36| image:: ./media/image-20250902150032438.png
.. |image37| image:: ./media/image-20250902150052468.png
.. |image38| image:: ./media/image-20250902150217564.png
.. |image39| image:: ./media/image-20250902150508905.png
.. |image40| image:: ./media/image-20250902150522753.png
.. |image41| image:: ./media/image-20250902150532987.png
.. |image42| image:: ./media/image-20250902150711706.png
.. |image43| image:: ./media/image-20250902151034545.png
.. |image44| image:: ./media/image-20250902151133169.png
.. |image45| image:: ./media/image-20250902151215210.png
.. |image46| image:: ./media/image-20250902151230702.png
.. |image47| image:: ./media/image-20250902152539713.png
.. |image48| image:: ./media/image-20250902152857086.png
.. |image49| image:: ./media/image-20250902152906103.png
.. |image50| image:: ./media/image-20250902154418006.png
.. |image51| image:: ./media/image-20250902154820948.png
.. |image52| image:: ./media/image-20250902155229663.png
.. |image53| image:: ./media/image-20250902155236836.png
.. |image54| image:: ./media/image-20250902155444270.png
.. |image55| image:: ./media/image-20250902155452133.png
.. |image56| image:: ./media/image-20250902155938106.png
.. |image57| image:: ./media/image-20250902155946213.png
