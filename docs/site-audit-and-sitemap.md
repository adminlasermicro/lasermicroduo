# Site audit (Phase 2) and sitemap proposal (Phase 3)

Nov 17, 2026. "Live" = lasermicroduo.com today (git tag `live-2026-11-17`). "Preview" = the saved Phase 1 version (tag `phase1-preview`), not published.
Screenshots: `docs/research/live/` (live) and `docs/research/preview/` (preview, desktop). Lighthouse reports: `docs/research/live/lighthouse-*.json`.

## Lighthouse, live site, mobile (the "before" numbers)

| Page | Performance | Accessibility | Best Practices | SEO | LCP (target < 2.5s) | CLS |
|---|---|---|---|---|---|---|
| Home | **74** | 100 | 100 | 100 | **6.1 s** | 0 |
| Shop | 99 | 100 | 100 | 100 | 1.6 s | 0 |

## Top 15 issues, ranked by impact

| # | Issue | Evidence | Status |
|---|---|---|---|
| 1 | **No product photo anywhere.** On a phone, neither Home nor Shop shows the device on the first screen; the product, kit and gallery slots say "coming soon." | `live/home-390.jpg`, `live/shop-390.jpg` | Open: `[NEEDS NOA: photos]` |
| 2 | **Off-label claims live:** "Pain relief that keeps you moving," the active recovery section (runs, golf, workouts, gym bag), "after a workout" lines | `live/home-390.jpg` | Fixed in preview, not published |
| 3 | **"Microcurrent" on the live site:** hero, tech section, FDA card, meta descriptions, /shop, /how-it-works, FAQ | live page source | Fixed in preview |
| 4 | **"30-day in-home trial" contradicts the real guarantee**; /returns doesn't say who pays return shipping | live /returns | Fixed in preview (window still `[NEEDS NOA]`) |
| 5 | **Homepage loads slowly on phones: LCP 6.1 s.** The hero photo isn't preloaded or sized for phones, and the Google Font blocks rendering (~0.8 s) | Lighthouse | Open: Phase 6 |
| 6 | **Wix adds a second page title and the Facebook preview title.** Every page has two `<title>` tags (ours, plus Wix's "Home \| Laser Micro Duo", "Faq \| …", "How-it-works \| …"), and `og:title` (what Facebook shows when the link is shared or used in an ad) is Wix's "Home \| Laser Micro Duo" | live page source | Open: Phase 6 |
| 7 | **No Open Graph image on any page.** Shared links and link ads show no picture | live page source | Open: Phase 6 (needs a product photo) |
| 8 | **No Product/Offer schema**, so Google can't show a merchant listing. Only Wix's generic homepage schema exists | live page source | Open: Phase 6 |
| 9 | **Manufacturer never named** ("trademark of its owner") | live footer | Fixed in preview |
| 10 | **No proof:** no reviews, and About says "Real people behind your relief" but names nobody | live /about | Open: `[NEEDS NOA: Vicki's photo and story; real reviews]` |
| 11 | **Competing actions on the first screen:** header "Shop now," hero "Shop LaserTouchOne," "See how it works," plus the cart; "FDA-cleared" appears 3 times on the first phone screen | `live/home-390.jpg` | Open: Phase 5 |
| 12 | **Gel can't be bought.** "Gel and accessories" links to nothing; there's no gel product in the Wix store | footer link, /shop | Link removed in preview; products `[NEEDS NOA: gel prices]` |
| 13 | **No ad landing page or FDA page.** Ads would land on Home with the full menu; no `/fda-clearance` page to rank for "LaserTouchOne FDA" | sitemap | Open: Phase 5 |
| 14 | **robots.txt points to /sitemap.xml (404)** | live /robots.txt | Fixed in code; confirm on the real domain after publishing |
| 15 | **Cart button label doesn't match what's shown:** screen readers hear "Open cart," but the button shows the count ("0") | Lighthouse | Open: small fix in Phase 5 |

### Corrections to the known-issue list
- **Skip link works.** It targets `<main id="main">`, which exists on every page.
- **Logo link has an accessible name** ("Laser Micro Duo home", via `aria-label`). The image's empty alt is intentional, so screen readers don't read the name twice.
- **No FDA logo anywhere.** The FDA seal is a document icon plus text. Pass.
- **Accessibility scores 100** on Home and Shop. The remaining work is larger text, bigger tap targets, and the cart label.
- **Support hours** had no time zone on live; the preview now says "Arizona time (MST)".
- **Also found:** a "Log in" link in the footer. Customers don't need accounts, so I propose removing it.

---

## Sitemap proposal (needs your OK before building)

Your structure, with four refinements from the research (marked ★).

```
/                    Home = main sales page (hero with product, trust lines under the button,
                     demo video, how it works, ★ comparison table, guarantee, Vicki, FAQ, FDA block)
/shop                Product page: ★ 7-image gallery + video, buy box, gel add-on,
                     ★ "What's included" + specs table, accordions
/shop#accessories    Gel single tube + 3-pack. Shown only once the products exist in Wix
/how-it-works        Laser + TENS diagram, 3-step routine, safety from the manual
/fda-clearance       NEW: K100116, exact indication, cleared vs approved, PDF link
/about               Vicki Oei, Arizona; why we sell it; manufacturer named
/faq                 About 10 objection-led questions (accordion)
/returns             ★ Single home for the guarantee: "Returns and money-back guarantee"
/guarantee           ★ Redirects to /returns (one page to keep accurate, not two)
/warranty            NEW once we have the manufacturer's warranty terms [NEEDS NOA]; until
                     then the warranty section stays on /returns
/contact, /shipping, /privacy, /terms   Keep
/lp/home             NEW: Facebook landing page for 55+ at home. No main menu, noindex,
                     left out of the sitemap
/lp/golf             Built from the same template later. Not built now
```

**Main menu (5):** Shop · How it works · FDA clearance · About · FAQ, plus one "Buy now" button. Contact moves to the footer and the "Text a real person" line by every buy button.

**Footer:** Shipping · Returns and guarantee · Privacy · Terms (+ Warranty when ready) · the FDA indication · manufacturer named · Laser Micro Duo (Pinestone Investments LLC) · text number, email and Arizona hours. The "Log in" link is removed.

**Old URLs:** /shop, /returns, /faq, /how-it-works, /about and /contact all keep working. Nothing is renamed.
