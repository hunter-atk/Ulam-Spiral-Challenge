# Challenge Description

A just-for-fun, mathy programming challenge inspired by my mentor's high school geometry scribbles. 

This challenge will enable you to visualize different geometric patterns in a square-shaped spiral depending on its numeric inputs.

Your program should take an integer x as an input and draw a square-shaped spiral of 50x50 pixel squares to a 600x600 pixel canvas. Each square should comtain a unique integer number. The numbers in your spiral should begin at 1 and increase by the value of x with each consecutive itteration of a square. 

EXAMPLE: If 4 is passed in as x, the first and center-most square in the spiral should contain the number 1, the second square should comntain the number 5, 9 in the third, 13 in the fourth, and so on. 

As the squares are drawn to the canvas, they should wrap around each other COUNTER-CLOCKWISE in a shape very similar to that of a spiral ONLY UNTIL the size of the spiral exceeds the size of the canvas.

Every instance of a square (NOT the number contained in the square) which is a multiple of x should have a solid border on the side corresponding to the direction of movement of your spiral at the time that particular square was created.

Confused?! Here's my mentor's original scribble. Should give you an idea of what your spiral should look like.

![image]()

If you solve it, feel free to tweak it as you see fit. Add color! Bend the rules! Discover some breakthrough geometric sequence! If you find something cool, please send me a pull request :D

