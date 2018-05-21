# Create an Ulam spiral

A just-for-fun, mathy programming challenge inspired by my mentor's high school geometry scribbles. 

This challenge will enable you to visualize different geometric patterns in an [Ulam_spiral](https://en.wikipedia.org/wiki/Ulam_spiral) depending on its numeric inputs.

## Instructions

Your program should take an integer x as an input and draw a square-shaped spiral of 50x50 pixel squares to a 600x600 pixel canvas. As the squares are drawn to the canvas, they should wrap around each other COUNTER-CLOCKWISE in a shape very similar to that of a spiral ONLY UNTIL the size of the spiral exceeds the size of the canvas.

Every instance of a square (the numeric order in which they were drawn) which is a multiple of x should have a solid border on the side corresponding to the direction of movement of your spiral at the time that particular square was created. 

EXAMPLE: If 4 is passed in as x, you will add borders to the 4th, 8th, 12th, etc. squares. If, for instance, the spiral is growing in the left direction when the 4th square is created, that square should have a border on its left side. By the time you create square 8, the spiral will be growing to the right, so this square should have a border on its right side.

Confused?! Here's my mentor's original scribble. Should give you an idea of what your spiral should look like.

![image](https://github.com/hunter-atk/number-spiral-geometry-challenge/blob/master/IMG_9240.jpg?raw=true)

If you solve it, feel free to tweak it as you see fit. Add color! Bend the rules! Use evens! Fibonacci! Digits of pi! Discover some breakthrough geometric sequence! If you find something cool, please send me a pull request :D

## BONUS

Instead of drawing squares to a canvas, try generating the spiral another way and populate your squares with numbers. Also, make your canvas bigger! The bigger the canvas the easier it is to see patterns, in my opinion.

EXAMPLE: The numbers in your spiral could begin with 1 in the first and center-most square, and increase by the value of x with each consecutive itteration of a square. If 4 is passed in as x, for instance, the first and center-most square in the spiral should contain the number 1, the second square should comntain the number 5, 9 in the third, 13 in the fourth, and so on. See if you notice any number patterns in your spiral.

## Mentor's Note

If you'd like to see the histroy behind this spiral and some patterns that have been discovered, check out the video below:

[![Patterns in Primes - Numberphile](http://img.youtube.com/vi/iFuR97YcSLM/0.jpg)](http://www.youtube.com/watch?v=iFuR97YcSLM)

