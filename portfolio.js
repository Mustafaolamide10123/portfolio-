// Simple form submission message
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thanks for reaching out to me  I'll get back to you soon 😃.");
    document.getElementById("contactForm").reset();
});
