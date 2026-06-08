# Store Analysis — 0ipcp7-ts.myshopify.com / valon-shop.com

**Date:** 2026-06-08  
**Live domain:** https://valon-shop.com  
**Shopify URL:** https://0ipcp7-ts.myshopify.com

## Live storefront snapshot (public)

| Element | Current live store | VALON v2 theme |
|---------|-------------------|----------------|
| Language | Arabic-first (Darija) + some French | French + Darija bilingual |
| Announcement | نتائج مضمونة لكل زبون · التوصيل بالمجان · COD | Matched in announcement bar |
| Hero hook | غدي تلاحظ تحول رهيب في شعرك | Integrated in hero darija line |
| COD messaging | 💰 الدفع عند الاستلام prominent | COD steps, badges, cart flow |
| Product | Pack VALON — 599/649 MAD | Featured product + product template |
| Trust | Delivery + COD only | Trust bar, reviews, FAQ, before/after |
| Design | Minimal Spotlight-style | Premium orange/black Moroccan brand |
| Mobile | Basic | Mobile-first sticky ATC, 48px taps |

## Conversion gaps on live store (addressed in VALON)

1. **No social proof section** → 6 Moroccan testimonials + 4.9 rating
2. **No before/after** → Before/after section with 94%/87%/91% stats
3. **No FAQ** → 7-question COD/delivery FAQ accordion
4. **No sticky mobile CTA** → Sticky add-to-cart on product pages
5. **No COD checkout guidance** → Cart page with 3-step COD flow
6. **No WhatsApp shortcut** → Floating WhatsApp FAB
7. **Weak product page** → Full VALON product template with tabs

## Products detected

- **الحل الطبيعي لتقوية الشعر وتقليل التساقط** — 599.00 MAD (was 649.00 MAD)

Assign this product to **Produit vedette** in theme editor after preview.

## Safe deploy status

- Live theme: unchanged until you publish VALON
- valon-shop.com: stays on live theme until publish

## Commands

```bash
cd /workspace/valon-shopify
./scripts/push-valon-unpublished.sh
```
