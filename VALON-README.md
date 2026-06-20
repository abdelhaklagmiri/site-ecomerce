# VALON Hair Care — Boutique Shopify Premium

Boutique française haut de gamme pour le marché marocain. Thème complet, prêt à publier et lancer des publicités Facebook.

---

## Où se trouve le ZIP final ?

| Fichier | Emplacement |
|---------|-------------|
| **ZIP principal** | `/workspace/valon-theme-final.zip` |
| **Copie dans le thème** | `/workspace/valon-theme/valon-shopify.zip` |

Après chaque mise à jour, recréer le ZIP avec :

```bash
cd valon-theme && zip -r ../valon-theme-final.zip assets config layout locales sections snippets templates
```

**Important :** le ZIP doit contenir `layout/theme.liquid` à la racine (pas dans un sous-dossier `valon-theme/`).

---

## Comment importer dans Shopify

### Étape 1 — Importer le thème

1. Connectez-vous à **Shopify Admin** : https://valon-shop.com/admin
2. Allez dans **Boutique en ligne** → **Thèmes**
3. Cliquez sur **Importer** (ou **Ajouter un thème** → **Importer**)
4. Sélectionnez `valon-theme-final.zip`
5. Attendez la fin de l'import (environ 30 secondes)

### Étape 2 — Publier le thème

1. Dans **Boutique en ligne** → **Thèmes**
2. Trouvez **VALON Luxury**
3. Cliquez sur **Publier** (ou **Actions** → **Publier**)
4. Confirmez — votre boutique est en ligne avec le nouveau design

### Étape 3 — Configurer la boutique (15 min)

Suivez le guide détaillé : `valon-theme/docs/SHOPIFY-SETUP.md`

| Action | Où dans Shopify |
|--------|-----------------|
| Activer **Paiement à la livraison** | Paramètres → Paiements → Paiement manuel → COD |
| Langue **Français** | Paramètres → Langues |
| Mettre à jour la description produit | Produits → Pack Complet → copier depuis `valon-theme/docs/PRODUCT-COPY.md` |
| Créer les pages | Pages → créer avec les templates indiqués dans SHOPIFY-SETUP.md |
| Logo personnalisé (optionnel) | Thème → Personnaliser → Marque → Logo VALON |

---

## Contenu inclus dans le thème

### Page d'accueil (16 sections)

- Hero professionnel avec photos produit réelles
- Origine Turquie 🇹🇷 (import direct)
- Problème / Solution
- Vitrine produits (Huile 60ml + Shampooing 200ml)
- Bénéfices
- Mode d'emploi (4 étapes)
- Avant / Après + témoignages
- Objections
- **Garantie satisfaction 40 jours**
- FAQ complète
- Section confiance (COD, livraison, Turquie)
- Section COD
- CTA WhatsApp
- CTA final Pack 649 MAD

### Fiche produit optimisée conversion

- Galerie images + sticky cart mobile
- Badges confiance (livraison dès 399 DH, COD, Turquie, garantie 40j)
- 6 bénéfices produit
- Ingrédients
- Mode d'utilisation avec photo
- Pourquoi VALON
- Avis clients
- Garantie 40 jours
- FAQ produit
- COD + WhatsApp

### Pages légales (contenu complet en français)

| Page | Handle | Template |
|------|--------|----------|
| Livraison | `livraison` | `page.shipping-policy` |
| Remboursement | `politique-remboursement` | `page.refund-policy` |
| CGV | `conditions-generales` | `page.terms` |
| Confidentialité | `politique-confidentialite` | `page.privacy-policy` |
| Contact | `contact` | `page.contact` |
| Pack Complet | `pack-complet` | `page.bundle` |
| À Propos | `a-propos` | `page.about` |
| FAQ | `faq` | `page.faq` |

### Produits à configurer

| Produit | Prix | Handle Shopify |
|---------|------|----------------|
| Pack Complet VALON | 649 MAD | `valon-hair-care-pack` |
| Huile Capillaire VALON 60ml | 399 MAD | `huile-capillaire-valon` |
| Shampooing VALON 200ml | 349 MAD | `shampooing-valon` |

Descriptions complètes : `valon-theme/docs/PRODUCT-COPY.md`

### Photos produit (incluses)

Toutes les photos sont dans `valon-theme/assets/images/` :

- `valon-hero-splash.png` — Hero homepage
- `valon-serum-application.png` — Application huile
- `valon-lifestyle.png` — Lifestyle / Avant-Après
- `valon-pack-unboxing.png` — Coffret cadeau
- `valon-products-dark-1.jpg` — Huile capillaire
- `valon-products-dark-2.jpg` — Shampooing

### Éléments de confiance intégrés

- Livraison gratuite dès **399 DH**
- Paiement à la livraison (COD)
- Import direct **Turquie** 🇹🇷
- Garantie satisfaction **40 jours**
- WhatsApp flottant : **+212 716 271 604**

---

## Aperçu local (sans Shopify)

Ouvrez `valon-theme/preview/index.html` dans un navigateur pour voir le design de la marque.

---

## Structure du projet

```
valon-theme/
├── assets/          # CSS, JS, logo SVG, photos produit
├── config/          # Paramètres thème (WhatsApp, couleurs, garantie)
├── docs/            # Guides installation, copywriting, images, CRO, Facebook Ads
├── layout/          # Layout principal
├── locales/         # Traductions FR
├── sections/        # 40+ sections premium
├── snippets/        # Logo, images, WhatsApp, badges
└── templates/       # Pages (accueil, produit, bundle, policies...)
```

---

## Contact marque

- **Site :** https://valon-shop.com
- **Email :** valon.lagmiri@gmail.com
- **WhatsApp :** +212 716 271 604

---

## Lancer les publicités Facebook

Guide complet des angles publicitaires : `valon-theme/docs/FACEBOOK-ADS.md`

Recommandations CRO : `valon-theme/docs/CRO-RECOMMENDATIONS.md`
