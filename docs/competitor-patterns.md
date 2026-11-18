# Competitor patterns (Phase 1)

Researched Nov 17, 2026 in a real browser at 390px (phone) and 1440px (desktop).
Screenshots: `docs/research/competitors/`. Snapshot of our live site: `docs/research/live/` and git tag `live-2026-11-17`.

## What we found, site by site

| Site | Status today | Hero / product formula | Trust next to the buy button | Price and financing | Steal | Breaks our rules |
|---|---|---|---|---|---|---|
| **quellrelief.com** | **Consumer Quell is discontinued.** The site is now a support page for existing users; the new Quell Fibromyalgia is prescription-only. | No sales page any more. Leads with phone number, hours (ET) and email. | n/a | n/a | Phone, hours with time zone and email shown first, in plain text | Its maker paid the FTC over "FDA-cleared" claims beyond its clearance: the reason for our hard rule 1 |
| **hyperice.com** (Hypervolt 3) | Live | Title, price, **FSA/HSA badge** and **star rating** on the first screen, then a 7-image gallery with zoom | HSA/FSA badge and rating sit beside the title, above the photo | $249, PayPal "as low as $20.75/mo" right under Add to bag | **Sticky "Add to bag – $249" bar on mobile**, 7-image gallery, accordions (Full specifications · Ideal for · What's included), 10-question FAQ | "Increase circulation", "recovery"; reviews mention knee arthritis and hip replacement (we could never show those) |
| **oskawellness.com** | Live, but **every "Buy now" button goes to a 404 page** | Dark hero with product only, no headline on the first phone screen | Badge row: Doctor recommended · 100% drug-free · PEMF · Easy to use | Couldn't see: product page is broken. "Claim 10% discount" pop-up | Badge row format; **side-by-side comparison table** (features only, in our case) | Knee, back, joint pain; "clinically proven"; "works at the source"; efficacy comparison against TENS. **Our cautionary example** |
| **omronhealthcare.com** (Max Power Relief TENS) | Live | "#1 Pharmacist recommended brand" credential above the title, plain model name | Credential above the title; "Where to buy" seller list | **MSRP $79.99**, plain | Plain clinical tone, "What's in the box", **full specs table**, counterfeit warning ("buy only from authorized resellers") | Lower back, knee, "increases blood circulation". **Anti-pattern:** a full-screen email pop-up covers the product on arrival |
| **therabody.com** (Theragun PRO Plus) | Live | In-use photo or video first; thumbnail rail; serif product name; one-line description | **Four text chips** (HSA/FSA Accepted · FDA Registered · 30-Day Returns · 1-Year Warranty) between description and price | $649.99; **Afterpay / Klarna "Pay in 4"** under Add to bag | Text trust chips, video as first gallery item, warm neutral palette with a serif heading, footnoted sources, "What's included" + specs tabs | "Reduces inflammation", "improves mobility", "performance", "recovery"; **"113 people added to bag in 24 hours"** urgency; coupon timers |
| **willowcurve.com** | **Not reachable.** The domain resolves, but the store doesn't respond. Only third-party resellers list it. | n/a | n/a | n/a | n/a | Reseller listing says "pain and swelling relief" |

**Takeaway:** two of the six reference sites (Quell, Willow Curve) are no longer selling, and a third (Oska) can't take an order right now. The patterns below come mainly from Hyperice, Therabody and Omron, which are healthy stores. The bar to look more trustworthy than this field is lower than expected.

## The 10 patterns to adopt, ranked by expected conversion impact

1. **Trust lines directly under the Add to cart button.** Therabody and Hyperice put guarantee, warranty and HSA status within a thumb's reach of the button. Ours, as text only: *Manufacturer-backed money-back guarantee · Made by Laser Health Technologies, Scottsdale AZ · FDA-cleared, 510(k) K100116 · Text a real person (480) 734-4877.*
2. **Real product gallery of about 7 images, video first.** Both healthy stores open with real photos (cutout, in use, attachments, what's included). Today we show zero product photos: our single biggest gap. `[NEEDS NOA: photos per the Phase 4 spec]`
3. **Sticky mobile buy bar with the price on the button.** Hyperice: "Add to bag – $249.00" pinned to the bottom. Ours: full-width, 48px+, "Add to cart – $550".
4. **Pay-later line under the button.** Both healthy stores show it for $249–$650 items; at $550 for 55+ buyers it lowers the sticker shock. *Report only: I'll check whether Wix supports it and won't turn anything on without your OK.*
5. **"What's included" plus a plain specs table.** Omron, Hyperice and Therabody all do this. Reassures older, careful buyers. Ours: kit contents, 670 nm, laser class/power and battery from the manual, about 2 minutes per area. `[NEEDS NOA: manual specs]`
6. **One credential above or beside the title.** Omron's "#1 pharmacist recommended," Therabody's "FDA Registered." Ours, factual only: "FDA-cleared · 510(k) K100116" and "Authorized reseller." No invented rankings, no FDA logo.
7. **Feature comparison table (facts, not results).** Oska and Therabody compare side by side. Ours: LaserTouchOne vs a TENS-only unit vs repeated clinic visits, on format, technology, cost over time, prescription needed, and guarantee. No "works better" claims.
8. **Accordion FAQ of about 10 objection questions.** Hyperice's FAQ answers real buying worries. Ours: does it hurt, session length, safety and who shouldn't use it, what if it isn't right for me, gel life, shipping.
9. **Rating summary beside the title, hidden until real.** Hyperice and Therabody show stars next to the title. Build ours now and keep it hidden until we have real reviews; no `aggregateRating` until then.
10. **Visible human support with hours and time zone.** Even Quell's support page leads with phone, hours (ET) and email. Ours: text number and Arizona hours in the buy box, footer and contact page.

**Don't copy:** pop-ups on arrival (Omron), "X people added to bag" or countdown urgency (Therabody), coupon banners, conditions or body parts outside our clearance (Oska, Omron, Hyperice), "clinically proven" or efficacy comparisons (Oska).
