// ******************** Useful Array Methods ********************

/* 
// 1. Array 'Push' Method
// Adds one or, more than one new items to the end of an array.
// Returns the new length of the array.

// Array function
var stuff = ["A", "B", "C", "D", "E", "F"];  // Test array

var newValue1 = stuff.push("G");         // For adding one item
console.log(stuff);                      // stuff = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
console.log(newValue1);                  // returns: 7

var newValue2 = stuff.push("H", "I");    // For adding more than one items
console.log(stuff);                      // stuff = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' ]
console.log(newValue2);                  // returns: 9 
*/



/*
// 2. Array 'Pop' Method
// Removes the last item from an array.
// Returns what was removed.

// Array function
var stuff = ["A", "B", "C", "D", "E", "F"];  // Test array

var newValue1 = stuff.pop();            // 1st step: one item is removed
console.log(stuff);                     // stuff = [ 'A', 'B', 'C', 'D', 'E' ]
console.log(newValue1);                 // returns: "F"

var newValue2 = stuff.pop();            // Another step: another item is removed
console.log(stuff);                     // stuff = [ 'A', 'B', 'C', 'D' ]
console.log(newValue2);                 // returns: "E" 
*/



/* 
// 3. Array 'Unshift' Method
// Adds one or, more than one new items to the beginning of an array.
// Returns the new length of the array.

// Array function
var stuff = ["A", "B", "C", "D", "E", "F"];  // Test array

var newValue1 = stuff.unshift("X");         // For adding one item
console.log(stuff);                         // stuff = [ 'X', 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log(newValue1);                     // returns: 7

var newValue2 = stuff.unshift("Y", "Z");    // For adding more than one items
// console.log(stuff);                      // stuff = [ 'Y', 'Z', 'X', 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
console.log(newValue2);                     // returns: 10 
*/



/* 
// 4. Array 'Shift' Method
// Removes the first item from an array.
// Returns what was removed.

// Array function
var stuff = ["A", "B", "C", "D", "E", "F"];  // Test array

var newValue1 = stuff.shift();      // 1st step: one item is removed
console.log(stuff);                 // stuff = [ 'B', 'C', 'D', 'E', 'F', 'G' ]
console.log(newValue1);             // returns: "A"

var newValue2 = stuff.shift();      // Another step: another item is removed
console.log(stuff);                 // stuff = [ 'C', 'D', 'E', 'F', 'G' ]
console.log(newValue2);             // returns: "B" 
*/



/* 
// 5. Array 'Splice' Method (with single Argument)
// Gets rid of the index item and after it.
// Returns what was removed.

// Array function
var stuff = ["A", "B", "C", "D", "E", "F"];  // Test array

var newValue = stuff.splice(2);      // With single Argument
console.log(stuff);                  // stuff = [ 'A', 'B' ]
console.log(newValue);               // returns: [ 'C', 'D', 'E', 'F' ] 
*/


/* 
// 5. Array 'Splice' Method (with 2 Arguments)
// 1st argument: Index item from which the removing operation will start.
// 2nd argument: Determined how many items are removed in total (including the index).
// Returns what was removed.

// Array function
var stuff = ["A", "B", "C", "D", "E", "F"];  // Test array

var newValue = stuff.splice(2, 2);  // With 2 Arguments
console.log(stuff);                 // stuff = [ 'A', 'B', 'E', 'F' ]
console.log(newValue);              // returns: [ 'C', 'D' ] 
*/


/* 
// 5. Array 'Splice' Method (with 3 Arguments - no item is removed)
// In this case: Inserts the item named 'Hello' into the index number '2' and shifts the rest items ahead (without removing any items/removing '0' items).
// Returns what was removed.

// Array function
var stuff = ["A", "B", "C", "D", "E", "F"];  // Test array

var newValue = stuff.splice(2, 0, "Hello");     // With 3 Arguments: no item is removed
console.log(stuff);                             // stuff = [ 'A', 'B', 'Hello', 'C', 'D', 'E', 'F' ]
console.log(newValue);                          // returns: [] 
*/


/* 
// 5. Array 'Splice' Method (with 3 Arguments - some items are removed)
// In this case: Inserts the items named 'Hello' into the index number '2' and removes '3' items (including the index number '2' and after)
// Returns what was removed.

// Array function
var stuff = ["A", "B", "C", "D", "E", "F"];  // Test array

var newValue = stuff.splice(2, 3, "Hello");     // With 3 Arguments: some items are removed
console.log(stuff);                             // stuff = [ 'A', 'B', 'Hello', 'F' ]
console.log(newValue);                          // returns: [ 'C', 'D', 'E' ] 
*/



/* 
// 6. Array 'Slice' Method (with single Argument)
// Almost same as the Array 'Splice' Method; but does not modify the original array.
// Cuts off the index item and after it, then returns the cut-items.

// Array function
var stuff = ["A", "B", "C", "D", "E", "F"];  // Test array

var newValue = stuff.slice(2);         // With single Argument
console.log(stuff);                    // stuff = ["A", "B", "C", "D", "E", "F"]
console.log(newValue);                 // returns: [ 'C', 'D', 'E', 'F' ]
*/


/* 
// 6. Array 'Slice' Method (with 2 Arguments)
// Almost same as the Array 'Splice' Method; but does not modify the original array.
// 1st argument indicates the index number of the item from which have to start the cut-off.
// 2nd argument indicates the index number of the item before which we have to stop the cut off.
// Returns the cut-items.

// Array function
var stuff = ["A", "B", "C", "D", "E", "F"];  // Test array

var newValue = stuff.slice(2, 4);       // With 2 Arguments
console.log(stuff);                     // stuff = [ 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log(newValue);                  // returns: [ 'C', 'D' ] 
*/



/* 
// 7. Array 'IndexOf' Method
// Returns the index (position) number of the item/element in an array.

// Array function
var stuff = ["A", "B", "C", "D", "E", "F"];  // Test array

var newValue = stuff.indexOf("C");      
console.log(newValue);                  // returns: 2 
*/



/* 
// 8. Array 'Concat' Method
// Returns the combination of any array (here, the array named 'stuff') with the array-argument of the array 'concat' method

// Array function
var stuff = ["A", "B", "C", "D", "E", "F"];  // Test array

var newValue = stuff.concat(["G", "H", "I"]);   // Another array as the argument
console.log(newValue);                          // returns: [ 'A', 'B', 'C', D', 'E', 'F', 'G', 'H', 'I' ] 
*/



/* 
// 9. Array 'ToString' Method
// Returns the combination of all array elements into only one single string

// Array function
var stuff = ["A", "B", "C", "D", "E", "F"];  // Test array

var newValue = stuff.toString();   // No need to provide any argument
console.log(newValue);             // returns: "A,B,C,D,E,F" 
*/



/* 
// 10. Array 'Join' Method
// Works almost the same as the Array 'ToString' Method, returns the combination of all array elements into only one single string; but the argument determines  what is between each element in the return-string

// Array function
var stuff = ["A", "B", "C", "D", "E", "F"];  // Test array

var newValue = stuff.join("-");
console.log(newValue);             // returns: "A-B-C-D-E-F" 
*/



/* 
// 11. Array 'Reverse' Method
// Returns the same array in a reverse format (so, index number of the array elements will change)

// Array function
var stuff = ["A", "B", "C", "D", "E", "F"];  // Test array

var newValue = stuff.reverse();     // No need to provide any argument
console.log(newValue);              // returns: [ 'F', 'E', 'D', 'C', 'B', 'A' ] 
*/