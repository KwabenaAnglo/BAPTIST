// DOM Elements
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide scroll to top button
    if (window.scrollY > 300) {
        if (scrollTopBtn) scrollTopBtn.classList.add('show');
    } else {
        if (scrollTopBtn) scrollTopBtn.classList.remove('show');
    }
});

// Countdown Timer
function updateCountdown() {
    const programEndDate = new Date('September 7, 2025 18:00:00').getTime();
    
    function updateDisplay() {
        const now = new Date().getTime();
        let distance = programEndDate - now;
        
        // Get countdown elements
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        const countdownEl = document.getElementById('countdown');
        
        // If countdown elements don't exist, exit
        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
            console.error('Countdown elements not found');
            return;
        }
        
        // If event has already ended
        if (distance < 0) {
            if (countdownEl) {
                countdownEl.innerHTML = `
                    <div class="alert alert-info mb-0">
                        <h4 class="alert-heading">Thank You for Attending!</h4>
                        <p class="mb-0">The conference has concluded. We hope to see you at our next event!</p>
                    </div>`;
            }
            return;
        }
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update display
        daysEl.textContent = days.toString().padStart(2, '0');
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
    }
    
    // Initial call to set up the display
    updateDisplay();
    
    // Update the countdown every second
    return setInterval(updateDisplay, 1000);
}

// Show message function
function showMessage(elementId, message, type = 'success') {
    const messageEl = document.getElementById(elementId);
    messageEl.textContent = message;
    messageEl.className = `alert alert-${type} mt-3`;
    messageEl.classList.remove('d-none');
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageEl.classList.add('d-none');
    }, 5000);
}

// Show message function
function showMessage(elementId, message, type = 'success') {
    const messageEl = document.getElementById(elementId);
    messageEl.textContent = message;
    messageEl.className = `alert alert-${type} mt-3`;
    messageEl.classList.remove('d-none');
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageEl.classList.add('d-none');
    }, 5000);
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Start the countdown
    const countdownInterval = updateCountdown();
    
    // Store the interval ID in case we need to clear it later
    window.countdownInterval = countdownInterval;
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll to top button
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
