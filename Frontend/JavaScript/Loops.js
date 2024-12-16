// For Loop:
// The for loop runs a block of code for a specific number of times.
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}
// let i = 0: Initializes the counter variable.
//     i < 5: Specifies the condition to run the loop.
//     i++: Increments the counter after each iteration.

// While Loop:
// The while loop continues as long as its condition is true.
let count = 0;
while (count < 3) {
    console.log(count); // Output: 0, 1, 2
    count++;
}

// for...of Loop:
// The for...of loop iterates over iterable objects (like arrays, strings, or NodeLists).
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit); // Output: "Apple", "Banana", "Cherry"
}

// for...in Loop:
// The for...in loop iterates over object properties (enumerable keys).
let person = { name: "Alice", age: 25, city: "Paris" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
    // Output: "name: Alice", "age: 25", "city: Paris"
}

// Nested Loops:
// Loops can be nested inside one another.
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// Output:
// i: 1, j: 1
// i: 1, j: 2
// ...
// i: 3, j: 3


// break and continue
// break: Exits the loop immediately.
// continue: Skips the current iteration and proceeds to the next one.
for (let i = 0; i < 5; i++) {
    if (i === 3) break; // Exit loop when i is 3
    console.log(i); // Output: 0, 1, 2
}

for (let i = 0; i < 5; i++) {
    if (i === 3) continue; // Skip the iteration when I is 3
    console.log(i); // Output: 0, 1, 2, 4
}

