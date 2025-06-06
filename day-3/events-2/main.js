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

const numberArray = [];

function pushData() {
    const numberInputElement = document.getElementById("numberInput-3");
    const numberInput = numberInputElement.value;

    numberArray.push(parseFloat(numberInput));
    numberInputElement.value = "";
}

function ShowData() {
    const display = document.getElementById("display-7");

    display.textContent = `Stored Numbers: ${numberArray}`;
    display.style.color = 'purple';
}



function firstLetterResult() {
    const firstLetterInput = document.getElementById("firstLetterInput").value.trim();
    const display = document.getElementById("display-5");
    display.style.color = 'purple';

    if (firstLetterInput === "") {
        display.textContent = "Please enter something.";
    } else {
        const formattedString = firstLetterInput
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        display.textContent = `Formatted String: ${formattedString}`;

    }
}

// Add keyup event for sum of digits
const additionInput = document.getElementById("AdditionInput");
additionInput.onkeyup = function () {
    const inputValue = additionInput.value;
    const sum = inputValue
        .split('')
        .reduce((acc, digit) => acc + parseInt(digit), 0);

    const display = document.getElementById("display-6");
    display.textContent = `Sum of Digits: ${sum}`;
    display.style.color = 'purple';
};

// Create a "Go to Top" button dynamically
const goToTopButton = document.createElement('div');
goToTopButton.className = 'upArrow hidden'; // Add 'hidden' class initially
goToTopButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
document.body.appendChild(goToTopButton);

// Show/hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        goToTopButton.classList.remove('hidden');
    } else {
        goToTopButton.classList.add('hidden');
    }
});

// Smooth scroll to the top when the button is clicked
goToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const inputElement = document.getElementById("generateInput");
const count = parseInt(inputElement.value) || 50;
const randomNumbers = Array.from({ length: count }, () => Math.floor(Math.random() * 100) + 1);
const randomDisplay = document.getElementById("randomDisplay");
randomDisplay.textContent = `${randomNumbers.join(', ')}`;

const generateInput = document.getElementById('generateInput');

function generateRandomNumbers() {
    const counts = parseInt(generateInput.value)
    const divisible = randomNumbers.filter(num => num % counts === 0);
    const display = document.getElementById("display-8");
    display.textContent = `${divisible.join(', ')}`;
}

