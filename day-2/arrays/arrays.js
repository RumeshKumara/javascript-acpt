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

//! Array methods examples

// 1. concat() - Combines two or more arrays into one.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log("Concatenated Array:", combinedArray);

// 2. slice() - Extracts a portion of an array without modifying the original array.
const slicedArray = combinedArray.slice(2, 5);
console.log("Sliced Array:", slicedArray);

// 3. splice() - Adds/removes elements from an array and modifies the original array.
const splicedArray = [...combinedArray];
splicedArray.splice(2, 2, 99, 100);
console.log("Spliced Array:", splicedArray);

// 4. map() - Creates a new array by applying a function to each element of the original array.
const mappedArray = numbers.map(num => num * 2);
console.log("Mapped Array:", mappedArray);

// 5. filter() - Creates a new array with elements that pass a test implemented by a function.
const filteredArray = numbers.filter(num => num > 20);
console.log("Filtered Array:", filteredArray);

// 6. reduce() - Reduces the array to a single value by applying a function to each element.
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Numbers:", sum);

// 7. find() - Returns the first element that satisfies a provided testing function.
const foundNumber = numbers.find(num => num > 25);
console.log("First Number Greater than 25:", foundNumber);

// 8. findIndex() - Returns the index of the first element that satisfies a provided testing function.
const foundIndex = numbers.findIndex(num => num > 25);
console.log("Index of First Number Greater than 25:", foundIndex);

// 9. every() - Checks if all elements in the array pass a test implemented by a function.
const allGreaterThanFive = numbers.every(num => num > 5);
console.log("Are all numbers greater than 5?", allGreaterThanFive);

// 10. some() - Checks if at least one element in the array passes a test implemented by a function.
const someGreaterThanThirty = numbers.some(num => num > 30);
console.log("Are some numbers greater than 30?", someGreaterThanThirty);

// 11. sort() - Sorts the elements of an array in place and returns the sorted array.
const sortedArray = [...numbers].sort((a, b) => a - b);
console.log("Sorted Array:", sortedArray);

// 12. reverse() - Reverses the order of the elements in an array in place.
const reversedArray = [...numbers].reverse();
console.log("Reversed Array:", reversedArray);

// 13. includes() - Checks if an array contains a certain value.
const includesTwenty = numbers.includes(20);
console.log("Does the array include 20?", includesTwenty);

// 14. indexOf() - Returns the first index at which a given element can be found in the array.
const indexOfTwenty = numbers.indexOf(20);
console.log("Index of 20:", indexOfTwenty);

// 15. join() - Joins all elements of an array into a string, separated by a specified separator.
const joinedString = numbers.join(", ");
console.log("Joined String:", joinedString);

// 16. flat() - Flattens a nested array into a single-level array.
const nestedArray = [1, [2, [3, 4]], 5];
const flattenedArray = nestedArray.flat(2);
console.log("Flattened Array:", flattenedArray);

// 17. flatMap() - Maps each element using a function and flattens the result into a new array.
const flatMappedArray = numbers.flatMap(num => [num, num * 2]);
console.log("FlatMapped Array:", flatMappedArray);



