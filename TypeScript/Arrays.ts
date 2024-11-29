// Declaring Arrays

// Using Type Annotation
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Alice", "Bob", "Charlie"];
console.log(numbers); // [1, 2, 3, 4]
console.log(names);   // ["Alice", "Bob", "Charlie"]
// Using the Array<Type> Syntax
let scores: Array<number> = [85, 90, 78];
console.log(scores); // [85, 90, 78]
// Example:
const colors: Array<string> = ['Red', 'Green', 'Blue',]
console.log(colors); // ['Red', 'Green', 'Blue']

// Multi-dimensional Arrays
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6 (Second row, third column)

// Arrays of Mixed Types
// You can use any[] for arrays that contain different types,
// though it's not recommended as it bypasses type safety.
let mixed: any[] = [1, "hello", true];
console.log(mixed); // Output: [1, "hello", true]
// Using Tuples for Specific Types
// For fixed-length arrays with specific types, use tuples.
let tuple: [number, string, boolean] = [42, "Answer", true];
console.log(tuple); // Output: [42, "Answer", true]

// Type-safe Array Operations
// 1-Push and Pop:
let fruits: string[] = ["Apple", "Banana"];
fruits.push("Cherry"); // add new element in last of array
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

fruits.pop(); //remove last element in array
console.log(fruits); // Output: ["Apple", "Banana"]
// 2-Filter:
let numbersTow: number[] = [1, 2, 3, 4, 5];
let evenNumbers = numbersTow.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
// 3-Map:
let nums: number[] = [1, 2, 3];
let squares = nums.map(n => n * n);
console.log(squares); // Output: [1, 4, 9]
// 4-Reduce:
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15


