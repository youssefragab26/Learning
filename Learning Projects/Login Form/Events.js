// const DontTouchMe = document.getElementById('hello');
// function dontT (){
//     let arr = ['I tell you', 'Dont touch me 🤬', 'Fuck You 💩']
//     for(let i = 0; i < arr.length; i++){
//         const h1 =document.createElement('h1');
//         h1.textContent = arr[i];
//         console.log(arr[i]);
//         document.body.appendChild(h1);
//         document.body.style.backgroundColor = '#981b00'
//         document.body.style.color = '#ff0000'
//     }
// }
// DontTouchMe.addEventListener('click', dontT);

let username = "youssef";
let password = "0826";
const usernameForm = document.getElementById("username");
const passwordForm = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

function login(){
    if (usernameForm.value === username && passwordForm.value === password){

    }else {
        window.alert("You are not an Admin");
    }
}
loginButton.addEventListener('click', login);
