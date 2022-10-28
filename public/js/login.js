const signupForm = document.querySelector("#signup-form");
const loginForm = document.querySelector("#login-form");
// const dashboardLink = document.querySelector("#dashboard");

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document
    .querySelector("#username-field-signup")
    .value.trim();
  const password = document
    .querySelector("#password-field-signup")
    .value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-field-login").value.trim();
  const password = document.querySelector("#password-field-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

signupForm.addEventListener("submit", signupFormHandler);
loginForm.addEventListener("submit", loginFormHandler);

// dashboardLink.addEventListener("click", dashboardLinkHandler);
