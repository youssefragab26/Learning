// Variables

// let
// we can update the value

let currentStatus = "Watching Netflix";
currentStatus = "Relaxing on the beach";
console.log(currentStatus);
// output: "Relaxing on the beach"

// const
// we can't update the value

const currentStatus2 = "Watching Netflix";
console.log(currentStatus2);
// output: "Watching Netflix"
currentStatus2 = "Relaxing on the beach";
console.log(currentStatus2);
// output: Uncaught TypeError: Assignment to constant variable

// var
// we can update the value

var currentStatus3 = "Watching Netflix";
currentStatus3 = "Relaxing on the beach";
console.log(currentStatus3);
// output: "Relaxing on the beach"


// But what is the difference between let and var?

// The difference between let and var in JavaScript revolves around variable scope,
// re-declaration, and hoisting. Here's a breakdown of the main differences:

// 1. Scope:

// var: Variables declared with var have function scope or global scope
// if declared outside a function. This means they are accessible within the entire function or globally.

// let: Variables declared with let have block scope, which means they are only accessible
// within the block they are defined in, such as within {} in loops or conditional statements.

// 2. Hoisting:

// var: Variables declared with var are hoisted to the top of their scope, but they are
// nitialized with undefined. This means you can reference the variable before it's defined,
// but its value will be undefined.

// let: Variables declared with let are also hoisted but are not initialized. Accessing them
// before declaration results in a ReferenceError.

// 3. Re-declaration:

// var: You can re-declare a variable using var in the same scope without any errors.

// let: You cannot re-declare a variable using let in the same scope.
// This prevents potential bugs from accidental reassignments.

// Example:

// Using var
if (true) {
    var x = 10;
  }
  console.log(x);
// output: 10 

// Using let
  if (true) {
    let y = 20;
  }
  console.log(y);
// output: ReferenceError: y is not defined

// Comparing var,let and const

