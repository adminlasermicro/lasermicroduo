// Clinical studies shown on the site. While this list is empty, the study sections are hidden.
//
// Only add a study if ALL of these are true:
//   - it tested LaserTouchOne, or the same technologies at the same settings
//   - it is about a use inside the FDA clearance (510(k) K100116)
//   - you can link to the paper or its abstract
// Use the study's own numbers. Don't round up, and don't write "proven".
//
// Copy this template into the list for each study:
//
//   {
//     finding: 'In 60 adults with chronic neck pain, ... (one plain sentence, the study’s own numbers).',
//     participants: 60,
//     condition: 'Chronic neck pain',
//     design: 'Randomized, placebo-controlled',
//     year: 2012,
//     note: '',  // optional: limits worth knowing, e.g. 'Small study, not blinded.'
//     citation: 'Author A, Author B. Title of the paper. Journal Name. 2012;10(2):100-110.',
//     url: 'https://...',
//   },
export const STUDIES = [];
