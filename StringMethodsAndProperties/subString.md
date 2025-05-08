In JavaScript, substring-related methods extract parts of strings or arrays. Below are the primary substring methods for strings, along with `slice()` for both strings and arrays, as it’s commonly used for similar purposes. I’ll also clarify their differences and use cases.

### String Substring Methods
These methods work on strings to extract a portion and return a new string without modifying the original.

1. **`slice(start, end)`**
   - **Purpose**: Extracts from `start` (inclusive) to `end` (exclusive).
   - **Negative Indices**: Supported (counts from the end).
   - **Behavior**: If `start > end`, returns an empty string. If `end` is omitted, extracts to the end.
   - **Example**:
     ```javascript
     const text = "Hello, World!";
     console.log(text.slice(0, 5)); // 'Hello'
     console.log(text.slice(7)); // 'World!'
     console.log(text.slice(-6)); // 'World!'
     console.log(text.slice(8, 2)); // '' (start > end)
     ```

2. **`substring(start, end)`**
   - **Purpose**: Extracts from `start` (inclusive) to `end` (exclusive).
   - **Negative Indices**: Not supported (treats negative values as 0).
   - **Behavior**: If `start > end`, swaps them. If `end` is omitted, extracts to the end.
   - **Example**:
     ```javascript
     const text = "Hello, World!";
     console.log(text.substring(0, 5)); // 'Hello'
     console.log(text.substring(7)); // 'World!'
     console.log(text.substring(-1)); // 'Hello, World!' (negative treated as 0)
     console.log(text.substring(8, 2)); // 'lo, Wo' (swaps indices)
     ```

3. **`substr(start, length)`** (Deprecated)
   - **Purpose**: Extracts `length` characters starting from `start`.
   - **Negative Indices**: Supported in some environments (counts from the end).
   - **Behavior**: If `length` is omitted or negative, behavior varies (often returns empty string or to the end). Avoid using it due to deprecation.
   - **Example**:
     ```javascript
     const text = "Hello, World!";
     console.log(text.substr(0, 5)); // 'Hello'
     console.log(text.substr(7, 5)); // 'World'
     console.log(text.substr(-6, 6)); // 'World!'
     ```
   - **Note**: Use `slice()` or `substring()` instead, as `substr()` is deprecated.

### Array Substring Method
For arrays, `slice()` is the primary method to extract a subset.

1. **`slice(start, end)`**
   - **Purpose**: Extracts elements from `start` (inclusive) to `end` (exclusive) into a new array.
   - **Negative Indices**: Supported (counts from the end).
   - **Behavior**: If `end` is omitted, extracts to the end. Returns an empty array if `start > end`.
   - **Example**:
     ```javascript
     const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
     console.log(fruits.slice(1, 4)); // ['banana', 'orange', 'grape']
     console.log(fruits.slice(2)); // ['orange', 'grape', 'mango']
     console.log(fruits.slice(-2)); // ['grape', 'mango']
     console.log(fruits.slice(4, 1)); // [] (start > end)
     ```

### Key Differences and When to Use
| Method      | String/Array | Negative Indices | Behavior if `start > end` | Use Case                              |
|-------------|--------------|------------------|---------------------------|---------------------------------------|
| `slice`     | Both         | Yes              | Empty string/array        | General-purpose extraction, immutable |
| `substring` | String       | No (treats as 0) | Swaps indices             | When index swapping is desired        |
| `substr`    | String       | Varies           | Varies (deprecated)       | Avoid; use `slice` or `substring`     |

- **Use `slice`** for consistent behavior across strings and arrays, especially when negative indices are needed or immutability is key.
- **Use `substring`** for strings when you want automatic index swapping or don’t need negative indices.
- **Avoid `substr`** due to its deprecated status and inconsistent behavior.

### Practical Examples
```javascript
// String manipulation
const str = "JavaScript is fun!";
console.log(str.slice(0, 10)); // 'JavaScript'
console.log(str.substring(11, 13)); // 'is'
console.log(str.slice(-4)); // 'fun!'

// Array manipulation
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3)); // [2, 3]
console.log(arr.slice(-3)); // [3, 4, 5]

// Copying
const strCopy = str.slice(); // Full string copy
const arrCopy = arr.slice(); // Full array copy
```

These methods are essential for tasks like parsing text, extracting data, or creating immutable copies for safe manipulation. Let me know if you need more examples or specific use cases!