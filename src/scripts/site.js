import { track } from '../lib/track.js';

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

// Sticky buy bar: show it once the main buy area has scrolled out of view, below the first screen.
const bar = document.querySelector('[data-sticky-buy]');
const anchor = document.querySelector('[data-buy-anchor]');
if (bar && anchor && 'IntersectionObserver' in window) {
  let anchorVisible = false;
  // Hide the bar from the first data-sticky-stop section down (e.g. the FAQ), so it never covers its heading.
  const stop = document.querySelector('[data-sticky-stop]');
  const update = () => {
    const pastStop = stop ? stop.getBoundingClientRect().top < window.innerHeight : false;
    const show = !anchorVisible && !pastStop && window.scrollY > window.innerHeight * 0.6;
    bar.classList.toggle('is-shown', show);
    bar.setAttribute('aria-hidden', show ? 'false' : 'true');
    bar.querySelector('button')?.setAttribute('tabindex', show ? '0' : '-1');
  };
  new IntersectionObserver(([e]) => { anchorVisible = e.isIntersecting; update(); }).observe(anchor);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ViewContent for the product, once per page view, on pages that carry [data-view-content].
const view = document.querySelector('[data-view-content]');
if (view) track('ViewContent', { id: view.dataset.id, name: 'LaserTouchOne kit', price: Number(view.dataset.price) || undefined, category: 'Devices' });
