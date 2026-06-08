# VALON Theme v2.0.0 — Change Log (Preview Before Publish)

All changes are **local / unpublished** until you run `theme publish`.

## New files

| File | Purpose |
|------|---------|
| `snippets/valon-sticky-atc.liquid` | Mobile sticky add-to-cart bar on product pages |
| `snippets/valon-whatsapp-fab.liquid` | Floating WhatsApp button (uses theme settings) |
| `snippets/valon-cod-steps.liquid` | Reusable 3-step COD flow UI |
| `sections/valon-cod-flow.liquid` | Homepage/cart COD trust section |
| `sections/valon-featured-product.liquid` | Homepage bestseller conversion block |
| `sections/main-cart-valon.liquid` | COD-optimized cart page |
| `templates/cart.json` | Cart template wiring |
| `.shopifyignore` | Excludes docs/content from CLI push |
| `DEPLOY-VALON.md` | Safe unpublished deploy instructions |

## Modified files

| File | Changes |
|------|---------|
| `templates/index.json` | Added featured product + COD flow sections |
| `sections/valon-hero.liquid` | Primary CTA → "Commander — Paiement à la livraison" |
| `sections/main-product-valon.liquid` | Form ID for sticky ATC; dynamic WhatsApp; sticky bar render |
| `layout/theme.liquid` | Theme color CSS vars; WhatsApp FAB |
| `assets/valon.css` | Mobile-first layout, sticky ATC, cart, COD, featured product |
| `assets/valon.js` | Sticky ATC IntersectionObserver; mobile menu auto-close |
| `config/settings_schema.json` | Version bump to 2.0.0 |

## Conversion features included

- Trust bar (COD, livraison, satisfait, sans sulfates)
- Testimonials section (6 avis marocains)
- Before/after section with stats
- FAQ accordion (7 questions)
- Sticky mobile add-to-cart on product page
- COD checkout flow (cart + steps + checkout CTA)
- WhatsApp floating button
- Featured product block on homepage
- Mobile-first CSS (48px tap targets, horizontal trust scroll)

## Not changed

- Live theme on your store (until you publish)
- Shopify products, pages, menus, payments (manual Admin setup still required)
