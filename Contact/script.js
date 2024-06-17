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




var map = L.map('map').setView([9.072264, 7.491302], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([9.072264, 7.491302]).addTo(map);



document.addEventListener("DOMContentLoaded", function() {
    var backButton = document.getElementById('back-to-top');

    backButton.addEventListener('click', function(event) {
        event.preventDefault();
        scrollToTop();
    });

    function scrollToTop() {
        var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentPosition - currentPosition / 8);
        }
    }

    window.addEventListener('scroll', function() {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollPosition > 100) {
            backButton.style.display = 'block';
        } else {
            backButton.style.display = 'none';
        }
    });
});
