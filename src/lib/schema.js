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
    // shippingDetails: add once the flat US rate and delivery times are known (Google wants
    // shippingRate and deliveryTime; a block without them shows as an error in Search Console).
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
    name: 'LaserTouchOne Deluxe Travel Kit',
    description: 'A handheld device that pairs a cold laser with gentle electrical stimulation, FDA-cleared for temporary relief of minor chronic neck and shoulder pain. Drug-free, no prescription, about 2 minutes per area. Includes the device, zippered travel case, charger, electrode gel, user manual and warranty card.',
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
