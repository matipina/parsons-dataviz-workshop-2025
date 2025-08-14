# Week 5: Data Visualization Toolkit – Essential Tools & Concepts

## 1. Using the Terminal/CLI

- **What is the command line?**
  - A text-based interface for interacting with your computer.
  - Used for navigation, running scripts, and automating tasks.
- **Basic commands:**
  - `ls` – list files
  - `cd` – change directory
  - `pwd` – print working directory
  - `mkdir` – make directory
  - `touch` – create a file
  - `cp`, `mv`, `rm` – copy, move, remove files
  - Run a script: `python script.py`

---

## Installing Python Libraries

Before you start coding in Python, you may need to install extra libraries (like pandas or matplotlib). You can do this in two ways:

- **In the terminal:**

  ```bash
  pip install pandas matplotlib
  ```

- **In a Jupyter notebook cell:**

  ```python
  !pip install pandas matplotlib
  ```

Google Colab already has many libraries pre-installed, but you can use the same commands if you need more.

---

## 2. Git & GitHub (Version Control & Collaboration)

- **What is version control?**
  - A system for tracking changes to code and data files over time.
  - Lets you revert to previous versions, experiment safely, and collaborate with others.
- **Key Git concepts:**
  - Repository (repo): a project folder tracked by Git
  - Commit: a snapshot of your changes
  - Branch: a parallel version of your project
  - Push/Pull: send/receive changes to/from a remote repo (like GitHub)
- **What is GitHub?**
  - A website for hosting Git repositories and collaborating with others.
- **Basic workflow:**
  1. Clone a repo: `git clone <url>`
  2. Make changes and commit: `git add .`, `git commit -m "message"`
  3. Push changes: `git push`
  4. Open a pull request on GitHub to propose your changes

## 3. Basics of Python (with Jupyter Notebook & Google Colab)

- **Why Python?**
  - Widely used in data science and visualization
  - Huge ecosystem of libraries
- **Running Python:**
  - From the terminal: `python myscript.py`
  - In a Jupyter Notebook: interactive, cell-based coding
  - In Google Colab: cloud-based Jupyter notebooks, easy sharing
- **Basic syntax:**
  - Variables: `x = 5`
  - Lists: `mylist = [1, 2, 3]`
  - Loops: `for item in mylist: ...`
  - Functions: `def myfunc(x): ...`
- **Popular libraries:**
  - `pandas` (data analysis), `matplotlib`/`seaborn` (visualization)

## 4. Frontend Frameworks (Modern Web Visualization)

- **What is a frontend framework?**
  - A set of tools for building interactive web apps (beyond plain HTML/JS)
- **Examples:**
  - React, Vue, Svelte
- **Why use them?**
  - Make it easier to build complex, interactive UIs
  - Many data viz tools/libraries are built on top of these frameworks
- **Relation to D3:**
  - D3 can be used inside frameworks for custom visualizations

## 5. AI Tools for Coding & Learning

- **What are AI coding assistants?**
  - Tools that help you write, debug, and understand code (e.g., GitHub Copilot, Gemini, ChatGPT)
- **How to use them:**
  - In VS Code (Copilot extension)
  - In the browser (ChatGPT, Gemini)
  - In the terminal (Gemini CLI)
- **Best practices:**
  - Use AI to get unstuck, generate boilerplate, or learn new concepts
  - Always read, test, and understand the code AI suggests
  - Don’t rely on AI for everything—practice and experimentation are key to learning
- **Example prompts:**
  - “Explain this error message: ...”
  - “Write a Python function to ...”
  - “How do I use pandas to read a CSV?”

---

For each topic, try the basic commands or workflows, and explore the recommended resources for deeper learning!
