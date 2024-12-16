function nameOffunction(){
    // Code Goes Here
}
nameOffunction() // to run function

// Example

function tooNum(){
    let a = 15;
    let b = 25;
    let c = a + b;
    console.log(c)
}
// =
tooNum()

function addTweNums(a , b){
    let c = a + b;
    console.log(c)
}
addTweNums(15 , 25)

// Bullding and calling functions

function listArrayItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// listArrayItems(colors);
let proLanguages = ['Python', 'JavaScript', 'PHP', 'Ruby', 'C#', 'C++'];
// listArrayItems(proLanguages);



function nams(arr){
    for (let i = 0 ; i < arr.length ; i++){
        console.log(i ,arr[i])
}
}
nams(colors)



