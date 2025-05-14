const addNumbers = (a, b, callback) => {
    let sum;
    sum = a + b;
    callback(sum);
}

const result = (p1) => {
    document.getElementById("result").innerHTML = p1;
}

addNumbers(2, 10, result);