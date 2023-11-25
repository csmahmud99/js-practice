/* 
// Getting all Keys and Values of an Object through Traditional 'for' Loop
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

// console.log(shoppingCart["keyboard"]);

var keys = Object.keys(shoppingCart);
// console.log(keys); 
// Output || [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]

// Loop through the Keys of the 'shoppingCart' Object
for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

// Output ||
// books 3   
// sunglass 1
// keyboard 5
// mouse 1   
// pen 25    
// shoes 2
*/


/* 
// Getting all Keys and Values of an Object through 'for...in' Loop
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

// Loop through the Keys of the 'shoppingCart' Object
for (var propertyName in shoppingCart) {
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
} 
*/



/* 
// Setting a new value (equal amount) to each of the Key of an Object through Traditional 'for' Loop
var person = {
    age: 22,
    experience: 2,
    dedication: 75
}

var keys = Object.keys(person);
// console.log(keys);

// Loop through the Keys of the 'person' Object
for (i = 0; i < keys.length; i++) {
    var key = keys[i];
    var propertyValue = person[key];
    // console.log(propertyValue);
    propertyValue += 1;
    console.log(key, ":", propertyValue);
} 

// Output ||
// age : 23
// experience : 3
// dedication : 76
*/


/* 
// Setting a new value (equal amount) to each of the Key of an Object through 'for...in' Loop
var person = {
    age: 22,
    experience: 2,
    dedication: 75
}

// Loop through the Keys of the 'person' Object
for (var key in person) {
    var propertyValue = person[key];
    propertyValue += 1;
    console.log(key, ":", propertyValue );
}

// Output
// age : 23
// experience : 3
// dedication : 76 
*/




// Setting a new value to a specific Key of an Object through Traditional 'for' Loop
var shoppingCart = {
    books: 3,
    pen: 25,
    keyboard: 5,
    mouse: 1
}

var keys = Object.keys(shoppingCart);
// console.log(keys);

// Specifying the Property Key, which we want to update
var propertyToUpdate = "keyboard";
var newValue = 10;

// Looping through the Keys of the 'shoppingCart' Object
for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    // console.log(key);

    if (key === propertyToUpdate) {
        shoppingCart[key] = newValue;
    }

    var propertyValue = shoppingCart[key];

    // Updated value of 'shoppingCart' Object
    console.log(key, ":", propertyValue);
} 



/* 
// Setting a new value to a specific Key of an Object through 'for...in' Loop
var shoppingCart = {
    books: 2,
    pens: 10,
    mouse: 3,
    keyboard: 1
}

// Specifying the Property Key, which we want to update 
var propertyToUpdate = "mouse";
var newValue = 2;

// Looping through the Keys of the 'shoppingCart' Object
for (var key in shoppingCart) {
    // console.log(key);

    if (key === propertyToUpdate) {
        shoppingCart[key] = newValue;
    }

    var propertyValue = shoppingCart[key];

    // Updated value of 'shoppingCart' Object
    console.log(key, ":", propertyValue);
} 
*/