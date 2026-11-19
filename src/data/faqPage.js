// Questions and answers on the /faq page, worded as supplied by the owner (Nov 18, 2026).
// The homepage FAQ block still uses src/data/faq.js. Answers may contain simple links.
const FDA_PDF = 'https://www.accessdata.fda.gov/cdrh_docs/pdf10/K100116.pdf';

export const FAQ_PAGE_GROUPS = [
  {
    title: 'About LaserTouchOne',
    items: [
      { q: 'What is the LaserTouchOne?',
        a: 'A handheld pain relief device with two technologies in one small head: a cold (low-level) laser and mild electrical stimulation. It’s FDA-cleared for over-the-counter use for temporary relief of minor chronic neck and shoulder pain, and it’s meant to work alongside the care you already get.' },
      { q: 'How do the two parts work together?',
        a: 'Look at the tip. The red laser sits in the middle, and the two metal contacts beside it deliver the electrical stimulation. Hold it on one spot and you get both at once, with no pads or wires.' },
      { q: 'Is it FDA-cleared?',
        a: `Yes. It was cleared on April 15, 2010 (510(k) number K100116) for use without a prescription. The FDA lists it as a Class II device in its over-the-counter TENS category. <a href="${FDA_PDF}" target="_blank" rel="noopener">Read the FDA document</a>` },
    ],
  },
  {
    title: 'Using it',
    items: [
      { q: 'Will it feel hot?',
        a: 'No. The laser runs at just 1 milliwatt of red light (670 nm), far too low to warm your skin.' },
      { q: 'What will I feel?',
        a: 'Nothing from the laser itself. The electrical stimulation feels like a soft tingle, and a dial lets you set how strong it is. Keep it comfortable; there’s no need to turn it up high. Your neck and shoulder may not feel it the same way.' },
      { q: 'What’s the gel for?',
        a: 'The gel is the bridge between the metal contacts and your skin. Without it the electrical stimulation can’t reach you, and you won’t feel the tingle. A thin layer is enough; add a bit more when it dries or you move to a new spot. Gel comes in your kit, and refills are sold separately.' },
      { q: 'How many times a day can I use it?',
        a: 'As many as five, spaced at least two to three hours apart.' },
      { q: 'Where should I hold it?',
        a: 'Start on the area that’s bothering you, then work slowly over the surrounding neck or shoulder. The manual walks you through it.' },
    ],
  },
  {
    title: 'Charging, prescriptions and travel',
    items: [
      { q: 'How do I charge it?',
        a: 'Plan on 5–7 hours for a full charge, which typically lasts 2–3 weeks. Unplug it once it’s full, and use a surge protector while it charges.' },
      { q: 'Do I need a prescription?',
        a: 'No. It’s an over-the-counter device.' },
      { q: 'Can I travel with it?',
        a: 'Yes. It packs into the zippered case that comes with the Deluxe Travel Kit.' },
      { q: 'More questions?',
        a: 'Text <a href="sms:4807344877">(480) 734-4877</a>. You’ll reach a real person, Monday to Friday, 9am to 5pm Arizona time.' },
    ],
  },
];

export const ALL_FAQ_PAGE = FAQ_PAGE_GROUPS.flatMap((g) => g.items);
