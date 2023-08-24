// Normal Case :: Output is '0.7' as usual

var numberOne = 0.5;
var numberTwo = 0.2;

var sum = numberOne + numberTwo;

console.log(sum);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Exceptional Case :: Output should 0.3, but output is 0.30000000000000004

var numberThree = 0.1;
var numberFour = 0.2;

var total = numberThree + numberFour;

console.log("0.1 + 0.2 =", total);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// To fix this problem, we can use 'toFixed' to make this to 2 or, 3-decimal points or whatever we want

total = total.toFixed(2);
console.log("0.1 + 0.2 (to 2-decimal points, String Type) =", total); // Result is a String

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// This will result a String-type value, so we can not use it for any mathematical operation with another numeric value when this is in the String-type. If we want to use this for any mathematical operation, we have to convert this into a Floating-type number by using 'parseFloat()'.

total = parseFloat(total);
console.log("0.1 + 0.2 (to 2-decimal points, Floating-point Number Type) =", total);