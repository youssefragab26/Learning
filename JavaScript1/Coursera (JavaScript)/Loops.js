// Loops

// 1. Set the value
// 2. Specify the condition
// 3. increment the counter

// for loop
console.log("for loop");

// Example

for (let i = 0; i < 10; i++) {
    console.log(i);
}
//output: 0 1 2 3 4 5 6 7 8 9

// count frome 1 to 3 and then say go

for (let i =1 ; i < 4 ; i++){
    console.log(i)
}
console.log("go");

// count from 10 to 1 and then say Happy New Year

for (let i = 10 ; i > 0 ; i--){
    console.log(i)
}
console.log("Happy New Year");


// while loop
console.log("while loop");

var i = 1;

while (i < 10) {
    console.log(i);
    i = i+1;
}
//output: 1 2 3 4 5 6 7 8 9

// count from 10 to 1 and then say Happy New Year using while loop

var counter = 10;

while (counter > 0) {
    console.log(counter);
    counter = counter - 1;
}
console.log("Happy New Year");

// Nested Loops
console.log("Nested Loops");

for (let i = 1 ; i < 5 ; i++){ // outer loop
    for (let j = 1; j <= 7; j++){ // inner loop
        console.log("Week " + i + " Day " + j);
    }
}