document.addEventListener('DOMContentLoaded', function () {
    // 1. Event Handling 🎈
    const changeTextBtn = document.getElementById('changeTextBtn');
    const changeStyleBtn = document.getElementById('changeStyleBtn');
    const cssIllustration = document.getElementById('cssIllustration');
    const secretText = document.querySelector('.secret-text');
    const themeToggleButton = document.getElementById('themeToggleButton');
    const body = document.body;
    const aboutSection = document.getElementById('about');
    const servicesList = document.getElementById('servicesList');
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const styleCommunityForm = document.getElementById('styleCommunityForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formSubmitMessage = document.getElementById('formSubmitMessage');
    const imageSwapBtn = document.getElementById('imageSwapBtn');
    const originalImageSrc = cssIllustration.src;
    const newImageSrc = 'https://img.freepik.com/free-photo/domestic-life-illustrated_23-2151876289.jpg?ga=GA1.1.618795074.1745311716&semt=ais_hybrid&w=740'; // Cute programming cartoon (Updated with your link)

    // Button click: Change text content dynamically
    changeTextBtn.addEventListener('click', function () {
        const newTextElement = document.createElement('p');
        newTextElement.textContent = "The text has been dynamically updated!";
        newTextElement.classList.add('dynamic-text'); // Add a class for styling
        aboutSection.appendChild(newTextElement);
    });

    // Hover effects: Change image border on hover
    cssIllustration.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.05)'; // Slight zoom on hover
        this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    });

    cssIllustration.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    });

    // Keypress detection: Highlight list items on key press
    document.addEventListener('keypress', function (event) {
        const randomIndex = Math.floor(Math.random() * servicesList.children.length);
        const highlightedItem = servicesList.children[randomIndex];
        highlightedItem.classList.add('highlighted');
        setTimeout(() => {
            highlightedItem.classList.remove('highlighted');
        }, 1000); // Remove highlight after 1 second
    });

    // Bonus: Secret action for double-click
    secretText.addEventListener('dblclick', function () {
        alert('You found the secret double-click action!');
        this.classList.add('secret-activated');
    });

    // Bonus: Secret action for long press (simulated with mouse down and up)
    let timer;
    secretText.addEventListener('mousedown', function () {
        timer = setTimeout(() => {
            alert('Long press detected!');
            this.classList.add('long-press-activated');
        }, 1500); // 1.5 seconds
    });

    secretText.addEventListener('mouseup', function () {
        clearTimeout(timer);
    });

    secretText.addEventListener('mouseleave', function () {
        clearTimeout(timer);
    });

    // A button that changes text or color (using existing buttons)
    // - changeTextBtn already changes text.
    changeStyleBtn.addEventListener('click', function () {
        aboutSection.classList.toggle('alt-background');
        // Briefly add a transition class to show the change more clearly
        aboutSection.classList.add('background-transition');
        setTimeout(() => {
            aboutSection.classList.remove('background-transition');
        }, 300); // Remove after a short duration
    });

    // An image gallery or slideshow (simple image swap on button click)
    imageSwapBtn.addEventListener('click', function () {
        if (cssIllustration.src === originalImageSrc) {
            cssIllustration.src = newImageSrc;
            cssIllustration.style.maxWidth = '300px'; // Or whatever size you prefer
            cssIllustration.style.height = 'auto';
            imageSwapBtn.textContent = 'Show Original Image';
        } else {
            cssIllustration.src = originalImageSrc;
            cssIllustration.style.maxWidth = '50%'; // Reset to original (responsive)
            cssIllustration.style.height = 'auto';
            imageSwapBtn.textContent = 'Swap Image';
        }
    });

    // Tabs or accordion-style content
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            this.classList.toggle('active');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Bonus: Add some animation using JS or CSS (using CSS for simplicity)
    // See the updated CSS for the .highlighted, .secret-activated, and .long-press-activated classes.

    // Form Validation 📋✅
    styleCommunityForm.addEventListener('submit', function (event) {
        let isValid = true;

        // Required field checks
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Name is required.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Invalid email format.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Password rules (min 8 characters)
        if (!passwordInput.value) {
            passwordError.textContent = 'Password is required.';
            isValid = false;
        } else if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        } else {
            formSubmitMessage.textContent = 'Sign up successful!';
            formSubmitMessage.style.color = 'green';
            this.reset(); // Clear the form
            setTimeout(() => {
                formSubmitMessage.textContent = '';
            }, 3000);
        }
    });

    // Bonus: Real-time feedback while typing (for password)
    passwordInput.addEventListener('input', function () {
        if (this.value.length < 8) {
            passwordError.textContent = 'Password is too short.';
        } else {
            passwordError.textContent = '';
        }
    });

    // Theme Toggle Functionality
    themeToggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
    });
});