/* 
// How to see the output of an array in JavaScript

var vowels = ["a", "e", "i", "o", "u"];
console.log("The output of the array 'vowels' is:", vowels);

// Output || The output of the array 'vowels' is: [ 'a', 'e', 'i', 'o', 'u' ] 
*/



/* 
// We can find the 'Length' of an array in JavaScript; it means, we can see in the output how much elements an array carry

var vowels = ["a", "e", "i", "o", "u"];
console.log("The length of the array 'vowels' is:", vowels.length);

// Output || The length of the array 'vowels' is: 5 
*/




// Finding an element of an array by it's 'Index (Position) Number'
// Note: Index number of any array is begun with Zero (0).

var numbers = [45, 68, 78, 56, 89, 98];
console.log("Element of index number 0 (First Element) of the array 'numbers' is:", numbers[0]);
console.log("Element of index number 1 (Second Element) of the array 'numbers' is:", numbers[1]);
console.log("Element of index number 2 (Third Element) of the array 'numbers' is:", numbers[2]);
console.log("Element of index number 3 (Fourth Element) of the array 'numbers' is:", numbers[3]);

// Output || Element of index number 0 (First Element) of the array 'numbers' is: 45 
// Output || Element of index number 1 (Second Element) of the array 'numbers' is: 68 
// Output || Element of index number 2 (Third Element) of the array 'numbers' is: 78 
// Output || Element of index number 3 (Fourth Element) of the array 'numbers' is: 56 


// This can be shown by storing it into a variable
var fifthItem = numbers[4];
console.log("Element of index number 4 (Fifth Element) of the array 'numbers' is:", fifthItem);

// Output || Element of index number 4 (Fifth Element) of the array 'numbers' is: 89 