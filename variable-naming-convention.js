/* 
// Rule - 001: Variable name can not be any keyword/reserved word

var false = 96;     // Incorrect use
var return = true;  // Incorrect use


// Rule - 002: 2Variable name has to be in one word, no space

var my home address = "New California"; // Incorrect use


// Rule - 003: For using long names as one word in JS, we can not use the 'Dash (-) Sign'. The 3 most common cases for the naming conventions of variable in modern programming languages are:

1) Snake Case: 
    var user_home_address = "London";   // Used in Python

2) Camel Case:
    var userHomeAddress = "London";     // We'll use this one in JavaScript

3) Pascal Case: 
    var UserHomeAddress = "London";


// Rule - 004: Variable name can not start with a number, but can end with a number. Variable name can be start with a letter or, an 'Underscore (_) Sign' or, a 'Dollar ($) Sign'.

var 99Club = 1964;              // Incorrect use
var #newestClub = "Club 25";    // Incorrect use
var club25 = 2025;              // Correct use
var _newClub = "King Khan";     // Correct use
var $newestClub = "Club 25";    // Correct use


// Rule - 005: Variable name can contain letters, digits, underscore and dollar signs.

var newNumber = 25;     // Correct use
var newNumber01 = 25;   // Correct use
var onion_price = 40;   // Correct use
var newPrice$ = 50;     // Correct use


// Rule - 006: Variable name can not have quotations.

var "myName" = "CS Mahmud"; // Incorrect use


// Rule - 007: Variable name is case-sensitive.

var person = 25;
var Person = 25;
var perSon = 25;

These 3 are totally different variable from each other.
*/