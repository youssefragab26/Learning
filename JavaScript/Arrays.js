// Arrays used to store multiple values in a single variable
// Arrays allow you to group and access a collection of values in a specific order.
// Array Literal Syntax []

// Creating an Array
let arrayOne = ['a', 'b', 'c', 'd'];
console.log(arrayOne);
// output: [ 'a', 'b', 'c', 'd' ]

//Example:
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
// Output: ["Apple", "Banana", "Cherry"]

// Accessing Array Elements
let colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // Output: "Red"
console.log(colors[1]); // Output: "Green"
console.log(colors[2]); // Output: "Blue"

// Adding and Removing Elements
let animals = ["Dog", "Cat"];

// Adding elements
animals.push("Rabbit"); // Adds at the end
animals.unshift("Elephant"); // Adds at the beginning
console.log(animals); // Output: ["Elephant", "Dog", "Cat", "Rabbit"]

// Removing elements
animals.pop(); // Removes last element
animals.shift(); // Removes first element
console.log(animals); // Output: ["Dog", "Cat"]

// Checking for Elements
console.log(fruits.includes("Banana")); // Output: true
console.log(fruits.indexOf("Cherry"));  // Output: 2
console.log(fruits.indexOf("Grape"));   // Output: -1

// Sorting Arrays
let numbers = [3, 1, 4, 1, 5];
numbers.sort();
console.log(numbers); // Output: [1, 1, 3, 4, 5]

let names = ["John", "Alice", "Bob"];
names.sort();
console.log(names); // Output: ["Alice", "Bob", "John"]

