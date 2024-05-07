"use strict";
//          100 days of coding challenge ( DAY 47 )
Object.defineProperty(exports, "__esModule", { value: true });
// Question 01 
// ---Reserved word: let - used to declare a block-scoped local variable
let count = 5;
// ^^Reserved word if - used to execute a block of code if a specified condition is true
if (count > 0) {
    console.log("Count is greater than zero");
}
// ^^Reserved word: return - used to exit a function and return a value from that function
function add(a, b) {
    return a + b;
}
// Question 02
// --Attempting to use a reserved word as a variable name
// --let if = 5; // This line would cause a syntax error
console.log("Using a reserved word as a variable name causes a syntax error in JavaScript.");
// Question 03
// --Example use of the 'await' reserved word in asynchronous JavaScript
async function fetchData() {
    const data = await fetchSomething();
    console.log(data);
}
console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
function fetchSomething() {
    throw new Error("Function not implemented.");
}
