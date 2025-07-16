# CSS Glossary for Beginners

Welcome to CSS! This glossary is designed for new students in the Parsons Data Viz Summer Workshop. CSS (Cascading Style Sheets) is the language used to style and visually organize web pages. With CSS, you control colors, fonts, spacing, layout, and much more.

## What is CSS?

CSS lets you separate the content (HTML) from the presentation (styles). You write rules that tell the browser how to display each part of your page. Learning CSS is essential for making your websites look professional and engaging.

## Essential CSS Properties

Below is a table of the most common and useful CSS properties, grouped by category:

### Text and Font

| Property        | Description                              |
|-----------------|------------------------------------------|
| `color`         | Sets the color of text.                  |
| `font-size`     | Sets the size of the font.               |
| `font-family`   | Sets the typeface for text.              |
| `text-align`    | Sets the horizontal alignment of text.   |
| `vertical-align`| Sets the vertical alignment of text.     |
| `opacity`       | Sets the transparency level of an element.|

### Box Model and Layout

| Property      | Description                                                      |
|---------------|------------------------------------------------------------------|
| `margin`      | Space outside the border of an element.                          |
| `padding`     | Space inside the border, between the border and the content.     |
| `border`      | Sets the border around an element.                               |
| `width`       | Sets the width of an element.                                    |
| `height`      | Sets the height of an element.                                   |
| `overflow`    | Controls what happens when content overflows an element's box.   |

### Positioning and Display

| Property      | Description                                                      |
|---------------|------------------------------------------------------------------|
| `display`     | Specifies how an element is displayed (block, inline, etc.).     |
| `position`    | Specifies the positioning method (static, relative, absolute...).|
| `top`, `right`, `bottom`, `left` | Position offsets for positioned elements.      |
| `z-index`     | Controls the stack order of elements.                            |
| `float`       | Floats an element to the left or right.                          |
| `clear`       | Controls the behavior of floating elements.                      |

## CSS Units of Measurement

CSS uses different units to specify position, size, and spacing. Here are the most common:

- **px (pixels):** Fixed size, based on screen pixels. Good for precise control, but not responsive.
- **em:** Relative to the font-size of the element. Useful for scalable layouts.
- **rem:** Relative to the font-size of the root (`<html>`) element. More predictable than `em` for consistent sizing.
- **% (percent):** Relative to the parent element’s size. Great for fluid layouts.
- **vw/vh:** Viewport width/height. `1vw` is 1% of the viewport’s width, `1vh` is 1% of the viewport’s height.
- **pt (points):** Mostly used in print styles, not common for web.
- **cm/mm/in:** Centimeters, millimeters, inches. Rarely used for screen, mostly for print.

**Tip:** Prefer `em`, `rem`, `%`, and viewport units for responsive design. Use `px` for fixed elements or when exact size is needed.

## CSS Selectors

CSS selectors are patterns used to target and style HTML elements. They tell the browser which elements to apply styles to.

- **Element Selector:** Targets all elements of a type. `p { color: blue; }`
- **Class Selector:** Targets elements with a specific class. `.highlight { background: yellow; }`
- **ID Selector:** Targets a single element with a specific ID. `#main-title { font-size: 2em; }`
- **Attribute Selector:** Targets elements with a specific attribute. `input[type="text"] { border: 1px solid #ccc; }`
- **Descendant Selector:** Targets elements inside another element. `article p { margin-bottom: 1em; }`
- **Child Selector:** Targets direct children. `ul > li { list-style-type: square; }`
- **Pseudo-class Selector:** Targets elements in a specific state. `a:hover { color: red; }`

Selectors let you control which elements your CSS rules affect, making your styles flexible and powerful.

## Best Practices

- Keep your CSS organized and use comments to explain your styles.
- Use classes for reusable styles and IDs for unique elements.
- Avoid using too many IDs; prefer classes for flexibility.
- Write readable, well-indented code.
- Test your styles in multiple browsers and devices.

---

This glossary is a starting point. As you learn more, you’ll discover additional properties and techniques to make your web pages more beautiful and interactive!
