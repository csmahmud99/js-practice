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

// Converting String-type Floating-point number into actual Floating-point number :: parseFloat
var gpaEnglish = 3.14;
var gpaMath = "4.16";

var totalGPA = gpaEnglish + gpaMath;

console.log("Total GPA (Concatenation):", totalGPA); // Output: Total GPA (Concatenation): 2.144.30 ===> Strange output

var gpaMathToNumber = parseFloat(gpaMath);
console.log("gpaMath in Numeric format:", gpaMathToNumber);

var newTotalGPA = gpaMathToNumber + gpaEnglish;
console.log("New Total Price (In Numeric format):", newTotalGPA); // Output: New Total Price (In Numeric format): 7.300000000000001