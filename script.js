// Handling location change for the search functionality
document.querySelector('.hero__section_input_location').addEventListener('change', function() {
    const selectedLocation = this.value;
    console.log("Location selected: " + selectedLocation);  // You can use this to filter results based on location
});

// Handling search input
document.querySelector('.hero__section_input_search').addEventListener('input', function(event) {
    const searchQuery = event.target.value;
    console.log("Search query: " + searchQuery); // You can filter restaurant results based on this query
});

// Handling "Get the App" section radio buttons
const emailRadioButton = document.getElementById('email');
const phoneRadioButton = document.getElementById('phone');
const inputContainer = document.querySelector('.input__container input');

emailRadioButton.addEventListener('change', function() {
    if (this.checked) {
        inputContainer.placeholder = 'Enter your email';
    }
});

phoneRadioButton.addEventListener('change', function() {
    if (this.checked) {
        inputContainer.placeholder = 'Enter your phone number';
    }
});

// Scroll to Top Button functionality (example)
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = 'Back to Top';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

// Display scroll-to-top button when the page is scrolled down
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll the page back to the top when the button is clicked
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
