// ==========================================================
// Footer year
// ==========================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ==========================================================
// Mobile nav toggle
// ==========================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ==========================================================
// Active nav link on scroll
// ==========================================================
const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach(section => navObserver.observe(section));

// ==========================================================
// Scroll reveal
// ==========================================================
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// ==========================================================
// Hero rotating role text
// ==========================================================
const roleText = document.getElementById('roleText');
const roles = ['Python Developer', 'AI Enthusiast', 'Flask Developer'];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let roleIndex = 0;
let charIndex = roles[0].length;
let deleting = false;

function tickRole() {
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    if (charIndex > current.length) {
      charIndex = current.length;
      deleting = true;
      setTimeout(tickRole, 1400);
      return;
    }
  } else {
    charIndex--;
    if (charIndex < 0) {
      charIndex = 0;
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  roleText.textContent = current.slice(0, charIndex) || roles[roleIndex].slice(0, charIndex);
  setTimeout(tickRole, deleting ? 35 : 65);
}

if (roleText) {
  if (prefersReducedMotion) {
    roleText.textContent = roles[0];
  } else {
    roleText.textContent = '';
    charIndex = 0;
    tickRole();
  }
}

// ==========================================================
// Back to top button
// ==========================================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 500);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
});