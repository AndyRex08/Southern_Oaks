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



// // JavaScript
// // Function to add hover style
// function addHoverStyle(element) {
//     // Find the corresponding .firstGrid1 element
//     var firstGrid = element.parentElement.querySelector('.firstGrid1');
//     // Add hover effect to the corresponding .firstGrid1 element
//     firstGrid.classList.add('hovered');
// }

// // Function to remove hover style
// function removeHoverStyle(element) {
//     // Find the corresponding .firstGrid1 element
//     var firstGrid = element.parentElement.querySelector('.firstGrid1');
//     // Remove hover effect from the corresponding .firstGrid1 element
//     firstGrid.classList.remove('hovered');
// }
