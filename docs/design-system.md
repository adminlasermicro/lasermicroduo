# Design system: Laser Micro Duo

Source of truth: the "Laser Micro Duo" design system artifact. Its tokens live in
`src/styles/lmd-tokens.css` (loaded before `src/styles/site.css`). Logo files are in `public/brand/`.
Never hard-code a hex value, font size, radius or shadow in new CSS.

## Color rules
- Use semantic tokens: `--color-bg`, `--color-surface`, `--color-surface-muted`, `--color-surface-tint`,
  `--color-surface-inverse`, `--color-text`, `--color-text-muted`, `--color-brand`, `--color-brand-strong`,
  `--color-cta`, `--color-cta-hover`, `--color-on-cta`, `--color-link`, `--color-border`,
  `--color-border-strong`, `--color-focus`, and the status tokens (`--color-success`, `--color-warning`,
  `--color-error`, each with `-bg`). Raw scales (`--sage-*`, `--ink-*`, `--gold-*`) only inside the token file.
- The old names (`--sage`, `--sage-dark`, `--ink`, `--ink-2`, `--stone`, `--sage-soft`, `--sage-mist`,
  `--sage-line`, `--star`) still work as aliases. Use semantic tokens in new code and migrate old rules
  when you touch them.
- Text on `--color-cta` is `--color-on-cta`. Never plain "white".
- One primary (`--color-cta`) button per view. Other actions use a secondary or quiet button.
- `--color-border` / `--sage-line` (#d3ddd0) is decorative only. Inputs, checkboxes, steppers and outline
  buttons use `--color-border-strong` (3:1 or better).
- `--color-star` is decorative: always give the score as text or an `aria-label`.
- Gold is for stars and warnings only. Success, warning and error always carry an icon and a word.
- Prices, safety information and anything a buyer needs to decide use `--color-text`, never muted.
- Every text/background pair meets WCAG AA (4.5:1; 3:1 for 24px+ text and UI marks).
- Dark mode: the tokens include a dark set, but the site is pinned to light with `data-theme="light"` on
  `<html>` because `site.css` still uses the old names. Remove that attribute only after every rule uses
  semantic tokens and dark mode has been checked page by page.
- Never use the manufacturer's (LaserTouchOne) logo or colors in our UI, red "laser" glows, gradients or
  neon accents.

## Type and layout
- Font: Plus Jakarta Sans only (400/500/600/700). Body 17px, line height 1.65. Minimum 15px for
  user-facing text; 14px only for the announcement bar, eyebrow labels and legal lines.
- Controls at least 48px tall. Focus: 3px solid `--color-focus`, 3px offset. Never remove it.
- Spacing from the 8px scale (`--space-*`, or the older `--s1`..`--s8`). Cards 28px radius, buttons pill.
- Respect `prefers-reduced-motion`. No auto-rotating carousels.

## Logo
- The header and footer logo is HTML (`.logo`): three dots plus "Laser Micro Duo" in weight 700,
  letter-spacing -0.03em. Outer dots `--logo-dot`, center dot `--sage`.
- Image versions for emails, social cards and print are in `public/brand/`.
- Clear space: the width of the big dot on every side. Don't recolor, outline or add effects.

## Copy
- Health claims stay within the FDA clearance (510(k) K100116) or a cited study. "FDA-cleared", never
  "FDA-approved". No cure, heal, miracle or guaranteed.
- Reviews are real and attributed, with "Individual results vary."
- Keep the legal footer line on every page.
