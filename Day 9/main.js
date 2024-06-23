// Q 86:
//Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string.
// It should return true if found, otherwise false.
//Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a
// boolean (true or false).
function hasJavaScript(str) {
    return str.includes("JavaScript");
}
console.log(hasJavaScript("I love coding in JavaScript ! "));
//......................................................................................................................
// Q 87:
//Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
//Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start and end positions.
function extractFirstTenChars(str) {
    return str.substring(0, 10);
}
console.log(extractFirstTenChars("Hello..!! JavaScript World !"));
//.................................................................................................................................
// Q 88:
// Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
//Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. It looks at the decimal part
// and decides whether to round up or down.
function roundToNearestIntegers(num) {
    return Math.round(num);
}
console.log(roundToNearestIntegers(4.7)); // round off 5
console.log(roundToNearestIntegers(4.4)); // round off 4
console.log(roundToNearestIntegers(7.56)); // round off 8
//.....................................................................................................................................................
// Q 89:
// Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
// Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings into real numbers, allowing 
//you to perform mathematical operations on them.
function convertStringToNumber(str) {
    return parseFloat(str);
}
console.log(convertStringToNumber("123.45"));
console.log(convertStringToNumber("98"));
//..........................................................................................................................................................
// Q 90: 
//Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
//Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn out to be a number. 
//It's useful for validating inputs or results of calculations.
function isValueNaN(value) {
    return isNaN(value);
}
console.log(isValueNaN("Assalam o Alaikum"));
console.log(isValueNaN(2326));
