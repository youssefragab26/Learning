// Signup
const passwordInput = document.getElementById("passwordTow");
const passwordConfirm = document.getElementById("confirm");
const submitButton = document.getElementById("submit");
function ConfirmPassword() {
    if(passwordInput.value !== passwordConfirm.value) {
        alert("Passwords do not match");
    }
    else {
        console.log("Password Confirmed");
    }
}
submitButton.addEventListener("click", ConfirmPassword);
console.log("YR")