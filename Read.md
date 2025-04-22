# My Interactive Web Page

This project demonstrates various interactive web development concepts using HTML, CSS, and JavaScript. Below is a breakdown of where the assignment requirements have been implemented:

**1. Event Handling **

* **Button click:** Multiple buttons on the page trigger actions when clicked:
    * **"Change Text Content" button:** Located in the "Dive into the World of CSS!" section, it dynamically adds new text.
    * **"Change Background Color" button:** Also in the "Dive into the World of CSS!" section, it toggles a yellow background on that section.
    * **"Swap Image" button:** Found in the "Dive into the World of CSS!" section, it swaps the main illustration with another image.
    * **Theme Toggle button:** In the navigation bar, it switches between light and dark themes for the entire page.
    * **Accordion Headers:** In the "Our Creative Services" section, clicking the headers expands and collapses the content below.
    * **"Sign Up" button:** At the bottom, it triggers form validation when clicked.
* **Hover effects:**
    * Hovering the main illustration in the "Dive into the World of CSS!" section adds a border and shadow.
    * Hovering navigation links and the theme toggle button changes their background color.
* **Keypress detection:** Pressing any key on the page will briefly highlight a random item in the "Our Creative Services" list.
* **Bonus: A secret action for a double-click or long press 🤫:**
    * **Double-clicking** the text "Double-click this text for a secret!" in the "Dive into the World of CSS!" section will trigger an alert and change the text's background.
    * **Long pressing** (holding the mouse button or touch for 1.5 seconds) on the same "secret" text will trigger a different alert and change the text's style.

**2. Interactive Elements 🎮**

* **A button that changes text or color:**
    * The "Change Text Content" button alters the text content by adding a new paragraph.
    * The "Change Background Color" button changes the background color of the "Dive into the World of CSS!" section.
* **An image gallery or slideshow:** The "Swap Image" button provides a simple two-state image toggle, switching between the initial CSS illustration and another image.
* **Tabs or accordion-style content:** The "Our Creative Services" section utilizes an **accordion** to present information about CSS basics and learning benefits.
* **Bonus: Add some animation using JS or CSS ✨:**
    * CSS transitions are used for the theme toggle, hover effects, and the background color change.
    * The swapped image can be an animated GIF.
    * JavaScript adds a class that uses CSS transition for the keypress highlight effect.

**3. Form Validation 📋✅**

* **Required field checks:** The "Name," "Email," and "Password" fields in the "Join Our Styling Community!" form are checked to ensure they are filled before submission.
* **Email format validation:** The submitted email address is checked against a basic email format using JavaScript.
* **Password rules (e.g., min 8 characters):** The "Password" field requires a minimum of 8 characters, enforced both in the HTML and via JavaScript validation.
* **Bonus: Real-time feedback while typing:** The "Password" field provides immediate feedback if the entered password is shorter than 8 characters as the user types.

This project demonstrates a variety of interactive web development techniques to enhance user engagement.