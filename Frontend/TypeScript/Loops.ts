// for Loop:
// The for loop is used to run a block of code for a specific number of times.
for (let i: number = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}
// Type Safety: You can explicitly specify the type of the loop variable, e.g., let i: number.

// while Loop:
// The while loop executes as long as the condition is true.
let count: number = 0;
while (count < 3) {
    console.log(count); // Output: 0, 1, 2
    count++;
}
// Use Case: Use when the number of iterations is not known beforehand.

// do...while Loop:
// The do...while loop ensures the code block runs at least once.
let num: number = 0;
do {
    console.log(num); // Output: 0
    num++;
} while (num < 0);

// for...of Loop
// The for...of loop iterates over iterable objects such as arrays, strings, or sets.
let fruits: string[] = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit); // Output: "Apple", "Banana", "Cherry"
}

// for...in Loop
// The for...in loop iterates over the keys of an object or array.
let person = { name: "Alice", age: 25, city: "Paris" };
for (let key in person) {
    console.log(`${key}: ${person[key as keyof typeof person]}`);
    // Output: "name: Alice", "age: 25", "city: Paris"
}
//  For arrays, for...in iterates over indices, not values. Prefer for...of for array iteration.

// Loop Control: break and continue
// break: Exits the loop entirely.
// continue: Skips the current iteration and proceeds to the next one.
for (let i: number = 0; i < 5; i++) {
    if (i === 3) break; // Exit loop when i is 3
    console.log(i); // Output: 0, 1, 2
}

for (let i: number = 0; i < 5; i++) {
    if (i === 3) continue; // Skip iteration when I is 3
    console.log(i); // Output: 0, 1, 2, 4
}

// Looping Over Strings
// You can iterate over characters in a string using for...of.
let text: string = "hello";
for (let char of text) {
    console.log(char); // Output: h, e, l, l, o
}