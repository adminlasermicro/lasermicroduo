import { productsV3 } from '@wix/stores';
import { SITE } from '../site.config.js';

// The LaserTouchOne kit sold on the site. Price, sale price and cart id come from the Wix Stores
// product whose name matches SITE.product (see site.config.js), so price changes in the Wix
// dashboard show up here automatically.
const KIT_INFO = {
  name: 'LaserTouchOne Deluxe Travel Kit',
  blurb: 'Everything you need, in one travel kit.',
  includes: [
    'LaserTouchOne device',
    'Zippered travel case',
    'Charger',
    'Electrode gel',
    'User manual and warranty card',
  ],
};

const ACCESSORY_DEFS = [
  // Matched against Wix Stores product names. Each shows on /shop#accessories once it exists in Wix.
  { key: 'gel-pack', match: /electrode\s*gel.*(3|three)|(3|three).*electrode\s*gel/i, name: 'Electrode gel 3-pack', text: 'Three tubes of the electrode gel LaserTouchOne uses.' },
  { key: 'gel-single', match: /electrode\s*gel/i, name: 'Electrode gel, single tube', text: 'One tube of the electrode gel LaserTouchOne uses.' },
];

const toItem = (p) => {
  const variants = p?.variantsInfo?.variants ?? [];
  return {
    productId: p?._id ?? null,
    variantId: variants.length === 1 ? variants[0]._id : null,
    price: p?.actualPriceRange?.minValue?.formattedAmount ?? null,
    compareAt: p?.compareAtPriceRange?.minValue?.formattedAmount ?? null,
    amount: Number(p?.actualPriceRange?.minValue?.amount ?? NaN),
    compareAmount: Number(p?.compareAtPriceRange?.minValue?.amount ?? NaN),
  };
};

export async function loadStore() {
  let products = [];
  try {
    const res = await productsV3.queryProducts({ fields: ['CURRENCY'] }).limit(100).find();
    products = res.items ?? [];
  } catch {}

  const main = products.find((p) => SITE.product.test(p.name ?? ''));
  const kit = { ...KIT_INFO, ...toItem(main) };
  // Only show a crossed-out price when it is really higher than the selling price.
  if (!(kit.compareAmount > kit.amount)) kit.compareAt = null;

  const taken = new Set();
  const accessories = ACCESSORY_DEFS.flatMap((d) => {
    const p = products.find((x) => x._id !== kit.productId && d.match.test(x.name ?? '') && !taken.has(x._id));
    if (p) taken.add(p._id);
    return p ? [{ ...d, ...toItem(p) }] : [];
  });

  return { kit, accessories };
}
