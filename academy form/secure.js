document.addEventListener('DOMContentLoaded', function () {
    // Get the contact form element
    const contactForm = document.getElementById('contact-form');

    // Add event listener for form submission
    contactForm.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate the form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        let isValid = true;

        // Validate name field
        if (nameInput.value.trim() === '') {
            isValid = false;
            displayErrorMessage(nameInput, 'Please enter your name.');
        } else {
            removeErrorMessage(nameInput);
        }

        // Validate email field
        if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
            isValid = false;
            displayErrorMessage(emailInput, 'Please enter a valid email address.');
        } else {
            removeErrorMessage(emailInput);
        }

        // Validate message field
        if (messageInput.value.trim() === '') {
            isValid = false;
            displayErrorMessage(messageInput, 'Please enter your message.');
        } else {
            removeErrorMessage(messageInput);
        }

        // If form is valid, submit the form
        if (isValid) {
            contactForm.submit();
        }
    });

    // Function to display error message for input field
    function displayErrorMessage(inputElement, message) {
        // Create error message element
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;

        // Insert error message after input element
        inputElement.parentNode.insertBefore(errorMessage, inputElement.nextSibling);
    }

    // Function to remove error message for input field
    function removeErrorMessage(inputElement) {
        const errorMessage = inputElement.nextElementSibling;
        if (errorMessage && errorMessage.className === 'error-message') {
            errorMessage.remove();
        }
    }

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});