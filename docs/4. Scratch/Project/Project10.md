### Project 10 Dot Matrix Display

**1. Description**

This module consists of a 8x8 LED dot matrix with one control pin for each row as well as each column to adjust the brightness of LED. Connecting with Arduino board, the brightness of LED is controlled to display characters and figures via Arduino programming. In this way, simple characters, numbers and figures are able to be displayed. It also can be applied in game machines or screens.

![](media/image-20251014110208838.png)

MAX7219 is an IC with SPI communication and can be used to control the 8x8 dot matrix. The MAX7219 SPI communication has integrated in our libraries and you can recall directly.

**2. Wiring Diagram**

![](media/image-20251014110230549.png)

**3. Test Code**

1. Drag the two basic code blocks.

![](media/image-20251014110450126.png)

2. Drag a "init matrix display" from “Matrix” and set CS to IO15. DIN and CLK are fixed pin respectively to IO23 and IO18.

![](media/image-20251014110628495.png)

3. Drag a "set brightness" block and set it to 3.

![](media/image-20251014110643823.png)

4. Drag a "image" block and choose heart icon.

![](media/image-20251014110703074.png)

5. Add a "refresh" block at the end.

![](media/image-20251014110721155.png)

**Complete Code：**

![](media/image-20251014110742649.png)

**4. Test Result**

After connecting the wiring and uploading code, a heart will be displayed on the dot matrix, as shown below.

![](media/image-20251014110834214.png)

**5. Code Explanation**

1. Set the CS pin. In the code, DIN is fixed to io23 and SLK to io18, while CS pin is optional. For convient wiring, we select io15.

![](media/image-20251014110914923.png)

2. Draw pixels. This code block will light up or turn off pixels on the dot matrix by axis x and y, with red for on and black for off.

![](media/image-20251014110932559.png)

3. Draw line. Locate the line by two group of coordinate points, also with red for on and black for off. 

![](media/image-20251014110947350.png)

4. Show characters. We have add character libraries so you only need to type a letter to display it on the dot matrix. Besides, it must be used cooperatively with a "rotation 180°" block. 

![](media/image-20251014111318605.png)

5. Show numbers. Similarly, you only need to type a number to display it on the dot matrix, and it also must be used cooperatively with a "rotation 180°" block. 

![](media/image-20251014111337892.png)

6. Show scrolling character strings. Collocating a "rotation 180°" block, the specified scrolling strings will be displayed after setting its speed. 

![](media/image-20251014111408214.png)

7. Display image. For convenience, we have already integrated some emotion icons which can be selected directly. 

![](media/image-20251014111431233.png)

8. Display fill colors. You may set to black (LED goes off) or red(LED lights up).

![](media/image-20251014111451083.png)

9. Refresh the display. The dot matrix must be refreshed if it displays something. Or else, an error may occur.

![](media/image-20251014111506486.png)

10. Set the brightness. You can lower the brightness when debugging to avoid offending to your eyes.

![](media/image-20251014111522711.png)

11. Set rotation angles. For high compatibility with more code, some data and icons need a rotation with the avoidence of inverted display.  That is why a "rotation 180°" block is necessary in codes. 

![](media/image-20251014111540023.png)