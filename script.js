/* ============================================================
   main.js — AutoFlow Landing Page
   ============================================================ */

// Ano dinâmico no footer
document.getElementById('year').textContent = new Date().getFullYear();

// ── Nav: borda ao rolar ──────────────────────────────────────
const navWrap = document.querySelector('.nav-wrap');
window.addEventListener('scroll', () => {
  navWrap.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Reveal on scroll (IntersectionObserver) ──────────────────
const revealEls = document.querySelectorAll(
  '.benefit-card, .testimonial, .step, .stat-card, ' +
  '.hero-eyebrow, .hero-title, .hero-sub, .btn-cta, .hero-proof, ' +
  '.hero-visual, .logos-row, .section-title, .section-label'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach(el => observer.observe(el));

// Atraso escalonado para cards em grade
document.querySelectorAll('.benefit-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.08}s`;
});
document.querySelectorAll('.testimonial').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
});

// ── Menu mobile ──────────────────────────────────────────────
const toggle = document.querySelector('.nav-mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('mobile-open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Fecha ao clicar em link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
}

// ── Smooth scroll para âncoras ───────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});