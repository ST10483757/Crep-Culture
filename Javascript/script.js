
//This is for the contact form , the inline js broke thus im bringing it this side
document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const email = document.getElementById('email').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const reason = document.getElementById('reason').value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const phonePattern = /^[0-9]{10}$/;

  const messageBox = document.getElementById('formMessage');
  function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = `form-message ${type}`;
    messageBox.style.display = 'block';
    setTimeout(() => {
      messageBox.style.display = 'none';
    }, 5000);
  }

  // Validation
  if (!name || !surname || !email || !contact || !reason) {
    showMessage("Please fill in all fields.", "error");
    return;
  }
  if (!emailPattern.test(email)) {
    showMessage("Invalid email format.", "error");
    return;
  }
  if (!phonePattern.test(contact)) {
    showMessage("Phone number must be 10 digits.", "error");
    return;
  }

  // AJAX
  try {
    const response = await fetch('https://your-server-endpoint.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, surname, email, contact, reason })
    });

    if (!response.ok) throw new Error(`Server error: ${response.status}`);
    showMessage("Message sent successfully!", "success");
    document.getElementById('contactForm').reset();
  } catch (error) {
    console.error("Submission failed:", error);
    showMessage("Oops! Something went wrong. Please try again.", "error");
  }
});

// Contact form validation and AJAX
document.getElementById('contactForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const email = document.getElementById('email').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const reason = document.getElementById('reason').value.trim();
  const messageBox = document.getElementById('formMessage');

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const phonePattern = /^[0-9]{10}$/;

  function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = `form-message ${type}`;
    messageBox.style.display = 'block';
    setTimeout(() => {
      messageBox.style.display = 'none';
    }, 5000);
  }

  if (!name || !surname || !email || !contact || !reason) {
    showMessage("Please fill in all fields.", "error");
    return;
  }

  if (!emailPattern.test(email)) {
    showMessage("Invalid email format.", "error");
    return;
  }

  if (!phonePattern.test(contact)) {
    showMessage("Phone number must be 10 digits.", "error");
    return;
  }

  try {
    const response = await fetch('https://your-server-endpoint.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, surname, email, contact, reason })
    });

    if (!response.ok) throw new Error(`Server error: ${response.status}`);
    showMessage("Message sent successfully!", "success");
    document.getElementById('contactForm').reset();
  } catch (error) {
    console.error("Submission failed:", error);
    showMessage("Oops! Something went wrong. Please try again.", "error");
  }
});

//For videos for glightbox
// script.js
const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: true
});
