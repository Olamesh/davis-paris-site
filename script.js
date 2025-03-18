// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Button animation effect (optional)
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.05)';
    button.style.transition = 'transform 0.3s';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });

  button.addEventListener('click', () => {
    button.style.backgroundColor = '#e6c200';
    setTimeout(() => {
      button.style.backgroundColor = '#ffd700';
    }, 200);
  });
});

// Contact form submit handler (optional)
const contactForm = document.querySelector('.contact form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    alert('Thanks for your message! I will get back to you soon.');

    // Optional: Reset the form
    contactForm.reset();
  });
}
