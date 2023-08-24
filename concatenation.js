// Addition (Concatenation) of 2 Strings without any space between them

var firstName = "Jennie";
var lastName = "Kim";

var fullNameWithoutGap = firstName + lastName;
console.log("Without Space:", fullNameWithoutGap); 

/* ================================================================== */

// Addition (Concatenation) of 2 Strings with space between them

var fullNameWithGap = firstName + " " + lastName;
console.log("With Space:", fullNameWithGap); 

/* ================================================================== */

// Addition of 2 Numbers, among them one is in the String format

var priceOne = "31";
var priceTwo = 10;

var totalPrice = priceOne + priceTwo;
console.log("Total Price (Concatenation):", totalPrice); // Output : 3110

/* ================================================================== */

// Converting String-type Integer number into actual Integer number :: parseInt
var priceOneToNumber = parseInt(priceOne);
console.log("priceOne in Numeric format:", priceOneToNumber);

var newTotalPrice = priceOneToNumber + priceTwo;
console.log("New Total Price (In Numeric format)", newTotalPrice);

/* ================================================================== */

