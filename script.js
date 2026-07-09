 // Scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Destination tabs
  document.querySelectorAll('.dest-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.dest-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Navbar scroll effect
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.boxShadow = '0 2px 20px rgba(26,18,8,0.08)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });