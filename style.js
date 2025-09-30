// Select elements
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle Menu on Click
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Animate Hamburger
    hamburger.classList.toggle("open");
});
// Smooth Scroll for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Fade-in effect on scroll
const aboutSection = document.querySelector(".about-content");

window.addEventListener("scroll", () => {
    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos) {
        aboutSection.style.opacity = "1";
        aboutSection.style.transform = "translateY(0)";
    }
});
// Reveal Services on Scroll
const serviceCards = document.querySelectorAll(".service-card");

window.addEventListener("scroll", () => {
    serviceCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = "all 0.7s ease";
        }
    });
});
// Animate energy cards on scroll
const energyCards = document.querySelectorAll(".energy-card");

window.addEventListener("scroll", () => {
    energyCards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = "all 0.7s ease";
        }
    });
});
// Animate schemes on scroll
const schemeCards = document.querySelectorAll(".scheme-card");

window.addEventListener("scroll", () => {
    schemeCards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = "all 0.7s ease";
        }
    });
});
// Smooth Fade-in Animation for Project Cards
const projectCards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
    projectCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardPosition < windowHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = "all 0.8s ease";
        }
    });
});
// Scroll Animation for Cards
const cards = document.querySelectorAll(".adv-card, .dis-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = "all 0.8s ease";
        }
    });
});
// Testimonials Slider
const slider = document.querySelector(".testimonials-slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let scrollAmount = 0;
const scrollStep = 350;

nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: scrollStep, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
});
// Contact Form Submission (Basic)
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
});
// Newsletter Form Submission
const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    newsletterForm.reset();
});
// Initialize EmailJS
(function(){
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
})();
