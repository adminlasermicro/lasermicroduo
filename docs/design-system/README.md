# Design system v2 (Phase 4 proposal)

**Direction:** calm, clinical and warm, like a trusted pharmacist. White and mist backgrounds, navy for words and structure, and amber only on the button that buys.

- **Tokens:** `src/styles/tokens-v2.css`. Not used by any page yet; the live site is unchanged.
- **One-page style sheet:** `style-sheet.html`. Screenshots: `style-sheet-1440.png`, `style-sheet-390-*.jpg`.

## Decisions

| Area | Choice | Why |
|---|---|---|
| Base | Ink navy `#1f2d5c` on white `#ffffff`, mist `#eef1f6` bands | The navy you already use; white reads clinical, mist separates sections without boxes |
| Accent | **Amber `#f2b544`, primary buttons only**, navy label | 7.2:1 (AAA). Coral tested at 4.7:1 (AA only), and the current copper is close to a terracotta that many templated sites use |
| Body type | **Atkinson Hyperlegible Next** 400/700, 18px, line height 1.6, 66-character lines | Designed by the Braille Institute for low-vision readers; letters like I, l and 1 can't be confused. Its zeros are slashed on purpose (0 vs O) |
| Headings | **Source Serif 4** 600 | A sober, book-like serif: "pharmacist", not "tech startup" |
| Contrast | Body 12.1:1, secondary 7.5:1 | AAA on body and secondary text; nothing important in light blue |
| Layout | Single column on phones, 8px spacing scale, 1200px max, left-aligned text | Easy scanning, no centered paragraphs |
| Controls | Buttons 56px tall (full width on phones), every tap target 48px+, 3px navy focus ring | Above the 44px minimum |
| Shapes | 6px on controls, 12px on photos; structure from rules and bands, not shadowed cards | Crisp and less "boxy," per your earlier feedback |
| Motion | None by default; only the FAQ opening and the sticky bar appearing | No surprise movement for older visitors |

**The one distinctive element: the Device facts panel.** It borrows the layout of the "Drug Facts" label on every pharmacy box: a heavy rule under the title and labelled rows. Older buyers already know how to read it. It's used for the FDA block, specs and what's included, and nowhere else.

**What changes from today's look:** Plus Jakarta Sans becomes Atkinson Hyperlegible Next and Source Serif 4; the copper button becomes amber; the cream page background becomes white and mist; arrow icons on links are replaced by plain underlined links.

## Components in the style sheet
- Buttons (primary, secondary, text link, focus state)
- Buy box with the trust lines under the button
- Gallery with thumbnails
- Trust strip
- Device facts panel
- Guarantee block
- Treatment-head diagram
- FAQ accordion
- Sticky phone buy bar

Built but hidden until real content exists: rating summary, testimonial and customer-video cards (with a disclosure field), and the HSA/FSA line.

## Photography spec `[NEEDS NOA]`

No stock people and no AI images. Shoot on a phone in daylight if needed; we'll crop.

| # | Shot | Use | Ratio | Minimum size |
|---|---|---|---|---|
| 1 | Device cutout on plain white, three-quarter angle | Gallery 1, hero, social preview image | 1:1 | 2000 × 2000 |
| 2 | Treatment head close-up (laser in the centre, two steel contacts) | Gallery 2, How it works | 1:1 | 2000 × 2000 |
| 3 | Device held in a hand | Gallery 3 | 1:1 | 2000 × 2000 |
| 4 | A real 55+ person using it on their **neck or shoulder** at home (couch or kitchen table), with written permission | Gallery 4, home hero option, ads | 4:5 (also crop to 1:1) | 1600 × 2000 |
| 5 | Kit flat-lay: device, zippered case, charger, gel, manual, warranty card | Gallery 5, "What's included" | 1:1 | 2000 × 2000 |
| 6 | Device in its zippered case | Gallery 6 | 1:1 | 2000 × 2000 |
| 7 | Vicki at a table or desk, friendly, natural light | About, "Meet the owner" | 4:5 | 1200 × 1500 |
| 8 | Gel: single tube and the 3-pack | Gel add-on | 1:1 | 1500 × 1500 |
| 9 | Social preview image (built from #1 or #4) | Link previews, Facebook | 1.91:1 | 1200 × 630 |
| 10 | Demo video: the 2-minute routine on a neck or shoulder, 15–30 seconds, captioned, no music needed | Home, shop gallery, landing page | 9:16 and 16:9 | 1080p |
