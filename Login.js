// Login
let NameUser = 'joe';
let PasswordUser = '0826';
const userName = document.getElementById("username");
const password = document.getElementById("password");
const goButton = document.getElementById("goButton");
const errorMessage = document.getElementById('error-message');
// Username and Password check
function Login() {
      if (userName.value === NameUser && password.value === PasswordUser) {
          window.location.href = "Home.html";
          errorMessage.textContent = '';
      }else {
          errorMessage.textContent = 'Invalid username or password';
      }
}
goButton.addEventListener("click", Login);