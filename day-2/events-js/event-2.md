JavaScript events are actions or occurrences that happen in the browser, such as user interactions (clicks, key presses) or system events (page load, resizing). They are handled using event listeners to trigger specific code when the event occurs. Below, I’ll list common JavaScript events, categorized by type, and provide example code for each to demonstrate their usage.

### Categories of JavaScript Events
1. **Mouse Events**
2. **Keyboard Events**
3. **Form Events**
4. **Window/Document Events**
5. **Touch Events**
6. **Drag and Drop Events**
7. **Media Events**
8. **Other Events**

### 1. Mouse Events
These are triggered by mouse interactions.

| Event        | Description                              | Example Trigger                     |
|--------------|------------------------------------------|-------------------------------------|
| `click`      | Fires when an element is clicked.        | Clicking a button.                  |
| `dblclick`   | Fires on a double-click.                 | Double-clicking text.               |
| `mousedown`  | Fires when a mouse button is pressed.    | Pressing a mouse button.            |
| `mouseup`    | Fires when a mouse button is released.   | Releasing a mouse button.           |
| `mousemove`  | Fires when the mouse moves over an element. | Moving the cursor over a div.     |
| `mouseover`  | Fires when the mouse enters an element.  | Hovering over an image.             |
| `mouseout`   | Fires when the mouse leaves an element.  | Moving the cursor off an element.   |
| `contextmenu`| Fires on right-click (context menu).     | Right-clicking an element.          |

**Example Code (Mouse Events):**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Mouse Events</title>
</head>
<body>
  <button id="btn">Click Me</button>
  <div id="box" style="width:100px;height:100px;background:lightblue;"></div>
  <p id="output"></p>

  <script>
    const btn = document.getElementById('btn');
    const box = document.getElementById('box');
    const output = document.getElementById('output');

    // Click event
    btn.addEventListener('click', () => {
      output.textContent = 'Button clicked!';
    });

    // Double-click event
    btn.addEventListener('dblclick', () => {
      output.textContent = 'Button double-clicked!';
    });

    // Mouseover event
    box.addEventListener('mouseover', () => {
      box.style.background = 'lightgreen';
      output.textContent = 'Mouse over box!';
    });

    // Mouseout event
    box.addEventListener('mouseout', () => {
      box.style.background = 'lightblue';
      output.textContent = 'Mouse left box!';
    });

    // Contextmenu event (right-click)
    box.addEventListener('contextmenu', (e) => {
      e.preventDefault(); // Prevent default context menu
      output.textContent = 'Right-click detected!';
    });
  </script>
</body>
</html>
```

### 2. Keyboard Events
Triggered by keyboard interactions.

| Event       | Description                              | Example Trigger                     |
|-------------|------------------------------------------|-------------------------------------|
| `keydown`   | Fires when a key is pressed down.        | Pressing any key.                   |
| `keyup`     | Fires when a key is released.            | Releasing a key.                    |
| `keypress`  | Fires when a key that produces a character is pressed (deprecated). | Typing a letter. |

**Example Code (Keyboard Events):**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Keyboard Events</title>
</head>
<body>
  <input type="text" id="input" placeholder="Type here...">
  <p id="output"></p>

  <script>
    const input = document.getElementById('input');
    const output = document.getElementById('output');

    // Keydown event
    input.addEventListener('keydown', (e) => {
      output.textContent = `Key pressed: ${e.key}`;
    });

    // Keyup event
    input.addEventListener('keyup', (e) => {
      output.textContent = `Key released: ${e.key}`;
    });
  </script>
</body>
</html>
```

### 3. Form Events
Related to form interactions.

| Event       | Description                              | Example Trigger                     |
|-------------|------------------------------------------|-------------------------------------|
| `submit`    | Fires when a form is submitted.          | Clicking a submit button.           |
| `change`    | Fires when an input’s value changes.     | Selecting a dropdown option.        |
| `input`     | Fires when an input’s value is modified. | Typing in a text field.             |
| `focus`     | Fires when an element gains focus.       | Clicking into a text field.         |
| `blur`      | Fires when an element loses focus.       | Clicking outside a text field.      |

**Example Code (Form Events):**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Form Events</title>
</head>
<body>
  <form id="form">
    <input type="text" id="name" placeholder="Enter name">
    <select id="color">
      <option value="">Select color</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
    </select>
    <button type="submit">Submit</button>
  </form>
  <p id="output"></p>

  <script>
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const colorSelect = document.getElementById('color');
    const output = document.getElementById('output');

    // Submit event
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission
      output.textContent = 'Form submitted!';
    });

    // Change event (for select)
    colorSelect.addEventListener('change', (e) => {
      output.textContent = `Selected color: ${e.target.value}`;
    });

    // Input event (for text input)
    nameInput.addEventListener('input', (e) => {
      output.textContent = `Typing: ${e.target.value}`;
    });

    // Focus event
    nameInput.addEventListener('focus', () => {
      output.textContent = 'Input focused!';
    });

    // Blur event
    nameInput.addEventListener('blur', () => {
      output.textContent = 'Input lost focus!';
    });
  </script>
</body>
</html>
```

### 4. Window/Document Events
Related to the browser window or document.

| Event        | Description                              | Example Trigger                     |
|--------------|------------------------------------------|-------------------------------------|
| `load`       | Fires when the page finishes loading.    | Page fully loaded.                  |
| `resize`     | Fires when the window is resized.        | Resizing the browser window.        |
| `scroll`     | Fires when the user scrolls.             | Scrolling the page.                 |
| `unload`     | Fires when the page is unloaded (rarely used). | Closing the tab.              |
| `DOMContentLoaded` | Fires when the HTML is fully parsed. | DOM is ready, before images load. |

**Example Code (Window/Document Events):**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Window Events</title>
</head>
<body style="height:2000px;">
  <p id="output"></p>

  <script>
    const output = document.getElementById('output');

    // Load event
    window.addEventListener('load', () => {
      output.textContent = 'Page fully loaded!';
    });

    // DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOM fully parsed!');
    });

    // Resize event
    window.addEventListener('resize', () => {
      output.textContent = `Window resized to ${window.innerWidth}x${window.innerHeight}`;
    });

    // Scroll event
    window.addEventListener('scroll', () => {
      output.textContent = `Scrolled to Y: ${window.scrollY}`;
    });
  </script>
</body>
</html>
```

### 5. Touch Events
For touch-enabled devices.

| Event        | Description                              | Example Trigger                     |
|--------------|------------------------------------------|-------------------------------------|
| `touchstart` | Fires when a touch point is placed.      | Touching the screen.                |
| `touchmove`  | Fires when a touch point moves.          | Dragging a finger on the screen.    |
| `touchend`   | Fires when a touch point is removed.     | Lifting a finger off the screen.    |

**Example Code (Touch Events):**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Touch Events</title>
</head>
<body>
  <div id="touchArea" style="width:200px;height:200px;background:lightcoral;"></div>
  <p id="output"></p>

  <script>
    const touchArea = document.getElementById('touchArea');
    const output = document.getElementById('output');

    // Touchstart event
    touchArea.addEventListener('touchstart', (e) => {
      output.textContent = 'Touch started!';
    });

    // Touchmove event
    touchArea.addEventListener('touchmove', (e) => {
      e.preventDefault(); // Prevent scrolling
      const touch = e.touches[0];
      output.textContent = `Touch moving at X:${touch.clientX}, Y:${touch.clientY}`;
    });

    // Touchend event
    touchArea.addEventListener('touchend', () => {
      output.textContent = 'Touch ended!';
    });
  </script>
</body>
</html>
```

### 6. Drag and Drop Events
For drag-and-drop interactions.

| Event        | Description                              | Example Trigger                     |
|--------------|------------------------------------------|-------------------------------------|
| `dragstart`  | Fires when dragging starts.              | Starting to drag an element.        |
| `drag`       | Fires while dragging.                    | Dragging an element.                |
| `dragend`    | Fires when dragging ends.                | Releasing a dragged element.        |
| `dragover`   | Fires when a dragged item is over a drop target. | Dragging over a drop zone.   |
| `drop`       | Fires when an item is dropped.           | Dropping an element in a drop zone. |

**Example Code (Drag and Drop Events):**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Drag and Drop</title>
  <style>
    .draggable { width: 100px; height: 100px; background: lightgreen; }
    .dropzone { width: 200px; height: 200px; background: lightgray; margin-top: 10px; }
  </style>
</head>
<body>
  <div id="dragItem" class="draggable" draggable="true">Drag Me</div>
  <div id="dropZone" class="dropzone">Drop Here</div>
  <p id="output"></p>

  <script>
    const dragItem = document.getElementById('dragItem');
    const dropZone = document.getElementById('dropZone');
    const output = document.getElementById('output');

    // Dragstart event
    dragItem.addEventListener('dragstart', () => {
      output.textContent = 'Dragging started!';
    });

    // Dragend event
    dragItem.addEventListener('dragend', () => {
      output.textContent = 'Dragging ended!';
    });

    // Dragover event (required for drop to work)
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault(); // Allow drop
    });

    // Drop event
    dropZone.addEventListener('drop', () => {
      output.textContent = 'Item dropped!';
      dropZone.appendChild(dragItem);
    });
  </script>
</body>
</html>
```

### 7. Media Events
For audio, video, or image elements.

| Event        | Description                              | Example Trigger                     |
|--------------|------------------------------------------|-------------------------------------|
| `play`       | Fires when media starts playing.         | Clicking play on a video.           |
| `pause`      | Fires when media is paused.              | Clicking pause on a video.          |
| `ended`      | Fires when media finishes.               | Video reaching the end.             |
| `volumechange` | Fires when volume changes.             | Adjusting volume.                   |

**Example Code (Media Events):**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Media Events</title>
</head>
<body>
  <video id="video" controls>
    <source src="sample.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p id="output"></p>

  <script>
    const video = document.getElementById('video');
    const output = document.getElementById('output');

    // Play event
    video.addEventListener('play', () => {
      output.textContent = 'Video is playing!';
    });

    // Pause event
    video.addEventListener('pause', () => {
      output.textContent = 'Video is paused!';
    });

    // Ended event
    video.addEventListener('ended', () => {
      output.textContent = 'Video has ended!';
    });

    // Volumechange event
    video.addEventListener('volumechange', () => {
      output.textContent = `Volume changed to ${video.volume}`;
    });
  </script>
</body>
</html>
```

**Note:** For the media example, replace `sample.mp4` with an actual video file path.

### 8. Other Events
Miscellaneous events that don’t fit neatly into other categories.

| Event        | Description                              | Example Trigger                     |
|--------------|------------------------------------------|-------------------------------------|
| `copy`       | Fires when content is copied.            | Copying text (Ctrl+C).              |
| `cut`        | Fires when content is cut.               | Cutting text (Ctrl+X).              |
| `paste`      | Fires when content is pasted.            | Pasting text (Ctrl+V).              |
| `error`      | Fires when an error occurs (e.g., image fails to load). | Broken image link.           |
| `transitionend` | Fires when a CSS transition completes. | After a fade animation finishes.    |

**Example Code (Other Events):**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Other Events</title>
  <style>
    #box { width: 100px; height: 100px; background: lightblue; transition: background 1s; }
    #box:hover { background: lightpink; }
  </style>
</head>
<body>
  <textarea id="textArea" placeholder="Copy, cut, or paste here..."></textarea>
  <div id="box"></div>
  <img id="img" src="invalid.jpg" alt="Test Image">
  <p id="output"></p>

  <script>
    const textArea = document.getElementById('textArea');
    const box = document.getElementById('box');
    const img = document.getElementById('img');
    const output = document.getElementById('output');

    // Copy event
    textArea.addEventListener('copy', () => {
      output.textContent = 'Text copied!';
    });

    // Paste event
    textArea.addEventListener('paste', () => {
      output.textContent = 'Text pasted!';
    });

    // Error event (for image)
    img.addEventListener('error', () => {
      output.textContent = 'Image failed to load!';
    });

    // Transitionend event
    box.addEventListener('transitionend', () => {
      output.textContent = 'Transition completed!';
    });
  </script>
</body>
</html>
```

### Notes on Event Handling
- **Event Listener Syntax:** Use `addEventListener(event, callback)` to attach events. Avoid inline event handlers (e.g., `onclick="..."`) for better maintainability.
- **Event Object:** The callback receives an event object (e.g., `e`) with properties like `e.target` (element triggering the event) or `e.key` (key pressed).
- **Prevent Default:** Use `e.preventDefault()` to stop default behaviors (e.g., form submission, context menu).
- **Event Bubbling:** Events propagate from the target element up the DOM. Use `e.stopPropagation()` to prevent this if needed.
- **Removing Listeners:** Use `removeEventListener(event, callback)` to detach listeners, but the callback must be a named function (not anonymous).

### Additional Example (Combining Multiple Events)
Here’s a practical example combining several event types to create an interactive UI:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Interactive UI</title>
  <style>
    #canvas { width: 300px; height: 150px; background: lightyellow; border: 1px solid #000; }
    #output { margin-top: 10px; }
  </style>
</head>
<body>
  <input type="text" id="input" placeholder="Type and press Enter">
  <div id="canvas"></div>
  <p id="output"></p>

  <script>
    const input = document.getElementById('input');
    const canvas = document.getElementById('canvas');
    const output = document.getElementById('output');

    // Keyboard: Detect Enter key
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        output.textContent = `You typed: ${input.value}`;
        input.value = '';
      }
    });

    // Mouse: Change canvas color on click
    canvas.addEventListener('click', () => {
      canvas.style.background = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
      output.textContent = 'Canvas color changed!';
    });

    // Mouse: Show coordinates on mousemove
    canvas.addEventListener('mousemove', (e) => {
      output.textContent = `Mouse at X:${e.offsetX}, Y:${e.offsetY}`;
    });

    // Window: Log window resize
    window.addEventListener('resize', () => {
      output.textContent = `Window resized to ${window.innerWidth}x${window.innerHeight}`;
    });
  </script>
</body>
</html>
```

This covers the major JavaScript events with practical examples. If you need more specific examples, deeper explanations, or help with a particular event, let me know!