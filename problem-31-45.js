// Problem solving 31-45 from FreeCodeCamp

// Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.
const someAdjective = "developer";
let myStr = "I am a part time ";
myStr += someAdjective;

// Use the .length property to set lastNameLength to the number of characters in lastName.
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

//Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";
console.log((firstLetterOfLastName = lastName1[0]));
console.log((firstLetterOfLastName = lastName1[1]));
console.log((firstLetterOfLastName = lastName1[2]));
console.log((firstLetterOfLastName = lastName1[3]));

// Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.
// let myStr = "Bob";
// myStr[0] = "J";

let myStr3 = "Bob";
myStr3[0] = "J"; //This is not work
myStr3 = "Job";
console.log(myStr3);

//Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.
const lastName2 = "Lovelace";
const thirdLetterOfLastName = lastName[2];

// Use bracket notation to find the last character in the lastName variable.
const lastName3 = "Yahya Mahmud";
const lastLetterof = lastName3[lastName3.length - 1];

//Use bracket notation to find the second-to-last character in the lastName string.
// const lastName4 = "Lovelace";
const lastName4 = "Lovelace";
const secondToLastLetterOfLastName = lastName4[lastName4.length - 3];

/*
In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.

[dog, big, run , quickly]

You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.

You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.

*/

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "run";
const myAdverb = "quickly";

const blankWord = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;
console.log(blankWord);

//Modify the new array myArray so that it contains both a string and a number (in that order).
const myArray = ["Yahya", 24, "Student", "Web Developer"];

//Create a nested array called myArray.
const myArray1 = [
  ["Yahya", 24],
  ["Jahid", 24],
];

//Create a variable called myData and set it to equal the first value of myArray using bracket notation.
const myArray3 = [50, 60, 70];
const myData = myArray[0];

//Modify the data stored at index 0 of myArray to a value of 45.
const myArray4 = [18, 64, 99];
myArray4[0] = 45;

//Using bracket notation select an element from myArray such that myData is equal to 8.
const myArray5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData2 = myArray5[2][1];
console.log(myData2);

//Push ["dog", 3] onto the end of the myArray variable.
const myArray6 = [
  ["John", 23],
  ["cat", 2],
];
myArray6.push(["dog", 3]);

// Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.
const myArray7 = [
  ["John", 23],
  ["cat", 2],
];
const removedFromMyArray = myArray7.pop();
console.log(removedFromMyArray);
console.log(myArray7);

// Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
const myArray8 = [["John", 23], ["dog", 3]];
const removedFromMyArray2 = myArray8.shift();

