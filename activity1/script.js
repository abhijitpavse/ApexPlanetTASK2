document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Reset previous borders
  [name, email, message].forEach(input => input.style.borderColor = "");

  // Check for empty fields
  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert("All fields are required.");
    [name, email, message].forEach(input => {
      if (!input.value.trim()) input.style.borderColor = "red";
    });
    e.preventDefault(); // Stop form submission
    return;
  }

  // Check email format
  if (!emailRegex.test(email.value.trim())) {
    alert("Please enter a valid email address (e.g., yourname@example.com).");
    email.style.borderColor = "red";
    e.preventDefault(); // Stop form submission
    return;
  }

  // If everything is valid
  alert("Form submitted successfully!");
});
