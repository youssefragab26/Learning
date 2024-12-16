// push and pop

let fruits =[];
// To add new items to an array, I can use the push() method:
// push adds an element to the end of an array
fruits.push("mango"); // output: ["mango"]
fruits.push("banana"); // output: ["mango", "banana"]
fruits.push("orange"); // output: ["mango", "banana", "orange"]

// To remove the last item from an array, I can use the pop() method
// pop removes an element from the end of an array
fruits.pop(); // output: ["mango", "banana"]
fruits.pop(); // output: ["mango"]
fruits.pop(); // output: []

// Example 1:

let IOS18 = ["Iphone XR",  "Iphone XS",  "Iphone 11", "Iphone 12", "Iphone 13", "Iphone 14",  "Iphone 15",];
// Adding Iphone 16
IOS18.push("Iphone 16");
// Output: ["Iphone XR", "Iphone XS", "Iphone 11", "Iphone 12", "Iphone 13", "Iphone 14", "Iphone 15", "Iphone 16"]

// Example 2:

function arrayBuilder(one, two, three, four) {
    let array = [];
    array.push(one);
    array.push(two);
    array.push(three);
    array.push(four);
    console.log(array);
    return array;
}
arrayBuilder("Youssef", "26/08/2003", "Male", "Egypt",);