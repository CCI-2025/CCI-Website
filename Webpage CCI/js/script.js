document.addEventListener('DOMContentLoaded', () => {
    // Update footer year dynamically
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('#primary-navigation');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('open');
        hamburger.classList.toggle('open');
    });

    // Close mobile nav when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('open')) {
                navToggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('open');
                hamburger.classList.remove('open');
            }
        });
    });

    // Sticky Header Shrink Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0';
            header.style.boxShadow = '0 10px 20px rgba(11, 31, 58, 0.08)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = '0 4px 6px rgba(11, 31, 58, 0.05)';
        }
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            
            // Close all other accordions
            faqQuestions.forEach(q => {
                q.setAttribute('aria-expanded', 'false');
                q.nextElementSibling.style.maxHeight = null;
            });

            // Toggle current accordion
            if (!isExpanded) {
                question.setAttribute('aria-expanded', 'true');
                const answer = question.nextElementSibling;
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Smooth Scroll Reveal Animation (Optional Enhancement)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply simple fade-up to section headers and cards
    const animatedElements = document.querySelectorAll('.section-title, .benefit-card, .exp-item, .value-item, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
