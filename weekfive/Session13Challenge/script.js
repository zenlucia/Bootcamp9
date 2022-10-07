/*Challenges
1. Create two number variables.
Add the two variables together.
output the result.*/
const x = 6;
const y = 8;
console.log(x + y);

/*2. Add two numbers together and multiply by 5. Output the result.*/
const x = 4;
const y = 9;
console.log((x + y) * 5);

/*
3. Concatenate two strings together and output the result. Make sure to include a space in between the different strings.*/
const greeting = "Good afternoon";
const teacherName = "Oli";
console.log(greeting+ ", " + teacherName+ "!");
//Declare an empty variable called text.
let word = "";
//Add a new word to the string using the += operator.
word += "camel";
//Do the same again but with a different word
word += "Case";
//Finally output the text variable.
console.log(word);
/*
5. Create an if statement comparing two numbers, if they match alert ‘It works’.
Use alert().*/
function compare(num1, num2) {
    if (num1 == num2) {
        alert("It works!");
    }