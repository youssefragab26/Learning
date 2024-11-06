// Writing Statements

// if
if (condition == true) {
    // Execute this code
}

// if else
if (condition == true) {
    // Execute this code
} else {
    // Execute this code
}

// Example
// Exam Result

var examResult = 53;
if (examResult >= 50) {
    console.log("Congratulations, you have passed the exam!");
} else {
    console.log("Sorry, you have failed the exam.");
}

// else 

if (condition == true) {
     // Execute this code
} else if (condition == true) {
     // Execute this code
} else if (condition == true) {
     // Execute this code
} else {
     // Execute this code
}

// Example

var food = "hot"
if (food == "hot") {
    console.log("Too hot");
} else if (food == "cold") {
    console.log("Too cold");
} else {
    console.log("Just right");
}

// Switch

switch (condition) {
    case 1:
        // Execute this code
        break;
    case 2:
        // Execute this code
        break;
    default:
        // Execute this code
        break;
}

// Example
// Medal Winner

var place = 'First';

switch (place) {
    case 'First':
        console.log('Gold Medal');
        break;
    case 'Second':
        console.log('Silver Medal');
        break;
    case 'Third':
        console.log('Bronze Medal');
        break;
    default:
        console.log('No Medal');
}

// Example
// Traffic Light

var light = "green";

if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}

// on switch

switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }