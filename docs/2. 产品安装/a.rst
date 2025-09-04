Keyestudio Micro:bit V2.0 Basic Starter Kit
===========================================

1.Getting Started with Micro:bit
--------------------------------

Step 1: connect the Micro: Bit main board V2 with your computer

Firstly, link the Micro: Bit main board V2 with your computer via the
USB cable.

|image1|

Step 2： if the red LED on the back of the board is on, that means the
board is powered. Then Micro: Bit main board V2 will appear on your
computer as a driver named ‘MICROBIT’. Please note that it is not an
ordinary USB disk as shown below.

|image2|

Step 3: write programs

https://makecode.microbit.org/

|image3|

Congratulations on completing your first code! You should now see the
5x5 LED dot matrix displaying various patterns.

Next, I will demonstrate downloading the written code to the computer
and uploading it using a different method.

|image4|

2. CoolTerm Installation
------------------------

CoolTerm program is used to read the data on serial port.

Download CoolTerm program:

macOS:

`Intel/ARM <https://freeware.the-meiers.org/CoolTermMac.dmg>`__

Win:

`Intel 64Bit <https://freeware.the-meiers.org/CoolTermWin64Bit.zip>`__

`Intel 32Bit <https://freeware.the-meiers.org/CoolTermWin32Bit.zip>`__

`ARM 64Bit <https://freeware.the-meiers.org/CoolTermWinARM64Bit.zip>`__

Linux:

`Intel 64Bit <https://freeware.the-meiers.org/CoolTermLinux64Bit.zip>`__

`Intel 32Bit <https://freeware.the-meiers.org/CoolTermLinux32Bit.zip>`__

(1) After the download, we need to install CoolTerm program file, below
    is Window system taken as an example.

(2) Choose “win” to download the zip file of CoolTerm

(3) Unzip file and open it. (also suitable for Mac and Linux system)

|image5|

The functions of each button on the Toolbar are listed below:

.. figure:: ./images/Snipaste_2025-09-03_19-18-36.png
   :alt: Snipaste_2025-09-03_19-18-36

   Snipaste_2025-09-03_19-18-36

.. raw:: html

   <table>

.. raw:: html

   <tr>

.. raw:: html

   <td>

New

.. raw:: html

   </td>

.. raw:: html

   <td>

Opens up a new Terminal

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <td>

Open

.. raw:: html

   </td>

.. raw:: html

   <td>

Opens a saved Connection

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <td>

Save

.. raw:: html

   </td>

.. raw:: html

   <td>

Saves the current Connection to disk

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <td>

Connect

.. raw:: html

   </td>

.. raw:: html

   <td>

Opens the Serial Connection

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <td>

Disconnect

.. raw:: html

   </td>

.. raw:: html

   <td>

Closes the Serial Connection

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <td>

Clear Data

.. raw:: html

   </td>

.. raw:: html

   <td>

Clears the Received Data

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <td>

Options

.. raw:: html

   </td>

.. raw:: html

   <td>

Opens the Connection Options Dialog

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <td>

HEX

.. raw:: html

   </td>

.. raw:: html

   <td>

Displays the Terminal Data in Hexadecimal Format

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   <tr>

.. raw:: html

   <td>

View

.. raw:: html

   </td>

.. raw:: html

   <td>

Displays the Help Window

.. raw:: html

   </td>

.. raw:: html

   </tr>

.. raw:: html

   </table>

After installation is complete, we will use this tool in our subsequent
lessons.

Project 1: Heartbeat
--------------------

|image6|

 :download:`Click to download the code for this lesson <./Code/Project1.hex>`

(1)Project Description
~~~~~~~~~~~~~~~~~~~~~~

(1) Project DescriptionThis project is easy to conduct with a micro:bit
    V2 main board, a Micro USB cable and a computer. The micro:bit LED
    dot matrix will display a relatively big heart-shaped pattern and
    then a smaller one. This alternative change of this pattern is like
    heart beating. This experiment serves as a starter for your entry to
    the programming world.

(2)Components Needed:
~~~~~~~~~~~~~~~~~~~~~

Micro:bit main board V2

Micro USB cable

(3)Test Code:
~~~~~~~~~~~~~

Attach the Micro:bit main board V2 to your computer via the Micro USB
cable and begin editing.

Firstly, click” basic” module and find and drag the block “show icon

|image7|

“to module”forever”;

|image8|

Secondly, click” basic” module again and find and drag the block “show
icon” to module “forever” and click the little triangle to select “show
icon :

|image9|

Thirdly, click” basic” module and find and drag the block pause (ms) 100
to the code block and click the littler triangle to select 500;

Complete Program :

|image10|

Note: the “on start” means that the code in this block only executes
once, while “forever” implies that the code runs cyclically.

(4)Test Results:
~~~~~~~~~~~~~~~~

After uploading test code to micro:bit main board V2 and keeping the
connection with the computer to power the main board, the LED dot matrix
shows pattern ” |image-20250904102507816|\ ” and then
“|image-20250904102523754|”alternatively.

(Please refer to chapter 4.3 to know how to download test code quickly.)

If the downloading is not smooth, please remove the micro USB from the
main board and then reconnect them and reopen Makecode to try again.

Project 2: Light A Single LED
-----------------------------

|image11|

 :download:`Click to download the code for this lesson <./Code/Project2.hex>`

.. _project-description-1:

(1)Project Description:
-----------------------

(1)Project Description:The LED dot matrix consists of 25 LEDs arranged
in a 5 by 5 square. In order to locate these LEDs quickly, as the figure
shown below, we can regarded this matrix as a coordinate system and
create two aces by marking those in rows from 0 to 4 from top to bottom,
and the ones in columns from 0 to 4 from the left to the right.
Therefore, the LED sat in the second of the first line is (1,0) and the
LED positioned in the fifth of the fourth column is (3,4) and others
likewise.

.. figure:: ./images/image-20250904102610952.png
   :alt: image-20250904102610952

   image-20250904102610952

.. _components-needed-1:

(2)Components Needed:
~~~~~~~~~~~~~~~~~~~~~

Micro:bit main board V2

Micro USB cable

.. _test-code-1:

(3)Test Code:
~~~~~~~~~~~~~

Attach the Micro:bit main board V2 to your computer via the Micro USB
cable and begin editing.

Firstly, click” Led” module and then the” more” module to find and drag
the block “led enable false” to block “on start”; click the little
triangle of “led enable false” to select” true”;

|image12|

Secondly, click” Led” module and to find and drag the block “toggle x 0
y 0” to block “forever” and alter “x0” to” x1”;

|image13|

Thirdly, click” Basic” module to find and drag the block” pause(ms)100”
to “forever” block and set pause to 500;

|image14|

Fourthly, copy the block and place it into

|image15|

forever” block;

|image16|

Fifthly, click”Led”module to find and drag the block”plot x 0 y 0”to
“forever” block and change the “x 0 y 0” to “x 3 y 4”;

|image17|

Sixthly, copy the block “pause(ms)500” and place it into forever” block;

|image18|

Lastly, click” Led” module to find and drag the block” unplot

x0y0” to “forever” block and change “x0y0” to “x3y 4”; and copy and
place the block “pause(ms)500” to block “forever”;

Complete Program :

|image19|

.. _test-results-1:

(4)Test Results
~~~~~~~~~~~~~~~

After uploading test code to micro:bit main board V2 and powering the
main board via the USB cable, the LED in (1,0) lights up for 0.5s and
the one in (3,4) shines for 0.5s and repeat this sequence.

Project 3: LED Dot Matrix
-------------------------

|image20|

 :download:`Click to download the code 1 for this lesson <./Code/Project3.hex>`

 :download:`Click to download the code 2 for this lesson <./Code/Project32.hex>`

.. _project-description-2:

(1)Project Description:
~~~~~~~~~~~~~~~~~~~~~~~

Dot matrices are very commonplace in daily life. They have found wild
applications in LED advertisement screens, elevator floor display, bus
stop announcement and so on.

The LED dot matrix of Micro: Bit main board V2 contains 25 LEDs in a
grid. Previously, we have succeeded in controlling a certain LED to
light by integrating its position value into the test code. Supported by
the same theory, we can turn on many LEDs at the same time to showcase
patterns, digits and characters.

What’s more, we can also click” show icon ” to choose the

pattern we like to display. Last but not the least, we can design our
patterns by ourselves.

.. _components-needed-2:

(2)Components Needed:
~~~~~~~~~~~~~~~~~~~~~

Micro:bit main board V2

Micro USB cable

.. _test-code-1-1:

(3)Test Code 1:
---------------

Link computer with micro:bit board by micro USB cable, and program in
MakeCode editor.

(1) A. Enter “Led” → “more” → “led enable false” B. Click the drop-down
    triangle button to select “true”

|image21|

C. Combine it with “on start” block

(2) Click “Led” to move “plot x 0 y 0” into “forever” , then replicate
    “plot x 0 y 0” for 8 times, respectively set to “x 2” y 0”, “x 2” y
    1” , “x 2” y 2” , “x 2” y 3” , “x 2” y 4” , “x 1” y 3” “x 0” y 2” ,
    “x 3” y 3” , “x 4” y 2” .

|image22|

Complete Program :

|image23|

.. _test-results-1-1:

(4) Test Results 1:
~~~~~~~~~~~~~~~~~~~

Upload code 1 and power the board, we will see the icon

|image24|

(5) Test Code 2:
~~~~~~~~~~~~~~~~

Link computer with micro:bit board by micro USB cable, and program in
MakeCode editor.

(1) A. Enter “Basic” :math:`\rightarrow` “show number 0” block, B.
    Duplicate it for 4 times, then separately set to “show number 1”,
    “show number 2”, “show number 3”, “show number 4”, “show number 5”.

|image25|

(2) Click “Basic” :math:`\rightarrow` “show leds”, then put it into
    “forever” block, tick blue boxes to light LED and generate “↓”
    pattern.

|image26|

(3) Move out the block “show string” from “Basic” block, and leave it
    beneath the “show leds” block

|image27|

Choose “show icon” from “Basic” block, and leave it beneath the block
“show string”Hello!” block

|image28|

(4) A. Enter “Basic” → “show arrow North”;

B. Leave it into “forever” block, replicate “show arrow North” for 3
times, respectively set to “North East”, “South East”, “South West”,
“North West”.

|image29|

(5) Click “Basic” to get block “clear screen” then remain it below the
    block “show arrow North West”

|image30|

\****************************************************************************************************\*

(5) Drag “pause (ms) 100” block from “Basic” block and set to

500ms, then leave it below “clear screen” block.

|image31|

|image32|

(6)Test Results 2 :
~~~~~~~~~~~~~~~~~~~

Upload code 2 and plug micro:bit in power, Micro: bit starts showing
number 1, 2, 3, 4, and 5, then cyclically display

|image33|

|image34|

Project 4: Programmable Buttons
-------------------------------

|image35|

 :download:`Click to download the code 1 for this lesson <./Code/Project41.hex>`

 :download:`Click to download the code 2 for this lesson <./Code/Project42.hex>`

.. _project-description-3:

(1)Project Description:
~~~~~~~~~~~~~~~~~~~~~~~

Buttons can be used to control circuits. In an integrated circuit with a
button, the circuit is connected when pressing the button and it is open
the other way around. Micro: Bit main board V2 boasts three buttons, two
are programmable buttons(marked with A and B), and the one on the other
side is a reset button. By pressing the two programmable buttons can
input three different signals. We can press button A or B alone or press
them together and the LED dot matrix shows A,B and AB respectively.
Let’s get started.

.. _components-needed-3:

(2)Components Needed:
~~~~~~~~~~~~~~~~~~~~~

Micro:bit main board V2

Micro USB cable

.. _test-code-1-2:

(3)Test Code 1 :
~~~~~~~~~~~~~~~~

Link computer with micro:bit board by micro USB cable, and program in
MakeCode editor,

(1) Delete “on start” and “forever” firstly, then click “Input”
    :math:`\rightarrow` “on button A pressed”

(2) A. Click “Basic” :math:`\rightarrow` “show string”;

B. Then place it into “on button A pressed” block, change

|image36|

|image37|

(2) Copy code string

once, tap the drop- down button “A” to select “B” and modify character
“A”

|image38|

into “B”

|image39|

|image40|

Complete Code

|image41|

.. _test-results-1-2:

(4)Test Results 1 :
~~~~~~~~~~~~~~~~~~~

After uploading test code 1 to micro:bit main board V2 and powering the
main board via the USB cable, the :math:`5^{*}5` LED dot matrix shows A
if button A is pressed, B if button B pressed, and AB if button A and B
pressed together.

.. _test-code-2-1:

(5) Test Code 2 :
~~~~~~~~~~~~~~~~~

(1) A. Click “Led” → “more” → “led enable false”,

B. Put it into the block “on start”, click drop-down triangle

button to select “true”

|image42|

(2) A. Tap “Variables” :math:`\rightarrow` “Make a Variable…”
    :math:`\rightarrow` “New variable name:”

B. Enter “item” in the dialog box and click “OK”, then variable “item”
is produced. And move “set item to 0” into “on start” block

|image43|

\****************************************************************************************************\*

(3) A. Click “Input” :math:`\rightarrow` “on button A pressed”.
    B. Go to “Variables” :math:`\rightarrow` “change item by 1”.
    C. Place it into “on button A pressed” and 1 is modified into

|image44|

\*********************************************************************************************\*

|image45|

(4) Duplicate

code string once, click

the drop- down button to select “B”, then set “change item by

|image46|

\****************************************************************************************************\*

(5) A. Enter “Led” :math:`\rightarrow` “plot bar graph of 0 up to 0” B.
    Keep it into “forever” block C. Go to “Variables” to move “item”
    into 0 box, change 0 into 25.

|image47|

\*********************************************************************************************\*

| (6)A. Go to “Logic” to move out “if…true…then…” and
  :math:`\begin{array}{rl}{\mathbf{\omega}^{\prime \prime} = \mathbf{\omega}^{\prime \prime}} & {} \end{array}`
  blocks, B. Keep
  :math:`\begin{array}{rl}{\mathbf{\omega}^{\prime \prime} = \mathbf{\omega}^{\prime \prime}} & {} \end{array}`
  into “true” box and set to
  :math:`\begin{array}{rl}{\mathbf{\omega}^{\prime \prime} > } & {} \end{array}`
| C. Select “item” in the “Variables” and lay it down at left box of
  :math:`\begin{array}{rl}{\mathbf{\omega}^{\prime \prime} > } & {} \end{array}`
  , change 0 into 25 ; D. Enter “Variables” to drag “set item to
  :math:`0^{\prime \prime}` block into”if…true..then…“, alter 0 into 25.

|image48|

\****************************************************************************************************\*

|image49|

B. :math:`\because \geq \pi` is modified into :math:`"<"` and 25 is
   changed into 0,

|image50|

|image51|

Complete Program :

|image52|

.. _test-results-2-1:

(6)Test Results 2:
~~~~~~~~~~~~~~~~~~

After uploading test code 2 to micro:bit main board V2 and powering the
main board via the USB cable, when pressing the button A the LEDs
turning red increase while when pressing the button B the LEDs turning
red reduce.

Project 5: Temperature Detection
--------------------------------

|image53|

 :download:`Click to download the code 1 for this lesson <./Code/Project51.hex>`

 :download:`Click to download the code 2 for this lesson <./Code/Project52.hex>`

.. _project-description-4:

(1)Project Description:
~~~~~~~~~~~~~~~~~~~~~~~

The Micro:bit main board V2 is not equipped with a temperature sensor,
but uses the temperature sensor built into NFR52833 chip for temperature
detection. Therefore, the detected temperature is more closer to the
temperature of the chip, and there maybe deviation from the ambient
temperature.

.. _components-needed-4:

(2)Components Needed:
~~~~~~~~~~~~~~~~~~~~~

Micro:bit main board V2 *1 Micro USB cable*

.. _test-code-1-3:

(3)Test Code 1 :
~~~~~~~~~~~~~~~~

(1) Click “Advanced” → “Serial” → “serial redirect to USB” into “on
    start”

|image54|

(2) A. Go to “Serial” → “serial write value”x” = 0” into “forever”

|image55|

(3) Click “Input” → “temperature(℃)” into “into serial write value”x” =
    0 and change “0” into “temperature”

|image56|

\****************************************************************************************************\*

(4) Go to “Basic” → “pause (ms) 100” into “forever” and set pause to 500

|image57|

Complete Program :

|image58|

.. _test-results-1-3:

(4)Test Results 1:
~~~~~~~~~~~~~~~~~~

After uploading test code 1 to micro:bit main board V2, powering the
main board via the USB cable, and clicking “Show console Device”, the
data of temperature shows in the serial monitor page as shown below.

|image59|

If you’re running Windows 7 or 8 instead of Windows 10, via

Google Chrome won’t be able to match devices. You’ll need to use the
CoolTerm serial monitor software to read data.You could open CoolTerm
software, click Options, select SerialPort, set COM port and put baud
rate to 115200 (after testing, the baud rate of USB SerialPort
communication on Micro: Bit main board V2 is 115200), click OK, and
Connect. The CoolTerm serial monitor shows the change of temperature in
the current environment, as shown in the figures below :

.. figure:: ./images/Animation2.gif
   :alt: Animation2

   Animation2

.. _test-code-2-2:

(5)Test Code 2 :
~~~~~~~~~~~~~~~~

Link computer with micro:bit board by micro USB cable, and program in
MakeCode editor,

(1) A. Go to “Led” → “more” → “led enable false” block, B. Keep it into
    the “on start” block, tap the triangle button to

select “true”

\****************************************************************************************************\*

(2) Tap “Logic” and drag “if…then…else” into “forever” block; and then
    drag “=” into “true”

|image60|

(3) Enter “Input” to move “temperature(℃)” into the left side of “=”;
    click the little triangle of “=” to choose ≥“, and change the”0” to
    “35”

|image61|

(4) Click “Basic” to find out block “show icon” and move it into “then”;
    copy and place the block “show icon” to “else” and

|image62|

|image63|

Complete Program :

|image64|

.. _test-results-2-2:

(6)Test Results 2:
~~~~~~~~~~~~~~~~~~

After uploading the code 2, when the ambient temperature is less than
:math:`35^{\circ}C` , the :math:`5 \times 5` LED dot matrix shows When
the temperature is equivalent to or greater than :math:`35^{\circ}C` ,
the appears.

|image65|

|image66|

Project 6: Geomagnetic Sensor
-----------------------------

 :download:`Click to download the code 1 for this lesson <./Code/Project61.hex>`

 :download:`Click to download the code 2 for this lesson <./Code/Project62.hex>`

.. _project-description-5:

(1)Project Description:
~~~~~~~~~~~~~~~~~~~~~~~

(1) Project Description:This project aims to explain the use of the
    Micro: bit geomagnetic sensor, which can not only detect the
    strength of the geomagnetic field, but also be used as a compass to
    find bearings. It is also an important part of the Attitude and
    Heading Reference System (AHRS). Micro: Bit main board V2 uses
    LSM303AGR geomagnetic sensor, and the dynamic range of magnetic
    field is ± 50 gauss. In the board, the magnetometer module is used
    in both magnetic detection and compass. In this experiment, the
    compass will be introduced first, and then the original data of the
    magnetometer will be checked. The main component of a common compass
    is a magnetic needle, which can be rotated by the geomagnetic field
    and point toward the geomagnetic North Pole (which is near the
    geographic South Pole) to determine direction.

.. _components-needed-5:

(2)Components Needed:
~~~~~~~~~~~~~~~~~~~~~

Micro:bit main board V2

Micro USB cable

.. _test-code-1-4:

(3)Test Code 1 :
~~~~~~~~~~~~~~~~

Link computer with micro:bit board by micro USB cable, and program in
MakeCode editor.

(1) A. Click “Input” → “more” → “calibrate compass” B. Lay down it into
    block “on start”.

|image67|

(2) A. Go to “Input” → “on button A pressed”.

B. Enter “Basic” → “show number”, put it into “on button A pressed”
block;

C. Tap “Input” → “compass heading(℃)”, and place it into “show number”

|image68|

Complete Program :

|image69|

.. _test-results-1-4:

(4)Test Results 1 :
~~~~~~~~~~~~~~~~~~~

After uploading test code to micro:bit main board V2 and powering the
board via the USB cable, and pressing the button A, the board asks us to
calibrate compass and the LED dot matrix shows “TILT TO FILL SCREEN”.
Then enter the calibration page. Rotate the board until all 25 LEDs are
on red as shown below.

|image70|

After that, a smile pattern appears, which implies the calibration is
done. When the calibration process is completed, pressing the button A
will make the magnetometer reading display directly on the screen. And
the direction north, east, south and west correspond to
:math:`0^{\circ}` , :math:`90^{\circ}` , :math:`180^{\circ}` and
:math:`270^{\circ}` respectively.

.. _test-code-2-3:

(5) Test Code 2:
~~~~~~~~~~~~~~~~

|image71|

This module can keep reading data to determine direction, so does point
to the current magnetic North Pole by arrow.

|image72|

For the above picture, the arrow pointing to the upper right when the
value ranges from 292.5 to 337.5. Because 0.5 can’t be input in the
code, the values we get are 293 and 338.

Link computer with micro:bit board by micro USB cable, and program in
MakeCode editor,

(1) 

| A. Enter “Input” → “more” → “calibrate compass”
| B. Move “calibrate compass” into “on start”

(2) A. Click “Variables” :math:`\rightarrow` “Make a Variable…”
    :math:`\rightarrow` “New variable name:”

B. Input “x” in the blank box and click “OK”, and the variable “x” is
generated.

C. Drag out “set x to” into “forever” block

|image73|

(3) A. Go to “Input” :math:`\rightarrow` “compass heading(℃)”, and keep
    it into “0” box

|image74|

C. Tap “Logic” :math:`\rightarrow` “if…then…else”, leave it below block
“sex x to compass heading”, then click icon for 6 times.

(4) A. Place “and” into “true” block

B. Then move “=” block to the left box of “and”

C. Click “Variables” to drag “x” to the left “0” box, change 0 into 293
and set to “≥”;

D. Then copy “x≥293” once and leave it to the right “0” box and set to
“x<338”

|image75|

(5) A. Go to “Basic” → “show leds”

B. Lay it down beneath

|image76|

block, then click “show leds” and the pattern

|image77|

|image78|

(6) A. Duplicate\ |image-20250904135912374|\ for 6 times.

B. Separately leave them into the blank boxes behind “else if”.

C. Set to“x≥23 and x<68”,“x≥68 and x<113 ”,“x≥113 and x<158 ”,“x≥158 and
x<203 ”,“x≥203 and x<248 ”,“x≥ 248 and x<293 ”respectively.

D. Then copy “show leds”for 7 times and keep them below the “else
if…….then” block respectively.

E. Click the blue boxes to form the pattern
|image-20250904135716763|\ |image-20250904135731280|\ |image-20250904135741348|
|image-20250904135751868|\ |image-20250904135803451|\ |image-20250904135814737|\ and\ |image-20250904135823460|

\****************************************************************************************************\*

|image79|

|image80|

.. _test-results-2-3:

(6) Test Results 2
~~~~~~~~~~~~~~~~~~

Upload code 2 and plug micro:bit into power. After calibration, tilt
micro:bit board, and the LED dot matrix displays the direction signs.

Project 7: Accelerometer
------------------------

|image81|

 :download:`Click to download the code 1 for this lesson <./Code/Project71.hex>`

 :download:`Click to download the code 2 for this lesson <./Code/Project72.hex>`

.. _project-description-6:

(1)Project Description:
~~~~~~~~~~~~~~~~~~~~~~~

The Micro: Bit main board V2 has a built- in LSM303AGR gravity
acceleration sensor, also known as accelerometer, with a resolution of
8/10/12 bits. The code section sets the range to 1g, 2g, 4g, and 8g.

We often use accelerometer to detect the status of machines. In this
project, we will introduce how to measure the position of the board with
the accelerometer. And then have a look at the original three- axis data
output by the accelerometer.

.. _components-needed-6:

(2)Components Needed:
~~~~~~~~~~~~~~~~~~~~~

Micro:bit main board V2

Micro USB cable

.. _test-code-1-5:

(3)Test Code 1 :
~~~~~~~~~~~~~~~~

Link computer with micro:bit board by micro USB cable, and

program in MakeCode editor,

(1) A. Enter “Input” :math:`\rightarrow` “on shake” B. Click “Basic”
    :math:`\rightarrow` “show number”, place it into “on

|image82|

\****************************************************************************************************\*

(2) A. Copy code string

|image83|

B. separately click the triangle button to select “logo up”, “logo
down”, “screen up”, “screen down”, “tilt left”, “tilt right” and “free
fall”, then respectively change 1 into 2, 3, 4, 5, 6, 7, 8.

\*********************************************************************************************\*

Complete Program :

|image84|

|image85|

.. _test-results-1-5:

(4)Test Results 1:
~~~~~~~~~~~~~~~~~~

After uploading the test code 1 to micro:bit main board V2 and powering
the board via the USB cable, if we shake the Micro: Bit main board V2.
no matter at any direction, the LED dot matrix displays the digit “1”.

When it is kept upright ( make its logo above the LED dot matrix), the
number 2 shows.

|image86|

When it is kept upside down( make its logo below the LED dot matrix), it
shows as below.

|image87|

When it is placed still on the desk, showing its front side, the number
4 appears.

|image88|

When it is placed still on the desk, showing its back side, the number 5
exhibits.

When the board is tilted to the left, the LED dot matrix shows

the number 6 as shown below.

|image89|

When the board is tilted to the right, the LED dot matrix displays the
number 7 as shown below

|image90|

When the board is knocked to the floor, this process can be considered
as a free fall and the LED dot matrix shows the number 8. (please note
that this test is not recommended for it may damage the main board.)

Attention: if you’d like to try this function, you can also set the
acceleration to 3g, 6g or 8g. But still, we do not recommend.

.. _test-code-2-4:

(5)Test Code 2 :
~~~~~~~~~~~~~~~~

(5)Test Code 2 : (1) A. Go to “Advanced” :math:`\rightarrow` “Serial”
:math:`\rightarrow` “serial redirect to USB” B. Drag it into “on start”

|image91|

(2) A. Enter “Serial” :math:`\rightarrow` “serial write value
    :math:`x = 0`” B. Leave it into “forever” block

|image92|

\****************************************************************************************************\*

(3) A. Click “Input” :math:`\rightarrow` “acceleration(mg) x” B. Keep it
    into “0” box and capitalize the “x”

|image93|

\********************************************************************************************\*

100ms.

|image94|

\****************************************************************************************************\*

(5) Replicate code string

|image95|

for 3 times and keep them into “forever” block, separately set the whole
code string as follows:

|image96|

Complete Program :

|image97|

“on start”: command block runs once to start program.

Serial redirects to USB

The program under the block “forever” runs cyclically.

Serial write value “X” = acceleration value on x axis

Serial write value “Y” = acceleration value on y axis

Serial write value “Z” = acceleration value on z axis

Serial write value “S” = acceleration value on s axis

.. _test-results-2-4:

(6) Test Results 2
~~~~~~~~~~~~~~~~~~

Upload test code to micro:bit main board V2, power the main board via
the USB cable, and click “Show console Device”.

|image98|

After referring to the MMA8653FC data manual and the hardware schematic
diagram of the Micro: Bit main board V2, the accelerometer coordinate of
the Micro: Bit V2 motherboard are shown in the figure below:

|image99|

The following interface shows the decomposition value of acceleration in
X axis, Y axis and Z axis respectively, as well as acceleration
synthesis (acceleration synthesis of gravity and other external forces).

|image100|

If you’re running Windows 7 or 8 instead of Windows 10, via Google
Chrome won’t be able to match devices. You’ll need to use the CoolTerm
serial monitor software to read data.You could open CoolTerm software,
click Options, select SerialPort, set COM port and put baud rate to
115200 (after testing, the baud rate of USB SerialPort communication on
Micro: Bit main board V2 is 115200), click OK, and Connect. The CoolTerm
serial monitor shows the data of X axis, Y axis and Z axis, as shown in
the figures below:

.. figure:: ./images/Animation6.gif
   :alt: Animation6

   Animation6

Project 8: Light Detection
--------------------------

|image101|

 :download:`Click to download the code for this lesson <./Code/Project8.hex>`

.. _project-description-7:

(1) Project Description:
~~~~~~~~~~~~~~~~~~~~~~~~

In this project, we focus on the light detection function of the

Micro: Bit main board V2. It is achieved by the LED dot matrix since the
main board is not equipped with a photoresistor.

.. _components-needed-7:

(2)Components Needed:
~~~~~~~~~~~~~~~~~~~~~

- Micro:bit main board V2 *1- Micro USB cable*\ 1

.. _test-code-3:

(3)Test Code:
~~~~~~~~~~~~~

Link computer with micro:bit board by micro USB cable, and program in
MakeCode editor,

(1)A. Enter “Advanced” :math:`\rightarrow` “Serial” :math:`\rightarrow`
“serial redirect to USB”:

|image102|

\****************************************************************************************************\*

(2) A. Go to “Serial” :math:`\rightarrow` “serial write value
    :math:`x = 0`”:

|image103|

(3) A. Click “Input” :math:`\rightarrow` “acceleration(mg) x”

B. Put “acceleration(mg) x” in the “0” box and change

“x” into “Light intensity”.

|image104|

(4) A. Click “Basic” :math:`\rightarrow` “pause (ms) 100”;

B. Lay it down into “forever” and set to 100ms.

|image105|

\****************************************************************************************************\*

Complete Program :

|image106|

.. _test-results-3:

(4)Test Results:
~~~~~~~~~~~~~~~~

Upload the test code to micro:bit main board V2, power the board via the
USB cable and click “Show console Device”.

|image107|

When the LED dot matrix is covered by hand, the light intensity showed
is approximately 0; when the LED dot matrix is exposed to light, the
light intensity displayed gets stronger with the light as shown below.

|image108|

If you’re running Windows 7 or 8 instead of Windows 10, via Google
Chrome won’t be able to match devices. You’ll need to use the CoolTerm
serial monitor software to read data.

You could open CoolTerm software, click Options, select SerialPort, set
COM port and put baud rate to 115200 (after testing, the baud rate of
USB SerialPort communication on Micro: Bit main board V2 is 115200),
click OK, and Connect. The CoolTerm serial monitor shows the value of
light intensity, as shown in the figures below :

.. figure:: ./images/Animation5.gif
   :alt: Animation5

   Animation5

Project 9: Speaker
------------------

|image109|

 :download:`Click to download the code for this lesson <./Code/Project9.hex>`

.. _project-description-8:

(1)Project Description:
~~~~~~~~~~~~~~~~~~~~~~~

The Micro: Bit main board V2 has an built- in speaker, which makes
adding sound to the programs easier. We can program the speaker to air
all kinds of tones, like playing the son *Ode to Joy.*

.. _components-needed-8:

(2)Components Needed:
~~~~~~~~~~~~~~~~~~~~~

Micro:bit main board V2

Micro USB cable

.. _test-code-4:

(3)Test Code :
~~~~~~~~~~~~~~

Link computer with micro:bit board by micro USB cable, and program in
MakeCode editor, Enter “Basic” module to find “show icon” and drag it
into “on start” block; Click the little triangle to find “…”

|image110|

Enter “Music” module to find and drug “play sound giggle until done”
into “forever” block;

Enter “Basic” module to find and drug “pause(ms) 100” into “forever”
block;

Change 100 into 1000;

|image111|

|image112|

three times and place it into “forever” block; Click the little triangle
to select “happy”, “hello”, “yawn”;

|image113|

Complete Program :

|image114|

.. _test-results-4:

(4)Test Results:
~~~~~~~~~~~~~~~~

After uploading the test code to micro:bit main board V2 and powering
the board via the USB cable, the speaker utters sound and the LED dot
matrix shows the logo of music.

Project 10: Touch-sensitive Logo
--------------------------------

|image115|

 :download:`Click to download the code for this lesson <./Code/Project10.hex>`

.. _project-description-9:

(1)Project Description:
~~~~~~~~~~~~~~~~~~~~~~~

The Micro: Bit main board V2 is equipped with a golden touch- sensitive
logo, which can act as an input component and function like an extra
button.

It contains a capacitive touch sensor that senses small changes in the
electric field when pressed (or touched), just like your phone or tablet
screen do.When you press it , you can activate the program.

.. _components-needed-9:

(2)Components Needed:
~~~~~~~~~~~~~~~~~~~~~

Micro:bit main board V2

Micro USB cable

.. _test-code-5:

(3)Test Code :
~~~~~~~~~~~~~~

Link computer with micro:bit board by micro USB cable, and program in
MakeCode editor,

Delete block “on start” and “forever”;

Enter “Input” module to find and drag “on logo pressed” ; Click the
little triangle to find “touched” ’ ;

|image116|

Enter module “Variables” → choose “Make a Variable” → input “start” →
click “OK”

The variable “start” is established;

Enter “Variables” module to find and drag “set start to 0” into “on logo
touched” block;

|image117|

Enter “Input” module → click “more” → find and drag “running time(ms)”
into the “0” of “set start to 0” block;

|image118|

Enter “Basic” module to find and drag “show icon” into

“on logo touched” block;

|image119|

Enter “Input” module to find and drag “on logo pressed” → choose
“released” → establish variable “time”; Enter “Variables” module to find
and drag “set time to 0” into “on logo pressed” block; Enter “Math”
module to find and drag “0- 0” into the “0” of “set start to 0” block;

|image120|

Enter “Input” module → “more” → find and drag “running time(ms)” into
“0” on the left side of “0- 0”; Enter “Variables” module to find and
drag “start” into “0” on the right side of “0- 0”;

|image121|

Enter “Basic” module to find and drag “show number” into “on logo
released” block;

Enter “Math” module to find and drag “square root 0” into “0”; Click the
little triangle to find “integer÷”;

|image122|

Enter “Variables” module to find and drag “time” into “0” on the left
side of “0- 0” and change the “0” on the right side to “1000”;

|image123|

Complete Program :

|image124|

.. _test-results-5:

(4)Test Results:
~~~~~~~~~~~~~~~~

After uploading the test code to micro:bit main board V2 and powering
the board via the USB cable, the LED dot matrix exhibits the heart
pattern when the touch- sensitive logo is pressed or touched and
displays digit when the logo is released.

Project 11: Microphone
----------------------

|image125|

 :download:`Click to download the code 1 for this lesson <./Code/Project11.hex>`

 :download:`Click to download the code 2 for this lesson <./Code/Project112.hex>`

.. _project-description-10:

(1)Project Description:
~~~~~~~~~~~~~~~~~~~~~~~

The Micro: Bit main board V2 is built with a microphone which can test
the volume of ambient environment. When you clap, the microphone LED
indicator turns on. Since it can measure the intensity of sound, you can
make a noise scale or disco lighting changing with music. The microphone
is placed on

the opposite side of the microphone LED indicator and in proximity with
holes that lets sound pass. When the board detects sound, the LED
indicator lights up.

.. _components-needed-10:

(2) Components Needed:
~~~~~~~~~~~~~~~~~~~~~~

Micro:bit main board V2

Micro USB cable

.. _test-code-1-6:

(3) Test Code 1:
~~~~~~~~~~~~~~~~

Link computer with micro:bit board by micro USB cable, and program in
MakeCode editor,

Delete block “on start” and “forever”; Enter “Input” module to find and
drag “on loud sound”; Enter “Basic” module to find and drag “show
number” into “on loud sound” block;

|image126|

|image127|

Click the little triangle of “lond” to choose “quiet”;

|image128|

|image129|

Complete Program :

|image130|

.. _test-results-1-6:

(4)Test Results 1:
~~~~~~~~~~~~~~~~~~

After uploading test code to micro:bit main board V2 and powering the
board via the USB cable, the LED dot matrix displays pattern “when you
claps and pattern when it is quiet around.

.. _test-code-2-5:

(5)Test Code 2:
~~~~~~~~~~~~~~~

Link computer with micro:bit board by micro USB cable, and program in
MakeCode editor,

Enter “Advanced” module :math:`\rightarrow` choose “Serial” to find and
drag “serial redirect to USB” into “on start” block;

|image131|

Enter “Variables” module :math:`\rightarrow` choose “Make a Variable”
:math:`\rightarrow` input

“maxSound” :math:`\rightarrow` click “OK”, variable “maxSound” is
established;

Enter “Variables” module to find and drag “set maxSound to
:math:`0^{\prime \prime}` into”on start” block;

|image132|

Enter “Logic” module to find and drag “if true then…else” into “forever”
block;

Enter “Input” module to find and drag button A is pressed” into “then”;

|image133|

Enter “Basic” module to find and drag “show number” into “then”;

Enter “Variables” module to find and drag “maxSound” into “0”;

|image134|

Establish variable “soundLevel”;

Enter “Variables” module to find and drag “set soundLevel to 0” into
“else”;

Enter “Input” module to find and drag “sound level” into “0”;

|image135|

Enter “Led” module to find and drag “plot bar graph of 0 up to 0” into
“else”;

Enter “Variables” module to find and drag “soundLevel” into the “0”
behind “of”;

Change the “0” behind “up” to “255”;

|image136|

Enter “Logic” module to find and drag “if true then” into “else” block;

Enter “Logic” module to find and drag “0 > 0” into “then”; Enter
“Variables” module to find and drag “soundLevel” into “0” on the left
side of “0- 0”;

Enter “Variables” module to find and drag “maxSound” into “0” on the
right side;

|image137|

Enter “Variables” module to find and drag “set maxSound to 0” into the
second “then”;

Enter “Variables” module to find and drag “soundLevel” into the “0”;

|image138|

Complete Program :

|image139|

.. _test-results-2-5:

(6)Test Results 2:
~~~~~~~~~~~~~~~~~~

Upload test code to micro:bit main board V2, power the board via the USB
cable and click “Show console Device” as shown below.

When the sound is louder around, the sound value shows in the serial
port is bigger as shown below.

.. figure:: ./images/Animation3.gif
   :alt: Animation3

   Animation3

What’s more, when pressing the button A, the LED dot matrix displays the
value of the biggest volume( please note that the biggest volume can be
reset via the Reset button on the other side of the board ) while when
clapping, the LED dot matrix shows the pattern of the sound.

Project 12: Bluetooth Wireless Communication
--------------------------------------------

|image140|

 :download:`Click to download the code for this lesson <./Code/Project12.hex>`

.. _project-description-11:

(1)Project Description:
~~~~~~~~~~~~~~~~~~~~~~~

The Micro: Bit main board V2 comes with a nRF52833 processor (with a
built- in BLE(Bluetooth Low Energy) device Bluetooth 5.1 ) and a 2.4GHz
antenna for Bluetooth wireless communication and 2.4GHz wireless
communication. With the help of them, the board is able to communicate
with a variety of Bluetooth devices, including smart phones and tablets.

In this project, we mainly concentrate on the Bluetooth wireless
communication function of this main board. Linked with Bluetooth, it can
transmit code or signals. To this end, we should connect an Apple device
(a phone or an iPad) to the board.

Since setting up Android phones to achieve wireless

transmission is similar to that of Apple devices, no need to illustrate
again.

(2) Preparation
~~~~~~~~~~~~~~~

Attachment of Micro:bit main board V2 to your computer via the Micro USB
cable.

An Apple device (a phone or an iPad) or an Android device;

(3) Procedures:
~~~~~~~~~~~~~~~

For Apple devices, enter this link https://www.microbit.org/get-
started/user- guide/ble- ios/ with your computer first, and then click
“Download pairing HEX file” to download the Micro: Bit firmware to a
folder or desk, and upload the downloaded firmware to the Micro: Bit
main board V2

|image141|

If you need help
================

If you’re having problems flashing code from your iOS device to your
micro:bit, download this HEX file and transfer it to your micro:bit from
a computer, or visit our support site.

|image142|

Monitor and control
===================

The ‘Monitor and control’ section of the iOS app allows you to observe
real- time data from the micro:bit sensors, send messages directly to
the LEDs and control the micro:bit buttons and pins from your iPad or
iPhone.

|image143|

|image144|

Search “micro bit” in your App Store to download the APP micro:bit.

|image145|

Connect your Apple device with Micro: Bit main board V2: Firstly, turn
on the Bluetooth of your Apple device and open the APP micro:bit to
select item “Choose micro:bit” to start pairing Bluetooth. Please make
sure that the Micro: Bit main board V2 and your computer are still
linked via the USB cable.

|image146|

Secondly, click “Pair a new micro:bit”;

|image147|

Following the instructions to press button A and B at the same time(do
not release them until you are told to) and press Reset & Power button
for a few seconds. Release the Reset & Power button, you will see a
password pattern shows on the LED dot matrix. Now, release buttons A and
B and click Next.

|image148|

|image149|

Set the password pattern on your Apple device as the same pattern showed
on the matrix and click Next.

|image150|

Still click Next and a dialog box props up as shown below. Then click
“Pair”. A few seconds later, the match is done and the LED dot matrix
displays the “√” pattern.

|image151|

|image152|

|image153|

After the match with Bluetooth, write and upload code with the App.

Click “Create Code” to enter the programming page and write code.

|image154|

|image155|

|image156|

Name the code as “1”and click to save it.

|image157|

Click the third item “Flash” to enter the uploading page. The default
code program for uploading is the one saved just now and named “1” and
then click the other “Flash” to upload the code program “1”.

|image158|

|image159|

|image160|

If the code is uploaded successfully a few seconds later, the App will
emerge as below and the LED dot matrix of the Micro: Bit main board V2
will exhibit a heart pattern.

|image161|

.. |image1| image:: ./images/image-20250903152629814.png
.. |image2| image:: ./images/image-20250903153355910.png
.. |image3| image:: ./images/Microbit.gif
.. |image4| image:: ./images/MicrobitD.gif
.. |image5| image:: ./images/Animation1.gif
.. |image6| image:: images/2356ba4c94ae3584430f119173f91469925077124a6252fd80568bc2c68f8d83.jpg
.. |image7| image:: images/e7238b1a55a634bb74876e16c77af4615c3e42f30ce2dcb244cbe92f822be92f.jpg
.. |image8| image:: images/e9ef941b8d9a997a0ad99c77766fd81174ab6ac0e3d1b5df3a6c77f703204433.jpg
.. |image9| image:: images/9c368e65d6409eb0418970c2444695df1110a93141037f647d4ffb5d85c09105.jpg
.. |image10| image:: images/4a42a4e909fdccaa8ddd6c88cdfcdcadda5a661cf690706b1ca1453a04812cbe.jpg
.. |image-20250904102507816| image:: ./images/image-20250904102507816.png
.. |image-20250904102523754| image:: ./images/image-20250904102523754.png
.. |image11| image:: images/7748e3bd6d35ef4017ffbc6997e70ef85cacc3eb5ec7195dac6a776c6fdfb033.jpg
.. |image12| image:: images/81af7abddceba36131993e199b353d8293fd4e96792c022e3f034088a4595951.jpg
.. |image13| image:: images/ce2fdf0a7bf591077e69cd8adffe527f530dd7da34fac7beaf6b242bbbfee06f.jpg
.. |image14| image:: images/50c8fbdc2768acd5ce29ac447927993895c87b36840f28a0057d077cf6a9b986.jpg
.. |image15| image:: images/260949afd2e9e35738504f56877f1964870a74f9a742bde5acd4b97e3bb64af7.jpg
.. |image16| image:: images/58626c5083c1d817e8324af31b40933e4fd6cb86ba58a13ec17fafedcd10460f.jpg
.. |image17| image:: images/fb240787a4b8b56e94779b537f3d44a2eb50aae5417210642f3eb35df02aecc1.jpg
.. |image18| image:: images/9b99306d48501efc9a7f3b625023767cd46109cdf734f77601b173c684789766.jpg
.. |image19| image:: images/b88744a842d2d4521b81c29034c9c03c334dc47822457fcdd1e0d26f91ca5966.jpg
.. |image20| image:: images/a693bf0fdb1627198fb157c88f41383e9bc0b93b8763ab6af4b833ba1439abbe.jpg
.. |image21| image:: images/819838bcd5036cafa468e7ffc3212acaddb87d8ec605e47b331fc85517786f06.jpg
.. |image22| image:: images/893d9a61272bf7602c081e3576f14320a8ec39fe1689b609674eb7e18f7c9869.jpg
.. |image23| image:: images/e08f364207ce6d1ce28a441e59339c8fd9e348cb390969cfdb2cbeb71ec23617.jpg
.. |image24| image:: images/dcec094e91bdccb64e798d0fc390ba3c78621bd15a9d81f7f727991a369b6832.jpg
.. |image25| image:: images/c4fd4cdc71a402cb534febdb933369aff357ac6edb18cc59ab157909fd2a0924.jpg
.. |image26| image:: images/24788308c1f71331280824fd1d824bea905d3761e29746b4f608866a1e4b26c5.jpg
.. |image27| image:: images/039c4eca94348e04a1d3415c9678c55f97b5b922d697039fa0fd90708c3bf2a5.jpg
.. |image28| image:: images/6f8b03bfa3c785deb50a1c25521b5cda127ba7708863eeb7ef09187a4dd4cdb3.jpg
.. |image29| image:: images/ae05d7896460f2b8be98f2700dfc59fa9ec0d54ad02ecc415c989ddf8761c90c.jpg
.. |image30| image:: images/c34efd4afac4285a601ef726c23baacbb8cca96dcff1b05e1f8c3cda2398320e.jpg
.. |image31| image:: images/13da8d57fee2a1352b9dd87ea5b7ef333120ce9b8e041c5c79ceb662ce5ac308.jpg
.. |image32| image:: images/05e0cf8349385b4e711acbce584991053ec967e05435ecc8c49788dac08018d3.jpg
.. |image33| image:: images/2418b42c53ba90c1ad2c66d5589086af0568d92a541b867ba128e71d38b163af.jpg
.. |image34| image:: images/6190f74cf1f2cd47685f66952a0d6a4c2dab4e02c3f2ba1999735065fddfab78.jpg
.. |image35| image:: images/689b7e239b7e07a8a4bf8e4cb4a6d2dc0724b36b69c7e45ecebbedd51e9d7e67.jpg
.. |image36| image:: images/771568c0170890da46b25145569fb3c1543e427158cc75489a090b35eae4b0e3.jpg
.. |image37| image:: images/a356361098cbc8bc5fdcea4daf68918a3957e4acb24923cbd8afde0b7823a559.jpg
.. |image38| image:: images/756d41d3154b0b14803e55e4e8b3c5eb85f48247204662409a263dff3690bd75.jpg
.. |image39| image:: images/5895d7ecd1391c08c3e2e605b6ae1a7083d437da3a2e34e08e8b4c49da0167c8.jpg
.. |image40| image:: images/6c98d0b5c6cf59ba8e6f082f304dc619bd88c9748ae08d914ac6d0364be89e8d.jpg
.. |image41| image:: images/f7eef5cf49db56b4a0ba3367386fa6a19caf3abf8264bb6fa4f500bdaea41d89.jpg
.. |image42| image:: images/0fa62e0a9f386b662f18f5a07b3d350144c42ac59235492bde2bd57e0ed03c67.jpg
.. |image43| image:: images/f408194a08f8c8c59819335832f46f7aa602ccf739ecd8034e050bf5389219fe.jpg
.. |image44| image:: images/36a6043e78f6e2d480623ac665b0a2772b9c0daff4e4ce3b90ddda0d8ada4ab1.jpg
.. |image45| image:: images/15c3f6e111ad8fb5f783afede1fe4ae134b81dd3bddbfef949ef8f8045f3fecc.jpg
.. |image46| image:: images/29f53ac5a6ced68b134e5c7c91d0541a758caa6ba1aadf9884e9dbf61f3dc639.jpg
.. |image47| image:: images/76d958fc95d25d89a32180a219fa5653a56e362221e188781a9c6a290c2a723b.jpg
.. |image48| image:: images/b6eeb49ade6f2e5fd0581ef1b6d1ec52182e2a652e0ef67248690cf99a652a26.jpg
.. |image49| image:: images/ef98d4463aaebacc0fe3286db540cf870d606220d827ebd34355f64c4147f123.jpg
.. |image50| image:: images/4d19df8aa03e7d14527ba13efcc0fb11bdc3fb2f3959fd165c6f5416314a2ffc.jpg
.. |image51| image:: images/018b1dc877386aa188883a421881d5471f8044b77c692b4949253231b8854903.jpg
.. |image52| image:: images/9862383e0173b79b1fc84935398e54f58028f8c0564d87630a8fac18104e7cfd.jpg
.. |image53| image:: images/c279cdbc53aa0f036fdcda2c4f2b0811feb324dfc18b4079f5c2afefe29d5eaf.jpg
.. |image54| image:: images/13b6c8f351008108ef23642654d3786164d9a7db199deb101c62057f4d307cc1.jpg
.. |image55| image:: images/9cd7b251b7a84d4d1e10c4c492e1d252a9bb705c3cad48554e351614e7325946.jpg
.. |image56| image:: images/079f2bcc7af6939d1e6a657b432c9a81aad40cf42aed5d8ead05b0e3a05c9546.jpg
.. |image57| image:: images/9224c9a4a3ad951b7c544e4e872d69ad0cd62447727957137c9c9593b89f53be.jpg
.. |image58| image:: images/85d8dbb13dfc259c75d18784b81945a7d9824b600ae3a2cf7ac56ced5a73e9b1.jpg
.. |image59| image:: images/7034e53c39d407598540b90f97b07b55470f8514dd17e5a08ed8d190be9502a9.jpg
.. |image60| image:: images/9e5029b7841e961f3a449ff46cea8c27a1f846537bb8a9cae45fecb604d70e17.jpg
.. |image61| image:: images/2ecb8005b10f7cff6b6cfc2832ca269e0a8e3438fa31c3d458bf68ff5d36293e.jpg
.. |image62| image:: images/852038f51564d504ef5c4dc747267ba704022889fb24f0284c8f3f9122206430.jpg
.. |image63| image:: images/2baf3a90c97136fde8c249c9705bc15e5d45450161dcfb3f8edccaa7c446e761.jpg
.. |image64| image:: images/eeca29baf0077f213f25427083501686b2439c6d8cbb3639535c5d2f54f91f31.jpg
.. |image65| image:: images/17f54b5739a27f1e6e9d1e5bf6c075d783af579e1fa347965edc806be5144df7.jpg
.. |image66| image:: images/3245ea93431bd0d6561150ba6e592e4a6568c0815ade080a33a111c26c9bc592.jpg
.. |image67| image:: images/3dd9c16e9cf51b9906e019c0aec1c79310edd1597f2aa806e202916c0b635cd5.jpg
.. |image68| image:: images/460a3b7c31d2675ce33a6f491f35369d8c6480b7226d8e7bd068f8197c007cad.jpg
.. |image69| image:: images/86632724b380064342fa85275e27b9fef502cb30ec3c20601cb21ec0350fd402.jpg
.. |image70| image:: images/1a8cbfb52c88d287fc1bbd567ea0c7d1a49038af1b6d94d96bb75a411cfac576.jpg
.. |image71| image:: images/4011ae93588ff4e071d9c4aed2f21a00d59aeeaffd3a17ce5904e5ecab97ef80.jpg
.. |image72| image:: images/69c3b9a45c27d6918c92be6c751a69dcc6bbe93598cd8d68f116013cb151761b.jpg
.. |image73| image:: images/3926bc5457aff810d270f2286bfb69a467d9981ff107060842763f318ed9f23e.jpg
.. |image74| image:: images/f2ee705e29124156e440f85abd71451da3606a16f5e89114e120758313eb83ed.jpg
.. |image75| image:: images/bbc9a0627f4e5317b6f1d5cac814f92c6aaadce67f144eaab3c0c564826bb6f4.jpg
.. |image76| image:: images/fde3d8da79279abf1f9f01dab6ea3c6597f48706da86a6787b8bc2d9890bce76.jpg
.. |image77| image:: images/a0e425818567693908e00e0c49162217c14eca94721b4acd48d778b0a283c82c.jpg
.. |image78| image:: images/4f7c65207979fe1b5bea2d16626908b6290510d2104026573fd501fb772fe129.jpg
.. |image-20250904135912374| image:: ./images/image-20250904135912374.png
.. |image-20250904135716763| image:: ./images/image-20250904135716763.png
.. |image-20250904135731280| image:: ./images/image-20250904135731280.png
.. |image-20250904135741348| image:: ./images/image-20250904135741348.png
.. |image-20250904135751868| image:: ./images/image-20250904135751868.png
.. |image-20250904135803451| image:: ./images/image-20250904135803451.png
.. |image-20250904135814737| image:: ./images/image-20250904135814737.png
.. |image-20250904135823460| image:: ./images/image-20250904135823460.png
.. |image79| image:: images/909a55722abc8033bb4d9f9fcb9100493c9c96fe2de2d2cfe7b3a2f9154bf7e6.jpg
.. |image80| image:: images/becdfa2ced9c8a1737616efc777ce5b52cd2ad17ce00d0c358168648705c1180.jpg
.. |image81| image:: images/1cb21f5abd6e06cd7081d135128579f0ef6870d66a6b9fdf92496a2263d51a24.jpg
.. |image82| image:: images/617b76e75450c1d51929a6115d2b716635331368adc0877d12a9810cbce1ccec.jpg
.. |image83| image:: images/ab32ec90118df6a22c5026de9238ff443f7adb59f6249d2ef74e730d3d062d3d.jpg
.. |image84| image:: images/7bf6f6f39c6369837509bc139060db36095e43f046ca0ae599bde10705d1ed31.jpg
.. |image85| image:: images/74fa1206097b70a1afaf7684f3634df8244649c86dcd36715eb48b0acc8e8633.jpg
.. |image86| image:: images/7b4f4d9814baf3cae97287c65207a0a0fa990ded2fdf55bdb80f5b0f820c60cc.jpg
.. |image87| image:: images/bf71e66addeccd7ca2259b9b528700bfa4a96dbf253aaed4421c7b2138a7473d.jpg
.. |image88| image:: images/c97cbe743d2d2cdc403b5010bf3b16faa3b76086642399f7da00cf8c6bac3584.jpg
.. |image89| image:: images/30099649e3d210eeb8bcb37957598674e74f569818ed17e8b30230d7de3ca42b.jpg
.. |image90| image:: images/b066419352c3c59679a76544378b7307337665b40e30d14126eb685bf9672c1f.jpg
.. |image91| image:: images/b931ab4103b3e4dda62f9c56a1468beddfcf67e72f0fc26faaec3fcb85b062ec.jpg
.. |image92| image:: images/9f2ec463e7a4ba543d974d4a345ea72de1c6a47cd05d615d921b0e98508c0990.jpg
.. |image93| image:: images/37d2ce50ebed3be09668056ef6284470ea1d80a49b752f08c3778ea8d0c26937.jpg
.. |image94| image:: images/1fbd6e7d3235fb44a9ba6f56161b28443cdd34a294962427e116392578f71ca1.jpg
.. |image95| image:: images/c6bc881ac8b975a01d494f0f05f7100e06cd1b9c9044406efd85205d63c69aef.jpg
.. |image96| image:: images/62c8cce53676a4c117307e60a7a43a19f877c8f35fd02968d6ae4c8ae5d4f9ed.jpg
.. |image97| image:: images/14b07817549a241b5055e8015cb6366605e1bb6688e121d7a65dd5f87d1b6676.jpg
.. |image98| image:: images/a1e4bc99abd5b56aa380411a9439596ecae899c43058f6666918a7be3954d9ae.jpg
.. |image99| image:: images/07c7f1e7969e58a1f484c41c787b94c1268cd8a256f4e8ef6f97cb7ef4f6bd3f.jpg
.. |image100| image:: images/770433f4f84083071a34ddeec3edcac9e6a343d5012f907635eaa134514df18e.jpg
.. |image101| image:: images/13d9c260f69d61349c16e8fac95b7130075c08136a8606d2ea5d088bf7ad0a13.jpg
.. |image102| image:: images/f0e9fa3a6b108081c3c737a51307d79dbe2b6d6ef4f75b527f950afbec12d8be.jpg
.. |image103| image:: images/ae3dd1b3179ca2c055664b284e54fb6ca9b97c1c47fa21b1e4544543532434e0.jpg
.. |image104| image:: images/c48974d07e2ff26687129a15b18943e3288b558886d92919b674fe60b60d0565.jpg
.. |image105| image:: images/5521c7ae2b3aa355e0181b3a4d39253401f85e8604cd893723e7b1aabbc76429.jpg
.. |image106| image:: images/b2ed80e5ff62be8da71ffb477c7035c494c3976a821cace923cb8387f4e2218e.jpg
.. |image107| image:: images/e71f354adc8e3687e98bdb5ad6bb89a26a5ed43a964efed0a220d0d425aa148f.jpg
.. |image108| image:: images/9bcfafe17dcd47a16fe79798029d34dcb5779ac388802911ac14e84abfe15d24.jpg
.. |image109| image:: images/e08dd451289c9ff2a732e808f80595ca4a3ccbc339d27818157912ae9229e0f9.jpg
.. |image110| image:: images/593d3ac38c3f08ca374a3896e44ed4f757e6769da77f9a3d4b847b10953282ff.jpg
.. |image111| image:: images/8b8e31ed068926b8c0f4f7e3451b8872cad75da02d14704c944a497810d937d5.jpg
.. |image112| image:: images/0169cef4cd2f09e987a34090a8294057602ae3144dcf87176c5936255e5c886f.jpg
.. |image113| image:: images/eceb0041574738561ec84f503f8091ae294e5781ec35a51107bbd0be0b55ba83.jpg
.. |image114| image:: images/54fc4a9860284923102394ecce88af9ce3662dcca3d1b909dcb9f805f24fd187.jpg
.. |image115| image:: images/df7f211e9ad34bde973f72646fd16f0685ec25421a11aa4b7c0a5f306698d544.jpg
.. |image116| image:: images/cf31b50471341ba1cc59ff152bc6e019f4f265dacaa1d16b3acd197978affc5b.jpg
.. |image117| image:: images/f9c34be933edb1a032413ee67d9ac381bdcd1d08a4529e7999ad3cff44e98c59.jpg
.. |image118| image:: images/90e9ff6d6edd53eab3e1a0973c4132cd96475a807020f7bbd54a80b6d8e564e5.jpg
.. |image119| image:: images/4a0077601e244837ec9b20bfdd2e88b665951dd794d658d5f871e81efe9432c3.jpg
.. |image120| image:: images/f7b9f97e85ea5fdd463531a6683f3f81e0597094090fc6606096a697c7093b19.jpg
.. |image121| image:: images/95f948d4d7c6c9b3fd73701d820a1805f9a8fd1e2a25eb1a3d33ccd72926d187.jpg
.. |image122| image:: images/1049d80d877b7c8dc37cf2d592dd1cd8af6108ca933510e937645dea964e31f4.jpg
.. |image123| image:: images/88afbbfdc8cd2ae67e2c620b9a6a6e12a11067e7cdfc00a0ee996a0eae9829ce.jpg
.. |image124| image:: images/fbb70f4c86be4422b72b5c6fb5e39aa10baaf747c02ae5649984da01c70b6a86.jpg
.. |image125| image:: images/3c397f3ca2a8045d397ebba2d5252d6814516443ae43fc9d039a9b75d8357866.jpg
.. |image126| image:: images/fdba100a466fbcf5f270d9d230c8fefea8b4bf61d1f67aaa4f7991801b4d119e.jpg
.. |image127| image:: images/2a3e015d54166ed9c77bce97f81703fb16f19a6710d8c514402d44996fd5e1e8.jpg
.. |image128| image:: images/aa440b0b210e2b2e119a55101f0cc1f36714b7d2c08655d430dec660de0fcfac.jpg
.. |image129| image:: images/7c839892784629ff69cba362b33bce576259db808442dc0a514ac3d2a1ca088c.jpg
.. |image130| image:: images/535dde1937ceac887c95f02cf58bb4a848aae85d65fb07972414c93cc924ea16.jpg
.. |image131| image:: images/08af50714d4579a8f17b939c25627353ff96c48c285b18c67965b05c3a593083.jpg
.. |image132| image:: images/cde39732334ce110af9faa310bbafd87051df87a5fdc8edcf820c5b126a3ffd6.jpg
.. |image133| image:: images/fb534bf720186dced3b8961ec3d25a6f725afe8d34a388110bb3671bbb21b089.jpg
.. |image134| image:: images/107e92855e65e29b7163fc86ed89769d4950b1b800e169f0904c4b7fa7aedb63.jpg
.. |image135| image:: images/3f2885003b1dcf798f268d44589837b2030df7dbc293de18ac1c5bba3459ecd4.jpg
.. |image136| image:: images/82c3f88f6218e613b1ccadc4c57be1558976d7520c5e033d7280924c4d3bc256.jpg
.. |image137| image:: images/256a3434aa1de0d4f55557c543131b763bdccbec3e037160e9290ead694d246a.jpg
.. |image138| image:: images/533ba64e49d50055b9d389335667f9be02948c0db581e9d9c460961b9ccf6efd.jpg
.. |image139| image:: images/11b5740fdc12848b090b7e81c756d2d852588fa022cc5bc0c792bad3b7e5c4d0.jpg
.. |image140| image:: images/a3c30945c6505259c61d60561c2d386c585af52178719c4c3a6bc38fd776aa9c.jpg
.. |image141| image:: images/5a1b3f35f7b4d1236affcdd26ef81f596bf34d41f3f9347cc95fbef32e3d2270.jpg
.. |image142| image:: images/6207a34ad3b0274a1c361d14388886cfb24d032ad8042c1459b535513e8c1d12.jpg
.. |image143| image:: images/eb1e79979656b23f43295bc9de3e628fd71e2565f4f75083c9ffa10316f3a779.jpg
.. |image144| image:: images/2af831b49ff6be4af6f2526cee91bb5b9cb19f8c78c824f4b0e5e16a92bc4166.jpg
.. |image145| image:: images/df173c142f3af136e8a511c005bb734f4f61583591d4455de138c6585b0d2d21.jpg
.. |image146| image:: images/db9f9958afd42ac21c0f75ea6f9548f991d061e31f09f305a1f0256e2b516224.jpg
.. |image147| image:: images/49a428fbd7a41fb31692987ed5b2020692f889a9104389358b3a4bad6c0b1a62.jpg
.. |image148| image:: images/76486c6a450aa7643ccfb6da2dd18a7b529915d8ec27f48bfae43f012d0c9912.jpg
.. |image149| image:: images/0f0dead1377db5909105c71611a6720b76d00bce5f43cbd8be40e35c1a67c8b3.jpg
.. |image150| image:: images/fa240a0652f66c9b108db385fa05a8c77925a7d2cd42ae55b7726fd38862e348.jpg
.. |image151| image:: images/6faea946daed4f0bba8d201d2ed1680716596cb4439ff3100ed2ad48efed6518.jpg
.. |image152| image:: images/9f1eb7a608dea89cfec2fb76f75817e6f0ec6ec3fb981a2152d54abb6986e732.jpg
.. |image153| image:: images/a8896589bd39aede9fc8b9663c373d2f92529a2d4371500ed8e57a2c83aaa269.jpg
.. |image154| image:: images/a1daca8f0321168f2f2bad619884f61bc5533baf3ed8464656be1929c18b0aa4.jpg
.. |image155| image:: images/77afce920b28d307d71c5600f09463174aab5654bacebfea7cc86cc05641401f.jpg
.. |image156| image:: images/08db4335a7afaa1f956824a525a40e340c0f005f2889fba87dbae6129c7147c7.jpg
.. |image157| image:: images/2150706f222da8b562c65c1985a61624118a85bb14a5f1e3d67ea9c44b4c6610.jpg
.. |image158| image:: images/5b591f39662fefe902832371d8746525fecbddf4cbfd3ec414f4015f55e70c3c.jpg
.. |image159| image:: images/a5fb680846fc27347f8fb694e2db0a91a5766fc4fd5b148f02cc928f1f93e474.jpg
.. |image160| image:: images/a9ba11c4c87e1565ba0c9cf7f4ff176f405df1d67c7095e5ffb7c63161cf1ec3.jpg
.. |image161| image:: images/9e2ac790e5210f5d2747565a0f58771e03de671e34b208f4e0755e43d6080148.jpg
