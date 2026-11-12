# Design system: Laser Micro Duo

Source of truth: the "Laser Micro Duo" design system artifact. Its tokens live in
`src/styles/lmd-tokens.css` (loaded before `src/styles/site.css` and `src/styles/trust.css`). Logo files are in `public/brand/`.
Never hard-code a hex value, font size, radius or shadow in new CSS.

## Color rules (palette: Ink & Copper, chosen 2026-11-11)
- Palette: navy ink `#1F2D5C` (brand, headings, announcement bar, dark bands), copper `#B5401F` (buy buttons
  ONLY), amber `#E8A33D` (stars and small accents on dark bands only), page `#FBFAF7`, cards `#FFFFFF`,
  text `#161A26`, muted text `#4A5061`, hairlines `#DEDBD3`, field borders `#7D8190`.
- Use semantic tokens, never the raw scales: `--color-bg`, `--color-surface`, `--color-surface-muted`,
  `--color-surface-tint`, `--color-surface-inverse`, `--color-text`, `--color-text-muted`, `--color-brand`,
  `--color-brand-strong`, `--color-cta`, `--color-cta-hover`, `--color-on-cta`, `--color-link`,
  `--color-border`, `--color-border-strong`, `--color-focus`, `--color-on-band-muted` (light text on navy),
  `--color-text-on-inverse` / `--color-text-on-inverse-muted` (footer), and the status tokens.
- The copper buy-button color appears nowhere else: no headings, icons, badges or sale tags.
- Never a blue button, and never the manufacturer's bright blue (#005399) or ice blue (#D7EDFF): our navy is
  much darker and sits on warm off-white so we stay distinct from LaserTouchOne's own site.
- Text on `--color-cta` is `--color-on-cta`. One primary button per view.
- `--color-border` is decorative only. Inputs, checkboxes, steppers and outline buttons use
  `--color-border-strong`.
- `--color-star` is decorative: always give the score as text or an `aria-label`.
- Prices, safety information and anything a buyer needs to decide use `--color-text`, never muted.
- Every text/background pair meets WCAG AA (4.5:1; 3:1 for 24px+ text and UI marks); aim for 7:1 on body text.
- The site is light-only. The old `--sage-*`, `--sage`, `--stone`, `--ink` names still exist in the token
  file so nothing breaks, but must not be used.
- No red "laser" glows, gradients or neon accents.

## Type and layout
- Font: Plus Jakarta Sans only (400/500/600/700). Body 17px, line height 1.65. Minimum 15px for
  user-facing text; 14px only for the announcement bar, eyebrow labels and legal lines.
- Controls at least 48px tall. Focus: 3px solid `--color-focus`, 3px offset. Never remove it.
- Spacing from the 8px scale (`--space-*`, or the older `--s1`..`--s8`). Cards 28px radius, buttons pill.
- Respect `prefers-reduced-motion`. No auto-rotating carousels.

## Logo (Sunrise Seal, chosen 2026-11-11)
- Main logo: a round seal with a sun rising over calm water, "LASER MICRO DUO" around the top in Fraunces,
  "FAMILY OWNED · RELIEF AT HOME" around the bottom. Navy ring, copper sun, amber dots.
  Files: `public/brand/lmd-seal.svg` (light backgrounds), `lmd-seal-on-dark.svg`, `lmd-seal-one-color-ink.svg`.
- Header and footer use the horizontal logo (sun icon + "Laser Micro Duo" wordmark):
  `public/brand/lmd-logo-horizontal.svg` and `lmd-logo-horizontal-on-dark.svg`, shown as `<img class="logo__img">`
  inside the `.logo` link (the link carries the aria-label, the image has empty alt).
- Small spaces (favicon, avatars, under ~96px): the sun icon alone, `lmd-icon.svg` / `lmd-app-icon.svg`.
- All logo files have text converted to outlines. Do not retype the wordmark in a font, recolor it outside the
  palette, stretch it, or add shadows. Clear space: one-tenth of the logo's width on every side.
- The older `laser-micro-duo-*` files in `public/brand/` are the retired sage logo. Do not use them.

## Copy
- Health claims stay within the FDA clearance (510(k) K100116) or a cited study. "FDA-cleared", never
  "FDA-approved". No cure, heal, miracle or guaranteed.
- Reviews are real and attributed, with "Individual results vary."
- Keep the legal footer line on every page.

## Trust components
- `ResellerSeal.astro`: `<ResellerSeal />` (authorized reseller, links to About) and `<ResellerSeal kind="fda" />`
  (links to the FDA document). At most two together, near the buy button.
- `StudyList.astro` / `StudyReference.astro`: clinical studies from `src/data/studies.js`. The section is hidden
  while that list is empty. Never add placeholder or unlinked studies.
- `ReviewGrid.astro`: stars always show the score as text, and the grid ends with "Individual results vary."
