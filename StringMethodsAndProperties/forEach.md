### What is `forEach` in JavaScript?

`forEach` is a built-in array method in JavaScript that executes a provided function once for each element in an array, in order. It’s used to iterate over arrays when you want to perform an action for each element without manually managing a loop. Unlike other array methods like `map` or `filter`, `forEach` does not return a new array—it’s purely for executing side effects (e.g., logging, updating DOM, etc.).

**Syntax:**
```javascript
array.forEach(callback(currentValue [, index [, array]]) [, thisArg]);
```

- **callback**: Function to execute for each element.
  - `currentValue`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The array `forEach` was called on.
- **thisArg** (optional): Value to use as `this` when executing the callback.

**Key Points:**
- `forEach` does not mutate the original array (unless the callback explicitly does so).
- It cannot be stopped early (no `break` or `return` to exit the loop; use `for` or `some` for that).
- It returns `undefined`.

---

### More `forEach` Examples

#### 1. Summing Array Elements
```javascript
const numbers = [10, 20, 30, 40];
let sum = 0;

numbers.forEach(num => {
  sum += num;
});

console.log(sum); // Output: 100
```
**Explanation**: `forEach` iterates over each number, adding it to the `sum` variable.

---

#### 2. Modifying Array Elements (Objects)
```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

users.forEach(user => {
  user.age += 1; // Increment each user's age
});

console.log(users);
// Output: [
//   { name: "Alice", age: 26 },
//   { name: "Bob", age: 31 },
//   { name: "Charlie", age: 36 }
// ]
```
**Explanation**: Since objects are mutable, `forEach` can modify properties of objects within the array.

---

#### 3. Using Index and Array Parameters
```javascript
const fruits = ["apple", "banana", "orange"];

fruits.forEach((fruit, index, array) => {
  console.log(`${index + 1}. ${fruit} (Total items: ${array.length})`);
});
```
**Output:**
```
1. apple (Total items: 3)
2. banana (Total items: 3)
3. orange (Total items: 3)
```
**Explanation**: The callback uses `index` to number each fruit and `array` to access the array’s length.

---

#### 4. DOM Manipulation
```javascript
const items = ["Item 1", "Item 2", "Item 3"];

items.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  document.querySelector("ul").appendChild(li);
});
```
**Explanation**: `forEach` iterates over the array to create and append `<li>` elements to a `<ul>` in the DOM.

---

#### 5. Using `thisArg`
```javascript
const obj = {
  multiplier: 2,
  multiply: function (num) {
    console.log(num * this.multiplier);
  }
};

const numbers = [1, 2, 3];
numbers.forEach(obj.multiply, obj); // Pass obj as thisArg
```
**Output:**
```
2
4
6
```
**Explanation**: The `thisArg` parameter sets `this` in the callback to `obj`, allowing access to `obj.multiplier`.

---

### When to Use `forEach`
- Use `forEach` for simple iteration with side effects (e.g., logging, updating external state, DOM changes).
- Avoid `forEach` if you need to:
  - Transform data (use `map`).
  - Filter elements (use `filter`).
  - Stop iteration early (use `for`, `some`, or `every`).
  - Chain methods (since `forEach` returns `undefined`).

### Common Pitfalls
1. **Cannot Break Early**:
   ```javascript
   const numbers = [1, 2, 3, 4];
   numbers.forEach(num => {
     if (num === 3) return; // Only skips current iteration, not the loop
     console.log(num);
   });
   // Output: 1, 2, 4
   ```
   **Solution**: Use a `for...of` loop or `some` for early exit.

2. **Mutating Array During Iteration**:
   ```javascript
   let arr = [1, 2, 3];
   arr.forEach((num, index) => {
     arr.splice(index, 1); // Dangerous: Modifying array during iteration
   });
   console.log(arr); // Unpredictable results
   ```
   **Solution**: Create a copy of the array or use a different method like `filter`.

---

If you’d like more specific examples or have a use case in mind, let me know!