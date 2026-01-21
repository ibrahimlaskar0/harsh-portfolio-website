// Smooth scrolling for navigation links
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

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Portfolio Tabs
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Video Carousel Navigation (Short-Form)
let currentVideoIndex = 0;
const videosPerView = 3;

function scrollCarousel(direction) {
    const carousel = document.querySelector('.video-carousel');
    const videoItems = document.querySelectorAll('.video-item');
    const totalVideos = videoItems.length;
    const videoWidth = videoItems[0].offsetWidth + 32; // width + gap
    
    if (direction === 1 && currentVideoIndex < totalVideos - videosPerView) {
        currentVideoIndex++;
    } else if (direction === -1 && currentVideoIndex > 0) {
        currentVideoIndex--;
    }
    
    const scrollPosition = currentVideoIndex * videoWidth;
    carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}

// Long-Form Video Carousel Navigation
let currentLongformIndex = 0;

function scrollLongformCarousel(direction) {
    const carousel = document.querySelector('.longform-carousel');
    const videoItems = document.querySelectorAll('.longform-video-item');
    const totalVideos = videoItems.length;
    
    if (direction === 1 && currentLongformIndex < totalVideos - 1) {
        currentLongformIndex++;
    } else if (direction === -1 && currentLongformIndex > 0) {
        currentLongformIndex--;
    }
    
    const scrollPosition = currentLongformIndex * videoItems[0].offsetWidth;
    carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}

// YouTube API Integration for controlling video playback
let players = [];
let currentPlayingVideo = null;

function onYouTubeIframeAPIReady() {
    const videoFrames = document.querySelectorAll('.video-item iframe');
    
    videoFrames.forEach((frame, index) => {
        const videoId = frame.src.match(/embed\/([^?]+)/)[1];
        const playerId = `player-${index}`;
        frame.id = playerId;
        
        const player = new YT.Player(playerId, {
            events: {
                'onStateChange': function(event) {
                    if (event.data === YT.PlayerState.PLAYING) {
                        // Pause all other videos when one starts playing
                        if (currentPlayingVideo && currentPlayingVideo !== player) {
                            currentPlayingVideo.pauseVideo();
                        }
                        currentPlayingVideo = player;
                    }
                }
            }
        });
        
        players.push(player);
    });
}

// Load YouTube API
if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.section-header, .service-card, .testimonial-card, .portfolio-item');
    animateElements.forEach(el => observer.observe(el));
});

// Navbar Background on Scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
    
    lastScrollTop = scrollTop;
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Video Play Buttons
const playButtons = document.querySelectorAll('.play-button, .play-overlay');

playButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your video modal or player logic here
        console.log('Video play clicked');
        // For now, we'll just add a visual feedback
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    });
});

// Animate Results Scroll
const resultsScroll = document.querySelector('.results-scroll');
if (resultsScroll) {
    // Clone the content for infinite scroll
    const scrollContent = resultsScroll.innerHTML;
    resultsScroll.innerHTML = scrollContent + scrollContent;
}

// Form Validation (if you add contact forms later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add loading class initially
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loading');
    
    // Remove loading after everything is ready
    setTimeout(() => {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
    }, 500);
});

// Typing Animation for Hero Title (Optional Enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Intersection Observer for Counters (if you add stats)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Add smooth reveal animation for sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.15
});

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease-out';
    revealObserver.observe(section);
});

// Water Droplet / Glass Cursor Trail Effect
function initWaterDropletTrail() {
    if (window.innerWidth <= 768) return; // Performance: skip on mobile

    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;
    let dropletCount = 0;
    const MAX_DROPLETS = 140; // safety cap

    function spawnDroplet(x, y) {
        const d = document.createElement('span');
        d.className = 'cursor-droplet';
        const size = 18 + Math.random() * 28; // 18 - 46px
        const distort = 0.85 + Math.random() * 0.3; // subtle ellipse variation
        d.style.width = size + 'px';
        d.style.height = size * distort + 'px';
        d.style.left = x + 'px';
        d.style.top = y + 'px';
        d.style.setProperty('--drift-x', (Math.random() * 30 - 15) + 'px');
        d.style.setProperty('--drift-y', (10 + Math.random() * 25) + 'px');
        d.style.opacity = (0.55 + Math.random() * 0.35).toString();
        d.style.animationDuration = (0.9 + Math.random() * 0.7) + 's';
        document.body.appendChild(d);
        dropletCount++;

        d.addEventListener('animationend', () => {
            d.remove();
            dropletCount--;
        });

        if (dropletCount > MAX_DROPLETS) {
            const old = document.querySelectorAll('.cursor-droplet');
            for (let i = 0; i < old.length - MAX_DROPLETS; i++) {
                old[i].remove();
                dropletCount--;
            }
        }
    }

    document.addEventListener('mousemove', (e) => {
        lastX = e.clientX;
        lastY = e.clientY;
        spawnDroplet(lastX, lastY);
    });

    // Add a slow drip while scrolling if mouse not moving
    let scrollThrottle = false;
    window.addEventListener('scroll', () => {
        if (!scrollThrottle) {
            scrollThrottle = true;
            spawnDroplet(lastX, lastY);
            setTimeout(() => scrollThrottle = false, 90);
        }
    });
}

initWaterDropletTrail();

// Preload images for better performance
function preloadImages() {
    const images = [
        'assets/logo.png',
        'assets/nams.png',
        'assets/fino.png',
        'assets/katie-lee.jpg',
        'assets/deevankshu.jpg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload on DOM content loaded
document.addEventListener('DOMContentLoaded', preloadImages);

// Add keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Performance optimization: Lazy loading for images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));