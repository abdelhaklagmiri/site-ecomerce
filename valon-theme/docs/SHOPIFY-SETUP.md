# VALON Hair Care — Configuration Shopify

## 1. Importer le thème
Uploadez `valon-theme-final.zip` dans **Boutique en ligne → Thèmes → Importer**.

## 2. Images produit (incluses dans le thème)
Le thème inclut vos photos VALON dans `assets/images/`. Elles s'affichent automatiquement.

Pour remplacer par des photos haute résolution : **Contenu → Fichiers**, puis assignez dans chaque section :

| Photo | Section Shopify |
|-------|----------------|
| Splash huile dorée + noix d'argan | Accueil → Hero |
| Mains appliquant le sérum | Accueil → Solution + Produit Sérum → Mode d'utilisation |
| Produits fond sombre (labels) | Accueil → Vitrine + Images produits |
| Boîte cadeau unboxing | Page Pack Complet → Hero |
| Collage lifestyle 4 femmes | Page À Propos → Lifestyle |
| Logo depuis packaging | Thème → Marque → Logo VALON |

## 3. Créer les produits

### Pack Complet VALON — 649 MAD (déjà sur valon-shop.com)
- Handle : `valon-hair-care-pack`
- Titre : Pack Complet VALON Hair Care

### VALON Hair Growth Serum — 399 MAD
- Handle : `serum-capillaire-valon`
- Titre : VALON Hair Growth Serum — Sérum Capillaire Nourrissant 60ml

### VALON Strengthening Shampoo — 349 MAD
- Handle : `shampooing-valon`
- Titre : VALON Strengthening Shampoo — Shampooing Naturel Purifiant 200ml

Descriptions complètes : `docs/PRODUCT-COPY.md`

## 4. Pages (assigner templates)

| Page | Template |
|------|----------|
| pack-complet | page.bundle |
| a-propos | page.about |
| contact | page.contact |
| faq | page.faq |
| livraison | page.shipping-policy |
| politique-confidentialite | page.privacy-policy |
| politique-remboursement | page.refund-policy |
| conditions-generales | page.terms |

## 5. Paiement COD
**Paramètres → Paiements → Paiement à la livraison** — activer.

## 6. Contact
- WhatsApp : 07 16 27 16 04
- Email : valon.lagmiri@gmail.com
- Domaine : valon-shop.com

## 7. Langue
**Paramètres → Langues** — Français comme langue principale.
