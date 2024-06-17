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
