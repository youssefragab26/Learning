const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");
const button5 = document.getElementById("button-5");

//ON CLICK

button1.onclick = function () {
    document.write(<h1>Button is clicked</h1>)
}

button2.onclick = function () {
    document.style.background = 'Black'
}

button.addEventListener("click", function () {
    document.body.style.background = 'red';
})
button.addEventListener("click", function () {
    button.style.background = 'blue';
})
button.addEventListener("click", function () {
    button.style.color = 'white';
})
//
button3.onmousemove = function () {
    console.log("mouse up");
}
let i = 1;
input.onkeydown = function () {
    console.log("keyup " + i++);
}
