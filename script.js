// ============================================
// 🎮 THEME TOGGLE (Light / Dark Mode)
// ============================================
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button text depending on mode
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️ Toggle Light Mode";
  } else {
    themeToggle.textContent = "🌙 Toggle Dark Mode";
  }
});

// ============================================
// 🎮 FAQ TOGGLE
// ============================================
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;

    // Toggle visibility
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

// ============================================
// 📋 FORM VALIDATION
// ============================================
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent =
      "Enter a valid email address.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Gender validation
  const gender = document.getElementById("gender").value;
  if (gender === "") {
    document.getElementById("genderError").textContent =
      "Please select your gender.";
    isValid = false;
  } else {
    document.getElementById("genderError").textContent = "";
  }

  // Education validation
  const education = document.getElementById("education").value;
  if (education === "") {
    document.getElementById("educationError").textContent =
      "Please select your education level.";
    isValid = false;
  } else {
    document.getElementById("educationError").textContent = "";
  }

  // Nationality validation
  const nationality = document.getElementById("nationality").value;
  if (nationality === "") {
    document.getElementById("nationalityError").textContent =
      "Please select your nationality.";
    isValid = false;
  } else {
    document.getElementById("nationalityError").textContent = "";
  }

  // County validation
  const county = document.getElementById("county").value;
  if (county === "") {
    document.getElementById("countyError").textContent =
      "Please select your county.";
    isValid = false;
  } else {
    document.getElementById("countyError").textContent = "";
  }

  // Course validation
  const course = document.getElementById("course").value;
  if (course === "") {
    document.getElementById("courseError").textContent =
      "Please select a course.";
    isValid = false;
  } else {
    document.getElementById("courseError").textContent = "";
  }

  // Final check
  if (isValid) {
    document.getElementById("formSuccess").textContent =
      "🎉 Application submitted successfully!";
    document.getElementById("signupForm").reset();
  }
});
