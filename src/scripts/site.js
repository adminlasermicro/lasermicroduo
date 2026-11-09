// Shared site behaviour: mobile menu and sticky-header state.
const toggle = document.querySelector('[data-menu-toggle]');
const menu = document.getElementById('mobile-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
    menu.hidden = open;
  });
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) { menu.hidden = true; toggle.setAttribute('aria-expanded', 'false'); }
  });
}

const header = document.querySelector('[data-header]');
if (header) {
  const onScroll = () => header.classList.toggle('header--scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}
