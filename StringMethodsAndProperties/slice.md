Here's a simple example of using the `slice()` method in JavaScript:

```javascript
// Array example
const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
console.log(fruits.slice(1, 4)); // ['banana', 'orange', 'grape']
console.log(fruits.slice(2)); // ['orange', 'grape', 'mango']
console.log(fruits.slice(-2)); // ['grape', 'mango']

// String example
const text = "Hello, World!";
console.log(text.slice(0, 5)); // 'Hello'
console.log(text.slice(7)); // 'World!'
console.log(text.slice(-6)); // 'World!'
```

### Explanation:
- `slice(start, end)` extracts a portion of an array or string from `start` (inclusive) to `end` (exclusive).
- If `end` is omitted, it extracts until the end.
- Negative indices count from the end.
- The original array/string is unchanged.