// All FAQ content. `top: true` items also appear on the homepage.
export const FAQ_GROUPS = [
  {
    title: 'About the device',
    items: [
      { top: true, q: 'What is LaserTouchOne cleared for?',
        a: 'It is FDA-cleared for over-the-counter use for symptomatic relief of chronic, intractable pain, for adjunctive treatment of post-surgical and post-traumatic acute pain, and for adjunctive use in providing temporary relief of minor chronic neck and shoulder pain of musculoskeletal origin.' },
      { q: 'How does it work?',
        a: 'The head of the device has a 670 nm low-level (cold) laser in the middle and two stainless steel contacts either side that deliver mild TENS electrical stimulation. Both work on the same spot at the same time.' },
      { q: 'Does the laser get hot?',
        a: 'No. It is a low-level laser under 1 mW, often called a cold laser. It doesn’t heat the skin.' },
      { q: 'Is it rechargeable?',
        a: 'Yes. It runs on a built-in rechargeable battery. Charge it fully before the first use, as the user manual describes.' },
    ],
  },
  {
    title: 'Using it',
    items: [
      { q: 'How long is a session?',
        a: 'About two minutes per area. Apply a little electrode gel, switch it on and move the head in slow circles or paint strokes over the spot.' },
      { q: 'How often can I use it?',
        a: 'Follow the user manual for how often to use it on each area. Many people build it into their routine, like at their desk or before bed.' },
      { q: 'Why do I need the gel?',
        a: 'The electrode gel helps the electrical stimulation pass from the steel contacts into your skin. Each kit includes a tube.' },
    ],
  },
  {
    title: 'Safety',
    items: [
      { top: true, q: 'Is it safe for everyone?',
        a: 'Never point the laser at your eyes or anyone else’s. If you are pregnant, or have a heart condition or epilepsy, talk to your doctor before using it. Always follow the user manual.' },
      { q: 'Should I talk to my doctor first?',
        a: 'If your pain is new, severe or unexplained, see a doctor before using any device. LaserTouchOne is for relief of pain, not for diagnosing what causes it.' },
    ],
  },
  {
    title: 'FDA status',
    items: [
      { top: true, q: 'Do I need a prescription?',
        a: 'No. LaserTouchOne is cleared for over-the-counter sale, so you can order it yourself.' },
      { q: 'Is it FDA-approved?',
        a: 'It is FDA-cleared, which is the correct term for this type of device. Its over-the-counter clearance is 510(k) K100116, dated April 15, 2010.' },
    ],
  },
  {
    title: 'Buying, shipping and returns',
    items: [
      { top: true, q: 'How much is shipping?',
        a: 'Shipping within the US is one flat rate, shown at checkout. We also ship internationally; the cost depends on your country and is shown at checkout before you pay.' },
      { top: true, q: 'What if it doesn’t work for me?',
        a: 'Every kit is covered by the manufacturer’s money-back guarantee from Laser Health Technologies. If it isn’t right for you, text or email us and we’ll walk you through the return. You pay the return shipping. See our returns page for the details.' },
      { q: 'Will I get tracking?',
        a: 'Yes. We’ll text or email you tracking details as soon as your order is on its way.' },
      { q: 'Is there a warranty?',
        a: 'Yes. Because we are an authorized reseller, your device comes with the warranty from the manufacturer, Laser Health Technologies of Scottsdale, Arizona, and we’ll help you with any claim.' },
      { q: 'Why buy from Laser Micro Duo?',
        a: 'You get a genuine device with the full manufacturer’s warranty, plus a real person to text with questions before and after you buy.' },
    ],
  },
];

export const TOP_FAQS = FAQ_GROUPS.flatMap((g) => g.items).filter((i) => i.top);
