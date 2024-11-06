let username = "youssef";
let password = "0826";
const usernameForm = document.getElementById("username");
const passwordForm = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

function login(){
    if (usernameForm.value === username && passwordForm.value === password){
        const admenName = document.createElement("h1");
        admenName.textContent = "Hello Admen: Youssef";
        document.body.appendChild(admenName);
    }else {
        window.alert("You are not an Admin");
    }
}
loginButton.addEventListener('click', login);