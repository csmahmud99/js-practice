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



/* 
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
*/




/* 
// In JavaScript, If we want to find an element from an array which element does not exist in that array, what will happen? ==> It will result 'undefined' in the output

var numbers = [45, 68, 78, 56, 89, 98]; // Index number from '0' to '5'
var getItem = numbers[7];
console.log("Element of index number 7 (Eighth Element) of the array 'numbers' is:", getItem);

// Output || Element of index number 7 (Eighth Element) of the array 'numbers' is: undefined  
*/



/* 
// Setting a new value of an element of an array by using Index Number

var numbers = [45, 68, 78, 56, 89, 98];
console.log("The array 'numbers', before setting a new value:", numbers);

// Output || The array 'numbers', before setting a new value: [ 45, 68, 78, 56, 89, 98 ]

numbers[1] = 77; 
numbers[3] = 44; 
console.log("The array 'numbers', after setting new values in the position number 1 (second element) and position number 3 (fourth element)", numbers);

// Output || The array 'numbers', after setting new values in the position number 1 (second element) and position number 3 (fourth element) [ 45, 77, 78, 44, 89, 98 ] 
*/



// Suppose, we have two different arrays. We can re-assign the value of the elements of the first array (oldNumbers) by the value of the elements of the second array (newNumbers). We have to use the Index Number in this case.

var oldNumbers = [45, 68, 78, 56, 89, 98];
var newNumbers = [6, 8, 10, 12];

console.log ("The firs array (oldNumbers), before re-assigning values:", oldNumbers);

// Output || The firs array (oldNumbers), before re-assigning values: [ 45, 68, 78, 56, 89, 98 ] 

// Re-assigning the value of some elements of the first array (oldNumbers) by using the value of the elements of the second array (newNumbers)
oldNumbers[2] = newNumbers[1];

// Now the second element of the second array (newNumbers) is the third element of the first array (oldNumbers)
console.log("After re-assigning, the first array (oldNumbers) now:", oldNumbers);

// Output || After re-assigning, the first array (oldNumbers) now: [ 45, 68, 8, 56, 89, 98 ]