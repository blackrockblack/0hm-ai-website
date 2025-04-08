// Main JavaScript for 0HM.AI website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && !event.target.closest('.mobile-menu-btn')) {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });
    
    // Scroll animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                const animationClass = element.dataset.animation || 'fade-in';
                element.classList.add(animationClass);
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Cosmic particles animation
    createCosmicParticles();
    
    // Language switcher
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    
    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
        });
        
        document.addEventListener('click', function() {
            if (languageDropdown.classList.contains('show')) {
                languageDropdown.classList.remove('show');
            }
        });
    }
    
    // Spotify player integration
    initSpotifyPlayer();
});

// Create cosmic particles
function createCosmicParticles() {
    const cosmicParticles = document.querySelector('.cosmic-particles');
    if (!cosmicParticles) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        // Random delay
        const delay = Math.random() * 10;
        
        // Set styles
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        // Add to container
        cosmicParticles.appendChild(particle);
    }
}

// Initialize Spotify player
function initSpotifyPlayer() {
    const spotifyEmbed = document.querySelector('.spotify-embed');
    if (!spotifyEmbed) return;
    
    // Create responsive Spotify iframe
    const albumId = '2bduIXtKIevJL0wc6qCts5';
    const iframe = document.createElement('iframe');
    
    iframe.src = `https://open.spotify.com/embed/album/${albumId}?utm_source=generator&theme=0`;
    iframe.width = '100%';
    iframe.height = '380';
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    iframe.loading = 'lazy';
    
    spotifyEmbed.appendChild(iframe);
}

// Handle language switching
function switchLanguage(lang) {
    // Store the selected language in localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Reload the page with the new language
    if (lang === 'en') {
        window.location.href = 'index.html';
    } else {
        window.location.href = `index_${lang}.html`;
    }
}

// Check for saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        // Apply the saved language
        if (savedLanguage === 'en') {
            // Already on English page
        } else {
            const currentPage = window.location.pathname.split('/').pop();
            if (currentPage === 'index.html') {
                window.location.href = `index_${savedLanguage}.html`;
            }
        }
    }
});
