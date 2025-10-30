2. Product setup
================

Caution: Set the initial angle of the servo Peel thin films off boards
before installing this robot .

|image1|

**Step1**

Tools needed:

|image2|

|image3|

|image4|

Pay attention to the installation direction of the wheels. The thick
side is on the outside.

|image5|

|image6|

**Step2**

|image7|

The wheels and tracks must be installed. Then mount them on the car body
simultaneously. Otherwise the tracks cannot be installed.

|image8|

|image9|

Note where the wheels are mounted on the tracks.

|image10|

|image11|

**Step3**

|image12|

|image13|

|image14|

Please wire up first.

|image15|

|image16|

|image17|

|image18|

|image19|

**Step 4**

|image20|

|image21|

|image22|

**Step 5**

|image23|

|image24|

|image25|

**Step 6**

|image26|

|image27|

|image28|

**Step 7**

|image29|

Note the direction of jumper caps.

|image30|

|image31|

**Step 8**

|image32|

|image33|

|image34|

**Step 9**

|image35|

|image36|

|image37|

**Step 10**

（Need to adjust the angle of the servo）

|image38|

|image39|

**Set the angle of the servo to 90°**

To adjust the code of the servo,please select it according to the
course.

1.\ **Arduino:**\ Download the code file:  :download:`Arduino <./Arduino.7z>`

|image40|

2.\ **Kidsblock:**\ Download the code
file:  :download:`Kidsblock <./Kidsblock.7z>`

|image41|

**After initializing servo angle, install the Bluetooth module.**

Keep the ultrasonic sensor parallel to the board.

|image42|

|image43|

**Step 11**

|image44|

|image45|

|image46|

**Step 12**

|image47|

|image48|

|image49|

**Wire up**

For 8*16LED panel, Make wires connect to A4 and A5.

|image50|

|image51|

|image52|

Connect the motor A to A port and make the motor B to B port.

|image53|

|image54|

Connect the power wire

|image55|

|image56|

Line Tracking Sensor(see the picture)

|image57|

|image58|

|image59|

|image60|

Wire up the photoresistors

|image61|

|image62|

============= =====================
Photoresistor Keyestudio 8833 Board
============= =====================
G             G
V             V
s             A1
============= =====================

|image63|

============= =====================
Photoresistor Keyestudio 8833 Board
============= =====================
G             G
V             V
S             V2
============= =====================

Wire up ultrasonic sensor.

|image64|

|image65|

================= =====================
Ultrasonic Sensor Keyestudio 8833 Board
================= =====================
Vcc               V
Trig              D12
Echo              D13
Gnd               G
================= =====================

Wire up the servo(D10)

|image66|

====== =====================
Servo  Keyestudio 8833 Board
====== =====================
Brown  G
Red    V(5V)
Orange D10
====== =====================

We adopt a model 18650 lithium battery with a pointed positive pole,
whose power and capacity are not required.

|image67|

.. |image1| image:: ./media/image-20250709092645945.png
.. |image2| image:: ./media/image-20250709102252976.png
.. |image3| image:: ./media/image-20250709092722839.png
.. |image4| image:: ./media/image-20250709092738119.png
.. |image5| image:: ./media/image-20250709092816744.png
.. |image6| image:: ./media/image-20250709092828746.png
.. |image7| image:: ./media/image-20250709093034445.png
.. |image8| image:: ./media/image-20250709093056711.png
.. |image9| image:: ./media/image-20250709093110898.png
.. |image10| image:: ./media/image-20250709093130989.png
.. |image11| image:: ./media/image-20250709093205374.png
.. |image12| image:: ./media/image-20250709093225354.png
.. |image13| image:: ./media/image-20250709093234885.png
.. |image14| image:: ./media/image-20250709093246548.png
.. |image15| image:: ./media/image-20250709093344681.png
.. |image16| image:: ./media/image-20250709093353998.png
.. |image17| image:: ./media/image-20250709093404201.png
.. |image18| image:: ./media/image-20250709093423158.png
.. |image19| image:: ./media/image-20250709093449028.png
.. |image20| image:: ./media/image-20250709093522583.png
.. |image21| image:: ./media/image-20250709093533500.png
.. |image22| image:: ./media/image-20250709093547507.png
.. |image23| image:: ./media/image-20250709093644514.png
.. |image24| image:: ./media/image-20250709093657252.png
.. |image25| image:: ./media/image-20250709093847892.png
.. |image26| image:: ./media/image-20250709093916149.png
.. |image27| image:: ./media/image-20250709093926354.png
.. |image28| image:: ./media/image-20250709093939255.png
.. |image29| image:: ./media/image-20250709094006571.png
.. |image30| image:: ./media/image-20250709094035675.png
.. |image31| image:: ./media/image-20250709094048424.png
.. |image32| image:: ./media/image-20250709094212254.png
.. |image33| image:: ./media/image-20250709094749158.png
.. |image34| image:: ./media/image-20250709094802015.png
.. |image35| image:: ./media/image-20250709094906387.png
.. |image36| image:: ./media/image-20250709094915724.png
.. |image37| image:: ./media/image-20250709094931895.png
.. |image38| image:: ./media/image-20250709095001492.png
.. |image39| image:: ./media/image-20250709095028698.png
.. |image40| image:: ./media/image-20250710110650230.png
.. |image41| image:: ./media/image-20250710110906515.png
.. |image42| image:: ./media/image-20250709095254305.png
.. |image43| image:: ./media/image-20250709095307371.png
.. |image44| image:: ./media/image-20250709095338636.png
.. |image45| image:: ./media/image-20250709095354728.png
.. |image46| image:: ./media/image-20250709095428457.png
.. |image47| image:: ./media/image-20250709095454717.png
.. |image48| image:: ./media/image-20250709095512833.png
.. |image49| image:: ./media/image-20250709095524456.png
.. |image50| image:: ./media/image-20250709095552072.png
.. |image51| image:: ./media/image-20250709095606248.png
.. |image52| image:: ./media/image-20250709095643567.png
.. |image53| image:: ./media/image-20250709095728739.png
.. |image54| image:: ./media/image-20250709095740866.png
.. |image55| image:: ./media/image-20250709095759390.png
.. |image56| image:: ./media/image-20250709095811580.png
.. |image57| image:: ./media/image-20250709095830428.png
.. |image58| image:: ./media/image-20250709095848550.png
.. |image59| image:: ./media/image-20250709095901776.png
.. |image60| image:: ./media/image-20250709095911639.png
.. |image61| image:: ./media/image-20250709095929779.png
.. |image62| image:: ./media/image-20250709095939414.png
.. |image63| image:: ./media/image-20250709100043670.png
.. |image64| image:: ./media/image-20250709100317508.png
.. |image65| image:: ./media/image-20250709100329430.png
.. |image66| image:: ./media/image-20250709100626238.png
.. |image67| image:: ./media/image-20250709100841625.png
