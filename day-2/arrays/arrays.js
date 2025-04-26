// Example of array creation
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.length);

fruits.push("Orange", "Mingus");

const removedFruit = fruits.pop();
console.log(removedFruit);

fruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}: ${fruit}`);
});

// Accessing an element by index
console.log(`First fruit: ${fruits[0]}`);

const numbers = [10, 20, 30, 40, 50];
// numbers.forEach((number) => {
//     console.log(number)
// });
numbers.unshift(0, 5);
console.log(numbers);



