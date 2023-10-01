/* 
// Conditionals :: Output - Only for one time.
var roastGiven = 0;
if (roastGiven < 7) {
    console.log("Give me a Roast, please.");
}

// Output || Give me a Roast, please. 
*/



/* 
// Same type of task like the above one, but for repeatedly result, using 'while' loop :: Infinity Loop.
var roastGiven = 0;
while (roastGiven < 7) {
    console.log("Give me a Roast, please.");
} 

// Output || Give me a Roast, please. [Infinite times]
*/



/* 
// Above task of 'while' loop :: off the 'Infinite' output of 'while' loop.
var roastGiven = 0;

while (roastGiven < 7) {
    console.log("Give me a Roast, please.");

    // roastGiven = roastGiven + 1;

    // Shorthand of the above previous line of code.
    // roastGiven += 1;

    // Another shorthand of the each line of the above both previous lines of codes.
    roastGiven++;
}
*/

/* 
Output [Loop iteration - 7 times] ||
Give me a Roast, please.
Give me a Roast, please.
Give me a Roast, please.
Give me a Roast, please.
Give me a Roast, please.
Give me a Roast, please.
Give me a Roast, please.
*/



/* 
// For the better understanding of the loop iteration of the above code, the above code can be written as follows.
var roastGiven = 0;

while (roastGiven < 7) {
    console.log(roastGiven, "Give me a Roast, please.");
    roastGiven++;
} 
*/

/* 
// Output [Loop iteration - 7 times (0 - 6)] ||
0 Give me a Roast, please.
1 Give me a Roast, please.
2 Give me a Roast, please.
3 Give me a Roast, please.
4 Give me a Roast, please.
5 Give me a Roast, please.
6 Give me a Roast, please.  
*/



/* 
// In respect with the above program, if we want to display/print the loop iteration number from '1 to 7', instead of the number from '0 to 6' without changing the condition, just write one line of code inside the loop body in one-step earlier, to increase/decrease the value of the loop variable in the very beginning.
var roastGiven = 0;

while (roastGiven < 7) {
    roastGiven++;
    console.log(roastGiven, "Give me a Roast, please.");
} 
*/

/* 
// Output [Loop iteration - 7 times (1 - 7)] ||
1 Give me a Roast, please.
2 Give me a Roast, please.
3 Give me a Roast, please.
4 Give me a Roast, please.
5 Give me a Roast, please.
6 Give me a Roast, please.  
7 Give me a Roast, please.  
*/



/* 
// Rules of writing 'while' loop:
1. Loop variable.
2. Condition inside 'while'.
3. Loop body.
4. Change (increment/decrement) the value of the loop variable. Never ignore this changing step (otherwise, the loop will become infinite). 
*/