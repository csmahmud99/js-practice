/* 
// No return is needed, such function is:
function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    console.log(sum);
}

add(45, 15); 

// Output ||
// 45, 15
// 60
*/




/* 
// A return is needed from the function for future use, such function is:
function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
}

var total = add(80, 20);
console.log(total);

// Output ||
// 80, 20
// 100  
*/



/* 
// Another example of Function Return in JS
// How much Singaras can be bought in how much money
function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log("Eating Singaras:", singaras);

// Output ||
// Eating Singaras: 15 
*/



/* 
// Simple Case :: Re-using the returned data from a function 
// Getting the average of exam marks
function getAverage(exam1, exam2, exam3) {
    var total = exam1 + exam2 + exam3;
    var average = total / 3;
    return average;
}

var exam1Marks = 60;
var exam2Marks = 58;
var exam3Marks = 59;

var myAverage = getAverage(exam1Marks, exam2Marks, exam3Marks);
console.log("My average so far:", myAverage);

// Output ||
// My average so far: 59 
*/


/* 
// Complex Case :: Re-using the returned data from a function 
// Addition of numbers
function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var result1 = add(12, 13);
var result2 = add(35, 7);

var finalResult = add(result1, result2);
console.log("The final result is:", finalResult);

// Output || The final result is: 67 
*/