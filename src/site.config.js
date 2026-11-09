// Business details used across the site. Replace the placeholders before launch.
export const SITE = {
  name: 'Laser Micro Duo',
  // Support email (shown in the header bar, footer and contact page).
  contactEmail: 'hello@example.com',
  // Number customers can text. Leave '' to hide.
  textNumber: '(555) 010-0000',
  // Shown under the contact details.
  replyHours: 'We reply Monday to Friday, 9am to 5pm.',
  // Offers in the top announcement bar. Confirm each one is true for you.
  announcements: ['Free shipping', '30-day in-home trial', 'HSA and FSA eligible'],
  // Matched against your Wix Stores product names to find the two kits.
  kits: {
    gel: /laser\s*touch\s*one.*(gel|device)/i,
    travel: /laser\s*touch\s*one.*(travel|deluxe)/i,
  },
};

// Digits only, for sms: and tel: links.
export const textHref = SITE.textNumber ? `sms:${SITE.textNumber.replace(/[^\d+]/g, '')}` : '';
