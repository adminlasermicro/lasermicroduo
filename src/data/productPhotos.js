// LaserTouchOne product photos for the /shop gallery, in display order (the first is the main image).
// Files in public/photos/product are the final 2048 × 2048 sRGB JPEGs exactly as supplied: don't crop,
// resize, recompress, filter or auto-edit them. Alt text describes what's in the photo, with no claims.
export const PRODUCT_PHOTOS = [
  { file: '01_hero-3-4.jpg', alt: 'LaserTouchOne handheld device, three-quarter view, with its blue power button' },
  { file: '02_side-profile.jpg', alt: 'LaserTouchOne seen from the side' },
  { file: '03_logo-side.jpg', alt: 'The LaserTouchOne logo on the side of the device' },
  { file: '04_tip-front.jpg', alt: 'The treatment tip seen head-on, with its two metal contacts' },
  { file: '05_dial-detail.jpg', alt: 'Close-up of the intensity control, marked minus and plus, near the tip' },
  { file: '06_button-detail.jpg', alt: 'Close-up of the blue power button' },
  { file: '07_back-charging-port.jpg', alt: 'The back end of the device with its charging port' },
  { file: '08_case-with-device.jpg', alt: 'LaserTouchOne in front of its black zippered carrying case' },
  { file: '09_carry-case.jpg', alt: 'The black zippered LaserTouchOne carrying case with a wrist strap' },
  { file: '10_rear-3-4.jpg', alt: 'LaserTouchOne from the rear, three-quarter view' },
  { file: '11_dial-side.jpg', alt: 'The other side of the device, showing the intensity control' },
].map((p) => ({ ...p, src: `/photos/product/${p.file}`, width: 2048, height: 2048 }));
