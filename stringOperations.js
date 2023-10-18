// String Includes Method
var myName = "Ariana Grande is singing";

var isThere = myName.includes("is");
console.log(isThere);           // Output || true

var isThereName01 = myName.includes("Ariana");
console.log(isThereName01);     // Output || true

var isThereName02 = myName.includes("ariana");
console.log(isThereName02);     // Output || false


// Note:: String 'includes' Method - is Case-sensitive