// Every product photo and video slot on the site. While `src` is null, a labelled placeholder shows
// instead, with the size we need. No stock people and no AI images (see docs/design-system/README.md).
export const MEDIA = {
  cutout:   { src: null, alt: 'LaserTouchOne device', ratio: '1x1', label: 'Device cutout on white', size: '2000 × 2000' },
  head:     { src: null, alt: 'The LaserTouchOne treatment head: laser in the center, a steel contact on each side', ratio: '1x1', label: 'Treatment head close-up', size: '2000 × 2000' },
  inHand:   { src: null, alt: 'LaserTouchOne held in a hand', ratio: '1x1', label: 'Device in a hand', size: '2000 × 2000' },
  inUse:    { src: null, alt: 'A person using LaserTouchOne on their shoulder at home', ratio: '1x1', label: 'In use on the neck or shoulder, at home', size: '2000 × 2000' },
  kit:      { src: null, alt: 'Everything in the LaserTouchOne kit', ratio: '1x1', label: 'Kit flat-lay', size: '2000 × 2000' },
  case:     { src: null, alt: 'LaserTouchOne in its zippered carrying case', ratio: '1x1', label: 'Device in its case', size: '2000 × 2000' },
  vicki:    { src: null, alt: 'Vicki Oei, owner of Laser Micro Duo', ratio: '4x5', label: 'Photo of Vicki', size: '1200 × 1500' },
  // Demo video: 15–30 s of the two-minute routine on a neck or shoulder. Muted, captioned.
  demo:     { src: null, poster: null, captions: null, ratio: '16x9', label: 'Demo video: the routine on a neck or shoulder, 15–30 s', size: '1080p, captioned' },
};
