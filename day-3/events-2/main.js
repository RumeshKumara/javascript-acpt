const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameDisplay = document.getElementById('usernameDisplay');
const passwordDisplay = document.getElementById('passwordDisplay');

const numberInput1 = document.getElementById('numberInput-1');
const numberInput2 = document.getElementById('numberInput-2');
const display = document.getElementById('display');

function login() {
    const username = usernameInput.value;
    const password = passwordInput.value;

    usernameDisplay.textContent = `Username: ${username}`;
    passwordDisplay.textContent = `Password: ${password}`;
    usernameDisplay.style.color = 'purple';
    passwordDisplay.style.color = 'purple';

}

function Add() {
    const num1 = parseFloat(numberInput1.value);
    const num2 = parseFloat(numberInput2.value);
    const sum = num1 + num2;

    display.textContent = `Sum: ${sum}`;
    display.style.color = 'purple';
}

function equals() {
    const value1 = document.getElementById("textInput-1").value.toLowerCase();
    const value2 = document.getElementById("textInput-2").value.toLowerCase();
    const display = document.getElementById("display-1");
    display.style.color = 'purple';

    if (value1 === value2) {
        display.textContent = "Equals";
    } else {
        display.textContent = "Not Equals";
    }
}

function result() {
    const markInput = document.getElementById("markInput").value;
    const display = document.getElementById("display-2");
    display.style.color = 'purple';

    if (parseInt(markInput) >= 75 && parseInt(markInput) <= 100) {
        display.textContent = "A";
    } else if (parseInt(markInput) >= 65 && parseInt(markInput) < 75) {
        display.textContent = "B";
    } else if (parseInt(markInput) >= 55 && parseInt(markInput) < 65) {
        display.textContent = "C";
    } else if (parseInt(markInput) >= 35 && parseInt(markInput) < 55) {
        display.textContent = "S";
    } else if (parseInt(markInput) >= 0 && parseInt(markInput) < 35) {
        display.textContent = "Fail";
    } else {
        display.textContent = "Invalid Input";
    }
}

function characterResult() {
    const characterInput = document.getElementById("characterInput").value;
    const display = document.getElementById("display-3");
    display.style.color = 'purple';

    if (characterInput.trim() === "") {
        display.textContent = "Please enter something.";
    } else {
        display.textContent = `Characters: ${characterInput.split('').join(', ')}`;
    }
}
function meaningResult() {
    const meaningInput = document.getElementById("meaningInput").value.toUpperCase();
    const display = document.getElementById("display-4");
    display.style.color = 'purple';

    switch (meaningInput) {
        case "SE":
            display.textContent = "Software Engineering";
            break;
        case "CE":
            display.textContent = "Computer Engineering";
            break;
        case "IT":
            display.textContent = "Information Technology";
            break;
        case "CS":
            display.textContent = "Computer Science";
            break;
        case "IS":
            display.textContent = "Information Systems";
            break;
        case "DS":
            display.textContent = "Data Science";
            break;
        case "AI":
            display.textContent = "Artificial Intelligence";
            break;
        case "ML":
            display.textContent = "Machine Learning";
            break;
        case "DB":
            display.textContent = "Database";
            break;
        case "OS":
            display.textContent = "Operating System";
            break;
        case "CN":
            display.textContent = "Computer Networks";
            break;
        case "SSE":
            display.textContent = "Senior Software Engineering";
            break;
        case "CSE":
            display.textContent = "Computer Science Engineering";
            break;
        default:
            display.textContent = "Invalid Input";
    }
}

