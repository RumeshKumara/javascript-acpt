const myFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            console.log("Random number:", randomNumber);
            if (randomNumber > 0.5) {
                resolve('Success!');
            } else {
                reject('Failure!');
            }
        }, 2000);
    });
};

console.log("Promise started...");
myFunction()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise has been settled.");
    });
