# VALON Hair Care — Boutique Shopify Premium

Boutique Shopify complète pour **VALON Hair Care**, marque capillaire premium ciblant le marché marocain.

**Couleurs :** Orange `#FF6B00` + Noir `#0A0A0A`
**Langue :** Français avec expressions darija
**Paiement :** COD (Cash on Delivery) optimisé

---

## Structure du Projet

```
valon-shopify/
├── layout/theme.liquid          # Layout principal
├── assets/
│   ├── valon.css                # Styles premium (orange/noir)
│   └── valon.js                 # Interactions (FAQ, tabs, menu)
├── sections/                    # Sections Shopify OS 2.0
│   ├── valon-hero.liquid        # Hero homepage
│   ├── valon-benefits.liquid    # Avantages
│   ├── valon-before-after.liquid
│   ├── valon-reviews.liquid     # Témoignages
│   ├── valon-faq.liquid         # FAQ accordion
│   ├── valon-cta.liquid         # Call-to-action
│   ├── valon-trust-bar.liquid   # Barre de confiance COD
│   ├── main-product-valon.liquid # Page produit
│   ├── valon-page-content.liquid # Pages statiques
│   ├── valon-header.liquid
│   ├── valon-footer.liquid
│   └── valon-announcement.liquid
├── templates/
│   ├── index.json               # Homepage
│   ├── product.json             # Page produit
│   ├── page.brand-story.json    # Notre Histoire
│   ├── page.contact.json
│   ├── page.shipping.json
│   ├── page.returns.json
│   ├── page.privacy.json
│   └── page.terms.json
├── content/
│   ├── pages/                   # HTML prêt à coller dans Shopify Admin
│   └── products/                # Descriptions produits
├── marketing/
│   ├── facebook-ads-angles.md   # 10 angles FB/IG + 8 TikTok
│   ├── email-flows.md           # 5 flows email automatisés
│   └── upsell-cross-sell-strategy.md
└── config/                      # Paramètres thème
```

---

## Installation sur Shopify

### Étape 1 : Importer le thème

**Option A — Shopify CLI (recommandé)**
```bash
cd valon-shopify
shopify theme push --store=votre-boutique.myshopify.com
```

**Option B — Upload manuel**
1. Compressez le dossier `valon-shopify/` en fichier `.zip`
2. Shopify Admin → Boutique en ligne → Thèmes
3. « Ajouter un thème » → « Importer un fichier zip »
4. Publiez le thème

### Étape 2 : Créer les pages

Dans **Shopify Admin → Pages en ligne → Ajouter une page** :

| Titre de la page | Handle (URL) | Template | Contenu à coller |
|------------------|--------------|----------|------------------|
| Notre Histoire | `notre-histoire` | `page.brand-story` | `content/pages/notre-histoire.html` |
| Contact | `contact` | `page.contact` | `content/pages/contact.html` |
| Livraison | `livraison` | `page.shipping` | `content/pages/livraison.html` |
| Retours & Échanges | `retours` | `page.returns` | `content/pages/retours.html` |
| Confidentialité | `confidentialite` | `page.privacy` | `content/pages/confidentialite.html` |
| Conditions Générales | `conditions` | `page.terms` | `content/pages/conditions.html` |

Pour chaque page :
1. Créez la page avec le titre et le handle indiqués
2. Collez le contenu HTML depuis le fichier correspondant
3. Dans la barre latérale droite, sélectionnez le **modèle de thème** (template)
4. Publiez

### Étape 3 : Créer les produits

Suivez `content/products/catalogue-produits.md` pour créer :
- Sérum Capillaire VALON (299 DH) — **produit hero**
- Shampoing Nourrissant (189 DH)
- Masque Capillaire (249 DH)
- Kit Rituel Complet (649 DH)
- Huile Argan Pure (179 DH)

### Étape 4 : Configurer le paiement COD

1. **Shopify Admin → Paramètres → Paiements**
2. Activez « Paiement à la livraison » (Manual payment method)
3. Nommez-le : « Paiement à la livraison (COD) »
4. Instructions : « Payez en espèces au livreur à la réception de votre colis. »

### Étape 5 : Configurer la livraison

1. **Paramètres → Expédition et livraison**
2. Créez une zone « Maroc »
3. Tarif : 29 DH (gratuit au-dessus de 399 DH via app ou règle manuelle)
4. Connectez un transporteur : Amana, Sendit, ou Ozon Express

### Étape 6 : Personnaliser

1. Remplacez `+212 6XX XX XX XX` par votre vrai numéro WhatsApp
2. Remplacez `contact@valon.ma` par votre email
3. Uploadez vos photos produit dans l'éditeur de thème
4. Configurez le Facebook Pixel et TikTok Pixel

---

## Pages Incluses

| # | Page | Statut |
|---|------|--------|
| 1 | Homepage (hero, benefits, before/after, reviews, FAQ, CTA) | ✅ Thème |
| 2 | Page produit (description, COD, trust badges, FAQ, tabs) | ✅ Thème |
| 3 | Notre Histoire (mission, vision, valeurs) | ✅ Contenu HTML |
| 4 | Contact | ✅ Contenu HTML |
| 5 | Politique de livraison | ✅ Contenu HTML |
| 6 | Politique de retour | ✅ Contenu HTML |
| 7 | Politique de confidentialité | ✅ Contenu HTML |
| 8 | Conditions générales | ✅ Contenu HTML |
| 9 | Angles publicitaires Facebook/IG/TikTok | ✅ Marketing doc |
| 10 | Flux email marketing | ✅ Marketing doc |
| 11 | Stratégie upsell/cross-sell | ✅ Marketing doc |

---

## Applications Shopify Recommandées (Maroc)

| App | Usage | Priorité |
|-----|-------|----------|
| **COD Order Confirmation** ou **eGrow** | Confirmation WhatsApp automatique | 🔴 Essentiel |
| **Klaviyo** | Email marketing flows | 🟠 Important |
| **ReConvert** | Post-purchase upsell | 🟠 Important |
| **Bundler / Pumper** | Bundles avec réduction | 🟡 Recommandé |
| **WhatsApp Chat Button** | Bouton WhatsApp flottant | 🔴 Essentiel |
| **Judge.me** | Avis clients avec photos | 🟠 Important |
| **Facebook & Instagram** | Pixel + catalogue produits | 🔴 Essentiel |

---

## Checklist Lancement

- [ ] Thème importé et publié
- [ ] 6 pages créées avec contenu HTML
- [ ] 5 produits créés (voir catalogue)
- [ ] COD activé comme méthode de paiement
- [ ] Zone de livraison Maroc configurée
- [ ] Numéro WhatsApp mis à jour partout
- [ ] Photos produit uploadées
- [ ] Facebook Pixel installé
- [ ] Confirmation WhatsApp automatisée
- [ ] Domaine valon.ma connecté
- [ ] Politique légale vérifiée par un professionnel
- [ ] Test commande COD complet (bout en bout)

---

## Support

Pour toute question sur l'installation, consultez la [documentation Shopify Themes](https://shopify.dev/docs/storefronts/themes).
