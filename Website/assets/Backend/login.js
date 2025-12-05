const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".password-toggle-icon i");

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


// Passwords if necessary
// Array of username-password pairs
const credentials = [
  { username: "Samarpan", password: "Samarpan123" },
  { username: "Kriman", password: "Kriman123" },
  { username: "Abishek", password: "Abishek123" },
  { username: "Bibek", password: "Bibek123"}
];

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();


  const validCredential = credentials.find(
    (cred) => cred.username === username && cred.password === password
  );

  if (validCredential) {
    window.location.href = "project-idea.html";
  } else {
    document.getElementById("error-message").style.display = "block";
  }
});