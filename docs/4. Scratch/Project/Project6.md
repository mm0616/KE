### Project 6 Water Flow Light

**1. Description**

This simple water flow light project enables to help you learn electronic packaging. In this project, we will control LEDs to change the color in a specified speed via a Arduino board.

**2. Wiring Diagram**

![](media/image-20251014102301764.png)

**3. Test Code**

A water flow light consists of a stream of LED lighting from left to right.

1. Drag the two basic code blocks.

![](media/image-20251014102329212.png)

2. Set the pin mode to “output”.

![](media/image-20251014102347471.png)

3. Drag the following blocks from "LED" part and set the IO15 pin to LOW, the IO12 pin to HIGH. Then set the delay time to 0.2s.  

![](media/image-20251014102415610.png)

4. Drag the following blocks from "LED" part and set the IO12 pin to LOW, the IO13 pin to HIGH. Then set the delay time to 0.2s.  

![](media/image-20251014102446083.png)

5. Drag the following blocks from "LED" part and set the IO13 pin to LOW, the IO14 pin to HIGH. Then set the delay time to 0.2s. 

![](media/image-20251014102533960.png)

6. Drag the following blocks from "LED" part and set the IO14 pin to LOW, the IO15 pin to HIGH. Then set the delay time to 0.2s.  

   ![](media/image-20251014155222003.png)

**Complete Code：**

![](media/image-20251014102627630.png)

**4. Test Result**  

After uploading code and powering on, the LEDs light up from left to right.