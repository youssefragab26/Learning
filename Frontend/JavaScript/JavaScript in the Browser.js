// DOM manipulation
const h2 =document.createElement('h2') // Create Element
h2.innerHTML = 'Hello World!'; // Value of Element
h2.setAttribute('id', 'hello'); // Set Attribute
h2.setAttribute('class', 'greeting'); // Set Attribute
document.body.appendChild(h2); // Run the Element in web page

// Selectors
document.querySelector("h2"); // to select first h2 Element
document.querySelectorAll("h2"); // to select the all h2 Elements
document.getElementById('hello'); // to select Element by ID
document.getElementsByClassName('hello'); // to select Element by Class Name

// Event Handling

// on click
const target = document.querySelector('body');
function handleClick(event) {
    console.log('Clicked the body');
}
target.addEventListener('click', handleClick);