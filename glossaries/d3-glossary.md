# D3.js Glossary

A quick reference for the core concepts and terms used in the D3.js introduction.

---

## D3 (Data-Driven Documents)

A JavaScript library used for creating dynamic, interactive data visualizations in web browsers. It uses web standards like HTML, CSS, and especially SVG to bring data to life.

---

## SVG (Scalable Vector Graphics)

An XML-based image format for defining two-dimensional vector graphics. Unlike pixel-based formats (like PNG or JPG), SVGs are resolution-independent and always appear sharp. D3 uses SVG to draw shapes, lines, and text to build charts.

---

## Selection

A D3 object that represents one or more elements that you have "selected" from the HTML document. You create a selection using `d3.select()` (for a single element) or `d3.selectAll()` (for multiple elements). Once you have a selection, you can apply methods to it.

---

## Method Chaining

The process of calling multiple methods in a single, continuous line of code, with each method separated by a dot (`.`). Each method returns the selection, allowing the next method to be called on it immediately. This results in concise and readable code.

**Example:**

```javascript
d3.select('#my-element')
  .style('color', 'red')      // First, change the color
  .attr('class', 'highlight'); // Then, change the class
```

---

## `.attr(name, value)`

A D3 method used to set an **HTML attribute** on a selection. This is essential for defining the geometry and properties of SVG shapes (e.g., a circle's `r` for radius, or a rectangle's `width`).

---

## `.style(property, value)`

A D3 method used to set a **CSS style property** on a selection. This is used for visual styling like `color`, `background-color`, `opacity`, or `font-size`.

---

## Data Join

The core mechanism in D3 for connecting an array of data to a selection of DOM elements. The `.data(myArray).join("element")` pattern is the modern way to handle this. It automatically ensures there is one "element" for each item in `myArray`, handling the creation of new elements and the removal of old ones.

---

## Scale

A D3 tool that maps an input **domain** (your data values, e.g., 0 to 100) to an output **range** (your visual values, e.g., 0px to 500px). Scales are essential for translating raw data into visual properties like position, length, or color.

- **`d3.scaleLinear()`**: A common scale for mapping continuous numerical data.

---

## Axis

A visual component of a chart that displays the scale. D3's axis generators (like `d3.axisBottom()`) can automatically create an entire axis—including the main line, tick marks, and labels—based on a scale you provide.
