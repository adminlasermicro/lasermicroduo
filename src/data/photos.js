import { PRODUCT_PHOTOS } from './productPhotos.js';
// No stock photos are used any more (the homepage hero shows the real product), so no credits are needed.
export const PHOTOS = {};

// Real product photos for Google's product data (paths in /public). Google wants at least one before
// it shows the product as a merchant listing. Add them here as they arrive, e.g. '/photos/device.webp'.
export const PRODUCT_IMAGES = PRODUCT_PHOTOS.map((p) => p.src);
