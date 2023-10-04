/* 
// Display/Print the numbers from 1 to 20 as output, using the 'for' loop. Use the 'break' statement with this condition 'i > 10'.
for (var i = 1; i <= 20; i++) {
    if (i > 10) {
        break;
    }
    console.log(i);
} 
*/

/* 
// Output ||
1
2
3
4
5
6
7
8
9
10 
*/



/* 
// Doing the same task like the above one using 'break' statement with the 'while' loop.
var roastGiven = 0;

while (roastGiven < 10) {
    console.log("Roast please.", roastGiven);
    roastGiven++;

    if (roastGiven > 4) {
        break;
    }
} 
*/

/* 
// Output ||
Roast please. 0
Roast please. 1
Roast please. 2
Roast please. 3
Roast please. 4 
*/



/* 
// Display/Print all the elements of an array as output using the 'for' loop, 'break' statement with the 'for' loop and an array with 'string-type' elements.
var items = ["bottle", "mouse", "sunglass", "pen", "notebook"];

for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if ( item == "pen") {
        break;
    }
    console.log(item);
}  
*/

/* 
// The same above task, using the 'while' loop.
var items = ["bottle", "mouse", "sunglass", "pen", "notebook"];

var indexNum = 0;

while (indexNum < items.length) {
    var item = items[indexNum];
    if (item == "pen") {
        break;
    }
    console.log(item);
    indexNum++;
} 
*/

/* 
// Output ||
bottle
mouse
sunglass 
*/



/*
// Display/Print all the elements of an array as output using the 'for' loop, 'break' statement with the 'for' loop and an array with 'numeric-type' elements.
var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        break;
    }
    console.log(number);
}
*/

/* 
// The same above task, using the 'while' loop.
var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

var indexNum = 0;

while (indexNum < numbers.length) {
    var number = numbers[indexNum];
    if (number > 100) {
        break;
    }
    console.log(number);
    indexNum++;
} 
*/

/* 
// Output ||
45
87
89
56
32
51
25 
*/