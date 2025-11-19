document.addEventListener("DOMContentLoaded", () => {

  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const showSignup = document.getElementById("show-signup");
  const showLogin = document.getElementById("show-login");
  const formTitle = document.getElementById("form-title");

  // Toggle to Sign Up
  showSignup.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    formTitle.textContent = "Sign Up";
  });

  // Toggle to Login
  showLogin.addEventListener("click", () => {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    formTitle.textContent = "Login";
  });

  // Handle Login Submit
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Simple validation
    if(email && password){
      alert(`Logged in as ${email}`);
      loginForm.reset();
    }
  });

  // Handle Signup Submit
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("signup-password-confirm").value;

    if(password !== confirmPassword){
      alert("Passwords do not match!");
      return;
    }

    // Simple alert for now
    alert(`Account created for ${name} (${email})`);
    signupForm.reset();
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    formTitle.textContent = "Login";
  });

});
