# Week 5 Project Guide: Your First Data Science Repo

This guide will walk you through using the terminal, Git/GitHub, Python, and AI tools to create and share your first data science project repository.

---

## 1. Set Up Git & GitHub

- If you don’t have a GitHub account, [sign up here](https://github.com/).
- Create a new repository on GitHub (e.g., `my-first-dataviz-repo`).
- Copy the repository URL (it should look like `https://github.com/yourusername/my-first-dataviz-repo.git`).

---

## 2. Use the Terminal/CLI

- Open your terminal (or the terminal in VS Code).
- Navigate to your working folder:

  ```bash
  cd ~/Documents/Parsons/Teaching/Dataviz_SummerWorkshop2025/week5/
  ```

- Clone your new repo:

  ```bash
  git clone <repo-url>
  ```

- Move into your repo folder:

  ```bash
  cd my-first-dataviz-repo
  ```

---

## 3. Add Python Code (Jupyter Notebook)

- In the terminal, create a new notebook file:

  ```bash
  touch python-intro.ipynb
  ```

- Open the notebook in VS Code (or upload it to [Google Colab](https://colab.research.google.com/)).
- Add basic Python code: variables, lists, a simple plot (see the provided starter notebook for ideas).
- **Use an AI tool** (Copilot, ChatGPT, Gemini, etc.) to help you write or understand code. Example prompts:
  - “Write a Python function to plot a bar chart.”
  - “Explain what this error message means: ...”
  - “How do I use pandas to read a CSV?”

---

## 4. Commit & Push Your Work

- Check the status of your repo:

  ```bash
  git status
  ```

- Add your files:

  ```bash
  git add .
  ```

- Commit your changes:

  ```bash
  git commit -m "Add my first Python notebook"
  ```

- Push your changes to GitHub:

  ```bash
  git push
  ```

---

## Resources

- [GitHub Docs: Getting Started](https://docs.github.com/en/get-started)
- [Google Colab](https://colab.research.google.com/)
- [VS Code Jupyter Extension](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter)
- [GitHub Copilot](https://github.com/features/copilot)
- [Gemini CLI](https://aistudio.google.com/app/tools/gemini)
