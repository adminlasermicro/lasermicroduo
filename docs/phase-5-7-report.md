# Phases 5–7: build and QA report

> **Update, Nov 17, 2026 (later):** the owner preferred the original design, so the v2 look was set aside
> (it's kept under git tag `phase5-7-preview`). The current preview, https://ocel3u-admin7493477.wixsite.com,
> is the original Ink & Copper design with the full-width photo hero, plus the new extras: /fda-clearance,
> /lp/home, the homepage guarantee section, per-page SEO and structured data, the share image, the cart
> quantity picker, tracking events and faster loading. Phone Lighthouse on the homepage: Performance 99–100,
> Accessibility 100, SEO 100, LCP about 1.5 s (live today: 74 and 6.1 s). The QA checks below were rerun on
> this version and still pass, except that the Device facts panel, comparison table and hidden testimonial
> videos were v2-only and are not in this version.

Nov 17, 2026. Preview: https://mdh4ue-admin7493477.wixsite.com (not published). Code: branch `site-redesign`.
Rollback: git tag `live-2026-11-17` is what's live today.

## Phase 7 QA checklist

| Check | Result |
|---|---|
| Compliance sweep (microcurrent, approved, heal, cure, recovery, performance, mobility, inflammation, circulation, back, knee, arthritis, sciatica, clinically, instant, guaranteed, pill, migraine, fibromyalgia, neuropathy, whole body, anywhere, proven, permanent, everyone) | **Pass.** Zero violations. Matches were only "money-back", "Health Technologies" and code comments. Borderline, for your review: the FAQ question "Is it FDA-approved?" and the heading "Cleared, not approved" on /fda-clearance; both explain why the correct term is "cleared." |
| No FDA logo; no stock or AI people; no fake reviews | **Pass.** No FDA logo. All stock photos are removed (the walking couple too). Rating, testimonial/video and HSA/FSA components render nothing until real content exists. |
| Add to cart, quantity, cart, checkout at 390px and 1440px | **Pass** in local testing: quantity 2 adds 2, minus and remove work, checkout opens Wix checkout. On the preview: Add to cart works. The gel add-on can't be tested: there are no gel products in Wix yet. |
| Lighthouse mobile (preview) | **Home:** Performance 100, Accessibility 100, Best Practices 96, SEO 100, LCP 1.2 s (live today: 74 and 6.1 s). **Shop:** 100 / 100 / 96 / 100, LCP 1.1 s. **/lp/home:** 100 / 100 / 96 / 69 (the SEO score is low only because it's noindex on purpose). Best Practices 96 is a favicon 404 that happens only on the preview address; the live domain serves it. |
| Keyboard, focus, skip link, accessible names, contrast | **Pass.** First Tab focuses "Skip to content"; every focused element shows a 3px navy outline; the logo is "Laser Micro Duo, home"; the cart says "Cart, 3 items"; body text contrast 12.1:1. |
| Rich Results Test (Product/Offer) | **Not run yet.** The preview address blocks Google's tester. Product data is in place but Google will want a product **image** (none until photos arrive) and **shipping rate and delivery time** `[NEEDS NOA]`. Run it on the live URL after publishing. |
| Internal links, no 404s, old URLs work | **Pass.** 32 links checked. /shop, /returns, /faq, /how-it-works, /about, /contact all work; /guarantee redirects (301) to /returns. |
| /lp/home noindex; other pages indexable | **Pass.** Only /lp/home has `noindex`, and it's left out of the sitemap (11 URLs). |
| One H1, title, description, share image, alt text per page | **Pass** on all 12 pages. |

## Two things that happen at publish (need your OK then)

1. **Page titles in the Wix dashboard.** Wix adds its own title, description and Facebook title to every page from **SEO & GEO → SEO Settings → Main Pages**, which is why the live site has two titles and Facebook shows "Home | Laser Micro Duo". At publish I'd copy the titles and descriptions from `src/data/seo.js` into that dashboard screen and switch the site's own copies off (`wixSeo = true` in the layout), so each page has one title. Dashboard changes go live immediately.
2. **Tracking.** The site now sends ViewContent, AddToCart and InitiateCheckout through Wix, and Wix's checkout sends Purchase. They reach Meta and Google once you connect the **Meta Pixel ID** (and Conversions API) and the **GA4 Measurement ID** in the Wix dashboard under **Marketing Integrations**. Events only fire on the live custom domain. No health words are used in event names or parameters.

After publishing: ask Google to recrawl in Search Console (URL Inspection → **Request indexing** for /, /shop and /fda-clearance).

## Pay later (report only, nothing switched on)

Wix Payments in the US can offer **Affirm** (Pay in 4 or monthly, $50–$17,500; 6% + 30¢ per sale), **Afterpay** (6% + 30¢) and **Klarna** (US Pay in 4 up to $1,000). They're toggles in **Accept Payments → Wix Payments → Manage**. Each provider has its own list of restricted products, so check that a medical device qualifies before turning one on. Once on, the option appears at Wix checkout.

## Still needed `[NEEDS NOA]`
- Photos and the demo video (spec in `docs/design-system/README.md`)
- From the user manual: how the stimulation feels, full warnings and who shouldn't use it, laser class, battery life and charge time
- Guarantee window, warranty length, shipping time and flat US rate
- Gel products in Wix (single tube and 3-pack, with prices) and how long a tube lasts
- Vicki's photo and 2–3 sentences in her words
- HSA/FSA confirmation (then set `hsaFsa: true` in `src/site.config.js`)
- Meta Pixel and GA4 IDs
