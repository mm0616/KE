1. Product Introduction
=======================

|image1|

1.1 Description
---------------

In the near future, many things might no longer be done by ourselves
because the robots are able to help us do many things. So what does the
future robot look like? What can it do?

He may be controlled by human voice. Do not use the remote control. Just
press the power button and the robot will start do something you said
and never get tired.

In addition to cooking, there may be another magical feature. In the
summer, the weather is very hot. At this time, you definitely want to
drink a glass of juice. As long as you give orders, the robot will pick
up the fruit and put it in his body. After a while, there will be juice
to drink, and he can freeze the juice. The taste is more delicious.
Robots also have a lot of magical features that allow you to enjoy a
simple, fast lifestyle, and the future robots will become more
excellent.

Now, let’s DIY the KEYBOT robot. The KEYBOT robot is based on
easy-to-use and flexible open-source Arduino platform. KEYBOT control
board comes with the RJ11 plug, so it is very easy to connect other
sensor modules with only one cable.

The robot is designed in metal structure, solid and durable. The
assembly is really simple, believing you can install well the KEYBOT
within 30mins.

As for the KEYBOT coding, you will learn how to get started with Arduino
programming C language and Mixly block platform. Even the beginner with
no coding experience can easily understand the graphical program. Take
your brain on an inspiring journey through the world of programming. Get
started now!

1.2 Parameters
--------------

- External power supply range: 7-12V

- Current Range: min 800mA

- Motor Speed: 6.0V 100rpm/min

- Motor control is driven by TB6612

- Three groups of line tracking modules, to detect black-white line with
  higher accuracy and can be used for anti-fall control as well.

- Ultrasonic module is used to detect the obstacle distance, avoiding
  the front obstacle when the distance detected is less than a certain
  value.

- Bluetooth wireless module can be paired with Bluetooth device on
  mobile phone to remotely control the KEYBOT. Turn off the Bluetooth
  when programming.

- The shield has two servo interfaces.

- It can access the external voltage 7~12V.

1.3 List
--------

You can see a pretty beautiful packaging box for the KEYBOT, and inside
the KEYBOT packaging you will find all the parts and screws listed
below.

+-----+---------------------------------------+-----+------------------------+
| No. | Components                            | QTY | Picture                |
+=====+=======================================+=====+========================+
| 1   | KEYBOT Control Board                  | 1   | |image2|               |
+-----+---------------------------------------+-----+------------------------+
| 2   | Top Acrylic Panel for KEYBOT control  | 1   | |image3|               |
|     | board                                 |     |                        |
+-----+---------------------------------------+-----+------------------------+
| 3   | KEYBOT Ultrasonic Sensor              | 1   | |image4|               |
+-----+---------------------------------------+-----+------------------------+
| 4   | KEYBOT Line Tracking Sensor           | 1   | |image5|               |
+-----+---------------------------------------+-----+------------------------+
| 5   | Keyestudio Bluetooth Module-(HC-06)   | 1   | |image6|               |
+-----+---------------------------------------+-----+------------------------+
| 6   | W420 steel universal wheel            | 1   | |image7|               |
+-----+---------------------------------------+-----+------------------------+
| 7   | single shaft gear motor with          | 1   | |image8|               |
|     | 2.54-socket KF2510-2P red-black lead  |     |                        |
|     | 200mm Right motor                     |     |                        |
+-----+---------------------------------------+-----+------------------------+
| 8   | single shaft gear motor with          | 1   | |image9|               |
|     | 2.54-socket KF2510-2P red-black lead  |     |                        |
|     | 140mm Left motor                      |     |                        |
+-----+---------------------------------------+-----+------------------------+
| 9   | 18650 2-cell Battery Holder           | 1   | |image10|              |
+-----+---------------------------------------+-----+------------------------+
| 10  | 6-cell AA Battery Case                | 1   | |image11|              |
+-----+---------------------------------------+-----+------------------------+
| 11  | black-white 6515 robot wheel          | 2   | |image12|              |
+-----+---------------------------------------+-----+------------------------+
| 12  | Dual-pass M3*40 copper pillar         | 4   | |image13|              |
+-----+---------------------------------------+-----+------------------------+
| 13  | Single-pass M3*15+6MM hex copper      | 4   | |image14|              |
|     | pillar                                |     |                        |
+-----+---------------------------------------+-----+------------------------+
| 14  | M3*30MM round-head screw              | 4   | |image15|              |
+-----+---------------------------------------+-----+------------------------+
| 15  | M3*8MM flat-head screw                | 4   | |image16|              |
+-----+---------------------------------------+-----+------------------------+
| 16  | M3*8 stainless steel inner hex screw  | 10  | |image17|              |
+-----+---------------------------------------+-----+------------------------+
| 17  | M3*10MM stainless steel inner hex     | 10  | |image18|              |
|     | screw                                 |     |                        |
+-----+---------------------------------------+-----+------------------------+
| 18  | M3 Nickel plated nut                  | 14  | |image19|              |
+-----+---------------------------------------+-----+------------------------+
| 19  | KEYBOT body black holder              | 1   | |image20|              |
+-----+---------------------------------------+-----+------------------------+
| 20  | Yellow-black handle 3*40MM Phillips   | 1   | |image21|              |
|     | Screwdriver                           |     |                        |
+-----+---------------------------------------+-----+------------------------+
| 21  | EASY plug white Piranha LED module    | 1   | |image22|              |
+-----+---------------------------------------+-----+------------------------+
| 22  | 6P6C RJ11 cable 10CM                  | 1   | |image23|              |
+-----+---------------------------------------+-----+------------------------+
| 23  | 6P6C RJ11 cable 20CM                  | 2   | |image24|              |
+-----+---------------------------------------+-----+------------------------+
| 24  | Type-L M2.5 Nickel plated Allen       | 1   | |image25|              |
|     | wrench                                |     |                        |
+-----+---------------------------------------+-----+------------------------+
| 25  | USB cable                             | 1   | |image26|              |
+-----+---------------------------------------+-----+------------------------+

1.4 Core Part of KEYBOT
-----------------------

The core is the part that really matters today. In fact, it is very easy
to understand the core. In other word, the core is just like the human
brain. It can receive various kinds of information every day and will
send out various instructions every day.

The core part of our robot is a control board specially designed for
KEYBOT. It integrates both ARDUINO and motor driver, so the use method
of this integrated board is the same as the ARDUINO controller.

Well, let’s first look at what every element and interface of the board
does:

|image27|

.. |image1| image:: media/image-20251105165751470.png
.. |image2| image:: media/image-20251105170008704.png
.. |image3| image:: media/image-20251105170013969.png
.. |image4| image:: media/image-20251105170024076.png
.. |image5| image:: media/image-20251105170035775.png
.. |image6| image:: media/image-20251105170043383.png
.. |image7| image:: media/image-20251105170056452.png
.. |image8| image:: media/image-20251105170106738.png
.. |image9| image:: media/image-20251105170115086.png
.. |image10| image:: media/image-20251105170122891.png
.. |image11| image:: media/image-20251105170131720.png
.. |image12| image:: media/image-20251105170140343.png
.. |image13| image:: media/image-20251105170148411.png
.. |image14| image:: media/image-20251105170155560.png
.. |image15| image:: media/image-20251105170202959.png
.. |image16| image:: media/image-20251105170210974.png
.. |image17| image:: media/image-20251105170219245.png
.. |image18| image:: media/image-20251105170226591.png
.. |image19| image:: media/image-20251105170234407.png
.. |image20| image:: media/image-20251105170241693.png
.. |image21| image:: media/image-20251105170252016.png
.. |image22| image:: media/image-20251105170258407.png
.. |image23| image:: media/image-20251105170309279.png
.. |image24| image:: media/image-20251105170315642.png
.. |image25| image:: media/image-20251105170341437.png
.. |image26| image:: media/image-20251105170331910.png
.. |image27| image:: media/image-20251105170400987.png
