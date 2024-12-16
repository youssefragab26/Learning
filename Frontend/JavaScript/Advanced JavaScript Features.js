// De-structuring arrays and objects
// Copying an item, which then becomes independent of the original
// In JavaScript, it's possible to extract the properties from objects into distinct variables using destructuring.


// For of loops and objects
const colors = ['red','orange','yellow', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}



let carOne = {
    color: 'blue',
    speed: 189,
}
// The Object.keys() method
console.log(Object.keys(carOne)); // ['color', 'speed']

// The Object.values() method
console.log(Object.values(carOne)); // ['green' , 235]

// The Object.entries() method
console.log(Object.entries(carOne)); // [ [ 'color', 'blue' ], [ 'speed', 189 ] ]

// Examples
let carTwo = {
    brand: 'BMW',
    color: 'black',
    speed: 290,
    price: 149000,
}
for(let car of Object.keys(carTwo)) {
    console.log(car, ":", carTwo[car]);
}
// Output:
//  brand : BMW
//  color : black
//  speed : 290
//  price : 149000


function dynamicAccess(){
    let dynamicKey;
    if(Math.random() > 0.5){
        dynamicKey = "speed";
    }else {
        dynamicKey = "color";
    }
    let drone = {
        speed: 15,
        color: "orange",
    }
    console.log(drone[dynamicKey]);
}
dynamicAccess()

// For-of loops and objects

// for (variable of iterable) {}

// variable: a variable that holds the current element’s value on each iteration.
// iterable: the collection you want to loop through (an array, string, map, set, etc.).

// Example with an Array
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}

// Example with a String
const name = "Youssef";

for (const char of name) {
    console.log(char);
}

// For-in loops and objects

// for (variable in object) {}

// variable: a variable that will hold the current key (or index) on each iteration.
// object: the object or array you want to iterate over.

// Examples
const person = {
    name: "Youssef",
    age: 25,
    gender: "male",
}
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// EX
const carFour = {
    engine: true,
}
const sportCar = Object.create(carFour);
sportCar.speed = "fast"
console.log("The sport car object: ", sportCar);

for (prop in sportCar) {
    console.log("🤔", prop);
}

for (prop of Object.keys(sportCar)) {
    console.log("🎯", prop + ":", sportCar[prop]);
}

// Example with an Array
const colorsOne = ["red", "green", "blue"];

for (const index in colorsOne) {
    console.log(`Index ${index}: ${colorsOne[index]}`);
}

// for...in vs. for...of

// for...in: iterates over keys (or indexes) and is usually best for objects.
// for...of: iterates over values and is best for arrays or iterables.

// Template literals examples

// What are template literals?
// Template literals are an alternative way of working with strings,
// which was introduced in the ES6 addition to the JavaScript language.

let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals
// Output: Hello World !
console.log(greet + " " + place + "!"); //display both variables without using template literals
// Output: Hello World!

// Working with template literals
// ES5 Strings
let noMultiline = "No multi-line strings in ES5";
console.log("Did you know? "+ noMultiline);
// Output: Did you know? No multi-line strings in ES5

// ES6 multiline template literals
let multiline = `
     using ES6
     backticks,
     multiline strings
     are possible!
`;
console.log(multiline);
// Output:
//       using ES6
//       backticks,
//       multiline strings
//       are possible!

// ES6 variable interpolation
let first = `He said, "Don't you know? ES6 it's got some great features!"`;
let second = `"wouldn't you want to learn more?", he asked`;

console.log(`${first} - and I got curious. ${second}`);

// Data Structures.

const grades = [75, 80, 90, 70, 85, 95];
let gradesSum = 0;
for (let i = 0; i < grades.length; i++) {
    gradesSum += grades[i];
}
console.log(gradesSum / grades.length); // 82.5

// The forEach() method
// Arrays in JavaScript come with a handy method that allows you to loop over each of their members.
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
// Output:
//       0. kiwi
//       1. mango
//       2. apple
//       3. pear

// The filter() method
// filters your arrays based on a specific test. Those array items that pass the test are returned.
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})
//Output: [30,40,50]

