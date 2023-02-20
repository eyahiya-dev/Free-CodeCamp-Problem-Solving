// Problem solving 46-60 from FreeCodeCamp

/*
Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
*/
const myArray = ["yahya", 24, "developer", ["mahmud", 20, "student"]];
const removedFromMyArray = myArray.shift();
console.log(removedFromMyArray); // yahya

/*
Add ["Paul", 35] to the beginning of the myArray variable using unshift().
*/
const array = ["hello", "bangladesh", 71];
array.shift();
array.unshift("A Country"); // ['A Country', 'bangladesh',71 ]
array.unshift(["Hello", 35]);
// note: unshift(). add elemet in the array.

/*
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
There should be at least 5 sub-arrays in the list.
*/

const myList = [
  ["Chocolate Bar", 24],
  ["Soap", 5],
  ["Ice-cream", 20],
  ["Shampo", 10],
  ["Toothpest", 2],
];

/*
1.Create a function called reusableFunction which prints the string Hi World to the dev console.
2.Call the function.
*/

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

/*
1.Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
2.Call the function with two numbers as arguments.
*/

function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}
functionWithArgs(7, 5);

/*
Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
*/
function timesFive(value) {
  return value * 5;
}
console.log(timesFive(5));

/*

Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.

*/
// Declare the myGlobal variable below this line

const myGlobal = 10;
const oopsGlobal = 5;
function fun1() {
  // Assign 5 to oopsGlobal here
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/*

The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

*/

function myLocalScope() {
  const myVar = "hello";
  console.log(myVar);
}
myLocalScope();
// console.log(myVar);

/*
Add a local variable to myOutfit function to override the value of outerWear with the string sweater.
*/

const outerWear = "T-shirt";
function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}
console.log(myOutfit());

/*
Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
*/

let sum = 0;
function addFive() {
  sum += 5;
}
console.log(addFive()); // undefined

/*
Call the processArg function with an argument of 7 and assign its return value to the variable processed.  
*/

let processed = 0;
function processArg(num) {
  return num + 3;
}
processed = processArg(7);

/*
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.

*/

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/*
Modify the welcomeToBooleans function so that it returns true instead of false.
*/

function welcomeToBooleans() {
  return true; // Change this line
}

/*
Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.
*/

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that is true";
  }
  return "No, that is false";
}
console.log(trueOrFalse());

/*
Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
*/
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
testEqual(12)   // return Equal.

