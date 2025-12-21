
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");
const togglePassword = document.querySelector(".password-toggle-icon i");
const toggleConfirmPassword = document.querySelector(".password-toggle-icon-confirm i");

// password visible toggle
if (togglePassword && passwordField) {
    togglePassword.addEventListener("click", function () {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");
        } else {
            passwordField.type = "password";
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");
        }
    });
}

// Password visible toggle for confirm password field
if (toggleConfirmPassword && confirmPasswordField) {
    toggleConfirmPassword.addEventListener("click", function () {
        if (confirmPasswordField.type === "password") {
            confirmPasswordField.type = "text";
            toggleConfirmPassword.classList.remove("fa-eye");
            toggleConfirmPassword.classList.add("fa-eye-slash");
        } else {
            confirmPasswordField.type = "password";
            toggleConfirmPassword.classList.remove("fa-eye-slash");
            toggleConfirmPassword.classList.add("fa-eye");
        }
    });
}

// Form ko validation check garne ani submit garne, Sigma X coder
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    // Pahila ko msg hide garne
    errorMessage.style.display = "none";
    successMessage.style.display = "none";

    // Validation check garne
    if (!email || !username || !password || !confirmPassword) {
        errorMessage.textContent = "All fields are required";
        errorMessage.style.display = "block";
        return;
    }

    // Email validation check garne
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Please enter a valid email address";
        errorMessage.style.display = "block";
        return;
    }

    // Username validation check garne
    if (username.length < 3) {
        errorMessage.textContent = "Username must be at least 3 characters long";
        errorMessage.style.display = "block";
        return;
    }

    // Password validation check garne
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long";
        errorMessage.style.display = "block";
        return;
    }

    // Password match validation check garne
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match";
        errorMessage.style.display = "block";
        return;
    }

    // Get existing 
    const users = JSON.parse(localStorage.getItem('khajaTimeUsers') || '[]');

    // Check if username already exists
    if (users.some(user => user.username === username)) {
        errorMessage.textContent = "Username already exists";
        errorMessage.style.display = "block";
        return;
    }

    // Check if email already exists
    if (users.some(user => user.email === email)) {
        errorMessage.textContent = "Email already registered";
        errorMessage.style.display = "block";
        return;
    }

    // Add new user
    users.push({
        email: email,
        username: username,
        password: password, // In a real app, this should be hashed
        createdAt: new Date().toISOString()
    });

    // Save to localStorage
    localStorage.setItem('khajaTimeUsers', JSON.stringify(users));

    // Show success message
    successMessage.style.display = "block";

    // Redirect to login page after 2 seconds
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
});
