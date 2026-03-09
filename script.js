// script.js - Smooth scrolling and basic interactions
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Simple form handling if needed (contact form placeholder)
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully.');
});
