# Challenge Description

A just-for-fun, mathy programming challenge inspired by my mentor's high school geometry scribbles. 

This program will enable you to visualize different geometric patterns in a square-shaped spiral depending on its numeric inputs.

This program, which takes an integer x as an input, should draw a spiral of squares containing integers to a canvas. The numbers in your spiral should begin at 1 and increase by the value of x with each consecutive itteration of a square. 

EXAMPLE: If 4 is passed in as x, your first square should contain the number 1, the second square should comntain the number 5, 9 in the third, 13 in the fourth, and so on.

As the squares are drawn to your canvas, they should wrap around each other COUNER-CLOCKWISE in a shape very similar to that of a spiral. (HINT: Keep in mind that in order for a spiral to form, you will need to automate the program to change the direction in which the squares are consecutively drawn to the canvas when appropriate to maintain your spiral shape).

Every instance of the square (NOT the number contained in the quare) which is a multiple of x should have a black border on the side of the square corresponding to the direction of movement of your spiral at the time that square was created.

SOUND CONFUSING?! I know. Here's my mentor's original scribble. Should give you an idea of what your spiral should look like.

![image]()

If you solve it, feel free to tweak it as you see fit. Add color! Bend the rules! Discover some breakthrough geometric sequence! If you find something cool, please send me a pull request :D

