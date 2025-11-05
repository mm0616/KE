1. Product Introduction
=======================

.. figure:: media/A1.png
   :alt: ks0353-1

   ks0353-1

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

+-----+--------------------------------+-----+--------------------------------+
| No. | Components                     | QTY | Picture                        |
+=====+================================+=====+================================+
| 1   | KEYBOT Control Board           | 1   | |image-20230417152638175|      |
+-----+--------------------------------+-----+--------------------------------+
| 2   | Top Acrylic Panel for KEYBOT   | 1   | |image-20230417152829855|      |
|     | control board                  |     |                                |
+-----+--------------------------------+-----+--------------------------------+
| 3   | KEYBOT Ultrasonic Sensor       | 1   | |image-20230417152856960|      |
+-----+--------------------------------+-----+--------------------------------+
| 4   | KEYBOT Line Tracking Sensor    | 1   | |image-20230417152905953|      |
+-----+--------------------------------+-----+--------------------------------+
| 5   | Keyestudio Bluetooth           | 1   | |image-20230417152909568|      |
|     | Module-(HC-06)                 |     |                                |
+-----+--------------------------------+-----+--------------------------------+
| 6   | W420 steel universal wheel     | 1   | |image-20230417152925088|      |
+-----+--------------------------------+-----+--------------------------------+
| 7   | single shaft gear motor with   | 1   | |image-20230417152929686|      |
|     | 2.54-socket KF2510-2P          |     |                                |
|     | red-black lead 200mm Right     |     |                                |
|     | motor                          |     |                                |
+-----+--------------------------------+-----+--------------------------------+
| 8   | single shaft gear motor with   | 1   | |image-20230417152936683|      |
|     | 2.54-socket KF2510-2P          |     |                                |
|     | red-black lead 140mm Left      |     |                                |
|     | motor                          |     |                                |
+-----+--------------------------------+-----+--------------------------------+
| 9   | 18650 2-cell Battery Holder    | 1   | |image-20230417152942320|      |
+-----+--------------------------------+-----+--------------------------------+
| 10  | 6-cell AA Battery Case         | 1   | |image-20230417153049553|      |
+-----+--------------------------------+-----+--------------------------------+
| 11  | black-white 6515 robot wheel   | 2   | |image-20230417153042623|      |
+-----+--------------------------------+-----+--------------------------------+
| 12  | Dual-pass M3*40 copper pillar  | 4   | |image-20230417153118403|      |
+-----+--------------------------------+-----+--------------------------------+
| 13  | Single-pass M3*15+6MM hex      | 4   | |image-20230417153122385|      |
|     | copper pillar                  |     |                                |
+-----+--------------------------------+-----+--------------------------------+
| 14  | M3*30MM round-head screw       | 4   | |image-20230417153136593|      |
+-----+--------------------------------+-----+--------------------------------+
| 15  | M3*8MM flat-head screw         | 4   | |image-20230417153144721|      |
+-----+--------------------------------+-----+--------------------------------+
| 16  | M3*8 stainless steel inner hex | 10  | |image-20251105163907194|      |
|     | screw                          |     |                                |
+-----+--------------------------------+-----+--------------------------------+
| 17  | M3*10MM stainless steel inner  | 10  | |image-20251105163846122|      |
|     | hex screw                      |     |                                |
+-----+--------------------------------+-----+--------------------------------+
| 18  | M3 Nickel plated nut           | 14  | |image-20251105163824761|      |
+-----+--------------------------------+-----+--------------------------------+
| 19  | KEYBOT body black holder       | 1   | |image-20230417153309570|      |
+-----+--------------------------------+-----+--------------------------------+
| 20  | Yellow-black handle 3*40MM     | 1   | |image-20230417153313650|      |
|     | Phillips Screwdriver           |     |                                |
+-----+--------------------------------+-----+--------------------------------+
| 21  | EASY plug white Piranha LED    | 1   | |image-20230417153319810|      |
|     | module                         |     |                                |
+-----+--------------------------------+-----+--------------------------------+
| 22  | 6P6C RJ11 cable 10CM           | 1   | |image-20230417153323650|      |
+-----+--------------------------------+-----+--------------------------------+
| 23  | 6P6C RJ11 cable 20CM           | 2   | |image-20251105163805455|      |
+-----+--------------------------------+-----+--------------------------------+
| 24  | Type-L M2.5 Nickel plated      | 1   | |image-20230417153421426|      |
|     | Allen wrench                   |     |                                |
+-----+--------------------------------+-----+--------------------------------+
| 25  | USB cable                      | 1   | |image-20230417153425523|      |
+-----+--------------------------------+-----+--------------------------------+

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

.. figure:: media/A27.jpeg
   :alt: KS0350 -pinouts

   KS0350 -pinouts

.. |image-20230417152638175| image:: media/A2.png
.. |image-20230417152829855| image:: media/A3.png
.. |image-20230417152856960| image:: media/A4.png
.. |image-20230417152905953| image:: media/A5.png
.. |image-20230417152909568| image:: media/A6.png
.. |image-20230417152925088| image:: media/A7.png
.. |image-20230417152929686| image:: media/A8.png
.. |image-20230417152936683| image:: media/A9.png
.. |image-20230417152942320| image:: media/A10.png
.. |image-20230417153049553| image:: media/A11.png
.. |image-20230417153042623| image:: media/A12.png
.. |image-20230417153118403| image:: media/A13.png
.. |image-20230417153122385| image:: media/A14.png
.. |image-20230417153136593| image:: media/A15.png
.. |image-20230417153144721| image:: media/A16.png
.. |image-20251105163907194| image:: ./media/A17.png
.. |image-20251105163846122| image:: ./media/A18.png
.. |image-20251105163824761| image:: ./media/A19.png
.. |image-20230417153309570| image:: media/A20.png
.. |image-20230417153313650| image:: media/A21.png
.. |image-20230417153319810| image:: media/A22.png
.. |image-20230417153323650| image:: media/A23.png
.. |image-20251105163805455| image:: ./media/A24.png
.. |image-20230417153421426| image:: media/A25.png
.. |image-20230417153425523| image:: media/A26.png
