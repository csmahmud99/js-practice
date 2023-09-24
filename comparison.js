/* 
// Intro to the Comparison Operator in JavaScript

console.log(5 == 5)     // Operator Name: Equal to || Output: false
console.log(6 === 6)    // Operator Name: Strict Equal to || Output: true
console.log(5 != 6)     // Operator Name: Not Equal to || Output: true
console.log(15 !== 15)  // Operator Name: Equal to || Output: false
console.log(5 > 6)      // Operator Name: Greater than || Output: false
console.log(5 < 6)      // Operator Name: Less than || Output: true
console.log(5 >= 6)     // Operator Name: Greater than or Equal to || Output: false
console.log(5 <= 6)     // Operator Name: Less than or Equal to || Output: true 
*/


/* 
// We can do these by using variables with these || Comparing one variable with another one
var numberOne = 56;
var numberTwo = 89;

console.log(numberOne == numberTwo); // Operator Name: Equal to || Output: false
console.log(numberOne != numberTwo); // Operator Name: Not Equal to || Output: true
console.log(numberOne > numberTwo);  // Operator Name: Greater than || Output: false
console.log(numberOne < numberTwo);  // Operator Name: Less than || Output: true
console.log(numberOne >= numberTwo); // Operator Name: Greater than or Equal to || Output: false
console.log(numberOne <= numberTwo); // Operator Name: Less than or Equal to || Output: true 
*/


/* 
// Multiple Conditions
(moneyOne > moneyTwo) && (resultOne > resultTwo) && (heightOne > heightTwo)
(moneyOne > moneyTwo) || (resultOne > resultTwo) || (heightOne > heightTwo) 
*/


/* 
// Single Condition with 'if-else' Conditional
var isGraduated = true;

if(isGraduated === true) {
    console.log("Let's get married");
}
else {
    console.log("No marriage")
}
// Output || Let's get married 
*/



/* 
// More than One (Multiple) Conditions; Each should Fulfilled
var isGraduated = true;
var salary = 25000;

if (isGraduated === true && salary > 50000) {
    console.log("Let's get married");
}
else {
    console.log("No marriage");
}
// Output || No marriage 
*/


/* 
// More than One (Multiple) Conditions; At Least One of those Conditions should Fulfilled.
var isGraduated = false;
var salary = 5000;

if (isGraduated === true || salary > 50000) {
    console.log("Let's get married");
}
else {
    console.log("No marriage");
}
// Output || No marriage  
*/


// Complex case :: In the case of multiple conditions, we should use the parentheses according to the need of the program and we have to use 'Logical AND' or 'Logical OR' in that case also
var isGraduated = false;
var salary = 61000;
var cars = 0;

if ((isGraduated === true && salary > 50000) || cars >= 1) {
    console.log("Let's get married");
}
else {
    console.log("No marriage");
}
// Output || No marriage


/* 
// Multi-stage Conditions [if...else if...else if... ...else]
var money = 30;
var danishPrice = 45;
var butterBreadPrice = 35;
var toastBiscuitPrice = 20;

if(danishPrice <= money) {
    console.log("Give me Danish");
}
else if(butterBreadPrice <= money){
    console.log("Give me Butter Bread");
}
else if(toastBiscuitPrice <= money){
    console.log("Give me Toast Biscuit");
}
else { 
    console.log("Give me a cup of Tea");
}
// Note :: If not necessary, we can avoid using 'else' at last
// Note :: In multi-stage conditions we should use the numeric variables as ascending or descending order
// Output || Give me Toast Biscuit 
*/


/* 
// Nested Conditions
var mathGood = true;
var geometryGood = true;
var straightLineGood = false;

if(mathGood == true) {
    if(geometryGood == true) {
        if(straightLineGood == true) {
            console.log("Do Straight Line maths");
        }
        else {
            console.log("Do all Geometry maths except Straight Line");
        }
    }
    else {
        console.log("Do all maths except Geometry");
    } 
}
else {
    console.log("Concentrate on other subjects");
}
// Output || Do all Geometry maths except Straight Line 
*/