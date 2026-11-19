// Makes smaller display copies of the product photos for phones and thumbnails.
// The originals in public/photos/product are never changed: copies go to public/photos/product/sized.
// Run after adding or replacing a product photo:  node scripts/make-photo-copies.mjs
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'public/photos/product';
const OUT = path.join(SRC, 'sized');
const SIZES = [
  { suffix: 'thumb', width: 200, quality: 78 }, // gallery thumbnails (shown at 72–100px, sharp on 2x screens)
  { suffix: '640', width: 640, quality: 80 },   // phones
  { suffix: '1024', width: 1024, quality: 82 }, // tablets, desktop and high-density phones
];

fs.mkdirSync(OUT, { recursive: true });
for (const file of fs.readdirSync(SRC).filter((f) => f.endsWith('.jpg')).sort()) {
  const base = file.replace(/\.jpg$/, '');
  for (const s of SIZES) {
    // Resize only; colour stays sRGB (keepIccProfile), no crop, no filters.
    await sharp(path.join(SRC, file)).resize({ width: s.width }).keepIccProfile().webp({ quality: s.quality }).toFile(path.join(OUT, `${base}-${s.suffix}.webp`));
  }
}
console.log('done');
