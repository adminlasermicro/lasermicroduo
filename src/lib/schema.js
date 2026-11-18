// JSON-LD builders for Google (Product, Offer, return policy, shipping, breadcrumbs).
// No aggregateRating until real reviews are shown on the page.
import { SITE } from '../site.config.js';
import { PRODUCT_IMAGES } from '../data/photos.js';

const abs = (p) => new URL(p, SITE.url).href;

export function productSchema(kit) {
  const images = PRODUCT_IMAGES.map(abs);
  const offer = {
    '@type': 'Offer',
    url: abs('/shop'),
    priceCurrency: 'USD',
    price: Number.isFinite(kit.amount) ? kit.amount.toFixed(2) : undefined,
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    seller: { '@id': `${SITE.url}/#org` },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'US' },
      // [NEEDS NOA] flat US rate and delivery times; Google wants shippingRate and deliveryTime.
    },
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'US',
      returnPolicyCategory: SITE.guaranteeDays ? 'https://schema.org/MerchantReturnFiniteReturnWindow' : 'https://schema.org/MerchantReturnUnspecified',
      ...(SITE.guaranteeDays ? { merchantReturnDays: SITE.guaranteeDays } : {}),
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/ReturnShippingFees',
      refundType: 'https://schema.org/FullRefund',
      merchantReturnLink: abs('/returns'),
    },
  };
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'LaserTouchOne kit',
    description: 'A handheld, over-the-counter, FDA-cleared (510(k) K100116) low-level laser and TENS electrical stimulation device. The kit includes the device, a zippered carrying case, a charger, electrode gel, the user manual and the warranty card.',
    brand: { '@type': 'Brand', name: 'LaserTouchOne' },
    manufacturer: { '@type': 'Organization', name: 'Laser Health Technologies LLC', address: { '@type': 'PostalAddress', addressLocality: 'Scottsdale', addressRegion: 'AZ', addressCountry: 'US' } },
    ...(images.length ? { image: images } : {}),
    url: abs('/shop'),
    ...(kit.productId ? { sku: kit.productId } : {}),
    offers: offer,
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path),
    })),
  };
}
