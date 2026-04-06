(function () {
  // Language toggle
  const langToggle = document.getElementById('lang-toggle');
  const body = document.body;

  const savedLang = localStorage.getItem('sylvanor-lang');
  if (savedLang) body.dataset.lang = savedLang;

  langToggle.addEventListener('click', function () {
    const newLang = body.dataset.lang === 'cz' ? 'en' : 'cz';
    body.dataset.lang = newLang;
    localStorage.setItem('sylvanor-lang', newLang);
    document.documentElement.lang = newLang === 'cz' ? 'cs' : 'en';
  });

  // Mobile hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });

  // Sticky navbar background
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Scroll fade-in animation
  var fadeElements = document.querySelectorAll('.fade-in');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  fadeElements.forEach(function (el) { observer.observe(el); });
})();
