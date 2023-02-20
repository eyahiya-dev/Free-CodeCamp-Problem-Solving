// Problem solving 16-30 from FreeCodeCamp

// let myVar = 87;
// Change the code to use the ++ operator on myVar.
let myVar = 87;
console.log(++myVar);

// let myVar = 11;
// Change the code to use the -- operator on myVar.
let myVar2 = 11;
console.log(--myVar2);

// Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).
const myDecimal = 10.5;

// Change the 0.0 so that product will equal 5.0.
// const product = 2.0 * 0.0;
const product = 2.0 * 2.5;
console.log(product);

// Change the 0.0 so that quotient will equal to 2.2.
// const quotient = 0.0 / 2.0; // Change this line

const quotient = 4.4 / 2.0;
console.log(quotient);

// Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
const remainder = 11 % 3;
console.log(remainder);

// Convert the assignments for a, b, and c to use the += operator.
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

// Convert the assignments for x, y, and z to use the -= operator.
let x = 11;
let y = 9;
let z = 3;

x -= 6;
y -= 15;
z -= 1;

//Convert the assignments for a, b, and c to use the *= operator.
let m = 5;
let n = 12;
let o = 4.6;

m *= 5;
n *= 3;
o *= 10;

// Convert the assignments for a, b, and c to use the /= operator.
let q = 48;
let r = 108;
let s = 33;

q /= 12;
r /= 4;
s /= 11;

// Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:
const myStr = 'I am a "double quoted" string inside "double quotes".';

/*
Change the provided string to a string with single quotes at the beginning and end and no escape characters.

Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.
*/
// const myStr2 = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>'; //Correct form.

/*
Code	    Output
\'	    single quote
\"	    double quote
\\	    backslash
\n	    newline
\t	    tab
\r	    carriage return
\b	    word boundary
\f	    form feed

*/

const newLine = "FirstLine\n\t\\SecondLine\nThirdLine\bFourthLine";

// Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.
const myStr3 = "This is the start. " + "This is the end";

// Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.

let myStr4 = "This is the first sentence. ";
myStr4 += "This is the second sentence.";

// Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well!

const myName = "Yahya Mahmud";
const profile = "My name is " + myName + "and I am well!";

// 
