// Dark Theme & UI Enhancements
class UIEnhancer {
    constructor() {
        // Check localStorage for saved preference
        const savedTheme = localStorage.getItem('darkMode');
        this.isDarkMode = savedTheme === 'true';
        
        console.log('UIEnhancer initialized, dark mode:', this.isDarkMode);
        this.init();
    }

    init() {
        // Apply theme immediately
        this.applyTheme();
        
        // Create toggle button after DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.createThemeToggle();
            });
        } else {
            this.createThemeToggle();
        }
    }

    applyTheme() {
        console.log('Applying theme, isDarkMode:', this.isDarkMode);
        
        if (this.isDarkMode) {
            document.body.classList.add('dark-theme');
            console.log('Dark theme class added');
        } else {
            document.body.classList.remove('dark-theme');
            console.log('Dark theme class removed');
        }
        
        // Force a style recalculation
        void document.body.offsetHeight;
    }
    
    toggleTheme() {
        console.log('Toggle theme called');
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('darkMode', this.isDarkMode.toString());
        console.log('New theme state:', this.isDarkMode);
        
        this.applyTheme();
        this.updateToggleIcon();
        
        // Add smooth transition
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    }

    updateToggleIcon() {
        const icon = document.querySelector('.theme-toggle i');
        if (icon) {
            icon.className = `fas ${this.isDarkMode ? 'fa-sun' : 'fa-moon'}`;
            console.log('Icon updated to:', icon.className);
        }
    }

    createThemeToggle() {
        const navbar = document.querySelector('.navbar ul');
        if (!navbar) {
            console.warn('Navbar not found');
            return;
        }

        // Remove existing toggle if present
        const existingToggle = navbar.querySelector('.theme-toggle');
        if (existingToggle) {
            existingToggle.remove();
        }

        const themeToggle = document.createElement('li');
        themeToggle.className = 'navbar-list theme-toggle';
        themeToggle.innerHTML = `
            <a href="#" title="Toggle Dark Mode">
                <i class="fas ${this.isDarkMode ? 'fa-sun' : 'fa-moon'}"></i>
            </a>
        `;

        // Add click handler
        const toggleLink = themeToggle.querySelector('a');
        toggleLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleTheme();
        });

        // Insert before cart icon
        const cartItem = document.getElementById('navcart');
        if (cartItem) {
            navbar.insertBefore(themeToggle, cartItem);
        } else {
            navbar.appendChild(themeToggle);
        }

        console.log('Theme toggle created');
    }
}

// Initialize immediately
let uiEnhancer;

// Initialize as early as possible
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        uiEnhancer = new UIEnhancer();
    });
} else {
    uiEnhancer = new UIEnhancer();
}

// Scroll Animations
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

// Setup animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.food-preview, .section-title, .hero-content, .category-section, .value-card, .stat-card, .team-card'
    );

    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animate-in style
    const style = document.createElement('style');
    style.innerHTML = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});