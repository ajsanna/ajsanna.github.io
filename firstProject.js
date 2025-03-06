/**
 * Personal Portfolio Website JavaScript
 * This file contains all interactive features and animations
 */

console.log("Hello World");

// Initialize DOM element references for navigation
const button = document.getElementById("MyBlog");
const targetSection = document.getElementById('myblog');
const GoodReadsButton = document.getElementById("BF");
const LinkedInButton = document.getElementById("MyLinkedIn");
const ProjectsButton = document.getElementById("Projects");
const targetSection2 = document.getElementById('AboutMe');
const targetSection3 = document.getElementById('mySkills');

/**
 * Smooth Scrolling Functionality
 * Provides smooth scroll animation when navigating between sections
 */
const smoothScroll = (target) => {
    target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
};

// Add click event listeners for navigation buttons
button.addEventListener("click", () => smoothScroll(targetSection));
GoodReadsButton.addEventListener("click", () => smoothScroll(targetSection));
LinkedInButton.addEventListener("click", () => smoothScroll(targetSection2));
ProjectsButton.addEventListener("click", () => smoothScroll(targetSection3));

/**
 * Image Slider Implementation
 * Creates an automatic slideshow effect for multiple image containers
 * Each container cycles through its images with fade transitions
 */

// Main image slider setup and functionality
const imageSlider = document.getElementById('ImageContainer');
const images = imageSlider.querySelectorAll('img');
let currentIndex = 0;

function cycleImages() {
	images[currentIndex].style.opacity = '0'; // Fade out the current image
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.opacity = '1'; // Fade in the next image
}

// Additional image sliders (2-6) setup and functionality
// Each slider operates independently with its own timing
const imageSlider2 = document.getElementById('ImageContainer2');
const images2 = imageSlider2.querySelectorAll('img');
let currentIndex2 =0;

function cycleImages2() {
	images2[currentIndex2].style.opacity = '0'; // Fade out the current image
  currentIndex2 = (currentIndex2 + 1) % images.length;
  images2[currentIndex2].style.opacity = '1'; // Fade in the next image
}

const imageSlider3 = document.getElementById('ImageContainer3');
const images3 = imageSlider3.querySelectorAll('img');
let currentIndex3 =0;

function cycleImages3() {
	images3[currentIndex3].style.opacity = '0'; // Fade out the current image
  currentIndex3 = (currentIndex3 + 1) % images.length;
  images3[currentIndex3].style.opacity = '1'; // Fade in the next image
}

const imageSlider4 = document.getElementById('ImageContainer4');
const images4 = imageSlider4.querySelectorAll('img');
let currentIndex4 =0;

function cycleImages4() {
	images4[currentIndex4].style.opacity = '0'; // Fade out the current image
  currentIndex4 = (currentIndex4 + 1) % images.length;
  images4[currentIndex4].style.opacity = '1'; // Fade in the next image
}

const imageSlider5 = document.getElementById('ImageContainer5');
const images5 = imageSlider5.querySelectorAll('img');
let currentIndex5=0;

function cycleImages5() {
	images5[currentIndex5].style.opacity = '0'; // Fade out the current image
  currentIndex5 = (currentIndex5 + 1) % images.length;
  images5[currentIndex5].style.opacity = '1'; // Fade in the next image
}

const imageSlider6 = document.getElementById('ImageContainer6');
const images6 = imageSlider6.querySelectorAll('img');
let currentIndex6=0;

function cycleImages6() {
	images6[currentIndex6].style.opacity = '0'; // Fade out the current image
  currentIndex6 = (currentIndex6 + 1) % images.length;
  images6[currentIndex6].style.opacity = '1'; // Fade in the next image
}

// Set intervals for image cycling
// Different timings create varied transitions
setInterval(cycleImages6, 3000);
setInterval(cycleImages5, 3000);
setInterval(cycleImages4, 3000);
setInterval(cycleImages3, 5000);
setInterval(cycleImages2, 3000);
setInterval(cycleImages, 5000); // Change images every 5 seconds

/**
 * Parallax Effects
 * Adds depth and movement to elements based on scroll position
 */
const profilePic = document.getElementById('PFP');
if (profilePic) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        profilePic.style.transform = `translateY(${scrolled * 0.1}px)`;
    });
}

/**
 * Interactive Project Labels
 * Adds hover effects and animations to project category labels
 */
const projectLabels = document.querySelectorAll('#ML, #Other, #AppDev, #JavaP');
projectLabels.forEach(label => {
    label.addEventListener('mouseenter', () => {
        label.style.transform = 'scale(1.05) translateY(-5px)';
        label.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });

    label.addEventListener('mouseleave', () => {
        label.style.transform = 'scale(1) translateY(0)';
        label.style.boxShadow = 'none';
    });
});

/**
 * Typing Animation Effect
 * Creates a typewriter effect for section titles
 */
const createTypingEffect = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Apply typing effect to section titles
document.querySelectorAll('h3').forEach(title => {
    const originalText = title.textContent;
    
    // Create Intersection Observer for each title
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                createTypingEffect(title, originalText);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(title);
});

/**
 * Scroll Progress Indicator
 * Shows reading progress at the top of the page
 */
const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '3px';
    progressBar.style.width = '0';
    progressBar.style.backgroundColor = '#6b8961';
    progressBar.style.zIndex = '1000';
    progressBar.style.transition = 'width 0.2s ease-out';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
};

createProgressBar();

/**
 * Floating Animation for Skill Icons
 * Adds an interactive floating effect to skill icons on hover
 */
const skillIcons = document.querySelectorAll('#Skill');
skillIcons.forEach(icon => {
    let floating = false;
    
    const float = () => {
        if (!floating) return;
        const y = Math.sin(Date.now() / 1000) * 10;
        icon.style.transform = `translateY(${y}px)`;
        requestAnimationFrame(float);
    };
    
    icon.addEventListener('mouseenter', () => {
        floating = true;
        float();
    });
    
    icon.addEventListener('mouseleave', () => {
        floating = false;
        icon.style.transform = 'translateY(0)';
    });
});

/**
 * Scroll Reveal Animations
 * Animates elements into view as user scrolls
 */
const revealOnScroll = () => {
    const projectEntries = document.querySelectorAll('#ProjectEntry');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    projectEntries.forEach(entry => {
        entry.style.opacity = '0';
        entry.style.transform = 'translateY(50px)';
        entry.style.transition = 'all 0.6s ease-out';
        observer.observe(entry);
    });
};

revealOnScroll();

/**
 * Particle Background Effect
 * Creates an interactive particle system in the background
 */
const createParticleBackground = () => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = '#6b8961';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const createParticles = () => {
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }
    };

    const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animateParticles);
    };

    createParticles();
    animateParticles();
};

createParticleBackground();

/**
 * 3D Tilt Effect
 * Adds perspective tilt to project cards on mouse movement
 */
const addTiltEffect = () => {
    const cards = document.querySelectorAll('#ProjectEntry');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
};

addTiltEffect();

/**
 * Magnetic Social Media Icons
 * Creates an attractive hover effect for social media icons
 */
const addMagneticEffect = () => {
    const icons = document.querySelectorAll('#insta, #github, #Linked');
    
    icons.forEach(icon => {
        icon.addEventListener('mousemove', (e) => {
            const rect = icon.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            icon.style.transform = `translate(${x/5}px, ${y/5}px) scale(1.1)`;
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translate(0, 0) scale(1)';
        });
    });
};

addMagneticEffect();

/**
 * Custom Cursor Implementation
 * Creates a custom cursor with interactive states
 */
const createCustomCursor = () => {
    const cursor = document.createElement('div');
    const dot = document.createElement('div');
    
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #6b8961;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
    `;
    
    dot.style.cssText = `
        width: 4px;
        height: 4px;
        background: #6b8961;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
    `;
    
    document.body.appendChild(cursor);
    document.body.appendChild(dot);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
        dot.style.transform = `translate(${e.clientX - 2}px, ${e.clientY - 2}px)`;
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform += ' scale(0.8)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = cursor.style.transform.replace(' scale(0.8)', '');
    });
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, #ProjectEntry, #Skill');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform += ' scale(1.5)';
            cursor.style.borderColor = '#91b89a';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
            cursor.style.borderColor = '#6b8961';
        });
    });
};

createCustomCursor();

/**
 * Parallax Image Scrolling
 * Adds subtle movement to project images during scroll
 */
const addParallaxToImages = () => {
    const images = document.querySelectorAll('#ProjectEntry img');
    
    window.addEventListener('scroll', () => {
        images.forEach(img => {
            const speed = 0.1;
            const rect = img.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = -(rect.top - window.innerHeight) * speed;
                img.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
};

addParallaxToImages();

/**
 * Button Ripple Effect
 * Adds a material design-style ripple effect to buttons
 */
const addRippleEffect = () => {
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.7);
                transform: translate(-50%, -50%);
                pointer-events: none;
                border-radius: 50%;
                animation: ripple 0.8s linear;
                left: ${x}px;
                top: ${y}px;
            `;
            
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 800);
        });
    });
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            0% { width: 0; height: 0; opacity: 0.5; }
            100% { width: 400px; height: 400px; opacity: 0; }
        }
        .button { position: relative; overflow: hidden; }
    `;
    document.head.appendChild(style);
};

addRippleEffect();

// Initialize all interactive features
createProgressBar();
createParticleBackground();
addTiltEffect();
addMagneticEffect();
addSkillAnimation();
createCustomCursor();
addParallaxToImages();
addRippleEffect();
revealOnScroll();
