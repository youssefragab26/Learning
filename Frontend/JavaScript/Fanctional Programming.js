// Data separated from functions

let shoes = 100;
let stateTax = 1.1;

function totalPrice(price, tax) {
    return price * tax;
}
console.log(totalPrice(shoes, stateTax));

// Example
let currencyOne = 100;
let currencyTwo = 0;
let exchangeRate = 1.2;

function convertCurrency(amount , rate) {
    return amount * rate;
}
currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);

// Function calling and recursion

let counter = 3;
function countDown() {
   console.log(counter);
   counter = counter - 1;
   if (counter === 0) return;
   countDown();
}
countDown();

// Scope

// Scope in JS works similar tow-way mirror glass.

let globalVar = "I'm in the global scope";
function scopeTest() {
    let localVar = "I'm in the local scope";
    console.log(globalVar);
    console.log(localVar);
}
scopeTest();
// console.log(localVar) the output is: not defined

// scoping with var,let and const
let color = "Red";
function colorName(){
    let color = "Blue"
    console.log(color)
}
colorName() // output: Blue
console.log(color) // output: Red
