const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".password-toggle-icon i");

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

// Basic athentication using local storage
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Get registered users from local storage
  const users = JSON.parse(localStorage.getItem('khajaTimeUsers') || '[]');

  // Find matching user
  const validUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (validUser) {
    // Store logged in user
    localStorage.setItem('khajaTimeCurrentUser', JSON.stringify({
      username: validUser.username,
      loginTime: new Date().toISOString()
    }));

    // Redirect to homepage
    window.location.href = "index.html";
  } else {
    document.getElementById("error-message").style.display = "block";
  }
});