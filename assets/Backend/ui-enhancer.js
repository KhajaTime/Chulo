// Dark Theme & Smooth Scroll Handler coz its what you needed
class UIEnhancer {
    constructor() {
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupParallax();
        this.setupSmoothScroll();
        this.setupNavbarEffects();
        this.createThemeToggle();
        this.setupMobileMenu();
    }

    // Mobile Menu Toggle
    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking a link
            document.querySelectorAll('.navbar-list a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }

    // Dark Theme Toggle
    applyTheme() {
        if (this.isDarkMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('darkMode', this.isDarkMode);
        this.applyTheme();

        // Smooth transition as you want 
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    }

    createThemeToggle() {
        const navbar = document.querySelector('.navbar ul');
        if (!navbar) return;

        const themeToggle = document.createElement('li');
        themeToggle.className = 'navbar-list theme-toggle';
        themeToggle.innerHTML = `
      <a href="#" onclick="uiEnhancer.toggleTheme(); return false;" title="Toggle Dark Mode">
        <i class="fas ${this.isDarkMode ? 'fa-sun' : 'fa-moon'}"></i>
      </a>
    `;

        // Insert before cart icon
        const cartItem = document.getElementById('navcart');
        if (cartItem) {
            navbar.insertBefore(themeToggle, cartItem);
        } else {
            navbar.appendChild(themeToggle);
        }

        // Update icon on toggle
        const originalToggle = this.toggleTheme.bind(this);
        this.toggleTheme = function () {
            originalToggle();
            const icon = themeToggle.querySelector('i');
            icon.className = `fas ${this.isDarkMode ? 'fa-sun' : 'fa-moon'}`;
        };
    }

    // Parallax Scrolling Effect 
    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            //  image parallax reduced intensity to prevent huge gaps
            const heroImage = document.querySelector('.topimage .image');
            if (heroImage) {
                // Limit the parallax effect to prevent it from going too far
                const limit = 100;
                const translation = Math.min(scrolled * 0.4, limit);
                heroImage.style.transform = `translateY(${translation}px)`;
            }

            // Category banner parallax
            const categoryBanner = document.getElementById('AroundTheGlobe');
            if (categoryBanner) {
                const rect = categoryBanner.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const offset = (window.innerHeight - rect.top) * 0.1;
                    categoryBanner.style.transform = `translateY(${offset}px)`;
                }
            }

            // Food cards stagger animation
            const foodCards = document.querySelectorAll('.food-preview');
            foodCards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                // Check if element is in view
                if (rect.top < window.innerHeight - 50) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        });
    }

    // Smooth Scroll Enhancement
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#!') return;

                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navbar = document.querySelector('.navbar');
                    const categoriesBar = document.querySelector('.name');

                    // Fixed offset calculation: Navbar height + Category bar height + extra buffer
                    // Ensure we handle cases where elements might be null or have 0 height
                    const navHeight = navbar ? navbar.offsetHeight : 0;
                    const catHeight = categoriesBar ? categoriesBar.offsetHeight : 0;

                    // Total sticky header height
                    const totalHeaderHeight = navHeight + catHeight;

                    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    const targetPosition = elementPosition - totalHeaderHeight - 20; // 20px extra buffer

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Enhanced Navbar Effects
    setupNavbarEffects() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // Add shadow on scroll
            if (currentScroll > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            lastScroll = currentScroll;
        });

        // Active link highlighting with IntersectionObserver
        const sectionIds = ['Around-The-Globe', 'Trending', 'Dessert', 'Healthy', 'Desi'];
        const navLinks = document.querySelectorAll('.navbar-list a, .sidebar-list a');

        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -40% 0px', // Active when element is near top but not passed
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');

                    // Remove active from all
                    navLinks.forEach(link => link.classList.remove('active'));

                    // Add active to matching links
                    navLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });
    }
}

// Initialize on page load
let uiEnhancer;
document.addEventListener('DOMContentLoaded', () => {
    uiEnhancer = new UIEnhancer();

    // Initial fade-in for food cards
    const foodCards = document.querySelectorAll('.food-preview');
    foodCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    });
});

// Intersection Observer for scroll animations
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

// Observe elements when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in classes to elements we want to animate
    const elementsToAnimate = document.querySelectorAll('.food-preview, .section-title, .hero-content, .category-section, .value-card, .stat-card, .team-card');

    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Custom animate-in style
    const style = document.createElement('style');
    style.innerHTML = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
