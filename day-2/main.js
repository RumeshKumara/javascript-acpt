function result(name, score) {
    if (score >= 75) {
        console.log(`${name} is A`);
    } else if (score >= 50) {
        console.log(`${name} is B`);
    } else if (score >= 35) {
        console.log(`${name} is C`);
    } else {
        console.log(`${name} has failed`);
    }
}

// result("rumesh", 70);
// result("nimal", 60);

// meaning stands
function meaning(stand) {
    switch (stand.toUpperCase()) {
        case 'INTERN':
            console.log("Intern Software Engineer.");
            break;
        case 'ASE':
            console.log("Associate Software Engineer.");
            break;
        case 'SE':
            console.log("Software Engineer.");
            break;
        case 'SSE':
            console.log("Senior Software Engineer.");
            break;
        case 'TL':
            console.log("Tec Lead.");
            break;
        case 'PM':
            console.log("Project Manager.");
            break;
        default:
            console.log("Unrecognized role.");
    }
}

meaning('ase');

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`Row ${i}, Col ${j}`);
    }
}

// While loop example
let count = 1;
while (count <= 5) {
    console.log(`Count: ${count}`);
    count++;
}

let count1 = 10;
do {
    console.log(`Run....`);
} while (count1 <= 5) {
    count1++;
}

// forEach loop example
const names = ["Alice", "Bob", "Charlie"];
names.forEach((name, index) => {
    console.log(`Index ${index}: ${name}`);
});

