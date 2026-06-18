# VALON Hair Care — Guide d'Installation Shopify

## Vue d'ensemble

Thème Shopify 2.0 premium pour **VALON Hair Care** — boutique marocaine en français, paiement à la livraison, design luxe noir/or/blanc.

**Domaine :** https://valon-shop.com  
**Email :** valon.lagmiri@gmail.com  
**WhatsApp :** 07 16 27 16 04

---

## Étape 1 : Importer le thème

1. Compressez le dossier `valon-theme` en fichier `.zip`
2. Dans Shopify Admin → **Boutique en ligne** → **Thèmes**
3. Cliquez **Ajouter un thème** → **Importer un fichier**
4. Uploadez le `.zip` et cliquez **Publier**

## Étape 2 : Créer les produits

### Produit 1 : Pack Complet VALON (PRODUIT PRINCIPAL)
- **Titre :** Pack Complet VALON Hair Care
- **Handle :** `pack-complet-valon`
- **Prix :** 649.00 MAD
- **Description :** Voir `docs/PRODUCT-COPY.md`
- **Image principale :** Photo boîte cadeau ouverte (Image 4)
- **Type :** Bundle
- **Tags :** pack, bundle, bestseller, cod

### Produit 2 : Sérum Capillaire VALON
- **Titre :** VALON Hair Growth Serum — Sérum Capillaire Nourrissant
- **Handle :** `serum-capillaire-valon`
- **Prix :** 399.00 MAD
- **Poids :** 60ml
- **Image principale :** Photo produit sérum fond sombre (Image 5 — flacon droit)
- **Tags :** serum, huile, croissance

### Produit 3 : Shampooing VALON
- **Titre :** VALON Strengthening Shampoo — Shampooing Naturel Purifiant
- **Handle :** `shampooing-valon`
- **Prix :** 349.00 MAD
- **Poids :** 200ml
- **Image principale :** Photo produit shampooing fond sombre (Image 5 — flacon gauche)
- **Tags :** shampooing, purifiant, sans-sulfates

## Étape 3 : Créer les pages

| Page | Handle Shopify | Template |
|------|---------------|----------|
| Pack Complet | `pack-complet` | `page.bundle` |
| À Propos | `a-propos` | `page.about` |
| Contact | `contact` | `page.contact` |
| FAQ | `faq` | `page.faq` |
| Livraison | `livraison` | `page.shipping-policy` |
| Confidentialité | `politique-confidentialite` | `page.privacy-policy` |
| Remboursement | `politique-remboursement` | `page.refund-policy` |
| Conditions | `conditions-generales` | `page.terms` |

Pour assigner un template : Page → **Theme template** (barre latérale droite)

## Étape 4 : Configurer le paiement COD

1. **Paramètres** → **Paiements**
2. Activez **Paiement à la livraison** (Manual payment method)
3. Nommez-le : « Paiement à la livraison (COD) »
4. Instructions : « Payez en espèces au livreur à la réception »

## Étape 5 : Configurer la livraison

1. **Paramètres** → **Expédition et livraison**
2. Créez une zone « Maroc »
3. Tarif : **Gratuit** pour commandes Pack Complet
4. Tarif standard : 30 MAD pour produits individuels

## Étape 6 : Uploader les images

Consultez `docs/IMAGE-GUIDE.md` pour le mapping exact image → section.

## Étape 7 : Navigation

**Menu principal :**
- Accueil → /
- Pack Complet → /pages/pack-complet
- Produits → /collections/all
- À Propos → /pages/a-propos
- Contact → /pages/contact

## Étape 8 : Paramètres boutique

- **Nom :** VALON Hair Care
- **Email :** valon.lagmiri@gmail.com
- **Devise :** MAD (Dirham marocain)
- **Langue :** Français
- **Domaine :** valon-shop.com

## Étape 9 : Apps recommandées

| App | Usage | Priorité |
|-----|-------|----------|
| **WhatsApp Chat + Share** | Bouton WhatsApp avancé | Haute |
| **Judge.me** ou **Loox** | Avis clients avec photos | Haute |
| **ReConvert** | Upsell post-achat | Moyenne |
| **COD Order Confirmation** | Confirmation commandes COD | Haute |
| **Facebook & Instagram** | Pixel Meta + catalogue | Haute |

## Étape 10 : Meta Pixel & Ads

Consultez `docs/FACEBOOK-ADS.md` pour les angles publicitaires complets.

---

## Checklist finale avant lancement

- [ ] Thème publié
- [ ] 3 produits créés avec images
- [ ] 8 pages créées avec bons templates
- [ ] COD activé
- [ ] Livraison Maroc configurée
- [ ] Menu navigation configuré
- [ ] Images uploadées dans chaque section
- [ ] WhatsApp testé
- [ ] Commande test passée
- [ ] Meta Pixel installé
- [ ] Domaine valon-shop.com connecté
