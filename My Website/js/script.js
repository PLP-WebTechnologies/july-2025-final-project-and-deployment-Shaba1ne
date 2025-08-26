// ===============================
// Home Page Interactivity
// ===============================
const homeBtn = document.getElementById("homeBtn");
if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    alert("Welcome to the Home Page!");
  });
}

// ===============================
// Contact Form Validation
// ===============================
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      formMessage.textContent = "All fields are required!";
      formMessage.style.color = "red";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      formMessage.textContent = "Please enter a valid email.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    contactForm.reset();
  });
}

// ===============================
// Additional Interactivity Example
// ===============================
// You could add sliders, image galleries, or other JS features here
