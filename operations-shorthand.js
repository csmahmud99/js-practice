// Changing the Value of a Variable after a Mathematical Operation
// Setting a New Value of the Variable

var tomatoPrice = 25;   // Variable Declaration : Initial Value - 25
console.log("Tomato Price:", tomatoPrice);


tomatoPrice = 30;       // Setting a New Value of the Variable
console.log("New Tomato Price:", tomatoPrice);  // New Value - 30


// Addition, Subtraction, Multiplication and Division some values to a variable which is already declared 
tomatoPrice = tomatoPrice + 10;    // Adding some values to the current/existing value
console.log("Tomato Price after Adding 10:", tomatoPrice); // 30 + 10 = 40

tomatoPrice += 10;  // Shorthand Addition
console.log(tomatoPrice);   //  40 + 10 = 50


tomatoPrice = tomatoPrice - 5;    // Subtracting some values from the current/existing value
console.log("Tomato Price after Subtracting 5 from It:", tomatoPrice); // 50 - 5 = 45

tomatoPrice -= 5;  // Shorthand Subtraction
console.log(tomatoPrice);   //  45 - 5 = 40


tomatoPrice = tomatoPrice * 2;    // Multiplying some values to the current/existing value
console.log("Tomato Price after Multiplying  2 to It:", tomatoPrice); // 40 * 2 = 80

tomatoPrice *= 5;  // Shorthand Multiplication
console.log(tomatoPrice);   //  80 * 2 = 160


tomatoPrice = tomatoPrice / 4;    // Dividing current value by some value
console.log("Tomato Price after Dividing 160 by 4:", tomatoPrice); // 160 / 4 = 40

tomatoPrice /= 4;  // Shorthand Division
console.log(tomatoPrice);   //  40 * 2 = 20


// Adding only 1 to a variable which is already been declared
var onionPrice = 10;

onionPrice = onionPrice + 1; // Normal
console.log("Onion Price Updated 01:", onionPrice); // 10 + 1 = 11

onionPrice ++ // Shorthand
console.log("Onion Price Updated 02:", onionPrice); // 11 + 1 = 12


// Subtracting only 1 from a variable which is already been declared
var eggPrice = 30;

eggPrice = eggPrice + 1; // Normal
console.log("Egg Price Updated 01:", eggPrice); // 30 + 1 = 31

eggPrice ++ // Shorthand
console.log("Egg Price Updated 02:", eggPrice); // 31 + 1 = 32