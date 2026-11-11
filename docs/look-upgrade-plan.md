# Laser Micro Duo — look upgrade plan

Research date: November 11, 2026. Status: proposed, nothing built yet.

## Your decisions

- **Hero:** a full-width photo, with the headline and button laid over it.
- **Shapes:** crisper corners and fewer boxes, with more full-width photo bands and open sections.
- **Theme:** light only, so dark mode is removed.
- **Imagery:** stock photos for now, then your own photoshoot and a short video. Shot list below.

## What the research found

**Sites studied** (captured at 1440px wide):
- Direct competitors: LaserTouchOne, Kineon, iReliev, TENS Units, Zynex, Erchonia, Hinge Health Enso.
- Premium recovery and health devices: Hyperice, Therabody, Eight Sleep, Joovv, Oura.
- Medical brands: Omron, Carex, Drive Medical.

**Patterns on the best of them:**

1. **The product and the body lead.** Every strong site shows the device large, and shows it on skin. Hyperice, Joovv and Eight Sleep open with one full-width lifestyle photo. Kineon and Therabody show the product in hand within the first two screens.
2. **Photos run to the edges.** Images bleed to the screen edges or sit in big split panels. Small framed cards are reserved for product grids.
3. **Small corners.** Hyperice, Therabody and Omron use 0–12px corners on cards and images, and pill or rounded buttons. Large 24–36px rounding reads as "app", not "medical device".
4. **Few shadows and lines.** Surfaces are separated by a change in background tone, not drop shadows or divider lines.
5. **Varied section rhythm.** Eight Sleep alternates photo-left and photo-right splits, then a full-width band, then a grid, so no two neighbouring sections look the same.
6. **Data on the picture.** Eight Sleep and Kineon lay small product facts (temperatures, wavelengths, labels) directly on photos, which makes a device feel real and precise.
7. **Proof near the button.** Star rating, review count, guarantee and shipping sit right beside "Add to cart". There's also a "why buy direct" strip: warranty, returns, shipping.
8. **Light, calm palettes.** Almost all are light only. The dark ones (Erchonia, Joovv) are fully dark brands, not auto-switching.
9. **The footer is a full sitemap,** with policies, payment icons and contact details.

## Taste skill review of the current live site (round 0)

```
Seen in one second: a small photo of a walking couple and a big headline
Idea (one sentence): calm, clinical-plus-premium seller of one FDA-cleared device
Live thing: none
Layout words: hero=split / trust=strip / tech=split / life=grid / steps=row / kit=card /
              fda=split / faq=list / cta=band   (split repeats 3 times, rounded panel everywhere)
Scores: design 6.0 · usability 7.5 · creativity 5.5 · content 5.0 → 6.3
Caps applied: inspector FAILs (shadows, hairlines, eyebrow badge, few pictures, still page) → 6.0;
              placeholders → content ≤ 5
Inspector: 6 FAIL, 5 WARN (13 font sizes, 129-character lines, 8 left edges)
```

## The change list

### A. First screen (biggest effect)
1. **Full-width photo hero.** Use one strong photo edge to edge, with a soft dark gradient (scrim) behind the text. The headline, the $550 price with $645 crossed out, **Shop LaserTouchOne**, and an "FDA-cleared" mark all sit on the photo. The stock couple photo stays until the photoshoot.
2. **Fix the stray dot** under the price in the current hero. It's a layout bug.
3. **Show proof beside the button.** Add a review rating once real reviews exist, and the 30-day trial.

### B. Shapes and spacing
4. **One corner system:** 12px on cards and images, 8px on small items, pill-shaped buttons. This replaces the current 20–36px rounding.
5. **No shadows on resting elements.** Use a change in background tone instead. Shadows stay only on the cart drawer and menus.
6. **Remove the thin divider lines** in the kit card and the FDA facts card. Use space and tone instead.
7. **Fewer floating panels.** The trust strip becomes a plain row on the page background. The kit and FDA sections become open splits rather than white boxes.
8. **Vary the section rhythm:** full-width photo hero → plain trust row → split (photo right) → full-width photo band → steps → product split (photo left) → FDA facts → FAQ → closing band.
9. **One alignment:** headings left-aligned throughout, with one centred moment at most.
10. **Readable line length:** cap paragraphs at about 70 characters (currently up to 129).
11. **Fewer type sizes:** go from 13 sizes to 6.

### C. Imagery and motion
12. **Full-width photo band** between sections, for example "Made for your life" as one big image with two short captions.
13. **Facts laid on the product photo:** "670 nm cold laser" pointing at the centre of the head, "microcurrent contacts" pointing at the sides. This needs your product photo.
14. **A video in How it works:** the two-minute session as a short muted loop with a play button.
15. **Gentle motion:** headings and images fade up once as they scroll in, photos zoom slightly on hover, and buttons press in. Everything is turned off for visitors who prefer reduced motion.

### D. Buying and trust
16. **Sticky "Add to cart" bar** on phones, once the buy button scrolls out of view (Therabody, Kineon).
17. **"Why buy from us" strip** by the price: authorized reseller, manufacturer's warranty, 30-day trial, text support, flat-rate shipping.
18. **Policy pages and footer links: needed before running ads.** Add Shipping, Returns (the 30-day trial), Privacy and Terms pages, plus payment icons in the footer.

### E. Light only
19. **Remove automatic dark mode** so the site always shows sage and stone, matching the light Wix checkout.

### F. Later, once content exists
20. **Reviews:** turn the reviews section back on with real reviews and add stars to the hero.
21. **About story** with your photo.
22. **Body-area guide** ("neck and shoulder", "after surgery or injury", "chronic pain"), limited to the FDA-cleared uses.

## Photoshoot shot list

Shoot in daylight near a window, on plain light backgrounds (white, stone or pale sage) to match the site. Use a phone on a stand, landscape and portrait.

1. **Hero:** a person (40s–60s) at home or outdoors, holding the device to their neck or shoulder, relaxed. Leave empty space on the left for the headline.
2. **Product alone:** the device on a plain stone background, front and three-quarter angle.
3. **Treatment head close-up:** the laser and both steel contacts, sharp.
4. **Full kit:** device, carrying case, charger and gel laid out from above.
5. **Gel step:** a small amount of gel on a knee or shoulder.
6. **In use:** a slow stroke over a knee and over the lower back.
7. **Active person:** after a run or golf, using it on a calf or shoulder.
8. **Travel:** the case going into a gym bag.

## Video brief (15–30 seconds, no voice needed)

Gel on skin → press the button → slow circles over a shoulder (the laser's red glow visible) → close the case. Film it steady, landscape, with daylight. It's used as a muted loop on How it works and as a poster-frame video on Shop.

## Build order once approved

1. Light only, shapes, shadows, lines, type sizes and alignment (B and E). Low risk, sitewide.
2. Full-width hero and the stray-dot fix (A).
3. Section rhythm, the photo band and motion (B8, C12, C15).
4. Sticky cart bar, the "why buy" strip, and policy pages with footer links (D).
5. Product photo facts and video, after your photoshoot (C13–14).
