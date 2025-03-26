// Slider functionality
function Slider(sliderId) {
  let slideIndex = 0; // Default to the first slide

  // Function to show a particular slide
  function showSlide(index) {
    const slides = document.querySelector(`#${sliderId} .slides`);
    const totalSlides = document.querySelectorAll(`#${sliderId} .slide`).length;

    // Ensure slideIndex stays within bounds
    if (index >= totalSlides) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = totalSlides - 1;
    } else {
      slideIndex = index;
    }

    // Move slides
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  // Event listeners for buttons
  document.addEventListener("DOMContentLoaded", function () {
    // Next and previous arrow buttons
    const nextButton = document.querySelector(`#${sliderId} .arrow2`);
    const prevButton = document.querySelector(`#${sliderId} .arrow`);

    // Adding event listeners to the arrows
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Initialize the first slide
    showSlide(slideIndex);
  });

  // Move to the next slide
  function nextSlide() {
    showSlide(slideIndex + 1);
  }

  // Move to the previous slide
  function prevSlide() {
    showSlide(slideIndex - 1);
  }
}

// Initialize both sliders
new Slider('slider1');
new Slider('slider2');
