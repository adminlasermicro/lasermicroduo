# Laser Micro Duo — website redesign plan

Status: draft for your review (November 9, 2026). Nothing in this plan has been built yet.

## 1. What we're building and why

A clean, professional online store for **LaserTouchOne**, sold by Laser Micro Duo as an authorized reseller.
The last version was rejected for odd geometry, cramped and uneven spacing, and a boxy feel.
This redesign follows what the best device and medical-supply sites do: calm colours, real people in the
photos, plenty of white space, soft rounded shapes and a clear path to buying.

**Who it's for**

- Adults living with chronic pain who want a drug-free option at home.
- Active people recovering from training, injury or surgery.

**What success looks like**

- In five seconds a visitor knows what LaserTouchOne is, that it is FDA-cleared and what it costs.
- Buying takes two clicks: choose a kit, add to cart, then the Wix checkout.
- Questions get answered on the page, or by a text or email to you.

## 2. Style

The style mixes clinical trust (white space, FDA facts up front) with a premium device feel (large
photos and product shots).

**Colours: sage and stone**

| Role | Colour | Use |
|---|---|---|
| Background | `#F5F5F1` warm stone | Page background |
| Surface | `#FFFFFF` | Cards, product panels, header |
| Text | `#1F2B26` deep green-black | Headings and body |
| Secondary text | `#5B6660` | Captions, small print |
| Primary | `#3C6E5B` sage | Buttons, links, highlights |
| Primary dark | `#2E5747` | Button hover |
| Soft sage | `#E3EADF` | Tinted sections, badges |
| Accent | `#C9D8C5` | Thin highlights, review stars background |
| Stars | `#E0A526` | Review stars only |

**Type**

- One family, **Plus Jakarta Sans**: friendly, modern and highly readable.
- Headings are semibold and sentence case. Body text is 17–18px with relaxed line height.
- The type scale has five sizes: hero, section heading, sub-heading, body and small.

**Shapes and spacing (the fix for "too boxy")**

- Photos and cards have soft, large rounded corners (24px). Buttons are fully rounded.
- Sections are separated by generous space (96–128px on desktop) and soft-tinted bands, not borders.
- No hard grid of identical boxes. Photos sit large, sometimes overlapping a tinted panel.
- Content is centred in a 1200px column with even side margins on every page.
- Spacing comes from one scale (8, 16, 24, 32, 48, 64, 96, 128px), so every gap is intentional.

**Tone of voice**

Upbeat and active. The copy uses short sentences, plain words and an energetic, encouraging voice:
"Get back to the things you love," not "Revolutionary therapy solution."

**Photos**

- Licensed stock photos of real people stand in until you add your own: walking, gardening, running,
  stretching, a desk worker rubbing their neck.
- They never pretend to be the device. Product shots are placeholders until you get manufacturer images.
- Every photo slot is labelled in the code so it's easy to swap.

## 3. On every page

- **Announcement bar:** "Free shipping · 30-day in-home trial · HSA/FSA eligible" (wording to confirm).
- **Header:** logo, Shop, How it works, About, FAQ, Contact, and a cart button with a count. On phones it
  collapses to a menu button.
- **Footer:**
  - text and email contact
  - page links
  - policies (shipping, returns, privacy, terms)
  - the FDA and reseller disclaimer
  - the copyright line

## 4. Pages

### Home (`/`)
1. **Hero:**
   - a large photo of an active adult on one side
   - a short headline, for example "Pain relief that keeps you moving"
   - one plain line saying what LaserTouchOne is and that it is FDA-cleared
   - a **Shop LaserTouchOne** button plus a "How it works" link
   - the price ("From $___") and your review rating
2. **Trust strip:** FDA-cleared (K100116) · drug-free · HSA/FSA eligible · 30-day trial · text support.
3. **Two technologies, one device:** a product image with two short explanations: the 670 nm cold laser
   and microcurrent.
4. **Made for your life:** two large photo panels, "Everyday chronic pain" and "Recovery for active people,"
   each with two sentences.
5. **Three steps, two minutes:** apply the gel, two minutes of slow strokes, repeat up to five times a day.
6. **Reviews:** your customers' reviews with stars and first names, plus the average rating.
7. **Choose your kit:** the two kits side by side, each with what's included, price, Add to cart and a
   "Compare details" link.
8. **FDA-cleared, explained:** a short plain-English summary with a link to the clearance document.
9. **Top questions:** five FAQ items that expand, with a link to the full FAQ.
10. **Closing band:** "Questions before you buy? Text us," with your number and email.

### Product page (`/shop`)
- A photo gallery on the left; on the right a kit selector (Device + Gel Kit / Deluxe Travel Kit), price,
  quantity, Add to cart, trust badges and "Text us with questions."
- Expanding sections: what's in the box, how to use it, safety, shipping and returns, warranty and the
  30-day trial.
- Reviews.
- Accessories: electrode gel 3-pack and charging cord, if you sell them.

### How it works (`/how-it-works`)
- How the 670 nm laser and microcurrent work together, in plain language with a simple diagram.
- The session routine, step by step with photos.
- Where people use it, kept to the cleared uses: chronic pain, pain after surgery or injury, and neck and
  shoulder pain.
- Safety: never aim at the eyes; ask a doctor first if pregnant or if you have a heart condition or epilepsy.
- The FDA clearance quoted word for word.

### About us (`/about`)
- Your story: who runs Laser Micro Duo and why. **I need this from you.**
- What "authorized reseller" means for the buyer: genuine devices, the manufacturer's warranty, and you
  as a real person to text.
- A photo of you or your team, if you're comfortable with that.

### FAQ (`/faq`)
- Questions grouped under: About the device, Using it, Safety, FDA status, Buying and HSA/FSA, Shipping,
  returns and warranty.

### Contact (`/contact`)
- Text number and email shown large, a simple message form and the hours you reply.

## 5. Rules for claims (keeps you safe)

- Say "FDA-cleared," never "FDA-approved."
- Describe the device only by its cleared uses (K100116):
  - relief of chronic, intractable pain
  - adjunctive treatment of pain after surgery or injury
  - temporary relief of minor chronic neck and shoulder pain
- Don't use the manufacturer's "93% effective," "no side effects" or long condition lists unless your
  reseller agreement gives you approved copy.
- Reviews must be real, from your customers, shared with their permission. I'll flag any review that
  promises a cure or names a condition outside the cleared uses, so you can decide whether to keep it.

## 6. How it will be built

- The same Astro + Wix project. The old homepage files in `src/components/home/` are replaced.
- **Pages:** `/`, `/shop`, `/how-it-works`, `/about`, `/faq`, `/contact`, all sharing one layout with
  the header and footer.
- **Products and prices** come from Wix Stores: the two kits, plus gel and charger if you sell them.
  The existing cart drawer and Wix checkout are kept.
- **Reviews** live in one simple data file you can edit (`src/data/reviews.js`). They can move to a
  Wix reviews app later.
- **Contact details** live in `src/site.config.js`.
- **Contact form:** it opens the visitor's email app for now. It can be connected to Wix Forms later.

**Quality checks before I call it done**

- screenshots at desktop, tablet and phone size, reviewed for spacing and alignment
- keyboard and screen-reader basics
- text contrast
- a production build

## 7. Order of work

1. Design system: colours, type, spacing, buttons, cards, header and footer.
2. Homepage. **I'll send you screenshots here for feedback before continuing.**
3. Product page and cart.
4. How it works, About, FAQ and Contact.
5. Final checks on every page and screen size, then a summary of what you need to swap in
   (photos, text number, email, story, reviews).

## 8. What I still need from you

| # | Item | Needed by |
|---|---|---|
| 1 | Your text number and support email | Before launch (placeholders until then) |
| 2 | Your customer reviews: first name or initials, star rating, text, and their OK to publish | Step 2 (placeholders until then) |
| 3 | Your About us story: a few sentences on who you are and why you sell LaserTouchOne | Step 4 |
| 4 | A logo, if you have one (otherwise I'll set "Laser Micro Duo" as a clean wordmark) | Step 1 |
| 5 | Whether you'll sell the gel 3-pack and charging cord too | Step 3 |
| 6 | The exact offers for the announcement bar (free shipping? trial? HSA/FSA?) | Step 1 |
