// All FAQ content, led by the questions that stop people buying. `top: true` items also appear
// on the homepage and the ad landing page (keep it to 6). Answers may contain simple links.
// Every answer stays inside the FDA-cleared indication (510(k) K100116). Text in [NEEDS NOA: ...]
// is waiting for facts from the user manual or the business, and must be filled in before publishing.
export const FAQ_GROUPS = [
  {
    title: 'Before you buy',
    items: [
      { top: true, q: 'Does it hurt?',
        a: 'The laser is a low-level laser under 1 mW, often called a cold laser, so it doesn’t heat the skin. [NEEDS NOA: how the user manual describes the feel of the electrical stimulation, and whether it can be adjusted]' },
      { top: true, q: 'How long is a session?',
        a: 'About two minutes per area. Apply a little electrode gel, switch it on and move the head in slow circles over the spot. You can repeat it up to five times a day per area, as the user manual describes.' },
      { top: true, q: 'Is it safe? Who shouldn’t use it?',
        a: 'Never point the laser at your eyes or anyone else’s. If you are pregnant, or have a heart condition or epilepsy, talk to your doctor before using it. If your pain is new, severe or unexplained, see a doctor before using any device. [NEEDS NOA: the full list of warnings and who shouldn’t use it, from the user manual]' },
      { top: true, q: 'What if it isn’t right for me?',
        a: 'Every kit is covered by the manufacturer’s money-back guarantee from Laser Health Technologies. Text or email us and we’ll walk you through the return. You get a full refund of the device price; you pay the return shipping. <a href="/returns">See how returns work</a>.' },
      { q: 'Can I use it instead of my pain medication?',
        a: 'LaserTouchOne is cleared as an add-on (adjunctive) treatment for some of its uses, so it isn’t a replacement for the care your doctor recommends. Don’t stop or change any medicine without talking to your doctor.' },
      { q: 'Do I need a prescription?',
        a: 'No. LaserTouchOne is cleared for over-the-counter sale, so you can order it yourself.' },
    ],
  },
  {
    title: 'Using it',
    items: [
      { top: true, q: 'How long does a tube of gel last?',
        a: 'Each kit includes a tube of electrode gel. [NEEDS NOA: roughly how many sessions a tube lasts, and when refills can be bought]' },
      { q: 'Is it rechargeable?',
        a: 'Yes. It runs on a built-in rechargeable battery. Charge it fully before the first use, as the user manual describes.' },
      { q: 'Why do I need the gel?',
        a: 'The electrode gel helps the electrical stimulation pass from the two steel contacts into your skin.' },
    ],
  },
  {
    title: 'FDA clearance',
    items: [
      { q: 'What is LaserTouchOne cleared for?',
        a: 'It is FDA-cleared for over-the-counter use for symptomatic relief of chronic, intractable pain, for adjunctive treatment of post-surgical and post-traumatic acute pain, and for adjunctive use in providing temporary relief of minor chronic neck and shoulder pain of musculoskeletal origin. <a href="/fda-clearance">Read the clearance</a>.' },
      { q: 'Is it FDA-approved?',
        a: '“FDA-cleared” is the correct term for this type of device. The FDA cleared LaserTouchOne for over-the-counter sale under 510(k) K100116 on April 15, 2010. <a href="/fda-clearance">What “cleared” means</a>.' },
    ],
  },
  {
    title: 'Shipping, returns and warranty',
    items: [
      { top: true, q: 'How long does shipping take?',
        a: 'US orders ship at one flat rate, shown at checkout, and we text or email you tracking as soon as it ships. [NEEDS NOA: typical processing time and delivery time]' },
      { q: 'Is there a warranty?',
        a: 'Yes. Your device comes with the warranty from the manufacturer, Laser Health Technologies of Scottsdale, Arizona, and we’ll help you with any claim. [NEEDS NOA: warranty length]' },
      { q: 'Who makes LaserTouchOne, and who are you?',
        a: 'LaserTouchOne is made by Laser Health Technologies LLC in Scottsdale, Arizona. Laser Micro Duo is an independent authorized reseller owned by Vicki Oei in Arizona. <a href="/about">About us</a>.' },
    ],
  },
];

export const ALL_FAQS = FAQ_GROUPS.flatMap((g) => g.items);
export const TOP_FAQS = ALL_FAQS.filter((i) => i.top);

// FAQPage structured data (plain-text answers).
export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question', name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
  })),
});
