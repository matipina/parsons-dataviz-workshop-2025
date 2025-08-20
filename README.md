# Parsons Data Viz Summer Workshop 2025

Welcome to the official repository for the 2025 Parsons Data Visualization Summer Workshop!

## Description

A comprehensive collection of materials, glossaries, and interactive examples for learning web development fundamentals and data visualization. This 5-week hybrid course is designed for students to independently study the weekly materials and then join weekly meetings to review content, ask questions, and discuss practical examples together.

The workshop progresses from basic web technologies (HTML, CSS) to JavaScript programming, interactive data visualization with D3.js, modern JavaScript concepts for data processing, and finally to essential tools and workflows for data science projects.

## Prerequisites

- **GitHub Account**: Required for the program (create one at [github.com](https://github.com))
- **Git**: Required to clone the repository and for Week 5 version control
- **VS Code**: Recommended code editor with Live Server extension
- **Web Browser**: Modern browser with developer tools (Chrome, Firefox, Safari, Edge)

## Getting Started

### Step 1: Set Up Your Development Environment

1. **Install Git**: Download from [git-scm.com](https://git-scm.com/) if not already installed
2. **Install VS Code**: Download from [code.visualstudio.com](https://code.visualstudio.com/)
3. **Install Live Server Extension**:
   - Open VS Code
   - Go to Extensions (Ctrl/Cmd + Shift + X)
   - Search for "Live Server" by Ritwick Dey
   - Click Install

### Step 2: Clone the Repository

1. **Open your terminal** (Terminal on Mac/Linux, Git Bash or Command Prompt on Windows)

2. **Navigate to where you want the project**:
   ```bash
   cd ~/Documents
   # or wherever you keep your projects
   ```

3. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/parsons-dataviz-workshop-2025.git
   ```

4. **Navigate into the project folder**:
   ```bash
   cd parsons-dataviz-workshop-2025
   ```

### Step 3: Open the Project in VS Code

1. **Open VS Code**
2. **Open the project folder**: File → Open Folder → Select the `parsons-dataviz-workshop-2025` folder
3. **You should see all weeks and folders in the sidebar**

## How to Use This Repository

### Running Examples with Live Server

**Important**: All HTML files should be opened using Live Server (not by double-clicking) to ensure JavaScript examples work properly and avoid CORS issues.

1. **In VS Code**, navigate to any `index.html` file (e.g., `week1/index.html`)
2. **Right-click** on the HTML file
3. **Select "Open with Live Server"**
4. **Your browser will open** with the live example running at `http://localhost:5500`

### Viewing JavaScript Outputs

1. **Open your browser's developer console**:
   - **Chrome/Edge**: F12 or Ctrl/Cmd + Shift + I
   - **Firefox**: F12 or Ctrl/Cmd + Shift + I
   - **Safari**: Cmd + Option + I (enable Developer menu first)

2. **Click the "Console" tab** to see JavaScript outputs and experiment with code

### Using the Glossaries

- **Keep glossaries open** while coding for quick reference
- **Bookmark the `glossaries/` folder** in your browser
- **Use Ctrl/Cmd + F** to search for specific terms within glossary files

### Experimenting with Code

- **All examples are meant to be modified** - change values, add new code, break things!
- **Save changes** and Live Server will automatically refresh your browser
- **Use the console** to test small pieces of JavaScript code

## Repository Structure

```text
📁 Parsons Data Viz Summer Workshop 2025/
├── 📁 glossaries/           # Quick reference guides for all concepts
│   ├── html-glossary.md     # HTML elements and attributes
│   ├── css-glossary.md      # CSS selectors, properties, and units
│   ├── js-glossary.md       # JavaScript data types and operators
│   └── d3-glossary.md       # D3.js methods and concepts
├── 📁 week1/                # Introduction to HTML & CSS
├── 📁 week2/                # JavaScript fundamentals
├── 📁 week3/                # JavaScript interactivity & D3.js introduction
│   ├── 1-js-interactivity-demo/
│   ├── 2-d3-introduction/
│   └── 3-d3-real-time-example/
├── 📁 week4/                # Modern JavaScript & advanced D3.js
│   ├── 0-js-concepts/
│   └── 1-d3-data-processing/
└── 📁 week5/                # Data science toolkit & project workflow
    ├── overview.md
    ├── W5-project-guide.md
    └── python-intro.ipynb
```

## Weekly Learning Path

### Week 1: Introduction to Web Development

**Foundation: HTML & CSS**

- **Learning Objectives:**
  - Understand how the web works and the role of HTML, CSS, and JavaScript
  - Learn HTML structure, semantic elements, and document organization
  - Master CSS styling, selectors, and responsive design basics

- **Key Topics:**
  - What is the web?
  - HTML basics (structure, elements, semantic vs. non-semantic tags)
  - CSS basics (styling, selectors, units, layout)

- **How to use:**
  - Open `week1/index.html` with Live Server to view the example site
  - Explore the clean, semantic HTML and modern CSS styling
  - Reference `glossaries/html-glossary.md` and `glossaries/css-glossary.md`

---

### Week 2: Introduction to JavaScript

**Programming Fundamentals**

- **Learning Objectives:**
  - Understand JavaScript's role in web development
  - Learn core programming concepts: variables, data types, operators
  - Master control flow with loops and functions

- **Key Topics:**
  - What is JavaScript and how it works
  - Data Types (strings, numbers, booleans, arrays, objects)
  - Variables and operators
  - Control flow: loops and conditional statements
  - Functions and scope

- **How to use:**
  - Open `week2/index.html` with Live Server (loads `examples.js` with all code examples)
  - Open browser console (F12) to see outputs and experiment with code
  - Reference `glossaries/js-glossary.md` for syntax and concepts

---

### Week 3: JavaScript Interactivity and D3.js Introduction

**Making Web Pages Interactive**

Week 3 provides a comprehensive bridge from static web pages to interactive data visualization, divided into three progressive modules:

#### 3.1 JavaScript Interactivity Demo

- **Topics:** DOM manipulation, event handling, conditional logic
- **How to use:** Open `week3/1-js-interactivity-demo/index.html` with Live Server
- **What you'll see:** The Week 1 website enhanced with JavaScript interactions, including click events, if/else conditions, and for loops

#### 3.2 D3.js Introduction

- **Topics:** D3 selections, method chaining, data binding, scales, and axes
- **How to use:** Open `week3/2-d3-introduction/index.html` with Live Server
- **What you'll see:** Core D3.js concepts with step-by-step interactive examples and detailed explanations

#### 3.3 Real-Time D3.js Example

- **Topics:** Dynamic data updates, transitions, and real-time visualization
- **How to use:** Open `week3/3-d3-real-time-example/index.html` with Live Server
- **What you'll see:** A live bar chart that updates with simulated real-time data

- **Resources:** New D3.js glossary available in `glossaries/d3-glossary.md`

---

### Week 4: Modern JavaScript & Advanced D3.js Data Processing

**Professional JavaScript for Data Visualization**

Week 4 focuses on modern JavaScript concepts essential for working with D3.js and processing real data:

#### 4.1 Modern JavaScript Concepts

- **Topics:** Arrow functions, Map objects, async/await, and modern syntax
- **How to use:** Open `week4/0-js-concepts/index.html` with Live Server
- **What you'll learn:** Essential modern JavaScript patterns used in D3.js and data processing

#### 4.2 D3.js Data Processing

- **Topics:** Loading CSV data, grouping, aggregating, time parsing, and data transformation
- **How to use:** Open `week4/1-d3-data-processing/index.html` with Live Server
- **What you'll see:** Interactive examples of real data processing workflows with sample CSV data
- **Includes:** Sample dataset (`data.csv`) for hands-on practice

---

### Week 5: Data Science Toolkit & Project Workflow

**Essential Tools for Data Science Projects**

Week 5 introduces the broader ecosystem of tools and workflows used in professional data science and visualization work:

#### Core Topics Covered

1. **Terminal/Command Line Interface (CLI)** - File navigation, script execution, automation
2. **Git & GitHub** - Version control, collaboration, project sharing
3. **Python for Data Science** - pandas, matplotlib, Jupyter notebooks
4. **Frontend Frameworks** - React, Vue, Svelte overview
5. **AI Tools** - ChatGPT, GitHub Copilot, and prompt engineering

#### Materials

- **`overview.md`** - Comprehensive guide to all toolkit topics with examples
- **`W5-project-guide.md`** - Step-by-step project workflow with terminal commands, Git instructions, and AI prompt templates
- **`python-intro.ipynb`** - Interactive Jupyter notebook covering Python basics, pandas data manipulation, matplotlib visualization, and library installation

#### Hands-on Project

Students create and publish their first data science repository using:

- Terminal commands for project setup
- Git/GitHub for version control and sharing
- Python/Jupyter for data analysis
- AI tools for code assistance and problem-solving

## Glossaries & Quick References

The `glossaries/` folder contains comprehensive reference materials:

- **`html-glossary.md`** - HTML elements, attributes, and semantic markup
- **`css-glossary.md`** - CSS selectors, properties, units, and layout concepts
- **`js-glossary.md`** - JavaScript data types, operators, and built-in methods
- **`d3-glossary.md`** - D3.js selections, scales, data binding, and visualization methods

These glossaries are designed for quick lookups during coding and serve as study aids between sessions.

## Technical Requirements

- **GitHub Account**: Required for the program (sign up at [github.com](https://github.com))
- **Git**: Required for cloning repository and version control
- **VS Code**: Recommended code editor with Live Server extension
- **Web Browser**: Modern browser with developer tools (Chrome, Firefox, Safari, Edge)
- **Python**: For Week 5 (can use Google Colab as alternative)

## Learning Approach

This workshop follows a **progressive, hands-on approach**:

1. **Self-paced study** of weekly materials using Live Server
2. **Interactive examples** that run directly in your browser
3. **Practical exercises** building real projects
4. **Weekly group sessions** for questions, discussion, and troubleshooting
5. **Reference materials** for continued learning

Each week builds on previous concepts while introducing new tools and techniques used in professional web development and data visualization workflows.

## Troubleshooting

### Common Issues

- **JavaScript not working?** Make sure you're using Live Server, not opening files directly
- **Live Server not working?** Make sure the extension is installed and enabled in VS Code

### Getting Help

- **During workshop:** Ask questions in weekly group sessions
- **Glossaries:** Use reference materials for concept review
- **Code exploration:** All examples are designed to be modified and experimented with

---

**Instructor: Matías Piña**  
Email: <pina@newschool.edu>

*Happy coding and visualizing! 📊✨*
