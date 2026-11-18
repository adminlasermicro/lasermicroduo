// Business details used across the site. Replace the placeholders before launch.
export const SITE = {
  name: 'Laser Micro Duo',
  // The legal business behind the store, and its owner.
  legalName: 'Pinestone Investments LLC',
  owner: 'Vicki Oei',
  ownerPlace: 'Arizona',
  url: 'https://www.lasermicroduo.com',
  // Support email (shown in the header bar, footer and contact page).
  contactEmail: 'info@lasermicroduo.com',
  // Number customers can text. Leave '' to hide.
  textNumber: '(480) 734-4877',
  // Shown under the contact details.
  // Offers in the top announcement bar. Confirm each one is true for you.
  announcements: ['Flat-rate US shipping', 'Manufacturer’s money-back guarantee', 'Text support from real people'],
  replyHours: 'We reply Monday to Friday, 9am to 5pm Arizona time (MST).',
  // The company that makes LaserTouchOne. We are an independent authorized reseller.
  manufacturer: 'Laser Health Technologies',
  manufacturerPlace: 'Scottsdale, Arizona',
  // Number of days in the manufacturer's money-back guarantee. Leave null until confirmed;
  // the site then says "money-back guarantee" without a number.
  guaranteeDays: null,
  // Turn on only once HSA/FSA eligibility is confirmed. Shows "May be HSA/FSA eligible" in the buy box.
  hsaFsa: false,
  // Matched against your Wix Stores product name to find the LaserTouchOne kit.
  product: /laser\s*touch\s*one/i,
};

// Digits only, for sms: and tel: links.
export const textHref = SITE.textNumber ? `sms:${SITE.textNumber.replace(/[^\d+]/g, '')}` : '';

// The FDA-cleared indication for LaserTouchOne, word for word (510(k) K100116, April 15, 2010, OTC).
// Every claim on the site must stay inside it.
export const INDICATION = 'The LaserTouchOne™ (OTC) is a low level laser and electrical stimulation device. This combination of low level light and electrical stimulation provides symptomatic relief of chronic, intractable pain, and is indicated for adjunctive treatment of post-surgical and post-traumatic acute pain and for adjunctive use in providing temporary relief of minor chronic neck and shoulder pain of musculoskeletal origin.';

// "money-back guarantee" or "60-day money-back guarantee", depending on guaranteeDays.
export const guaranteeName = SITE.guaranteeDays ? `${SITE.guaranteeDays}-day money-back guarantee` : 'money-back guarantee';
