const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Функція для показу поточного слайду
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

// Перехід до наступного слайду
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Перехід до попереднього слайду
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Автоматичне перемикання слайдів кожні 5 секунд
setInterval(nextSlide, 5000);

// Показати перший слайд
showSlide(currentSlide);
