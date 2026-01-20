/**
 * Nobius Audio - Main JavaScript
 * Brutalist/Industrial Design
 */

// Dark mode detection and toggle
(function () {
    const STORAGE_KEY = 'nobius-theme';

    // Check for saved preference, otherwise use system preference
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme) {
        // Use saved preference
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    } else {
        // Use system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
        }
    }

    // Create and add toggle button to sidebar
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'theme-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle dark/light mode');
        toggleBtn.innerHTML = `
            <span class="theme-toggle-icon theme-toggle-sun">☀</span>
            <span class="theme-toggle-icon theme-toggle-moon">☾</span>
        `;

        // Insert before the bottom markers
        const bottomMarkers = sidebar.querySelectorAll('.sidebar-markers')[1];
        if (bottomMarkers) {
            sidebar.insertBefore(toggleBtn, bottomMarkers);
        } else {
            sidebar.appendChild(toggleBtn);
        }

        // Toggle functionality
        toggleBtn.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');

            // Save preference
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');

            // Add animation class
            this.classList.add('toggling');
            setTimeout(() => this.classList.remove('toggling'), 300);
        });
    }

    // Listen for system preference changes (only if no saved preference)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            if (e.matches) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        }
    });
})();

// Smooth scroll for anchor links
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

// Add active state to navigation based on current page
(function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage.includes('products/') && linkPage === 'products.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
})();

// Image lazy loading with grayscale effect
document.querySelectorAll('.img-grayscale').forEach(img => {
    img.addEventListener('load', function () {
        this.style.opacity = '1';
    });
});

// Form handling (for contact page)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Simple validation
        let isValid = true;
        const required = ['name', 'email', 'message'];

        required.forEach(field => {
            const input = this.querySelector(`[name="${field}"]`);
            if (!data[field] || data[field].trim() === '') {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });

        if (isValid) {
            // In production, this would submit to a backend
            console.log('Form submitted:', data);
            alert('Thank you for your message. We\'ll be in touch soon.');
            this.reset();
        }
    });
}

// Console branding
console.log('%c NOBIUS AUDIO ', 'background: #DFFF00; color: #000; font-family: monospace; font-size: 20px; padding: 10px;');
console.log('%c Imperfectly Honest ', 'color: #888; font-family: monospace;');
