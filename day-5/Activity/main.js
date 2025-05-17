const userName = "rumesh";
const password = "1234";

function login(inputUser, inputPass) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (inputUser === userName && inputPass === password) {
                resolve("Login successful!");
            } else {
                reject("Invalid username or password.");
            }
        }, 5000);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const loader = document.getElementById("loader");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        message.textContent = "";
        loader.classList.remove("hidden");

        const inputUser = document.getElementById("username").value;
        const inputPass = document.getElementById("password").value;

        login(inputUser, inputPass)
            .then((msg) => {
                loader.classList.add("hidden");
                message.textContent = msg;
                message.className = "text-center mb-4 text-green-600 text-sm";
            })
            .catch((err) => {
                loader.classList.add("hidden");
                message.textContent = err;
                message.className = "text-center mb-4 text-red-600 text-sm";
            });
    });
});

