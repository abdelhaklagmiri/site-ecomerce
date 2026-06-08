# Store Analysis — VALON Migration

> **Status:** Cannot auto-analyze your live store from this environment without your `*.myshopify.com` URL and authenticated CLI session. Run the commands below after login to compare live vs VALON.

## Pull your current live theme

```bash
npx shopify auth login --store YOUR-STORE.myshopify.com
npx shopify theme pull --store YOUR-STORE.myshopify.com --live --path ./live-theme-backup
```

## Compare checklist

| Area | What to check on live store | VALON v2 improvement |
|------|----------------------------|----------------------|
| Homepage | Hero CTA, trust signals, social proof | Dedicated conversion sections + featured product |
| Mobile | Tap targets, sticky CTA, layout | Mobile-first CSS, sticky ATC, horizontal trust bar |
| Product | COD visibility, reviews, FAQ | COD badge, tabs, sticky ATC, WhatsApp |
| Cart/Checkout | COD payment method enabled | COD-focused cart + checkout CTA copy |
| Trust | Delivery, returns, payment badges | Trust bar + COD flow + testimonials |
| Brand | Colors, fonts, French/darija | Orange/black premium Moroccan positioning |
| SEO | Meta titles, page speed | Semantic HTML, preconnect fonts |

## Admin items to verify (not theme)

- [ ] COD payment method enabled (Settings → Payments)
- [ ] Morocco shipping zone configured
- [ ] Products created with images
- [ ] Pages created (notre-histoire, contact, policies)
- [ ] Navigation menu linked
- [ ] Domain connected

## List all themes (confirm live unchanged)

```bash
npx shopify theme list --store YOUR-STORE.myshopify.com
```

Expected after push:

- `[live]` — your current theme (unchanged)
- `unpublished` — **VALON** (preview only)
