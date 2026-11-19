// Title and meta description for every page, in one place, all inside the FDA-cleared indication.
//
// On the live site Wix injects the title, description, canonical and social tags from the dashboard
// (SEO & GEO > SEO Settings > Main Pages). When we publish, these values are copied into the dashboard
// and the layout stops printing its own <title>/<meta description> (see SiteLayout `wixSeo`), so each
// page has one title, not two. Until then the layout prints them, so local and preview builds show them.
export const SEO = {
  '/': {
    title: 'LaserTouchOne: FDA-Cleared Laser + TENS | Laser Micro Duo',
    description: 'An FDA-cleared, drug-free low-level laser + TENS device for minor chronic neck and shoulder pain, used at home. $550 with a money-back guarantee.',
  },
  '/shop': {
    title: 'LaserTouchOne Deluxe Travel Kit, $550 | Laser Micro Duo',
    description: 'The LaserTouchOne kit: device, zippered case, charger, electrode gel and manual. FDA-cleared, over the counter. Manufacturer list price $645, our price $550.',
  },
  '/how-it-works': {
    title: 'How LaserTouchOne Works: Laser + TENS | Laser Micro Duo',
    description: 'How the 670 nm low-level laser and TENS electrical stimulation work together in LaserTouchOne, the two-minute routine, and how to use it safely.',
  },
  '/fda-clearance': {
    title: 'LaserTouchOne FDA Clearance K100116 | Laser Micro Duo',
    description: 'LaserTouchOne is FDA-cleared for over-the-counter use under 510(k) K100116. Read the exact cleared indication and what “cleared” means.',
  },
  '/about': {
    title: 'About Laser Micro Duo, Arizona LaserTouchOne Reseller',
    description: 'Laser Micro Duo is an independent authorized reseller of LaserTouchOne, owned by Vicki Oei in Arizona. Made by Laser Health Technologies, Scottsdale.',
  },
  '/faq': {
    title: 'LaserTouchOne Questions and Answers | Laser Micro Duo',
    description: 'Answers about LaserTouchOne: what it feels like, session length, safety, who shouldn’t use it, the money-back guarantee, gel and shipping.',
  },
  '/contact': {
    title: 'Contact Laser Micro Duo: Text or Email a Real Person',
    description: 'Text (480) 734-4877 or email Laser Micro Duo with questions about LaserTouchOne or your order. Monday to Friday, 9am to 5pm Arizona time.',
  },
  '/returns': {
    title: 'Money-Back Guarantee and Returns | Laser Micro Duo',
    description: 'How the money-back guarantee works for LaserTouchOne, who pays return shipping, and the step-by-step return process.',
  },
  '/shipping': {
    title: 'Shipping Policy | Laser Micro Duo',
    description: 'Flat-rate US shipping and international shipping for LaserTouchOne orders from Laser Micro Duo, with tracking by text or email.',
  },
  '/privacy': {
    title: 'Privacy Policy | Laser Micro Duo',
    description: 'How Laser Micro Duo collects, uses and protects your information when you shop for LaserTouchOne.',
  },
  '/terms': {
    title: 'Terms of Use | Laser Micro Duo',
    description: 'The terms for using the Laser Micro Duo website and buying LaserTouchOne.',
  },
  '/lp/home': {
    title: 'LaserTouchOne: Laser + TENS at Home | Laser Micro Duo',
    description: 'An FDA-cleared, drug-free laser and TENS device for minor chronic neck and shoulder pain, used at home in about two minutes.',
  },
};
