function nameOffunction(){
    // Code Goes Here
}
nameOffunction() // to run function

// Example

function tooNum(){
    var a = 15;
    var b = 25;
    var c = a + b;
    console.log(c)
}
// =
tooNum()

function addTweNums(a , b){
    var c = a + b;
    console.log(c)
}
addTweNums(15 , 25)

// Bullding and calling functions

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// listArrayItems(colors);
var proLanguages = ['Python', 'JavaScript', 'PHP', 'Ruby', 'C#', 'C++'];
// listArrayItems(proLanguages);



function nams(arr){
    for (let i = 0 ; i < arr.length ; i++){
        console.log(i ,arr[i])
}
}
nams(colors)