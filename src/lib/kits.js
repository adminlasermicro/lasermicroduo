import { productsV3 } from '@wix/stores';
import { SITE } from '../site.config.js';

// The two LaserTouchOne kits. Prices and cart ids come from your Wix Stores products,
// matched by name (see site.config.js). Until those products exist, prices read "Price on request".
const KIT_INFO = {
  gel: {
    key: 'gel',
    name: 'Device + Gel Kit',
    blurb: 'Everything you need to start at home.',
    includes: ['LaserTouchOne device', 'Charging cord', '5 oz tube of electrode gel', 'User manual and warranty card'],
  },
  travel: {
    key: 'travel',
    name: 'Deluxe Travel Kit',
    blurb: 'Ready for the gym bag, the office or the road.',
    includes: ['LaserTouchOne device', 'Zippered carrying case', 'Charger', 'Tube of electrode gel'],
    badge: 'Most complete',
  },
};

export async function loadKits() {
  let products = [];
  try {
    const res = await productsV3.queryProducts({ fields: ['CURRENCY'] }).limit(100).find();
    products = res.items ?? [];
  } catch {}

  const toKit = (key) => {
    const p = products.find((x) => {
      const name = x.name ?? '';
      // A name that matches the travel kit is never used for the gel kit.
      return SITE.kits[key].test(name) && (key === 'travel' || !SITE.kits.travel.test(name));
    });
    const variants = p?.variantsInfo?.variants ?? [];
    return {
      ...KIT_INFO[key],
      productId: p?._id ?? null,
      variantId: variants.length === 1 ? variants[0]._id : null,
      price: p?.actualPriceRange?.minValue?.formattedAmount ?? null,
      amount: Number(p?.actualPriceRange?.minValue?.amount ?? NaN),
    };
  };

  const kits = [toKit('gel'), toKit('travel')];
  const priced = kits.filter((k) => k.price && !Number.isNaN(k.amount)).sort((a, b) => a.amount - b.amount);

  // Accessories: shown on the shop page only when a matching Wix product exists.
  const accessoryDefs = [
    { key: 'gel-pack', match: /electrode\s*gel/i, name: 'Electrode gel 3-pack', text: 'Three tubes of the gel LaserTouchOne needs, so you never run out mid-routine.' },
    { key: 'charger', match: /charg/i, name: 'Charging cord', text: 'A spare charger for the office, the car or a second home.' },
  ];
  const isKit = (p) => kits.some((k) => k.productId === p._id);
  const accessories = accessoryDefs.flatMap((d) => {
    const p = products.find((x) => d.match.test(x.name ?? '') && !isKit(x));
    if (!p) return [];
    const variants = p.variantsInfo?.variants ?? [];
    return [{ ...d, productId: p._id, variantId: variants.length === 1 ? variants[0]._id : null,
      price: p.actualPriceRange?.minValue?.formattedAmount ?? null }];
  });

  return { kits, fromPrice: priced[0]?.price ?? null, accessories };
}
