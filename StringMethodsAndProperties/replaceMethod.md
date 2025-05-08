In JavaScript, the string `replace()` and `replaceAll()` methods are used to replace parts of a string with new content. These methods return a new string and do not modify the original. Below are details and examples for both.

### 1. **`replace(pattern, replacement)`**
- **Purpose**: Replaces the **first occurrence** of a substring or pattern (string or regular expression) with the specified `replacement`.
- **Parameters**:
  - `pattern`: A string or RegExp to match.
  - `replacement`: A string or function to replace the match.
- **Behavior**:
  - Only replaces the first match unless a RegExp with the global (`g`) flag is used.
  - Case-sensitive by default (use RegExp with `i` flag for case-insensitive).
  - Special replacement patterns (e.g., `$&` for matched substring) are supported.
- **Examples**:
  ```javascript
  const text = "I like cats. Cats are great.";
  
  // Basic string replacement (first occurrence)
  console.log(text.replace("Cats", "Dogs")); // 'I like cats. Dogs are great.'
  
  // Using RegExp for global replacement
  console.log(text.replace(/Cats/g, "Dogs")); // 'I like cats. Dogs are great.'
  
  // Case-insensitive replacement
  console.log(text.replace(/cats/gi, "Dogs")); // 'I like Dogs. Dogs are great.'
  
  // Using a replacement function
  console.log(text.replace(/cats/gi, (match) => match.toUpperCase())); // 'I like CATS. CATS are great.'
  
  // Special patterns
  console.log(text.replace("Cats", "$& and Dogs")); // 'I like cats. Cats and Dogs are great.'
  ```

### 2. **`replaceAll(pattern, replacement)`**
- **Purpose**: Replaces **all occurrences** of a substring or pattern with the specified `replacement`.
- **Parameters**:
  - `pattern`: A string or RegExp (RegExp must have the global `g` flag if used).
  - `replacement`: A string or function to replace matches.
- **Behavior**:
  - Replaces all matches without needing a global RegExp for strings.
  - Throws an error if a RegExp without the `g` flag is used.
  - Introduced in ES2021, so ensure compatibility in older environments.
- **Examples**:
  ```javascript
  const text = "I like cats. Cats are great.";
  
  // Replace all occurrences of a string
  console.log(text.replaceAll("Cats", "Dogs")); // 'I like cats. Dogs are great.'
  
  // Case-sensitive (no built-in case-insensitive option)
  console.log(text.replaceAll("cats", "Dogs")); // 'I like Dogs. Cats are great.'
  
  // Using RegExp with global flag
  console.log(text.replaceAll(/cats/gi, "Dogs")); // 'I like Dogs. Dogs are great.'
  
  // Replacement function
  console.log(text.replaceAll("Cats", (match) => match + "!!")); // 'I like cats. Cats!! are great.'
  
  // Error with non-global RegExp
  try {
    console.log(text.replaceAll(/Cats/, "Dogs")); // Error: RegExp must have global flag
  } catch (e) {
    console.log(e.message);
  }
  ```

### Key Differences
| Method       | Replaces | String Pattern | RegExp Global Flag | Special Patterns | Availability |
|--------------|----------|----------------|--------------------|------------------|--------------|
| `replace`    | First (or all with `/g`) | Yes | Optional           | Yes              | All JS versions |
| `replaceAll` | All      | Yes            | Required for RegExp | Yes              | ES2021+       |

### When to Use
- **Use `replace`**:
  - To replace only the first occurrence.
  - For older codebases or when `replaceAll` isn’t available.
  - When using complex RegExp patterns or replacement functions.
- **Use `replaceAll`**:
  - To replace all occurrences of a string easily without RegExp.
  - For cleaner code when global replacement is needed.
  - In modern environments supporting ES2021.

### Practical Examples
```javascript
// Formatting a string
const messyText = "hello, world! hello again!";
console.log(messyText.replace("hello", "Hi")); // 'Hi, world! hello again!'
console.log(messyText.replaceAll("hello", "Hi")); // 'Hi, world! Hi again!'

// Using RegExp for dynamic replacement
const text = "Contact: 123-456-7890, 987-654-3210";
console.log(text.replace(/\d{3}-\d{3}-\d{4}/, "XXX-XXX-XXXX")); // 'Contact: XXX-XXX-XXXX, 987-654-3210'
console.log(text.replaceAll(/\d{3}-\d{3}-\d{4}/g, "XXX-XXX-XXXX")); // 'Contact: XXX-XXX-XXXX, XXX-XXX-XXXX'

// Replacing with a function
const names = "alice and bob";
console.log(names.replaceAll(/\w+/g, (match) => match[0].toUpperCase() + match.slice(1))); // 'Alice and Bob'
```

### Notes
- Both methods are immutable (original string unchanged).
- For case-insensitive or complex patterns, use RegExp with appropriate flags (`g` for global, `i` for case-insensitive).
- `replaceAll` is more intuitive for replacing all instances of a string but requires modern JS support.

Let me know if you need more examples or specific use cases!