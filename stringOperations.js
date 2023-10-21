// String Includes Method
var myName = "Ariana Grande is singing";

var isThere = myName.includes("is");
console.log(isThere);           // Output || true

var isThereName01 = myName.includes("Ariana");
console.log(isThereName01);     // Output || true

var isThereName02 = myName.includes("ariana");
console.log(isThereName02);     // Output || false

// Note:: String 'includes' Method - is Case-sensitive 



// Substring
var text = "program";

var getText = text.substring(3, 6);
console.log(getText); // Output || "gra"



// Index (Position) Number System of String
var myName = "Ariana Grande";

// Getting value from a string by index number :: Possible
var getValue = myName[3];
console.log(getValue);  // Output || 'a'

// Setting a new value by index number to a string :: Impossible
myName[1] = "X";
console.log(myName);    // Output || 'Ariana Grande'

// Note:: Strings are Immutable