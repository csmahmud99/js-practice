/* 
// Array Push
var numbers = [78, 45, 98, 45];
console.log("Main array (numbers):", numbers);
// Output || Main array (numbers): [ 78, 45, 98, 45 ]
console.log("Length of the main array (numbers):", numbers.length);
// Output || Length of the main array (numbers): 4


// Adding a new element to the last of the main array (numbers) using 'push()' method
numbers.push(63);
console.log("The array (numbers) after adding an element to the last:", numbers);
// Output || The array (numbers) after adding an element to the last: [ 78, 45, 98, 45, 63 ]
console.log("New length of the array (numbers) after adding an element to the last:", numbers.length);
// Output || New length of the array (numbers) after adding an element to the last: 5

// We can also add more than one element to the last of an array using 'push()' method
numbers.push(65, 66);
console.log("The array (numbers) after adding more than one element to the last:", numbers);
// Output || The array (numbers) after adding more than one element to the last: [ 78, 45, 98, 45, 63, 65, 66 ]
console.log("New length of the array (numbers) after adding more than one element to the last:", numbers.length);
// Output || New length of the array (numbers) after adding more than one element to the last: 7 
*/


/* 
// Array Pop
var numbers = [78, 45, 98, 45, 63, 65, 66];
console.log("Main array (numbers):", numbers);
// Output || Main array (numbers): [ 78, 45, 98, 45, 63, 65, 66 ]
console.log("Length of the main array (numbers):", numbers.length);
// Output || Length of the main array (numbers): 7


// Removing a new element from the last of the main array (numbers) using 'pop()' method
numbers.pop();
console.log("The array (numbers) after removing an element from the last:", numbers);
// Output || The array (numbers) after removing an element from the last: [ 78, 45, 98, 45, 63, 65 ]
console.log("New length of the array (numbers) after removing an element from the last:", numbers.length);
// Output || New length of the array (numbers) after removing an element from the last: 6


// Array 'pop()' method returns us the removed element from the array, which we can use later to anywhere by storing it inside a variable
var numbersNew = [78, 45, 63, 65];
var itemOfNumbers = numbersNew.pop();
console.log("Removed item as return:", itemOfNumbers);
// Output || Removed item as return: 65 
*/