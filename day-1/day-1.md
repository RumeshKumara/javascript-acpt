JavaScript has **8 data types**, divided into **primitive** and **non-primitive** (reference) types. Below is a concise overview of each:

### **Primitive Data Types**
These are immutable, basic data types stored directly in memory.

1. **Number**:
   - Represents both integers and floating-point numbers.
   - Example: `42`, `3.14`, `-10`
   - Special values: `Infinity`, `-Infinity`, `NaN` (Not-a-Number).
   ```javascript
   let num = 100; // Integer
   let float = 2.5; // Float
   console.log(typeof num); // "number"
   ```

2. **BigInt**:
   - Represents integers with arbitrary precision (for numbers beyond the `Number` safe integer limit: `2^53 - 1`).
   - Example: `1234567890123456789012345678901234567890n`
   ```javascript
   let bigNum = 123n;
   console.log(typeof bigNum); // "bigint"
   ```

3. **String**:
   - Represents sequences of characters (text), enclosed in single (`'`), double (`"`), or backticks (`` ` `` for template literals).
   - Example: `"Hello"`, `'World'`, `` `Hi, ${name}` ``
   ```javascript
   let str = "JavaScript";
   console.log(typeof str); // "string"
   ```

4. **Boolean**:
   - Represents logical values: `true` or `false`.
   - Used in conditions and comparisons.
   ```javascript
   let isActive = true;
   console.log(typeof isActive); // "boolean"
   ```

5. **Undefined**:
   - Represents a variable that has been declared but not assigned a value.
   - Example: `let x; // x is undefined`
   ```javascript
   let x;
   console.log(typeof x); // "undefined"
   ```

6. **Null**:
   - Represents the intentional absence of any value or object.
   - Example: `let y = null;`
   ```javascript
   let y = null;
   console.log(typeof y); // "object" (this is a historical bug, but null is a primitive)
   ```

7. **Symbol**:
   - Represents a unique, immutable identifier, often used as object property keys.
   - Created with `Symbol()`.
   ```javascript
   let sym = Symbol("id");
   console.log(typeof sym); // "symbol"
   ```

### **Non-Primitive (Reference) Data Type**
This type is mutable and stored as a reference in memory.

8. **Object**:
   - Represents a collection of key-value pairs or complex data structures.
   - Includes:
     - **Plain Objects**: `{ key: value }`
     - **Arrays**: `[1, 2, 3]`
     - **Functions**: `function myFunc() {}`
     - **Other built-in objects**: `Date`, `RegExp`, `Map`, `Set`, etc.
   ```javascript
   let obj = { name: "Alice", age: 25 };
   let arr = [1, 2, 3];
   console.log(typeof obj); // "object"
   console.log(typeof arr); // "object"
   ```

### **Key Notes**
- **Type Checking**: Use `typeof` operator to determine a variable’s type (e.g., `typeof 42 // "number"`).
- **Dynamic Typing**: JavaScript is loosely typed; variables can change types dynamically.
  ```javascript
  let value = 42; // number
  value = "Hello"; // now a string
  ```
- **Primitive vs. Reference**:
  - Primitives are copied by value (changes don’t affect other variables).
  - Objects are copied by reference (changes affect all references to the same object).
- **Special Cases**:
  - `typeof null` returns `"object"` (a historical quirk).
  - Arrays and other objects return `"object"` with `typeof`; use `Array.isArray()` for arrays.

### **Summary Table**
| Data Type    | Primitive? | Example                     | `typeof` Result |
|--------------|------------|-----------------------------|-----------------|
| Number       | Yes        | `42`, `3.14`                | `"number"`      |
| BigInt       | Yes        | `123n`                      | `"bigint"`      |
| String       | Yes        | `"Hello"`, `'World'`        | `"string"`      |
| Boolean      | Yes        | `true`, `false`             | `"boolean"`     |
| Undefined    | Yes        | `undefined`                 | `"undefined"`   |
| Null         | Yes        | `null`                      | `"object"`      |
| Symbol       | Yes        | `Symbol("id")`              | `"symbol"`      |
| Object       | No         | `{}`, `[1, 2]`, `function`  | `"object"`      |

If you need examples or details on working with specific data types (e.g., manipulating objects, using BigInt), let me know!


---
In JavaScript, **variables** are used to store data values. They are declared using specific keywords, and their behavior depends on the keyword used, scope, and JavaScript's dynamic typing. Below is a concise explanation of JavaScript variables, including declaration, types, and key concepts.

### **Variable Declaration**
JavaScript provides three keywords to declare variables:

1. **`var`**:
   - Older way to declare variables (pre-ES6).
   - **Function-scoped** or **globally scoped**.
   - Allows redeclaration and reassignment.
   - Can be hoisted (declared variables are moved to the top of their scope, initialized as `undefined`).
   ```javascript
   var x = 10;
   var x = 20; // Redeclaration allowed
   console.log(x); // 20
   ```

2. **`let`**:
   - Introduced in ES6 (2015).
   - **Block-scoped** (limited to the block `{}` where it’s defined).
   - Allows reassignment but not redeclaration in the same scope.
   - Hoisted but not initialized (leads to "Temporal Dead Zone" errors if accessed before declaration).
   ```javascript
   let y = 30;
   y = 40; // Reassignment allowed
   // let y = 50; // Error: Cannot redeclare
   console.log(y); // 40
   ```

3. **`const`**:
   - Introduced in ES6.
   - **Block-scoped**.
   - Must be initialized at declaration and cannot be reassigned.
   - Cannot be redeclared.
   - Note: For objects/arrays declared with `const`, their **contents** can be modified, but the variable cannot be reassigned to a new object/array.
   ```javascript
   const z = 50;
   // z = 60; // Error: Assignment to constant
   const obj = { name: "Alice" };
   obj.name = "Bob"; // Allowed: Modifying object property
   console.log(z, obj); // 50, { name: "Bob" }
   ```

### **Key Concepts**
- **Dynamic Typing**: Variables can hold any data type and change types dynamically.
  ```javascript
  let value = 42; // Number
  value = "Hello"; // Now a string
  ```
- **Scope**:
  - **Global Scope**: Variables declared outside functions or with `var` in global context.
  - **Function Scope**: `var` variables are limited to the function they’re declared in.
  - **Block Scope**: `let` and `const` are limited to the `{}` block they’re declared in.
  ```javascript
  if (true) {
    var a = 1; // Function or global scope
    let b = 2; // Block scope
    const c = 3; // Block scope
  }
  console.log(a); // 1
  console.log(b); // ReferenceError: b is not defined
  console.log(c); // ReferenceError: c is not defined
  ```
- **Hoisting**:
  - `var` declarations are hoisted and initialized as `undefined`.
  - `let` and `const` are hoisted but not initialized (Temporal Dead Zone).
  ```javascript
  console.log(v); // undefined
  var v = 10;
  console.log(l); // ReferenceError: Cannot access 'l' before initialization
  let l = 20;
  ```
- **Naming Rules**:
  - Must start with a letter, `_`, or `$`.
  - Can include letters, digits, `_`, or `$`.
  - Case-sensitive (e.g., `myVar` ≠ `MyVar`).
  - Cannot use reserved keywords (e.g., `let`, `function`).
  ```javascript
  let myVar = 1; // Valid
  let $price = 99; // Valid
  let 2num = 2; // Invalid: Starts with a number
  ```

### **Data Types for Variables**
Variables can hold any of JavaScript’s 8 data types (see previous response for details):
- **Primitive**: `Number`, `BigInt`, `String`, `Boolean`, `Undefined`, `Null`, `Symbol`.
- **Non-Primitive**: `Object` (including arrays, functions, etc.).
```javascript
let num = 42; // Number
let str = "Hello"; // String
let obj = { key: "value" }; // Object
let arr = [1, 2, 3]; // Array (object)
let undef; // Undefined
let nul = null; // Null
```

### **Best Practices**
- Use **`let`** or **`const`** instead of `var` for better scoping and predictability.
- Use **`const`** by default for variables that won’t be reassigned.
- Use meaningful variable names (e.g., `userName` instead of `x`).
- Avoid global variables to prevent unintended side effects.
- Initialize variables at declaration to avoid `undefined`.

### **Examples**
```javascript
// Using var (function scope)
function exampleVar() {
  var x = 10;
  if (true) {
    var x = 20; // Same variable, overrides
    console.log(x); // 20
  }
  console.log(x); // 20
}
exampleVar();

// Using let (block scope)
function exampleLet() {
  let y = 30;
  if (true) {
    let y = 40; // Different variable, block-scoped
    console.log(y); // 40
  }
  console.log(y); // 30
}
exampleLet();

// Using const
const z = 50;
// z = 60; // Error
const arr = [1, 2];
arr.push(3); // Allowed: Modifying array content
console.log(arr); // [1, 2, 3]
```

### **Running Variables in a JS File**
To test variables, create a JS file (e.g., `variables.js`) and run it in:
- **Node.js**: `node variables.js`
- **Browser**: Link it in an HTML file and open in a browser, checking the console.

If you have a specific variable-related question (e.g., scope issues, hoisting, or a code example), let me know!

---
**ES6**, also known as **ECMAScript 2015** or **ECMAScript 6**, is the sixth edition of the ECMAScript standard, which is the scripting language specification that JavaScript is based on. Released in June 2015, ES6 introduced significant enhancements to JavaScript, making it more powerful, readable, and suitable for modern web development. It added new syntax, features, and tools to improve coding efficiency and support complex applications.

### **Key Features of ES6**
Below are the most notable additions and improvements in ES6, with brief explanations and examples:

1. **Block-Scoped Variables: `let` and `const`**:
   - `let`: Declares block-scoped variables, preventing issues with `var`’s function or global scope.
   - `const`: Declares block-scoped constants that cannot be reassigned (though object properties can be modified).
   ```javascript
   let x = 10;
   if (true) {
     let x = 20; // Different variable, block-scoped
     console.log(x); // 20
   }
   console.log(x); // 10

   const y = 30;
   // y = 40; // Error: Assignment to constant
   const obj = { name: "Alice" };
   obj.name = "Bob"; // Allowed
   ```

2. **Arrow Functions**:
   - A concise syntax for writing functions, with implicit return for single expressions and no binding of `this` (lexical `this`).
   ```javascript
   const add = (a, b) => a + b;
   console.log(add(2, 3)); // 5

   // With block body
   const greet = name => {
     return `Hello, ${name}!`;
   };
   console.log(greet("Alice")); // Hello, Alice!
   ```

3. **Template Literals**:
   - String literals with backticks (`` ` ``) that support multi-line strings and interpolation using `${}`.
   ```javascript
   const name = "Bob";
   const greeting = `Hello, ${name}!
   Welcome to ES6.`;
   console.log(greeting);
   // Output:
   // Hello, Bob!
   // Welcome to ES6.
   ```

4. **Destructuring Assignment**:
   - Allows unpacking values from arrays or objects into variables.
   ```javascript
   // Array destructuring
   const [a, b] = [1, 2];
   console.log(a, b); // 1, 2

   // Object destructuring
   const { name, age } = { name: "Alice", age: 25 };
   console.log(name, age); // Alice, 25
   ```

5. **Default Parameters**:
   - Functions can have default parameter values if arguments are not provided.
   ```javascript
   function greet(name = "Guest") {
     return `Hello, ${name}!`;
   }
   console.log(greet()); // Hello, Guest!
   console.log(greet("Alice")); // Hello, Alice!
   ```

6. **Rest and Spread Operators**:
   - **Rest (`...`)**: Collects remaining elements/arguments into an array.
   - **Spread (`...`)**: Expands arrays or objects into individual elements.
   ```javascript
   // Rest
   function sum(...numbers) {
     return numbers.reduce((a, b) => a + b, 0);
   }
   console.log(sum(1, 2, 3)); // 6

   // Spread
   const arr1 = [1, 2];
   const arr2 = [...arr1, 3, 4];
   console.log(arr2); // [1, 2, 3, 4]
   ```

7. **Modules (Import/Export)**:
   - ES6 introduced a standardized module system for importing and exporting code.
   ```javascript
   // math.js
   export const add = (a, b) => a + b;

   // main.js
   import { add } from './math.js';
   console.log(add(2, 3)); // 5
   ```

8. **Classes**:
   - Syntactic sugar for constructor functions, making object-oriented programming easier.
   ```javascript
   class Person {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }
     greet() {
       return `Hello, I'm ${this.name}!`;
     }
   }
   const alice = new Person("Alice", 25);
   console.log(alice.greet()); // Hello, I'm Alice!
   ```

9. **Promises**:
   - A better way to handle asynchronous operations compared to callbacks.
   ```javascript
   const fetchData = () => {
     return new Promise((resolve) => {
       setTimeout(() => resolve("Data fetched!"), 1000);
     });
   };
   fetchData().then(data => console.log(data)); // Data fetched!
   ```

10. **Enhanced Object Literals**:
    - Shorthand for property names, methods, and computed property names.
    ```javascript
    const name = "Alice";
    const obj = {
      name, // Shorthand for name: name
      greet() { // Shorthand method
        return `Hello, ${this.name}!`;
      },
      [name + "Key"]: "value" // Computed property
    };
    console.log(obj.greet()); // Hello, Alice!
    ```

11. **Array Methods**:
    - New methods like `forEach`, `map`, `filter`, and `find` were standardized or gained popularity with ES6.
    ```javascript
    const numbers = [1, 2, 3];
    const doubled = numbers.map(n => n * 2);
    console.log(doubled); // [2, 4, 6]
    ```

12. **Symbol Data Type**:
    - A new primitive type for creating unique identifiers, often used for object properties.
    ```javascript
    const sym = Symbol("id");
    const obj = { [sym]: 123 };
    console.log(obj[sym]); // 123
    ```

13. **Iterators and Generators**:
    - **Iterators**: Allow custom iteration over objects.
    - **Generators**: Functions that can pause and resume execution using `yield`.
    ```javascript
    function* generator() {
      yield 1;
      yield 2;
      yield 3;
    }
    const gen = generator();
    console.log(gen.next().value); // 1
    console.log(gen.next().value); // 2
    ```

### **Why ES6 Matters**
- **Improved Syntax**: Cleaner, more concise code (e.g., arrow functions, template literals).
- **Better Scoping**: `let` and `const` reduce bugs caused by `var`’s hoisting and scoping.
- **Modularity**: Modules enable better code organization and reuse.
- **Asynchronous Programming**: Promises (and later `async/await` in ES2017) simplify async code.
- **Modern Frameworks**: ES6 is the foundation for modern JavaScript frameworks like React, Angular, and Vue.js.

### **Running ES6 Code**
To run ES6 code, you need a compatible environment:
- **Browser**:
  - Most modern browsers (Chrome, Firefox, Edge) support ES6 natively.
  - For older browsers, use a transpiler like **Babel** to convert ES6 to ES5.
  - Example: Create a JS file, link it to an HTML file, and open in a browser.
  ```html
  <script src="script.js"></script>
  ```
- **Node.js**:
  - Node.js versions 6+ support most ES6 features.
  - Run with: `node script.js`.
  - For full module support, use `.mjs` files or set `"type": "module"` in `package.json`.
- **Transpilers/Bundlers**:
  - Use tools like **Babel** (transpiles ES6+ to ES5) or **Webpack** (bundles modules) for production.
  - Example setup with Babel:
    ```bash
    npm install @babel/core @babel/preset-env
    ```
    Configure `.babelrc`:
    ```json
    { "presets": ["@babel/preset-env"] }
    ```

### **Example ES6 Script**
**script.js**:
```javascript
// ES6 Features
const name = "Alice";
const greet = (who = "Guest") => `Hello, ${who}!`;
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

console.log(greet(name)); // Hello, Alice!
console.log(doubled); // [2, 4, 6]
```

- **Run in Node.js**: `node script.js`
- **Run in Browser**: Link in `<script src="script.js"></script>` and check console.

### **Backwards Compatibility**
- Not all ES6 features are supported in older environments (e.g., Internet Explorer).
- Use **polyfills** (e.g., `core-js` for Promises) or **Babel** to ensure compatibility.
- Check compatibility with [CanIUse](https://caniuse.com) or [MDN](https://developer.mozilla.org).

### **Relation to Your Previous Questions**
- **Running JS Files**: ES6 code runs in the same environments (Node.js, browser) as older JavaScript, but may require setup for modules or transpilation.
- **Data Types**: ES6 added `Symbol` and `BigInt` (later in ES2020) to JavaScript’s data types.
- **Variables**: ES6 introduced `let` and `const`, improving over `var`.

If you have a specific ES6 feature you want to explore (e.g., modules, promises) or need help setting up an ES6 environment, let me know!

---

In JavaScript, functions are first-class citizens and can be defined in several ways. Below are the **main types of functions** in JavaScript, along with their syntax, use cases, and examples. These types reflect the primary ways to declare and use functions, including modern ES6+ features.

---

### **1. Function Declaration**
A function declaration defines a named function using the `function` keyword. It is hoisted, meaning it can be called before its definition in the code.

- **Syntax**:
  ```javascript
  function functionName(parameters) {
      // Function body
      return value; // Optional
  }
  ```
- **Example**:
  ```javascript
  function add(a, b) {
      return a + b;
  }
  console.log(add(2, 3)); // Output: 5
  ```
- **Key Features**:
  - Hoisted (can be called before declaration).
  - Named function, useful for debugging.
  - Suitable for general-purpose functions.

---

### **2. Function Expression**
A function expression defines a function as part of an expression, typically assigned to a variable. It can be named or anonymous and is not hoisted.

- **Syntax**:
  ```javascript
  const variableName = function [functionName](parameters) {
      // Function body
      return value; // Optional
  };
  ```
- **Example**:
  ```javascript
  const multiply = function(x, y) {
      return x * y;
  };
  console.log(multiply(4, 5)); // Output: 20
  ```
- **Key Features**:
  - Not hoisted (must be defined before calling).
  - Can be anonymous (no function name) or named (useful for recursion).
  - Often used in assignments or as arguments to other functions.

---

### **3. Arrow Function (ES6)**
Introduced in ES6, arrow functions provide a concise syntax and do not bind their own `this` (they inherit `this` from the surrounding context). They are always anonymous.

- **Syntax**:
  ```javascript
  const variableName = (parameters) => {
      // Function body
      return value; // Optional
  };
  ```
  - Shorter syntax for single expressions:
    ```javascript
    const variableName = (parameters) => expression;
    ```
- **Example**:
  ```javascript
  const subtract = (a, b) => a - b;
  console.log(subtract(10, 3)); // Output: 7

  // With multiple statements
  const greet = (name) => {
      const message = `Hello, ${name}!`;
      return message;
  };
  console.log(greet("Alice")); // Output: Hello, Alice!
  ```
- **Key Features**:
  - Concise syntax, especially for one-liners (implicit return).
  - Lexical `this` binding (inherits `this` from parent scope).
  - Cannot be used as constructors or with `new`.
  - Ideal for callbacks and functional programming.

---

### **4. Immediately Invoked Function Expression (IIFE)**
An IIFE is a function expression that is defined and executed immediately after its creation. It’s often used to create a private scope and avoid polluting the global namespace.

- **Syntax**:
  ```javascript
  (function() {
      // Function body
  })();
  ```
  - Can also use arrow functions:
    ```javascript
    (() => {
        // Function body
    })();
    ```
- **Example**:
  ```javascript
  (function() {
      let count = 0;
      console.log("IIFE executed, count: " + count);
  })(); // Output: IIFE executed, count: 0

  // With parameters
  ((name) => {
      console.log(`Hello, ${name}!`);
  })("Bob"); // Output: Hello, Bob!
  ```
- **Key Features**:
  - Runs immediately after definition.
  - Creates a private scope to avoid global variable conflicts.
  - Useful for initialization code or one-time tasks.

---

### **5. Constructor Function**
Constructor functions are used to create objects with shared properties and methods, typically invoked with the `new` keyword. They are a precursor to ES6 classes.

- **Syntax**:
  ```javascript
  function FunctionName(parameters) {
      this.property = value;
      this.method = function() {
          // Method body
      };
  }
  ```
- **Example**:
  ```javascript
  function Person(name, age) {
      this.name = name;
      this.age = age;
      this.introduce = function() {
          return `Hi, I'm ${this.name}, ${this.age} years old.`;
      };
  }

  const person1 = new Person("Alice", 25);
  console.log(person1.introduce()); // Output: Hi, I'm Alice, 25 years old.
  ```
- **Key Features**:
  - Used with `new` to create object instances.
  - Defines a blueprint for objects with shared behavior.
  - Less common since ES6 introduced `class` syntax.

---

### **6. Class Methods (ES6)**
While not a standalone function type, methods defined within ES6 classes are functions that belong to a class. Classes provide a cleaner syntax for constructor functions and prototype-based inheritance.

- **Syntax**:
  ```javascript
  class ClassName {
      constructor(parameters) {
          // Initialize properties
      }
      methodName(parameters) {
          // Method body
      }
  }
  ```
- **Example**:
  ```javascript
  class Car {
      constructor(brand) {
          this.brand = brand;
      }
      drive() {
          return `${this.brand} is driving!`;
      }
  }

  const myCar = new Car("Toyota");
  console.log(myCar.drive()); // Output: Toyota is driving!
  ```
- **Key Features**:
  - Methods are functions attached to class instances.
  - Cleaner syntax for object-oriented programming.
  - Supports inheritance with `extends` and `super`.

---

### **7. Generator Function**
Generator functions allow you to define an iterative algorithm by pausing and resuming execution using the `yield` keyword. They return a Generator object.

- **Syntax**:
  ```javascript
  function* generatorName(parameters) {
      yield value1;
      yield value2;
      // ...
  }
  ```
- **Example**:
  ```javascript
  function* countUpTo(n) {
      for (let i = 1; i <= n; i++) {
          yield i;
      }
  }

  const counter = countUpTo(3);
  console.log(counter.next().value); // Output: 1
  console.log(counter.next().value); // Output: 2
  console.log(counter.next().value); // Output: 3
  console.log(counter.next().done); // Output: true
  ```
- **Key Features**:
  - Pauses execution with `yield` and resumes on `next()`.
  - Useful for handling asynchronous flows, infinite sequences, or large datasets.
  - Returns an iterator object.

---

### **8. Async Function (ES8)**
Async functions simplify asynchronous programming by allowing the use of `await` to pause execution until a Promise resolves. They always return a Promise.

- **Syntax**:
  ```javascript
  async function functionName(parameters) {
      // Function body with await
      return value; // Wrapped in a Promise
  }
  ```
- **Example**:
  ```javascript
  async function fetchData() {
      try {
          const response = await fetch("https://api.example.com/data");
          const data = await response.json();
          return data;
      } catch (error) {
          console.error("Error:", error);
      }
  }

  fetchData().then(data => console.log(data));
  ```
- **Key Features**:
  - Simplifies Promise-based asynchronous code.
  - `await` can only be used inside `async` functions.
  - Ideal for API calls, file reading, or other I/O operations.

---

### **9. Higher-Order Function**
A higher-order function is a function that either takes another function as an argument, returns a function, or both. This is common in functional programming.

- **Example**:
  ```javascript
  // Function as argument
  function withLogging(fn) {
      return function(...args) {
          console.log("Calling function with args:", args);
          return fn(...args);
      };
  }

  const addWithLogging = withLogging((a, b) => a + b);
  console.log(addWithLogging(2, 3)); 
  // Output: 
  // Calling function with args: [2, 3]
  // 5
  ```
- **Key Features**:
  - Enables functional programming patterns like map, filter, and reduce.
  - Common in callbacks and event handlers.
  - Enhances code reusability and composition.

---

### **Summary Table**

| Function Type              | Syntax Example                              | Hoisted? | `this` Binding       | Use Case                              |
|----------------------------|---------------------------------------------|----------|---------------------|---------------------------------------|
| Function Declaration       | `function name() {}`                       | Yes      | Dynamic             | General-purpose functions            |
| Function Expression        | `const name = function() {}`               | No       | Dynamic             | Assigned to variables, callbacks     |
| Arrow Function             | `const name = () => {}`                    | No       | Lexical             | Concise callbacks, functional code   |
| IIFE                       | `(function() {})()`                        | No       | Dynamic             | Private scope, initialization        |
| Constructor Function       | `function Name() { this.x = y; }`          | Yes      | Instance            | Object creation (pre-ES6)            |
| Class Method               | `class C { method() {} }`                  | No       | Instance            | Object-oriented programming          |
| Generator Function         | `function* name() { yield x; }`            | Yes      | Dynamic             | Iterators, asynchronous flows        |
| Async Function             | `async function name() { await x; }`       | Yes      | Dynamic             | Asynchronous operations              |
| Higher-Order Function      | `function x(fn) { return fn; }`            | Varies   | Varies              | Functional programming, callbacks    |

---

### **Notes**
- **Hoisting**: Only function declarations and `var` variables are fully hoisted. Function expressions, arrow functions, and others must be defined before use.
- **Context (`this`)**: Arrow functions inherit `this` from their surrounding scope, while other functions depend on how they’re called (e.g., `obj.method()` binds `this` to `obj`).
- **Best Practices**:
  - Use `const` for function expressions to prevent reassignment.
  - Prefer arrow functions for callbacks or when lexical `this` is needed.
  - Use async/await over raw Promises for cleaner asynchronous code.
  - Close over variables in IIFEs to avoid global pollution.

If you need a deeper dive into any specific function type, examples for a particular use case, or clarification on concepts like `this` or hoisting, let me know!