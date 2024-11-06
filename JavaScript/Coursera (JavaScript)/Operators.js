// Logical AND operator: && 

// The logical AND operator is, for example, used to confirm if multiple comparisons will return true.
// The logical AND operator returns true if both the operands are true.
// In JavaScript, this operator consists of two ampersand symbols together: &&.

// Let's say you're tasked with coming up with some code that will check if the currentTime variable is between 9 a.m. and 5 p.m.
// The code needs to console.log true if currentTime > 9 and if currentTime < 17.

// Example:
let currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);
//output: true

let gameScore = 40;
console.log(gameScore > 30 && gameScore < 50);
//output: true

let gameOver = 29;
console.log(gameOver > 30 && gameOver < 50);
//output: false



// Logical OR operator: || 

// The logical OR operator in JavaScript consists of two pipe symbols together: ||.
// It is used when you want to check if at least one of the given comparisons evaluates to true.
// Consider the following task: You need to write a program in JavaScript which will return true if the value of 
// the currentTime variable is not between 9 and 17. Put differently, your code needs to console.log true if the 
// value of the variable currentTime is either less than 9 or greater than 17.

// Example:
let homeTime = 7;
console.log(homeTime < 9 || homeTime > 17);
//output: true

let gameScore2 = 40;
console.log(gameScore2 < 30 || gameScore2 > 50);
//output: false



// Logical NOT operator: ! 

// In JavaScript, the logical NOT operator's symbol is the exclamation mark: !.
// You can think of the ! operator as a switch, which flips the evaluated boolean value from true to false and 
// from false to true.
// For example if I assign the boolean value of true to the petHungry variable: 
// var petHungry = true;
//...then I can console log the fact that the pet is no longer hungry by using the ! operator to flip the boolean value 
//   stored inside of the petHungry variable, like so:

// Example:

console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry);
console.log(petHungry);
//output

// Pet is hungry: true
// Feeding the pet
// Pet is hungry: false
// true




// The modulus operator: % 

// The modulus operator is another mathematical operator in JavaScript. It returns the remainder of division.

// To demonstrate how it works, imagine that a small restaurant that has 4 chairs per table,
// and a total of 5 tables, suddenly receives 22 guests.


// Example:
console.log(22 % 5);
//output: 2


