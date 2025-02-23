// slider.js

// Slider functionality
let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  if (index >= totalSlides) slideIndex = 0;
  if (index < 0) slideIndex = totalSlides - 1;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Auto-slide (optional)
//setInterval(nextSlide, 5000); 