// ========================================
// HASSAN A HAKIM - WEBSITE JAVASCRIPT
// ========================================


// ========================================
// GREETING BUTTON
// ========================================

const greetingButton = document.getElementById("greetingButton");
const greeting = document.getElementById("greeting");

if (greetingButton && greeting) {

    greetingButton.addEventListener("click", function () {

        const hour = new Date().getHours();

        if (hour < 12) {
            greeting.textContent = "Good morning! ☀️";
        } else if (hour < 18) {
            greeting.textContent = "Good afternoon! 🌤️";
        } else {
            greeting.textContent = "Good evening! 🌙";
        }

    });

}


// ========================================
// DARK / LIGHT MODE
// ========================================

const themeButton = document.getElementById("themeButton");

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

    });

}


// ========================================
// CONTACT FORM
// ========================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const messageText = document.getElementById("message").value.trim();

        if (name === "") {

            formMessage.textContent = "Please enter your name.";
            return;

        }

        if (email === "") {

            formMessage.textContent = "Please enter your email.";
            return;

        }

        if (messageText === "") {

            formMessage.textContent = "Please enter a message.";
            return;

        }

        formMessage.textContent =
            "Your message is ready to send! ✅";

    });

}


// ========================================
// PERSONAL INFORMATION
// ========================================

const myName = "Hassan";
const age = 18;

console.log(myName);
console.log(age);

if (age >= 18) {

    console.log("You are an adult.");

} else {

    console.log("You are under 18.");

}


// ========================================
// HAMBURGER MENU
// ========================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    menuButton.classList.toggle("active");

});

}


// ========================================
// SCROLL-TRIGGERED ANIMATIONS
// ========================================

const revealElements = document.querySelectorAll(
    ".scroll-reveal, .scroll-left, .scroll-right"
);

if (revealElements.length > 0) {

    const revealObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

}