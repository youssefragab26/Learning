// OOP = Group Data

// This
// Use the "this" keyword to refer to the object itself without specifying the object's name.

let purchaseOne = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function (){
        let calculation = this.shoes * this.stateTax;
        console.log('Total price: ', calculation);
    }
}
purchaseOne.totalPrice() // 120

let purchaseTwo = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function (){
        let calculation = this.shoes * this.stateTax;
        console.log('Total price: ', calculation);
    }
}
purchaseTwo.totalPrice() // 60

// Classes

 class CarOne {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }
    turboOn(){
        console.log("turbo is on!");
    }
 }
 const myCar = new CarOne("Red", "120");
myCar.turboOn();

// Inheritance
// Prototype

let bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true,
}
let eagleOne = Object.create(bird);
console.log("eagleOne:",eagleOne);

console.log("eagleOne has wings:",eagleOne.hasWings);
console.log("eagleOne can fly:",eagleOne.canFly);
console.log("eagleOne has feathers:",eagleOne.hasFeathers);

let eagleTwo = Object.create(bird);
console.log("eagleTwo has wings:",eagleTwo.hasWings);

let penguinOne = Object.create(bird);
penguinOne.canFly = false;
console.log("penguinOne can fly:",penguinOne.canFly);




