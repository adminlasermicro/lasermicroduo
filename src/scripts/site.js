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

// Gentle scroll-in motion. Elements marked data-reveal rise in once. If this script never runs,
// the CSS leaves them visible (it only hides them under html.js).
// Inner pages get the same motion without hand-tagging every element.
document.querySelectorAll('.page-hero__in > *, main .section-head > *, .faq__item, .routine__step, .promise, .contact-way, .prose > *, .product-details .section-head, .accessory, .diagram-card, .photo-card, .safety')
  .forEach((el, i) => { if (!el.hasAttribute('data-reveal')) { el.setAttribute('data-reveal', ''); el.style.setProperty('--d', `${(i % 4) * 70}ms`); } });
const revealEls = document.querySelectorAll('[data-reveal]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (revealEls.length) {
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach((el) => io.observe(el));
    // Safety net: never leave anything hidden for long.
    setTimeout(() => revealEls.forEach((el) => el.classList.add('is-in')), 4000);
  }
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
