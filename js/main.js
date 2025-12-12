/* ============================================
   TOP SKI SCHOOLS - Main JavaScript
   GSAP Animations & Interactions
   ============================================ */

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ============================================
// Preloader
// ============================================
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');

    gsap.to(preloader, {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        onComplete: () => {
            preloader.classList.add('hidden');
            initAnimations();
        }
    });
});

// ============================================
// Initialize All Animations
// ============================================
function initAnimations() {
    heroAnimation();
    navbarScroll();
    featureCards();
    programCards();
    instructorCards();
    testimonialCards();
    galleryItems();
    parallaxEffects();
    ctaSection();
    counterAnimation();
    smoothScrollLinks();
}

// ============================================
// Hero Section Animation
// ============================================
function heroAnimation() {
    const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' }});

    heroTl
        .to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 1
        })
        .to('.hero-title .line', {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2
        }, '-=0.5')
        .to('.hero-desc', {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, '-=0.6')
        .to('.hero-btns', {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, '-=0.5')
        .from('.hero-stats', {
            opacity: 0,
            x: 50,
            duration: 1
        }, '-=0.8')
        .from('.stat-item', {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.2
        }, '-=0.5');
}

// ============================================
// Navbar Scroll Effect
// ============================================
function navbarScroll() {
    const navbar = document.querySelector('.navbar');

    ScrollTrigger.create({
        start: 'top -100',
        onUpdate: (self) => {
            if (self.scroll() > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// ============================================
// Feature Cards Animation
// ============================================
function featureCards() {
    gsap.from('.feature-card', {
        scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });

    // Hover effect
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('.feature-icon'), {
                scale: 1.1,
                rotation: 5,
                duration: 0.3
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.feature-icon'), {
                scale: 1,
                rotation: 0,
                duration: 0.3
            });
        });
    });
}

// ============================================
// Program Cards Animation
// ============================================
function programCards() {
    // Programs preview section
    gsap.from('.program-card.large', {
        scrollTrigger: {
            trigger: '.programs-showcase',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        x: -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.program-stack .program-card', {
        scrollTrigger: {
            trigger: '.programs-showcase',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        x: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Programs page grid
    gsap.from('.program-card-full', {
        scrollTrigger: {
            trigger: '.programs-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });
}

// ============================================
// Instructor Cards Animation
// ============================================
function instructorCards() {
    gsap.from('.instructor-card, .instructor-card-full', {
        scrollTrigger: {
            trigger: '.instructors-slider, .instructors-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });
}

// ============================================
// Testimonial Cards Animation
// ============================================
function testimonialCards() {
    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Floating animation for stars
    document.querySelectorAll('.testimonial-rating').forEach(rating => {
        gsap.to(rating.querySelectorAll('i'), {
            y: -3,
            duration: 0.5,
            stagger: 0.1,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut'
        });
    });
}

// ============================================
// Gallery Items Animation
// ============================================
function galleryItems() {
    gsap.from('.gallery-item', {
        scrollTrigger: {
            trigger: '.gallery-grid, .gallery-full-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        stagger: {
            amount: 0.8,
            grid: 'auto',
            from: 'start'
        },
        ease: 'power3.out'
    });
}

// ============================================
// Parallax Effects
// ============================================
function parallaxEffects() {
    // Parallax banner
    gsap.to('.parallax-banner', {
        scrollTrigger: {
            trigger: '.parallax-banner',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        backgroundPosition: '50% 30%',
        ease: 'none'
    });

    // Section headers animation
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // Diagonal sections skew effect
    gsap.utils.toArray('.diagonal-section').forEach(diagonal => {
        gsap.from(diagonal, {
            scrollTrigger: {
                trigger: diagonal,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            scaleX: 0,
            duration: 1.2,
            ease: 'power3.out'
        });
    });
}

// ============================================
// CTA Section Animation
// ============================================
function ctaSection() {
    gsap.from('.cta-content', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out'
    });
}

// ============================================
// Counter Animation
// ============================================
function counterAnimation() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));

        ScrollTrigger.create({
            trigger: counter,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: 'power2.out'
                });
            },
            once: true
        });
    });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
function smoothScrollLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 100
                    },
                    ease: 'power3.inOut'
                });
            }
        });
    });
}

// ============================================
// Page Header Animation
// ============================================
function pageHeaderAnimation() {
    const pageHeader = document.querySelector('.page-header');

    if (pageHeader) {
        gsap.from('.page-header-content', {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out'
        });
    }
}

// Call page header animation on load
document.addEventListener('DOMContentLoaded', pageHeaderAnimation);

// ============================================
// Form Interactions
// ============================================
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        gsap.to(this, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    input.addEventListener('blur', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ============================================
// Button Hover Effects
// ============================================
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    btn.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ============================================
// Scroll Progress Indicator
// ============================================
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #0066FF, #00D4FF);
        z-index: 9999;
        transform-origin: left;
        transform: scaleX(0);
    `;
    document.body.appendChild(progressBar);

    gsap.to(progressBar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        }
    });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', initScrollProgress);

// ============================================
// Filter Buttons (Programs Page)
// ============================================
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Add filter animation here
        gsap.from('.program-card-full', {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out'
        });
    });
});

// ============================================
// Magnetic Buttons Effect
// ============================================
document.querySelectorAll('.btn-primary, .nav-cta').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(this, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    btn.addEventListener('mouseleave', function() {
        gsap.to(this, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)'
        });
    });
});

// ============================================
// Reveal Text Animation
// ============================================
function revealText() {
    gsap.utils.toArray('.reveal-text').forEach(text => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
        });
    });
}

// ============================================
// Image Reveal Animation
// ============================================
gsap.utils.toArray('.program-image img, .instructor-image img, .gallery-item img').forEach(img => {
    gsap.from(img, {
        scrollTrigger: {
            trigger: img,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        scale: 1.2,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });
});

// ============================================
// Stagger Cards on Scroll
// ============================================
function staggerCards(selector, triggerSelector) {
    const cards = document.querySelectorAll(selector);
    if (cards.length === 0) return;

    gsap.from(cards, {
        scrollTrigger: {
            trigger: triggerSelector || selector,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });
}

// ============================================
// Dynamic Speed Scroll
// ============================================
gsap.utils.toArray('[data-speed]').forEach(elem => {
    const speed = parseFloat(elem.getAttribute('data-speed'));

    gsap.to(elem, {
        y: () => (1 - speed) * ScrollTrigger.maxScroll(window) * 0.5,
        ease: 'none',
        scrollTrigger: {
            trigger: elem,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true
        }
    });
});

console.log('TOP SKI SCHOOLS - All animations initialized');
