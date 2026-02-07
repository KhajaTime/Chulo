// Password strength checker
function checkPasswordStrength(password) {
    let strength = 0;
    const strengthText = document.getElementById('password-strength-text');
    const strengthBar = document.getElementById('password-strength-bar');
    
    if (!strengthText || !strengthBar) return;
    
    if (password.length === 0) {
        strengthBar.style.width = '0%';
        strengthText.textContent = '';
        return;
    }
    
    // Length check
    if (password.length >= 8) strength += 25;
    if (password.length >= 12) strength += 10;
    
    // Contains lowercase
    if (/[a-z]/.test(password)) strength += 15;
    
    // Contains uppercase
    if (/[A-Z]/.test(password)) strength += 15;
    
    // Contains numbers
    if (/[0-9]/.test(password)) strength += 15;
    
    // Contains special characters
    if (/[^a-zA-Z0-9]/.test(password)) strength += 20;
    
    // Update bar width
    strengthBar.style.width = strength + '%';
    
    // Update color and text
    if (strength < 40) {
        strengthBar.style.backgroundColor = '#ff4444';
        strengthText.textContent = 'Weak';
        strengthText.style.color = '#ff4444';
    } else if (strength < 70) {
        strengthBar.style.backgroundColor = '#ffa500';
        strengthText.textContent = 'Medium';
        strengthText.style.color = '#ffa500';
    } else {
        strengthBar.style.backgroundColor = '#00cc66';
        strengthText.textContent = 'Strong';
        strengthText.style.color = '#00cc66';
    }
}

// Initialize password strength checker
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('login-page-password');
    
    if (passwordInput) {
        // Create strength indicator if it doesn't exist
        if (!document.getElementById('password-strength-container')) {
            const strengthHTML = `
                <div id="password-strength-container" style="margin-top: 5px;">
                    <div style="background: #e0e0e0; height: 4px; border-radius: 2px; overflow: hidden;">
                        <div id="password-strength-bar" style="height: 100%; width: 0%; transition: all 0.3s;"></div>
                    </div>
                    <span id="password-strength-text" style="font-size: 12px; margin-top: 2px; display: block;"></span>
                </div>
            `;
            passwordInput.parentElement.insertAdjacentHTML('beforeend', strengthHTML);
        }
        
        passwordInput.addEventListener('input', function() {
            checkPasswordStrength(this.value);
        });
    }
});

// Register function
async function register(event) {
    if (event) {
        event.preventDefault();
    }
    
    const usernameInput = document.getElementById('login-page-name');
    const emailInput = document.getElementById('login-page-email');
    const passwordInput = document.getElementById('login-page-password');
    const errors = document.getElementById('errors');
    
    if (!usernameInput || !emailInput || !passwordInput || !errors) {
        console.error('One or more elements not found');
        return false;
    }
    
    errors.innerText = "";
    errors.style.color = "red";
    
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    // Basic validation
    if (!username || !email || !password) {
        errors.innerText = "All fields are required.";
        return false;
    }
    
    if (!email.includes('@')) {
        errors.innerText = "Please enter a valid email address.";
        return false;
    }
    
    if (password.length < 6) {
        errors.innerText = "Password must be at least 6 characters long.";
        return false;
    }
    
    // Send to backend
    try {
        const response = await fetch('assets/Backend/signup.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            errors.style.color = "green";
            errors.innerText = data.message;
            
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 150);
        } else {
            errors.style.color = "red";
            errors.innerText = data.message;
        }
    } catch (error) {
        errors.style.color = "red";
        errors.innerText = "An error occurred. Please try again.";
        console.error('Error:', error);
    }
    
    return false;
}

// Login function
async function login(event) {
    if (event) {
        event.preventDefault();
    }
    
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const errors = document.getElementById('errors');
    
    if (!emailInput || !passwordInput) {
        console.error('Email or password input not found');
        return false;
    }
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    if (!email || !password) {
        if (errors) {
            errors.innerText = "Please enter both email and password.";
            errors.style.color = "red";
        }
        return false;
    }
    
    // Send to backend
    try {
        const response = await fetch('assets/Backend/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Store user info in localStorage for frontend access
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            
            if (errors) {
                errors.style.color = "green";
                errors.innerText = data.message;
            }
            
            setTimeout(() => {
                window.location.href = 'homepage.html';
            }, 100);
        } else {
            if (errors) {
                errors.innerText = data.message;
                errors.style.color = "red";
            }
        }
    } catch (error) {
        if (errors) {
            errors.innerText = "An error occurred. Please try again.";
            errors.style.color = "red";
        }
        console.error('Error:', error);
    }
    
    return false;
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    
    // Also call server-side logout
   window.location.href = 'assets/Backend/logout.php';
}

// Check if current user is admin
function isCurrentUserAdmin() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return false;
    
    const user = JSON.parse(currentUser);
    return user.isAdmin === true;
}

// Get current user display name
function getCurrentUserDisplayName() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return 'User';
    
    const user = JSON.parse(currentUser);
    return user.username || 'User';
}

// Get current user data
function getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
}