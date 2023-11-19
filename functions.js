/* 
// Basic JavaScript Function :: Function Declaration 
function startFan() {
    console.log("Stand up");
    console.log("Walk towards the switch");
    console.log("Press the switch");
}

// startFan(); // Basic JavaScript Function :: Function Calling/Function Invocation 

// Output ||
// Stand up
// Walk towards the switch
// Press the switch
*/



/* 
// JavaScript Function with Single Parameter
function bringSingara(money) {
    console.log("You given:", money);
    console.log("Receive your Singara");
}

// bringSingara(100);

// Output ||
// You given: 100
// Receive your Singara


// We can also call a variable as Parameter inside a Function
var taka = 300;
// bringSingara(taka);

// Output ||
// You given: 300
// Receive your Singara 
*/



/* 
// JavaScript Function with Multiple Parameters
function add(num1, num2) {
    console.log("Going to add:", num1, num2);
}

// add(); // Output || Going to add: undefined undefined

// add(25); // Output || Going to add: 25 undefined

// add(125, 96); // Output || Going to add: 125 96 
*/


/* 
// JavaScript Function with Multiple Parameters :: Addition
function sum(a, b, c, d, e) {
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}

sum();

// Output ||
// undefined undefined undefined undefined undefined
// NaN                              <=== NaN : Not a Number

sum(15, 98, 56);

// Output ||
// 15 98 56 undefined undefined
// NaN

sum(15, 98, 56, 5, 9);

// Output ||
// 15 98 56 5 9
// 183 
*/