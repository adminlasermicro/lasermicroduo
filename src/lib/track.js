// Analytics events through Wix (forwarded to the Meta Pixel and GA4 once they're connected in the
// Wix dashboard under Marketing Integrations). Event data is product facts only: no health or
// condition words in names, categories or parameters (Meta health-data rules).
// Events are only delivered on the published site with its custom domain; locally they're no-ops.
export function track(name, data = {}) {
  import('@wix/site')
    .then(({ analytics }) => analytics.trackEvent(name, { origin: 'Stores', currency: 'USD', ...data }))
    .catch(() => {});
}
