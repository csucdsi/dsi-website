<script>
document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var slides = document.getElementsByClassName('carousel-item');

    function showSlide(index) {
        // Ensure index is within bounds
        if (index >= slides.length) { index = 0; }
        if (index < 0) { index = slides.length - 1; }
        currentIndex = index;
        // Hide all slides and remove 'active' class
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
        // Show the selected slide
        slides[currentIndex].classList.add('active');
    }

    // Make functions available globally
    window.prevSlide = function() {
        showSlide(currentIndex - 1);
    }

    window.nextSlide = function() {
        showSlide(currentIndex + 1);
    }
});
</script>