### What is the `map` Method in JavaScript?

The `map` method is a built-in array method in JavaScript that creates a **new array** by applying a provided callback function to each element of the original array. Unlike `forEach`, which is used for side effects and returns `undefined`, `map` is designed for transforming data and returns a new array with the transformed elements.

**Syntax:**
```javascript
array.map(callback(currentValue [, index [, array]]) [, thisArg]);
```

- **callback**: Function executed for each element.
  - `currentValue`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The array `map` was called on.
- **thisArg** (optional): Value to use as `this` when executing the callback.
- **Returns**: A new array with the results of the callback function applied to each element.

**Key Points:**
- `map` does not mutate the original array.
- It’s ideal for creating a new array based on transformations of the original array’s elements.
- The new array is always the same length as the original array.

---

### `map` vs `forEach`
- **`forEach`**: Used for side effects (e.g., logging, DOM updates). Returns `undefined`.
- **`map`**: Used for transforming data. Returns a new array.

---

### `map` Method Examples

#### 1. Doubling Numbers
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
console.log(numbers); // Output: [1, 2, 3, 4] (original unchanged)
```
**Explanation**: Each element is multiplied by 2, and the results form a new array.

---

#### 2. Extracting Object Properties
```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

const names = users.map(user => user.name);

console.log(names); // Output: ["Alice", "Bob", "Charlie"]
```
**Explanation**: `map` extracts the `name` property from each object into a new array.

---

#### 3. Using Index Parameter
```javascript
const fruits = ["apple", "banana", "orange"];
const indexedFruits = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);

console.log(indexedFruits);
// Output: ["1. apple", "2. banana", "3. orange"]
```
**Explanation**: The `index` parameter is used to prepend a number to each fruit.

---

#### 4. Transforming Objects
```javascript
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 }
];

const discounted = products.map(product => ({
  ...product,
  price: product.price * 0.9 // Apply 10% discount
}));

console.log(discounted);
// Output: [
//   { id: 1, name: "Laptop", price: 900 },
//   { id: 2, name: "Phone", price: 450 }
// ]
```
**Explanation**: `map` creates a new array of objects with updated `price` values.

---

#### 5. Using `thisArg`
```javascript
const obj = {
  bonus: 10,
  addBonus: function (value) {
    return value + this.bonus;
  }
};

const scores = [100, 200, 300];
const updatedScores = scores.map(obj.addBonus, obj);

console.log(updatedScores); // Output: [110, 210, 310]
```
**Explanation**: The `thisArg` parameter sets `this` to `obj`, allowing the callback to access `obj.bonus`.

---

### When to Use `map`
- Use `map` when you need to transform each element of an array and create a new array with the results.
- Avoid `map` if:
  - You’re only performing side effects (use `forEach`).
  - You need to filter elements (use `filter`).
  - You need to reduce the array to a single value (use `reduce`).

### Common Pitfalls
1. **Forgetting `map` Returns a New Array**:
   ```javascript
   const numbers = [1, 2, 3];
   numbers.map(num => console.log(num)); // Logs: 1, 2, 3
   // Returns: [undefined, undefined, undefined]
   ```
   **Solution**: Ensure the callback returns a value for the new array.

2. **Accidentally Mutating Objects**:
   ```javascript
   const items = [{ count: 1 }, { count: 2 }];
   const newItems = items.map(item => {
     item.count += 1; // Mutates original object
     return item;
   });
   console.log(items); // Original array mutated: [{ count: 2 }, { count: 3 }]
   ```
   **Solution**: Create a new object to avoid mutating the original:
   ```javascript
   const newItems = items.map(item => ({ ...item, count: item.count + 1 }));
   ```

---

### `forEach` vs `map` Example
```javascript
const numbers = [1, 2, 3];

// Using forEach (side effect, no return value)
numbers.forEach(num => console.log(num * 2)); // Logs: 2, 4, 6
// Returns: undefined

// Using map (creates new array)
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]
```

---

If you need more examples, a specific use case, or a comparison with other array methods, let me know!