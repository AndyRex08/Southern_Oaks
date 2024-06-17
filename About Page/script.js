const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu on nav link click
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Function to close the menu
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Close menu on clicking outside of the hamburger or navMenu
document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        closeMenu();
    }
});

// Close menu on touchstart outside of the hamburger or navMenu
document.addEventListener("touchstart", (event) => {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        closeMenu();
    }
});

// Close menu on scroll
window.addEventListener("scroll", closeMenu);




document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.getElementById('back-to-top');

    // Function to check if the screen size is for laptop
    function isLaptopScreen() {
        return window.innerWidth > 768; // Adjust the width as needed for your breakpoint
    }

    // Event listener for the Back to Top button
    backButton.addEventListener('click', function(event) {
        if (isLaptopScreen()) {
            event.preventDefault();
            scrollToTop();
        }
    });

    // Function to scroll to the top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});


