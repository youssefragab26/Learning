// Classes
// a class is a type of function, but we use the key keyword Class
// and the properties are assigned inside a Constructor() method.
// Example:
class Car {
    constructor(CarName) {
        this.brand = CarName;
    }
    present(){
        return "I have a " + this.brand;
    }
}
const MyCar = new Car("BMW")
console.log(MyCar)
console.log(MyCar.present())
// output: Car { brand: 'BMW' }
//         I have a BMW

// Arrow Functions
FunName = (a , b) => {console.log(a + b)}
FunName(10 , 20)
// output: 30
//  in a Regular Function
function Add(a, b){
    console.log(a + b)
}
Add(10, 20)
// output: 30

//Example:
CorV = (c , v) => {
    if(c > v){
        console.log(c)
    }else {
        console.log(v)
    }
}
CorV(5, 3)

// Array Methods
// There are many JavaScript array methods.
// One of the most useful in React is the .map() array method.
// The .map() method allows you to run a function on each item in the
// array, returning a new array as the result.
// Example:
const myArray = ['apple', 'banana', 'orange'];
// const myList = myArray.map((item) => <p>{item}</p>)

// Destructing Arrays
const vehicles = ['mustang', 'f-150', 'expedition'];
// Old way
const carOne = vehicles[0];
const truckOne = vehicles[1];
const suvOne = vehicles[2];
// New way
const [carTwo, truckTwo, suvTwo] = vehicles;

// Ternary Operator

// The ternary operator is a simplified conditional operator like if / else.
const AppleIphonePrice = 1000
const GooglePhonePrice = 900
// Old way
function IfAndElse(){
    if (AppleIphonePrice > GooglePhonePrice){
        console.log('Apple')
    }
    else {
        console.log('Google')
    }
}
IfAndElse();
// Output: Apple
// New way
const result = AppleIphonePrice > GooglePhonePrice? "Apple" : "Google"
console.log(result)
// Output: Apple