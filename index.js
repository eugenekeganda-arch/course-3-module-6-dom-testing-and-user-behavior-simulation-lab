// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

const { hide } = require("yargs");

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
// index.js
// index.js

// Adds text to an element by ID
// Add text to a DOM element
function addElementToDOM(elementId, text) {
    const el = document.getElementById(elementId);
    if (el) {
        el.textContent = text;
    }
}

// Remove a DOM element by ID
function removeElementFromDOM(elementId) {
    const el = document.getElementById(elementId);
    if (el) {
        el.remove();
    }
}

// Simulate a button click by updating a DOM element
function simulateClick(elementId, text) {
    const el = document.getElementById(elementId);
    if (el) {
        el.textContent = text;
    }
}

// Display an error message
function displayError(message, errorId = 'error-message') {
    const errorDiv = document.getElementById(errorId);
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden');
    }
}

// Hide an error message
function hideError(errorId = 'error-message') {
    const errorDiv = document.getElementById(errorId);
    if (errorDiv) {
        errorDiv.textContent = '';
        errorDiv.classList.add('hidden');
    }
}

// Form submit handler
function handleFormSubmit(event, inputId = 'user-input', outputId = 'dynamic-content') {
    if (event && event.preventDefault) event.preventDefault();

    const input = document.getElementById(inputId);
    const dynamicContent = document.getElementById(outputId);

    if (!input || input.value.trim() === '') {
        displayError('Input cannot be empty', 'error-message');
        return;
    }

    addElementToDOM(outputId, `You typed: ${input.value}`);
    input.value = '';
    hideError('error-message');
}

// Button click handler
function handleClick() {
    const dynamicContent = document.getElementById('dynamic-content');
    if (dynamicContent) {
        dynamicContent.textContent = 'Button Clicked!';
    }
}

// Setup event listeners
function setupEventListeners() {
    const button = document.getElementById('simulate-click');
    if (button) {
        button.addEventListener('click', handleClick);
    }

    const form = document.getElementById('user-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

// Automatically set up listeners when DOM is loaded
if (typeof document !== 'undefined') {
    window.addEventListener('DOMContentLoaded', setupEventListeners);
}

// Export functions for testing
module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
    displayError,
    hideError,
    setupEventListeners,
    handleClick
};
