// This script runs after the HTML document has been fully loaded.

// --- 1. Get references to the HTML elements we want to interact with ---

// Get the paragraph that we will change the text of.
const introText = document.getElementById('intro-text');

// Get the buttons.
const changeTextBtn = document.getElementById('change-text-btn');
const toggleDetailsBtn = document.getElementById('toggle-details-btn');
const toggleDarkModeBtn = document.getElementById('toggle-dark-mode-btn');

// Get the section that is initially hidden.
const detailsSection = document.getElementById('details-section');

// Get the body element to toggle dark mode.
const body = document.body;


// --- 2. Define the functions that will run when buttons are clicked ---

// This function changes the text of the intro paragraph.
function changeIntroText() {
    introText.textContent = 'The text was changed by JavaScript!';
}

// This function shows or hides the details section by toggling a CSS class.
function toggleDetails() {
    detailsSection.classList.toggle('hidden');
}

// This function adds or removes the 'dark-mode' class from the body.
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
}


// --- 3. Add 'event listeners' to the buttons ---
// This tells the browser to listen for a 'click' on each button.
// When a click happens, it will run the corresponding function.

changeTextBtn.addEventListener('click', changeIntroText);
toggleDetailsBtn.addEventListener('click', toggleDetails);
toggleDarkModeBtn.addEventListener('click', toggleDarkMode);
