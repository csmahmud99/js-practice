/* 
// Display/Print all the elements of an array as output using the 'for' loop, 'continue' statement with the 'for' loop and an array with 'numeric-type' elements.
var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        continue;
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
    indexNum++;
    if (number > 50) {
        continue;
    }
    console.log(number);
} 
*/

/* 
// Output ||
45
32
25
41
25 
*/