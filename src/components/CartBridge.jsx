import React, { useState, useEffect, useCallback } from 'react';
import { currentCartV2 } from '@wix/ecom';
import { redirects } from '@wix/redirects';
import { media } from '@wix/sdk';

// Connects the homepage's plain HTML buttons to the Wix cart:
//   [data-add-to-cart="<productId>"] (+ optional data-variant) adds one item and opens the cart
//   [data-open-cart] opens the cart
//   [data-cart-count] shows the number of items
const WIX_STORES_APP_ID = '215238eb-22a5-4c36-9e7b-e7c08025e04e';

function formatMoney(money, currency) {
  const v = Number(money?.convertedAmount ?? money?.amount);
  if (money == null || Number.isNaN(v)) return '';
  try { return new Intl.NumberFormat(undefined, { style: 'currency', currency: currency || 'USD' }).format(v); }
  catch { return String(v); }
}
const currencyOf = (cart) => cart?.customerInfo?.currencyCode ?? cart?.businessInfo?.currencyCode;
const countOf = (cart) => cart?.lineItems?.reduce((s, i) => s + (i.quantityInfo?.confirmedQuantity ?? 0), 0) ?? 0;
function thumb(img) {
  const v = img?.image ?? img?.url ?? img;
  if (typeof v === 'string' && v.startsWith('wix:image://')) return media.getScaledToFillImageUrl(v, 120, 120, {});
  return typeof v === 'string' ? v : '';
}

export default function CartBridge() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(null);
  const [subtotal, setSubtotal] = useState('');
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);

  const refresh = useCallback(async () => {
    let c = null;
    try { c = (await currentCartV2.getCurrentCart())?.cart ?? null; } catch { c = null; }
    setCart(c);
    const n = countOf(c);
    document.querySelectorAll('[data-cart-count]').forEach((el) => { el.textContent = String(n); });
    if (c?.lineItems?.length) {
      try {
        const est = await currentCartV2.estimateCurrentCart();
        setSubtotal(formatMoney(est?.summary?.priceSummary?.subtotal, currencyOf(c)));
      } catch { setSubtotal(''); }
    } else setSubtotal('');
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  useEffect(() => {
    async function onClick(e) {
      const add = e.target.closest('[data-add-to-cart]');
      if (add) {
        e.preventDefault();
        const label = add.textContent;
        add.disabled = true; add.textContent = 'Adding…';
        try {
          const variantId = add.dataset.variant;
          await currentCartV2.addLineItemsToCurrentCart({
            catalogItems: [{ quantity: 1, catalogReference: {
              catalogItemId: add.dataset.addToCart,
              appId: WIX_STORES_APP_ID,
              ...(variantId ? { options: { variantId } } : {}),
            } }],
          });
          setStatus('');
          await refresh();
          setOpen(true);
        } catch (err) {
          console.error(err);
          setStatus('That kit could not be added to your cart. Try again, or contact us and we will place the order for you.');
          setOpen(true);
        } finally { add.disabled = false; add.textContent = label; }
        return;
      }
      if (e.target.closest('[data-open-cart]')) { e.preventDefault(); refresh(); setOpen(true); }
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [refresh]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  async function checkout() {
    setBusy(true);
    try {
      const { cart: c } = await currentCartV2.getCurrentCart();
      const session = await redirects.createRedirectSession({
        ecomCheckout: { checkoutId: c._id },
        callbacks: { postFlowUrl: window.location.origin + '/', thankYouPageUrl: window.location.origin + '/' },
      });
      window.location.href = session.redirectSession.fullUrl;
    } catch (err) {
      console.error(err);
      setStatus('Checkout could not open. Try again in a moment.');
      setBusy(false);
    }
  }

  if (!open) return null;
  const items = cart?.lineItems ?? [];
  return (
    <div className="drawer-scrim" onClick={() => setOpen(false)}>
      <aside className="cartp" role="dialog" aria-modal="true" aria-label="Your cart" onClick={(e) => e.stopPropagation()}>
        <div className="cartp__head">
          <p className="cartp__title">Your cart{items.length ? ` (${countOf(cart)})` : ''}</p>
          <button type="button" className="cartp__close" onClick={() => setOpen(false)} autoFocus>Close</button>
        </div>
        {status && <p className="cartp__status">{status}</p>}
        <div className="cartp__items">
          {!items.length && <p>Your cart is empty. Choose a kit to get started.</p>}
          {items.map((it, i) => (
            <div key={it._id ?? i} className="cartp__row">
              {thumb(it.attributes?.image) ? <img src={thumb(it.attributes?.image)} alt="" width="60" height="60" /> : <span className="cartp__thumb" />}
              <div>
                <p className="cartp__name">{it.name?.translated ?? it.name?.original}</p>
                <p className="cartp__qty">Quantity {it.quantityInfo?.confirmedQuantity}</p>
              </div>
              <p className="cartp__price">{formatMoney(it.pricing?.totalPrice, currencyOf(cart))}</p>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div className="cartp__foot">
            {subtotal && <p className="cartp__sub"><span>Subtotal</span><strong>{subtotal}</strong></p>}
            <button type="button" className="btn btn--primary btn--full" onClick={checkout} disabled={busy}>
              {busy ? 'Opening checkout…' : 'Go to checkout'}
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
