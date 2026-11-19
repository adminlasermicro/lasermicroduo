// Title and meta description for every page, in one place, all inside the FDA-cleared indication.
//
// On the live site Wix injects the title, description, canonical and social tags from the dashboard
// (SEO & GEO > SEO Settings > Main Pages). When we publish, these values are copied into the dashboard
// and the layout stops printing its own <title>/<meta description> (see SiteLayout `wixSeo`), so each
// page has one title, not two. Until then the layout prints them, so local and preview builds show them.
export const SEO = {
  "/": {
    title: "LaserTouchOne FDA-Cleared Laser Device | Laser Micro Duo",
    description: "FDA-cleared cold laser + gentle electrical stimulation for temporary relief of minor neck and shoulder pain at home. $550 with a money-back guarantee.",
  },
  "/shop": {
    title: "LaserTouchOne Deluxe Travel Kit – $550 | Laser Micro Duo",
    description: "Device, travel case, charger, gel and manual. FDA-cleared, no prescription needed. Money-back guarantee and text support from a real person.",
  },
  "/how-it-works": {
    title: "How LaserTouchOne Works: Laser + Electrical Stimulation",
    description: "A low-power red laser and gentle electrical stimulation in one handheld. See how to use it on your neck or shoulder in about 2 minutes.",
  },
  "/fda-clearance": {
    title: "LaserTouchOne FDA Clearance (510(k) K100116)",
    description: "What LaserTouchOne is FDA-cleared for, in the FDA’s exact words and plain English, plus what “cleared” means and a link to the FDA document.",
  },
  "/about": {
    title: "About Laser Micro Duo | Family-Run in Arizona",
    description: "A family business in Arizona and an authorized LaserTouchOne reseller. Real people answer your texts, Monday to Friday.",
  },
  "/faq": {
    title: "LaserTouchOne FAQ: Use, Gel, Charging and More",
    description: "What it feels like, how often to use it, gel, charging, travel and prescriptions. Still have questions? Text a real person.",
  },
  "/contact": {
    title: "Contact Laser Micro Duo | Text a Real Person",
    description: "Text (480) 734-4877 or email us. A real person answers Monday to Friday, 9am to 5pm Arizona time.",
  },
  "/returns": {
    title: "Money-Back Guarantee and Returns | Laser Micro Duo",
    description: "How to return your LaserTouchOne for a refund of the device price, step by step.",
  },
  "/shipping": {
    title: "Shipping Policy | Laser Micro Duo",
    description: "Flat-rate US shipping and international shipping for LaserTouchOne orders from Laser Micro Duo, with tracking by text or email.",
  },
  "/privacy": {
    title: "Privacy Policy | Laser Micro Duo",
    description: "How Laser Micro Duo collects, uses and protects your information when you shop for LaserTouchOne.",
  },
  "/terms": {
    title: "Terms of Use | Laser Micro Duo",
    description: "The terms for using the Laser Micro Duo website and buying LaserTouchOne.",
  },
  "/lp/home": {
    title: "LaserTouchOne: Laser + TENS at Home | Laser Micro Duo",
    description: "An FDA-cleared, drug-free laser and TENS device for minor chronic neck and shoulder pain, used at home in about two minutes.",
  },
};
