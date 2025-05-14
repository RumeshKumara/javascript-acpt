In JavaScript (ES Modules), you can export functions in two primary ways: **named exports** and **default exports**. These allow you to share functions between modules, making your code modular and reusable. Below, I’ll explain how to export both named functions and a default function, including examples and best practices.

### 1. **Named Exports**
Named exports allow you to export multiple functions (or other values) from a module, each identified by its name. Consumers must import these functions using their exact names (or aliases).

#### Syntax
```javascript
export function functionName() {
    // Function logic
}
```
or
```javascript
function functionName() {
    // Function logic
}
export { functionName };
```

#### Example
```javascript
// math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// app.js
import { add, subtract } from './math.js';

console.log(add(5, 3));      // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

#### Notes
- You can export as many named functions as needed.
- Imports require curly braces `{}` and the exact function names (e.g., `{ add }`).
- You can use aliases during import: `import { add as sum } from './math.js'`.

### 2. **Default Export**
A default export is used when a module primarily provides a single function, class, or value. Each module can have only one default export. The consumer can import it with any name they choose.

#### Syntax
```javascript
export default function functionName() {
    // Function logic
}
```
or
```javascript
function functionName() {
    // Function logic
}
export default functionName;
```

#### Example
```javascript
// greet.js
export default function greet(name) {
    return `Hello, ${name}!`;
}

// app.js
import greet from './greet.js'; // No curly braces needed

console.log(greet('Alice')); // Output: Hello, Alice!
```

#### Notes
- Only one default export is allowed per module.
- No curly braces are needed during import, and you can choose any name (e.g., `import sayHello from './greet.js'`).
- Default exports are useful for modules with a primary function or component (e.g., a React component).

### 3. **Combining Named and Default Exports**
You can use both named exports and a default export in the same module. This is common when a module has a primary function (default) and additional utility functions (named).

#### Example
```javascript
// mathUtils.js
export default function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    return a / b;
}

export function square(num) {
    return num * num;
}

// app.js
import multiply, { divide, square } from './mathUtils.js';

console.log(multiply(4, 3)); // Output: 12
console.log(divide(6, 2));   // Output: 3
console.log(square(5));      // Output: 25
```

#### Notes
- The default import (`multiply`) is separate from named imports (`divide`, `square`).
- Use a comma to separate the default import from named imports in the `import` statement.

### 4. **Best Practices**
- **Choose Default vs. Named Wisely**:
  - Use `export default` for the primary function or component of a module (e.g., a React component or a main utility function).
  - Use named exports for additional utilities or when you expect consumers to import multiple items.
- **Clear Naming**: Use descriptive names for named exports to avoid confusion.
- **Avoid Mixing Confusingly**: If a module has many exports, consider splitting it into multiple modules for clarity.
- **Consistent File Structure**: Name files after their default export (e.g., `greet.js` for a `greet` function) or use a clear folder structure for multiple utilities.
- **Use Modern Tooling**: Ensure your environment (e.g., Node.js, browsers, or bundlers like Webpack/Vite) supports ES Modules. For older environments, use transpilers like Babel.

### 5. **Common Use Cases**
- **React Components**:
  ```javascript
  // Button.js
  export default function Button({ label }) {
      return <button>{label}</button>;
  }
  ```
- **Utility Modules**:
  ```javascript
  // stringUtils.js
  export function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }

  export default function format(str) {
      return str.trim().toLowerCase();
  }
  ```
- **API Handlers**:
  ```javascript
  // api.js
  export default async function fetchData(url) {
      const response = await fetch(url);
      return response.json();
  }

  export function handleError(error) {
      console.error('API Error:', error);
  }
  ```

### 6. **Gotchas**
- **Only One Default Export**: Attempting multiple default exports causes a syntax error:
  ```javascript
  export default function one() {}
  export default function two() {} // SyntaxError
  ```
- **Dynamic Imports**: For lazy-loading, use dynamic imports with default exports:
  ```javascript
  const { default: greet } = await import('./greet.js');
  ```
- **Node.js Compatibility**: Ensure your Node.js version supports ES Modules (`"type": "module"` in `package.json`) or use CommonJS (`module.exports`) for older setups.

If you need help with a specific use case, module organization, or integrating with a framework, let me know!