let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slides').length;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;

    slides.style.transform = `translateX(${offset}%)`;
}

setInterval(() => moveSlide(1), 5500);