// --- 1. Get references to the HTML elements ---

// Get the header element to change its color.
const header = document.querySelector('header');

// Get the button that will change the header color.
const changeHeaderBtn = document.getElementById('change-header-btn');

// Get the contact section which is initially hidden.
const contactSection = document.getElementById('contact-section');

// Get the button that will show/hide the contact section.
const toggleContactBtn = document.getElementById('toggle-contact-btn');


// --- 2. Define the functions that will run on button clicks ---

// This function changes the background color of the header.
function changeHeaderColor() {
    // A simple way to pick a "random" color from a predefined list.
    const colors = ['#003366', '#660033', '#336600', '#663300'];
    // Get a random color from the array.
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    header.style.backgroundColor = randomColor;
}

// This function toggles the 'hidden' class on the contact section.
function toggleContact() {
    // First, toggle the class to show or hide the section.
    contactSection.classList.toggle('hidden');

    // Now, use an if/else statement to update the button's text.
    if (contactSection.classList.contains('hidden')) {
        // If the section is hidden, the button should say "Show".
        toggleContactBtn.textContent = 'Show Contact';
    } else {
        // If the section is not hidden, the button should say "Hide".
        toggleContactBtn.textContent = 'Hide Contact';
    }
}


// --- 3. Add 'event listeners' to the buttons ---

// When the 'changeHeaderBtn' is clicked, run the 'changeHeaderColor' function.
changeHeaderBtn.addEventListener('click', changeHeaderColor);

// When the 'toggleContactBtn' is clicked, run the 'toggleContact' function.
toggleContactBtn.addEventListener('click', toggleContact);

// --- 4. Set Initial State ---
// Set the initial text of the toggle button when the page loads.
toggleContactBtn.textContent = 'Show Contact';
