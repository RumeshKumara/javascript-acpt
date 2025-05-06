JavaScript provides a wide range of methods and techniques to manipulate the **Document Object Model (DOM)**, styles, attributes, events, and other aspects of a web page. These manipulations allow developers to dynamically update the content, structure, appearance, and behavior of a webpage. Below is a comprehensive overview of **all JavaScript manipulation types**, organized by category, with examples. This ties into your previous questions about events, `querySelector`, and template literals, where relevant.

---

## Categories **1. DOM Manipulation**
Manipulating the structure and content of the DOM (adding, removing, or modifying elements).

### Methods and Techniques
- **Selecting Elements**:
  - `document.querySelector(selector)`: Selects the first element matching a CSS selector.
  - `document.querySelectorAll(selector)`: Selects all matching elements (returns a NodeList).
  - `document.getElementById(id)`: Selects an element by ID.
  - `document.getElementsByClassName(className)`: Selects elements by class (returns an HTMLCollection).
  - `document.getElementsByTagName(tagName)`: Selects elements by tag name.
  - Example:
    ```javascript
    const button = document.querySelector("#myButton"); // From your previous question
    console.log(button.textContent);
    ```

- **Creating Elements**:
  - `document.createElement(tagName)`: Creates a new element.
  - `document.createTextNode(text)`: Creates a text node.
  - Example:
    ```javascript
    const div = document.createElement("div");
    div.textContent = "New Div";
    document.body.appendChild(div);
    ```

- **Adding/Removing Elements**:
  - `element.appendChild(child)`: Adds a child element to a parent.
  - `element.insertBefore(newNode, referenceNode)`: Inserts a node before another.
  - `element.removeChild(child)`: Removes a child element.
  - `element.replaceChild(newNode, oldNode)`: Replaces a child.
  - `element.append(...nodes)`: Appends multiple nodes or strings.
  - `element.prepend(...nodes)`: Prepends nodes or strings.
  - `element.remove()`: Removes the element itself.
  - Example:
    ```javascript
    const p = document.createElement("p");
    p.textContent = `Hello, ${name}!`; // Template literal
    document.querySelector("#container").append(p);
    ```

- **Modifying Content**:
  - `element.textContent`: Gets/sets the text content (escapes HTML).
  - `element.innerHTML`: Gets/sets the HTML content (parses HTML).
  - `element.innerText`: Gets/sets visible text (slower, considers CSS).
  - Example:
    ```javascript
    const div = document.querySelector("#myDiv");
    div.innerHTML = "<strong>Bold text</strong>";
    ```

- **Cloning Elements**:
  - `element.cloneNode(deep)`: Clones an element (deep = true includes children).
  - Example:
    ```javascript
    const clone = document.querySelector("#template").cloneNode(true);
    document.body.append(clone);
    ```

- **Traversing the DOM**:
  - `element.parentElement`: Gets the parent element.
  - `element.children`: Gets child elements (HTMLCollection).
  - `element.firstElementChild` / `element.lastElementChild`: Gets first/last child element.
  - `element.nextElementSibling` / `element.previousElementSibling`: Gets next/previous sibling element.
  - Example:
    ```javascript
    const button = document.querySelector("#myButton");
    console.log(button.parentElement);
    ```

---

## **2. Attribute Manipulation**
Modifying HTML attributes or custom data attributes of elements.

### Methods
- **Getting/Setting Attributes**:
  - `element.getAttribute(name)`: Gets an attribute’s value.
  - `element.setAttribute(name, value)`: Sets an attribute’s value.
  - `element.removeAttribute(name)`: Removes an attribute.
  - Example:
    ```javascript
    const img = document.querySelector("img");
    img.setAttribute("src", "image.jpg");
    ```

- **Direct Property Access**:
  - Many attributes (e.g., `id`, `className`, `value`) are available as properties.
  - Example:
    ```javascript
    const input = document.querySelector("#myInput");
    input.value = "New value";
    ```

- **Data Attributes**:
  - Access custom `data-*` attributes via `element.dataset`.
  - Example:
    ```javascript
    const div = document.querySelector("[data-id='123']");
    console.log(div.dataset.id); // "123"
    div.dataset.id = "456";
    ```

- **Class Manipulation**:
  - `element.className`: Gets/sets the entire class string.
  - `element.classList`: Provides methods to manipulate classes.
    - `classList.add(class)`: Adds a class.
    - `classList.remove(class)`: Removes a class.
    - `classList.toggle(class)`: Toggles a class.
    - `classList.contains(class)`: Checks if a class exists.
  - Example:
    ```javascript
    const button = document.querySelector("#myButton");
    button.classList.add("active");
    ```

---

## **3. Style Manipulation**
Changing the appearance of elements by modifying CSS styles.

### Methods
- **Inline Styles**:
  - `element.style.property`: Gets/sets inline CSS properties (camelCase, e.g., `backgroundColor`).
  - Example:
    ```javascript
    const div = document.querySelector("#myDiv");
    div.style.backgroundColor = "blue";
    div.style.fontSize = "16px";
    ```

- **Computed Styles**:
  - `window.getComputedStyle(element)`: Gets the final computed styles (including CSS rules).
  - Example:
    ```javascript
    const div = document.querySelector("#myDiv");
    const styles = window.getComputedStyle(div);
    console.log(styles.backgroundColor); // e.g., "rgb(0, 0, 255)"
    ```

- **CSS Custom Properties (Variables)**:
  - Manipulate CSS variables via `element.style.setProperty` or `getPropertyValue`.
  - Example:
    ```javascript
    document.documentElement.style.setProperty("--main-color", "red");
    ```

- **Toggling Visibility**:
  - `element.style.display = "none"`: Hides an element.
  - `element.style.display = "block"`: Shows an element.
  - Example:
    ```javascript
    const button = document.querySelector("#myButton");
    button.style.display = "none";
    ```

---

## **4. Event Manipulation**
Handling user interactions or browser events (as discussed in your previous question about JavaScript events).

### Methods
- **Event Handlers**:
  - Assign functions to `on<event>` properties (e.g., `onclick`, `onchange`).
  - Example:
    ```javascript
    const button = document.querySelector("#myButton");
    button.onclick = () => alert(`Clicked, ${user}!`); // Template literal
    ```

- **Event Listeners**:
  - `element.addEventListener(event, handler, options)`: Attaches an event listener.
  - `element.removeEventListener(event, handler)`: Removes a listener.
  - Example:
    ```javascript
    button.addEventListener("click", () => console.log("Clicked!"));
    ```

- **Event Creation**:
  - `new Event(type)` or `new CustomEvent(type, details)`: Creates a custom event.
  - `element.dispatchEvent(event)`: Triggers the event.
  - Example:
    ```javascript
    const myEvent = new CustomEvent("myEvent", { detail: { data: "test" } });
    button.dispatchEvent(myEvent);
    button.addEventListener("myEvent", (e) => console.log(e.detail.data));
    ```

- **Preventing Default Behavior**:
  - `event.preventDefault()`: Stops the default action (e.g., form submission).
  - Example:
    ```javascript
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Form submission prevented");
    });
    ```

---

## **5. Form Manipulation**
Interacting with form elements and their values.

### Methods
- **Accessing Form Data**:
  - `element.value`: Gets/sets the value of input, select, or textarea.
  - `form.elements`: Accesses all form controls by name or index.
  - Example:
    ```javascript
    const input = document.querySelector("#myInput");
    console.log(input.value);
    input.value = "New value";
    ```

- **Form Submission**:
  - `form.submit()`: Programmatically submits a form.
  - `form.reset()`: Resets form fields to default values.
  - Example:
    ```javascript
    const form = document.querySelector("#myForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Submitted!");
    });
    ```

- **Validation**:
  - `element.checkValidity()`: Checks if an input meets HTML5 validation rules.
  - `element.setCustomValidity(message)`: Sets a custom validation message.
  - Example:
    ```javascript
    const input = document.querySelector("#myInput");
    input.addEventListener("input", () => {
      if (!input.value.includes("@")) {
        input.setCustomValidity("Must contain @");
      } else {
        input.setCustomValidity("");
      }
    });
    ```

---

## **6. Animation and Transition Manipulation**
Controlling animations, transitions, or dynamic effects.

### Methods
- **Request Animation Frame**:
  - `window.requestAnimationFrame(callback)`: Schedules a function to run before the next repaint (for smooth animations).
  - Example:
    ```javascript
    let pos = 0;
    function move() {
      pos += 1;
      document.querySelector("#box").style.left = `${pos}px`; // Template literal
      if (pos < 200) requestAnimationFrame(move);
    }
    requestAnimationFrame(move);
    ```

- **CSS Transitions/Animations**:
  - Manipulate via `element.style` or `classList` to trigger CSS transitions/animations.
  - Example:
    ```javascript
    const box = document.querySelector("#box");
    box.classList.add("animate"); // Triggers CSS animation
    ```

- **Web Animations API**:
  - `element.animate(keyframes, options)`: Creates programmatic animations.
  - Example:
    ```javascript
    document.querySelector("#box").animate(
      [{ transform: "translateX(0)" }, { transform: "translateX(100px)" }],
      { duration: 1000, iterations: Infinity }
    );
    ```

---

## **7. Storage and Data Manipulation**
Managing data in the browser (e.g., localStorage, sessionStorage).

### Methods
- **LocalStorage/SessionStorage**:
  - `localStorage.setItem(key, value)`: Stores data persistently.
  - `localStorage.getItem(key)`: Retrieves data.
  - `localStorage.removeItem(key)`: Removes data.
  - Example:
    ```javascript
    localStorage.setItem("username", "Alice");
    console.log(localStorage.getItem("username")); // "Alice"
    ```

- **Cookies**:
  - `document.cookie`: Gets/sets cookies.
  - Example:
    ```javascript
    document.cookie = "username=Alice; max-age=3600";
    ```

---

## **8. Canvas and Graphics Manipulation**
Manipulating `<canvas>` elements for 2D or WebGL graphics.

### Methods
- **2D Canvas**:
  - `canvas.getContext("2d")`: Gets a 2D drawing context.
  - Methods like `fillRect`, `drawImage`, `fillText`.
  - Example:
    ```javascript
    const canvas = document.querySelector("#myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 100, 100);
    ```

- **WebGL**:
  - `canvas.getContext("webgl")`: For 3D graphics.
  - Example: Requires shaders and more setup (not shown for brevity).

---

## **9. History and Location Manipulation**
Controlling browser history and URL.

### Methods
- **Window History**:
  - `history.pushState(state, title, url)`: Adds a history entry.
  - `history.replaceState(state, title, url)`: Replaces the current entry.
  - `history.back()` / `history.forward()`: Navigates history.
  - Example:
    ```javascript
    history.pushState({ page: 1 }, "", "/page1");
    ```

- **Window Location**:
  - `window.location`: Gets/sets the current URL or parts (e.g., `href`, `pathname`).
  - Example:
    ```javascript
    window.location.href = "https://example.com";
    ```

---

## **10. AJAX and Fetch Manipulation**
Fetching and sending data to servers.

### Methods
- **Fetch API**:
  - `fetch(url, options)`: Makes HTTP requests.
  - Example:
    ```javascript
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => console.log(data));
    ```

- **XMLHttpRequest** (older):
  - Example:
    ```javascript
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.example.com/data");
    xhr.onload = () => console.log(xhr.response);
    xhr.send();
    ```

---

## **11. Error Handling Manipulation**
Managing errors in JavaScript.

### Methods
- **Try/Catch**:
  - `try { ... } catch (error) { ... }`: Handles runtime errors.
  - Example:
    ```javascript
    try {
      const button = document.querySelector("#nonExistent");
      button.click();
    } catch (error) {
      console.error("Error:", error.message);
    }
    ```

- **Error Events**:
  - `window.onerror`: Catches unhandled errors.
  - Example:
    ```javascript
    window.onerror = (msg, url, line) => {
      console.log(`Error: ${msg} at ${url}:${line}`); // Template literal
    };
    ```

---

## **12. Internationalization and Formatting**
Manipulating dates, numbers, or strings for localization.

### Methods
- **Intl API**:
  - `Intl.DateTimeFormat`: Formats dates.
  - `Intl.NumberFormat`: Formats numbers.
  - Example:
    ```javascript
    const date = new Date();
    console.log(new Intl.DateTimeFormat("en-US").format(date));
    ```

---

## **13. Module and Script Manipulation**
Dynamically loading or manipulating scripts.

### Methods
- **Dynamic Script Loading**:
  - Create a `<script>` element and append it.
  - Example:
    ```javascript
    const script = document.createElement("script");
    script.src = "myscript.js";
    document.head.appendChild(script);
    ```

- **ES Modules**:
  - Use `import`/`export` dynamically.
  - Example:
    ```javascript
    import("./module.js").then((module) => {
      module.myFunction();
    });
    ```

---

## **14. Accessibility (a11y) Manipulation**
Enhancing accessibility programmatically.

### Methods
- **ARIA Attributes**:
  - Set ARIA attributes via `setAttribute`.
  - Example:
    ```javascript
    const button = document.querySelector("#myButton");
    button.setAttribute("aria-label", "Close dialog");
    ```

- **Focus Management**:
  - `element.focus()`: Sets focus.
  - `element.blur()`: Removes focus.
  - Example:
    ```javascript
    document.querySelector("#myInput").focus();
    ```

---

## Example Combining Multiple Manipulations
This example uses DOM manipulation, event handling, style manipulation, and template literals (from your previous questions):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS Manipulation</title>
  <style>
    .highlight { background-color: yellow; }
  </style>
</head>
<body>
  <button id="myButton">Add Item</button>
  <ul id="list"></ul>

  <script>
    const button = document.querySelector("#myButton");
    const list = document.querySelector("#list");
    let count = 0;

    button.addEventListener("click", () => {
      // DOM manipulation
      const li = document.createElement("li");
      li.textContent = `Item ${++count}`; // Template literal

      // Style manipulation
      li.style.color = "blue";

      // Class manipulation
      li.classList.add("highlight");

      // Attribute manipulation
      li.setAttribute("data-id", count);

      // Append to list
      list.appendChild(li);

      // Event manipulation (remove on click)
      li.addEventListener("click", () => li.remove());
    });
  </script>
</body>
</html>
```

### What It Does:
- Clicking the button adds a new `<li>` to the list with dynamic text (using template literals).
- Each item has a blue color, a `highlight` class, and a `data-id` attribute.
- Clicking an item removes it (event manipulation).

---

## Notes
- **Performance**: Avoid excessive DOM manipulation (e.g., repeated `innerHTML`) as it can be slow. Use `DocumentFragment` for batch updates.
- **Security**: Sanitize user input when using `innerHTML` to prevent XSS attacks.
- **Modern APIs**: Prefer modern methods like `querySelector`, `classList`, and `fetch` over older ones (e.g., `getElementsByClassName`, `XMLHttpRequest`).
- **Connection to Your Questions**:
  - **Events**: Event handling (`addEventListener`) is used extensively.
  - **querySelector**: Used to select elements like `#myButton`.
  - **Template Literals**: Used for dynamic text (e.g., `` `Item ${count}` ``).
  - **Event Handlers**: Could be rewritten with `onclick` for simplicity, but `addEventListener` is more flexible.

This covers the major types of JavaScript manipulation. If you want a deeper dive into any category (e.g., animations, canvas, or accessibility) or more examples, let me know!