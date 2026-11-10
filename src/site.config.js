// Business details used across the site. Replace the placeholders before launch.
export const SITE = {
  name: 'Laser Micro Duo',
  // Support email (shown in the header bar, footer and contact page).
  contactEmail: 'info@lasermicroduo.com',
  // Number customers can text. Leave '' to hide.
  textNumber: '(480) 734-4877',
  // Shown under the contact details.
  replyHours: 'We reply Monday to Friday, 9am to 5pm.',
  // Offers in the top announcement bar. Confirm each one is true for you.
  announcements: ['Flat-rate US shipping', '30-day in-home trial', 'Text support from real people'],
  // Matched against your Wix Stores product name to find the LaserTouchOne kit.
  product: /laser\s*touch\s*one/i,
};

// Digits only, for sms: and tel: links.
export const textHref = SITE.textNumber ? `sms:${SITE.textNumber.replace(/[^\d+]/g, '')}` : '';
