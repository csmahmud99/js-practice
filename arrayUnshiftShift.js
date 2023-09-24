/* 
// Array Unshift
var numbers = [6, 8, 10];
console.log("Main array (numbers):", numbers);
// Output || Main array (numbers): [ 6, 8, 10 ]
console.log("Length of the main array (numbers):", numbers.length);
// Output || Length of the main array (numbers): 3


// Adding a new element to the first of the main array (numbers) using 'unshift()' method
numbers.unshift(2);
console.log("The array (numbers) after adding an element to the first:", numbers);
// Output || The array (numbers) after adding an element to the first: [ 2, 6, 8, 10 ]
console.log("New length of the array (numbers) after adding an element to the first:", numbers.length);
// Output || New length of the array (numbers) after adding an element to the first: 4

// We can also add more than one element to the first of an array using 'unshift()' method
numbers.unshift(4, 5);
console.log("The array (numbers) after adding more than one element to the first:", numbers);
// Output || The array (numbers) after adding more than one element to the first: [ 4, 5, 2, 6, 8, 10 ]
console.log("New length of the array (numbers) after adding more than one element to the first:", numbers.length);
// Output || New length of the array (numbers) after adding more than one element to the first: 6 
*/



/* 
// Array Shift
var numbers = [2, 4, 6, 8, 10];
console.log("Main array (numbers):", numbers);
// Output || Main array (numbers): [ 2, 4, 6, 8, 10 ]
console.log("Length of the main array (numbers):", numbers.length);
// Output || Length of the main array (numbers): 5


// Removing a new element from the first of the main array (numbers) using 'shift()' method
numbers.shift();
console.log("The array (numbers) after removing an element from the first:", numbers);
// Output || The array (numbers) after removing an element from the first: [ 4, 6, 8, 10 ]
console.log("New length of the array (numbers) after removing an element from the first:", numbers.length);
// Output || New length of the array (numbers) after removing an element from the first: 4


// Array 'shift()' method returns us the removed element from the array, which we can use later to anywhere by storing it inside a variable
var numbersNew = [78, 45, 63, 65];
var itemOfNumbers = numbersNew.shift();
console.log("Removed item as return:", itemOfNumbers);
// Output || Removed item as return: 78 
*/