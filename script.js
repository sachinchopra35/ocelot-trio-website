// Global variables
let currentlyPlaying = null;
let progressIntervals = {};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAudioPlayers();
    initializeScrollEffects();
    initializeContactForm();
});

// Navigation Functions
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// Audio Player Functions
function initializeAudioPlayers() {
    const playButtons = document.querySelectorAll('.play-btn');
    const progressBars = document.querySelectorAll('.progress-bar');

    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const trackId = this.getAttribute('data-track');
            togglePlayback(trackId, this);
        });
    });

    progressBars.forEach(bar => {
        bar.addEventListener('click', function(e) {
            const rect = bar.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            const progress = bar.querySelector('.progress');
            progress.style.width = percent * 100 + '%';
        });
    });
}

function togglePlayback(trackId, button) {
    const icon = button.querySelector('i');
    const progressBar = button.parentElement.querySelector('.progress');
    const card = button.closest('.music-card');

    if (currentlyPlaying === trackId) {
        // Pause current track
        pauseTrack(trackId, button);
    } else {
        // Stop any currently playing track
        if (currentlyPlaying) {
            const currentButton = document.querySelector(`[data-track="${currentlyPlaying}"]`);
            pauseTrack(currentlyPlaying, currentButton);
        }
        
        // Play new track
        playTrack(trackId, button);
    }
}

function playTrack(trackId, button) {
    const icon = button.querySelector('i');
    const progressBar = button.parentElement.querySelector('.progress');
    const card = button.closest('.music-card');

    // Update UI
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
    button.classList.add('playing');
    card.classList.add('playing');

    // Set as currently playing
    currentlyPlaying = trackId;

    // Start progress animation
    startProgressAnimation(trackId, progressBar);

    // Show notification
    showNotification(`Playing: ${card.querySelector('h3').textContent}`, 'info');
}

function pauseTrack(trackId, button) {
    const icon = button.querySelector('i');
    const progressBar = button.parentElement.querySelector('.progress');
    const card = button.closest('.music-card');

    // Update UI
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
    button.classList.remove('playing');
    card.classList.remove('playing');

    // Stop progress animation
    stopProgressAnimation(trackId);

    // Clear currently playing
    if (currentlyPlaying === trackId) {
        currentlyPlaying = null;
    }

    // Show notification
    showNotification(`Paused: ${card.querySelector('h3').textContent}`, 'info');
}

function startProgressAnimation(trackId, progressBar) {
    let progress = 0;
    const duration = 30; // 30 seconds for demo
    const interval = 100; // Update every 100ms
    const increment = 100 / (duration * (1000 / interval));

    progressIntervals[trackId] = setInterval(() => {
        progress += increment;
        progressBar.style.width = progress + '%';

        if (progress >= 100) {
            // Track finished
            const button = document.querySelector(`[data-track="${trackId}"]`);
            pauseTrack(trackId, button);
            progressBar.style.width = '0%';
        }
    }, interval);
}

function stopProgressAnimation(trackId) {
    if (progressIntervals[trackId]) {
        clearInterval(progressIntervals[trackId]);
        delete progressIntervals[trackId];
    }
}

// Scroll Effects
function initializeScrollEffects() {
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

    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(26, 26, 26, 0.98)';
        } else {
            header.style.background = 'rgba(26, 26, 26, 0.95)';
        }
    });

    // Parallax effect for floating notes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-notes i');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Contact Form (placeholder functionality)
function initializeContactForm() {
    // Add click handlers for contact items
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            if (text.includes('@')) {
                window.location.href = `mailto:${text}`;
            } else if (text.includes('+')) {
                window.location.href = `tel:${text}`;
            }
        });
    });
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--accent-color);
        color: var(--primary-color);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.parentElement.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Intersection Observer for animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.music-card, .member, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', initializeAnimations);

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .music-card,
    .member,
    .contact-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }
    
    .music-card.animate-in,
    .member.animate-in,
    .contact-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .music-card.playing {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 15px 40px rgba(201, 169, 110, 0.3);
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .notification {
        font-family: 'Inter', sans-serif;
    }
    
    .notification.info {
        background: var(--accent-color);
        color: var(--primary-color);
    }
    
    .notification.success {
        background: #4CAF50;
        color: white;
    }
    
    .notification.error {
        background: #f44336;
        color: white;
    }
    
    .contact-item {
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 8px;
        transition: all 0.3s ease;
    }
    
    .contact-item:hover {
        background: rgba(201, 169, 110, 0.1);
        transform: translateX(5px);
    }
`;
document.head.appendChild(style);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close mobile menu
        document.querySelector('.nav-menu').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
        
        // Pause any playing track
        if (currentlyPlaying) {
            const currentButton = document.querySelector(`[data-track="${currentlyPlaying}"]`);
            pauseTrack(currentlyPlaying, currentButton);
        }
    }
    
    if (e.key === ' ' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        // Toggle playback of first track or currently playing
        const trackToToggle = currentlyPlaying || '1';
        const button = document.querySelector(`[data-track="${trackToToggle}"]`);
        if (button) {
            togglePlayback(trackToToggle, button);
        }
    }
});

// Add loading effect
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add loaded class styles
const loadedStyles = document.createElement('style');
loadedStyles.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .hero-content {
        transform: translateY(30px);
        opacity: 0;
        transition: all 0.8s ease 0.3s;
    }
    
    body.loaded .hero-content {
        transform: translateY(0);
        opacity: 1;
    }
`;
document.head.appendChild(loadedStyles); 