# js-practice

- Variables (var) in JavaScript <b>(variables.js)</b>
    - Data Type: Numeric/Number (Integer and Floating Point)
    - Data Type: String
    - Data Type: Boolean
    - Data Type: Undefined

- JavaScript Keywords <b>(keywords.js)</b>

- Naming Conventions of Variables in JavaScript <b>(variable-naming-convention.js)</b>

- Basic Mathematical Operations in JavaScript <b>(operation.js)</b>
    - Addition Operation
    - Subtraction Operation
    - Multiplication Operation and 
    - Division Operation

- Mathematical Operation Shorthand in JavaScript <b>(operations-shorthand.js)</b>
    - Setting a New Value to a Variable which is Already been Declared
    - Adding some Values to a Variable which is Already been Declared
    - Subtracting some Values from a Variable which is Already been Declared
    - Multiplying some Values to a Variable which is Already been Declared
    - Dividing a Variable which is Already been Declared by Some Values
    - Adding Only One (1) to a Variable which is Already been Declared
    - Subtracting Only One (1) from a Variable which is Already been Declared

- String Concatenation <b>(concatenation.js)</b>
    - Addition (Concatenation) of 2 Strings without any space between them
    - Addition (Concatenation) of 2 Strings with space between them
    - Addition of 2 Numbers, among them one is in the String format
        - Only for the 'Addition Operation', the problem of 'Concat' will happen. For 'Subtraction/Multiplication/Division Operation', this problem of 'Concat' will not happen. 
        - Converting String-type Integer number into actual Integer number :: parseInt()
        - Converting String-type Floating-point number into actual Floating-point number :: parseFloat()
    - Important String Operations <b>(stringOperations.js)</b>
        - String 'includes()' Method
        - Substring
        - Index (Position) Number System of String

- Data Types of Variable <b>(data-types-typeof.js)</b>
    - Checking 'Numeric/Number' Type Data Using 'typeof'
    - Checking 'String' Type Data Using 'typeof'
    - Checking 'Boolean' Type Data Using 'typeof'
    - Checking 'Undefined' Type Data Using 'typeof'

- Using 'toFixed()', <b>(to-fixed.js)</b>
    - Showing a large Floating-point number in a fixed length
    - Making it from a Floating-point String to a Floating-point Number

- Remainder (%) Operator <b>(remainder.js)</b>

- Arrays in JavaScript <b>(allAboutArray.js)</b>
    - How to see the output of an array in JavaScript.
    - We can find the 'Length' of an array in JavaScript; it means, we can see in the output how many elements an array carries.
    - Finding an element of an array by its 'Index (Position) Number'.
    - In JavaScript, If we want to find an element from an array whose element does not exist in that array, what will happen? ==> It will result in 'undefined' in the output.
    - Setting a new value of an element of an array by using Index Number.
    - Suppose, we have two different arrays. We can re-assign the value of the elements of the first array (oldNumbers) by the value of the elements of the second array (newNumbers). We have to use the Index Number in this case.
    - Using the Index Number, we can add a new element of an array in any position (not only in the first or in the last).
    - Exceptional case :: Empty Index Position :: Will result 'undefined'.
    - Finding the Index (position) Number of an array in JavaScript by using the 'indexOf()' method. It will result in '-1' if the asking array element does not exist inside of an array.
    - Array push() Method <b>(arrayPushPop.js)</b>
        - Adding a new element to the last of an array using the 'Array push() Method'.
        - We can also add more than one element to the last of an array using the 'Array push() Method'.
    - Array pop() Method <b>(arrayPushPop.js)</b>
        - Removing an element from the last of an array using the 'Array pop() Method'.
        - The 'Array pop() Method' returns us the removed element from the array, which we can use later anywhere by storing it inside a variable.
    - Array unshift() Method <b>(arrayUnshiftShift.js)</b>
        - Adding a new element to the first of an array (numbers) using the 'Array unshift() Method'.
        - We can also add more than one new element to the first of an array using the 'Array unshift() Method'.
    - Array shift() Method <b>(arrayUnshiftShift.js)</b>
        - Removing an element from the first of an array using the 'Array shift() Method'.
        - The 'Array shift() Method' returns us the removed element from the array, which we can use later anywhere by storing it inside a variable.

- Comparison Operators and Conditionals <b>(comparison.js)</b>
    - Intro to the Comparison Operator in JavaScript
        - Operator Name: Equal to
        - Operator Name: Strict Equal to
        - Operator Name: Not Equal to
        - Operator Name: Strict Not Equal to
        - Operator Name: Greater than
        - Operator Name: Less than
        - Operator Name: Greater than or Equal to
        - Operator Name: Less than or Equal to
    - We can do these by using variables with these || Comparing one variable with another one
    - Multiple Conditions
        - (moneyOne > moneyTwo) && (resultOne > resultTwo) && (heightOne > heightTwo)
        - (moneyOne > moneyTwo) || (resultOne > resultTwo) || (heightOne > heightTwo)
    - Single Condition with 'if-else' Conditional.
    - Multiple Conditions
        - More than One (Multiple) Conditions; Each Condition should Fulfilled
        - More than One (Multiple) Conditions; At Least One of those Conditions should Fulfilled.
    - Complex case :: In the case of multiple conditions, we should use the parentheses according to the need of the program and we have to use 'Logical AND' or 'Logical OR' in that case also.
    - Multi-stage Conditions [if...else if...else if... ...else] <b>(else-if.js)</b>
        - if...else if...else
        - if...else if...else if... ...else 
    - Nested Conditions

- Conditionals :: 'switch-case' Statement. <b>(switchCase.js)</b>

- Loops :: 'while' Loop
    - Differences between 'if-else' conditional and 'while' loop. <b>(whileLoopIntro.js)</b>
    - How to stop an infinite loop inside a 'while' loop through the loop variable changing (increment/decrement). <b>(whileLoopIntro.js)</b>
    - Iteration of a loop. <b>(whileLoopIntro.js)</b>
    - What will happen to the iteration number of a 'while' loop, if we write one line of output-displaying code before the line of the increment/decrement of the loop variable? <b>(whileLoopIntro.js)</b>
    - Rules of writing 'while' loop. <b>(whileLoopIntro.js)</b>
    - Some Problem-solving using a 'while' loop.
        - Numbers: Display/Print the numbers from 1 to 20 as output, using the 'while' loop. <b>(numbers.js)</b>
        - Even Numbers: Display/Print all the Even Numbers from 1 to 20 as output, using the 'while' loop. <b>(even.js)</b>
        - Odd Numbers: Display/Print all the Odd Numbers from 1 to 20 as output, using the 'while' loop. <b>(odd.js)</b>

- Display Array with Loops. <b>(arrayLoop.js)</b>
    - Display every element of an array, using the 'for' loop and the 'while' loop.
    - Display every element of an array, using the 'for' loop and the 'while' loop [using the condition of unlimited array-length].
    - Display every element of an array, using the 'for' loop and the 'while' loop [using the condition of unlimited array-length and string-elements of the array].

- 'break' Statement with the 'for' Loop and the 'while' loop. <b>(break.js)</b>
    - Display/Print the numbers from 1 to 20 as output, using the 'for' loop. Use the 'break' statement with this condition 'i > 10'.
    - Doing the same task like the above one using 'break' statement with the 'while' loop.
    - Display/Print all the elements of an array as output using the 'for' loop, 'break' statement with the 'for' loop and an array with 'string-type' elements.
    - Display/Print all the elements of an array as output using the 'while' loop, 'break' statement with the 'while' loop and an array with 'string-type' elements.
    - Display/Print all the elements of an array as output using the 'for' loop, 'break' statement with the 'for' loop and an array with 'numeric-type' elements.
    - Display/Print all the elements of an array as output using the 'while' loop, 'break' statement with the 'while' loop and an array with 'numeric-type' elements.

- 'continue' Statement with the 'for' Loop and the 'while' loop. <b>(continue.js)</b>
    - Display/Print all the elements of an array as output using the 'for' loop, 'continue' statement with the 'for' loop and an array with 'numeric-type' elements.
    - Display/Print all the elements of an array as output using the 'while' loop, 'continue' statement with the 'while' loop and an array with 'numeric-type' elements.

- 'while' Loop in Reverse Way. <b>(reverse.js)</b>
    - Display/Print all the numbers from 10 to 1 as output, using the 'while' loop.

- 'for' Loop in Reverse Way. <b>(reverse.js)</b>
    - Display/Print all the numbers from 10 to 1 as output, using the 'for' loop.

- We can check any conditions using 'if/if-else' Conditionals within the 'for'/'while' loop. <b>(checkWithLoop.js)</b>

- JavaScript Functions.
    - Basic JavaScript Function :: Function Declaration and Function Calling/Invocation. <b>(functions.js)</b>
    - JavaScript Function with Single Parameter. <b>(functions.js)</b>
    - JavaScript Function with Multiple Parameters. <b>(functions.js)</b>
    - JavaScript Function with Multiple Parameters :: Addition. <b>(functions.js)</b>
    - Introduction to JS Function Return. <b>(functionReturn.js)</b>
    - Another example of Function Return in JS :: How much Singaras can be bought in how much money. <b>(functionReturn.js)</b>
    - Simple Case - Re-using the returned data from a function :: Getting the average of exam marks. <b>(functionReturn.js)</b>
    - Complex Case - Re-using the returned data from a function :: Addition of numbers. <b>(functionReturn.js)</b>

- JavaScript Objects.
    - Getting all Keys and Values of an Object through a Traditional 'for' Loop.
    - Getting all Keys and Values of an Object through 'for...in' Loop.
    - Setting a new value (equal amount) to each of the Key of an Object through Traditional 'for' Loop.
    - Setting a new value (equal amount) to each of the Key of an Object through 'for...in' Loop.
    - Setting a new value to a specific Key of an Object through Traditional 'for' Loop.
    - Setting a new value to a specific Key of an Object through 'for...in' Loop.

