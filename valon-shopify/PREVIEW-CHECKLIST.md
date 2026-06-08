# VALON Preview Checklist — Review Before Publishing

Use the **VALON** theme preview URL. Do **not** publish until every item passes.

## Homepage

- [ ] Hero loads on mobile — CTA visible without scrolling
- [ ] "Commander — Paiement à la livraison" button works
- [ ] Trust bar scrolls horizontally on mobile
- [ ] Featured product shows price + COD badge
- [ ] Benefits, before/after, reviews render correctly
- [ ] COD flow section shows 3 steps
- [ ] FAQ accordion opens/closes
- [ ] Final CTA banner visible

## Product page

- [ ] Gallery + price + COD badge visible
- [ ] Add to cart submits correctly
- [ ] Sticky "Commander" bar appears on mobile when scrolling past form
- [ ] WhatsApp button does not overlap sticky bar
- [ ] Tabs (Description, Ingrédients, etc.) switch correctly

## Cart

- [ ] Cart page shows COD steps
- [ ] Free shipping progress bar (if under 399 DH)
- [ ] "Passer commande — COD" goes to checkout
- [ ] Checkout offers manual payment / COD (configure in Admin)

## Global

- [ ] Header sticky + mobile menu works
- [ ] Footer links correct
- [ ] Replace WhatsApp number in **Theme settings → Contact**
- [ ] Upload hero + product images in theme editor
- [ ] Live theme still active until you click Publish on VALON

## Publish command (only when ready)

```bash
npx shopify theme publish --store YOUR-STORE.myshopify.com --theme VALON --force
```
