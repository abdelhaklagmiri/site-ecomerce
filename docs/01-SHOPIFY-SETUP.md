# VALON Hair Care — Guide de mise en place Shopify

Suivez ce guide dans l'ordre. À la fin, votre boutique `valon-shop.com` sera prête à recevoir vos premières commandes.

---

## 1. Création du compte & paramètres de base

### 1.1 Plan recommandé
- Plan **Basic Shopify** ($29/mois) — largement suffisant pour démarrer.
- Devise : **MAD (Dirham marocain)**.
- Fuseau horaire : **Africa/Casablanca (GMT+1)**.
- Unités : kg / cm.

### 1.2 Configuration générale (Settings → Store details)
- Nom de la boutique : **VALON Hair Care**
- Adresse facturation : votre adresse au Maroc
- Email expéditeur : `valon.lagmiri@gmail.com`
- Téléphone : `+212 716 27 16 04`

### 1.3 Domaine personnalisé (Settings → Domains)
- Ajouter `valon-shop.com` comme **primary domain**.
- Configurer le DNS chez votre registrar : A record → `23.227.38.65` et CNAME `www` → `shops.myshopify.com`.
- Activer **SSL automatique**.

### 1.4 Paiement (Settings → Payments)
- Désactiver tous les modes de paiement bancaire.
- Activer uniquement **Cash on Delivery (Manual payment method)** :
  - Nom affiché : **Paiement à la livraison (COD)**
  - Instructions : *« Vous payez en espèces, en dirhams, directement au livreur, à la réception de votre colis. Aucun frais à l'avance. »*

### 1.5 Caisse / Checkout (Settings → Checkout)
- **Customer accounts** : `Accounts are optional`
- **Customer contact method** : `Phone number` (typique au Maroc, beaucoup n'ont pas d'email)
- **Form options** :
  - First name + Last name : `Required`
  - Company : `Hidden`
  - Address line 2 : `Optional`
  - Shipping address phone : `Required`
- **Tipping** : `OFF`
- **Marketing consent** : `Customers can opt in` (cocher par défaut)
- Activer **abandoned checkout recovery** (email à 1h, 12h, 24h).

### 1.6 Livraison (Settings → Shipping and delivery)
- Créer un profil **Maroc** avec :
  - Zone : Morocco
  - Méthode : `Livraison standard 24-48h` — prix : **0 MAD** (gratuit)
- Pas besoin de calcul automatique : la livraison est gratuite.

### 1.7 Taxes (Settings → Taxes)
- Désactiver la collecte automatique pour le moment.
- Les prix sont déjà TTC.

### 1.8 Notifications (Settings → Notifications)
- Personnaliser les emails de confirmation de commande en français (voir `02-COPYWRITING-FR.md` section « Emails »).

---

## 2. Thème & Design

### 2.1 Thème recommandé
**Dawn** (thème officiel gratuit Shopify) — propre, rapide, mobile-first.

Alternative payante haut de gamme : **Impulse**, **Prestige**, **Symmetry** ($380, design luxe par défaut).

### 2.2 Settings du thème (Customize)
| Réglage              | Valeur                              |
| -------------------- | ----------------------------------- |
| Couleur primaire     | `#0a0a0a` (noir)                    |
| Couleur d'accent     | `#c9a96e` (or)                      |
| Couleur secondaire   | `#faf6ee` (crème)                   |
| Fond                 | `#ffffff` (blanc)                   |
| Police titre         | **Cormorant Garamond** (serif)      |
| Police corps         | **Inter** (sans-serif)              |
| Largeur conteneur    | 1240 px                             |
| Boutons              | Arrondis 4px, lettres espacées      |

### 2.3 Logo
- Uploader `logo.png` (1000×1000 transparent) dans Settings → Files.
- Taille header : 140 px (desktop), 110 px (mobile).
- Favicon : 32×32, `favicon.ico`.

### 2.4 Sections homepage (dans l'ordre)
1. **Announcement bar** — *« LIVRAISON GRATUITE partout au Maroc · Paiement à la livraison · 7j/7 »*
2. **Image banner / Hero** — image `hero-bottles.jpg`, titre + 2 CTA (voir copy)
3. **Multicolumn / Trust bar** — marquee de bénéfices
4. **Rich text / Problem** — 4 cartes de problèmes
5. **Image with text / Solution** — image `oil-application.jpg`
6. **Multicolumn / Benefits** — 6 bénéfices, fond noir
7. **Featured collection / Showcase** — 2 produits
8. **Multicolumn / How it works** — 4 étapes
9. **Image gallery / Before & After** — 3 transformations
10. **Testimonials** — 3 avis vérifiés (utiliser app `Loox` ou `Judge.me`)
11. **FAQ section** (Dawn supporte les `collapsible content`)
12. **Image banner / COD** — bande de réassurance COD
13. **Newsletter / WhatsApp CTA**
14. **Image banner / Final CTA** — image `cta-bg.jpg`

---

## 3. Produits

### 3.1 Créer les 3 produits dans Products → Add product

#### Produit 1 — **VALON Sérum Croissance 60ml**
| Champ            | Valeur                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| Title            | VALON Sérum Croissance Capillaire 60ml                                                                              |
| Vendor           | VALON Hair Care                                                                                                     |
| Type             | Soin capillaire                                                                                                     |
| Tags             | sérum, croissance, kératine, biotine, argan, importé-turquie, pdp-luxury, best-seller                              |
| Price            | 399 MAD                                                                                                             |
| Compare at price | 549 MAD                                                                                                             |
| Inventory        | Suivre l'inventaire — quantité : 200 (ajuster)                                                                      |
| Weight           | 0.12 kg                                                                                                             |
| SKU              | VALON-SER-60                                                                                                        |
| SEO title        | VALON Sérum Croissance 60ml — Soin capillaire turc                                                                  |
| SEO description  | Sérum capillaire premium importé de Turquie. Kératine, biotine, huile d'argan. Paiement à la livraison au Maroc.    |

Description : voir `02-COPYWRITING-FR.md` section « Sérum ».

#### Produit 2 — **VALON Shampooing Fortifiant 200ml**
| Champ            | Valeur                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| Title            | VALON Shampooing Naturel Fortifiant 200ml                                                                    |
| Type             | Soin capillaire                                                                                              |
| Tags             | shampooing, sans-sulfates, naturel, extrait-plantes, importé-turquie                                         |
| Price            | 349 MAD                                                                                                      |
| Compare at price | 449 MAD                                                                                                      |
| Weight           | 0.25 kg                                                                                                      |
| SKU              | VALON-SHA-200                                                                                                |
| SEO title        | VALON Shampooing Fortifiant 200ml — Sans sulfates                                                            |

Description : voir `02-COPYWRITING-FR.md` section « Shampooing ».

#### Produit 3 — **VALON Pack Complet (Sérum + Shampooing)**
| Champ            | Valeur                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| Title            | Pack Complet VALON — Sérum Croissance + Shampooing Fortifiant                                                |
| Type             | Bundle                                                                                                       |
| Tags             | pack, bundle, best-seller, offre-lancement                                                                   |
| Price            | **649 MAD**                                                                                                  |
| Compare at price | **899 MAD**                                                                                                  |
| Weight           | 0.4 kg                                                                                                       |
| SKU              | VALON-PACK-001                                                                                               |
| SEO title        | Pack Complet VALON · Sérum + Shampooing · 649 MAD                                                            |

Description : voir `02-COPYWRITING-FR.md` section « Pack ».

> **Important** : Mettre le **Pack Complet** comme produit mis en avant (Featured product) sur la homepage et dans la collection principale.

### 3.2 Images produits
Uploader dans cet ordre pour chaque produit (l'ordre détermine la priorité d'affichage) :
1. Photo principale produit (fond uni)
2. Photo lifestyle (application, mise en scène)
3. Photo ingrédients / texture
4. Photo packaging / unboxing
5. Photo détail / label

Voir `/site/assets/images/README.md` pour la correspondance.

### 3.3 Variantes
Pas de variantes (un seul format par produit). Si vous voulez plus tard, créer une option « Lot » : `1 pack / 2 packs / 3 packs` avec discount.

---

## 4. Collections

Créer 3 collections (Products → Collections) :

| Collection       | Type      | Conditions                              | Image                          |
| ---------------- | --------- | --------------------------------------- | ------------------------------ |
| **Tous les produits** | Manuel    | Les 3 produits                          | `hero-bottles.jpg`             |
| **Best-sellers** | Automatic | Tag = `best-seller`                     | `gift-box.jpg`                 |
| **Soins capillaires** | Automatic | Product type = `Soin capillaire`        | `products-duo.jpg`             |

---

## 5. Pages

Créer ces pages dans Online Store → Pages. Copier-coller le contenu depuis `02-COPYWRITING-FR.md`.

| Page                          | Handle                       | Source HTML                             |
| ----------------------------- | ---------------------------- | --------------------------------------- |
| À propos                      | `about`                      | `/site/about.html`                      |
| Contact                       | `contact`                    | `/site/contact.html`                    |
| FAQ                           | `faq`                        | `/site/faq.html`                        |
| Politique de livraison        | `politique-livraison`        | `/site/politique-livraison.html`        |
| Politique de remboursement    | `politique-remboursement`    | `/site/politique-remboursement.html`    |
| Politique de confidentialité  | `politique-confidentialite`  | `/site/politique-confidentialite.html`  |
| Conditions générales          | `conditions-generales`       | `/site/conditions-generales.html`       |

> Dans l'éditeur de page Shopify, basculer en mode **Show HTML** (`< >` en haut à droite) et coller le contenu de la `<main>` (sans header / footer — ils sont gérés par le thème).

---

## 6. Navigation (Online Store → Navigation)

### 6.1 Main menu (header)
```
Accueil               → /
Pack Complet          → /products/pack-complet-valon
Sérum                 → /products/valon-serum-croissance-60ml
Shampooing            → /products/valon-shampooing-fortifiant-200ml
À propos              → /pages/about
Contact               → /pages/contact
```

### 6.2 Footer menu — Aide
```
Contact               → /pages/contact
FAQ                   → /pages/faq
Politique de livraison → /pages/politique-livraison
Retours & remboursement → /pages/politique-remboursement
```

### 6.3 Footer menu — Légal
```
CGV                   → /pages/conditions-generales
Confidentialité       → /pages/politique-confidentialite
```

---

## 7. Apps à installer (gratuit / essentiel)

| App                          | Pourquoi                                            | Prix                  |
| ---------------------------- | --------------------------------------------------- | --------------------- |
| **Loox** ou **Judge.me**     | Avis clients photos + témoignages                   | Free / $9.99          |
| **Vitals** (recommandé)      | All-in-one : sticky cart, currency, reviews, COD form, sticky WhatsApp, FB pixel… | $29.99 |
| **CodMonster** / **Releasit COD** | Formulaire COD optimisé + abandoned recovery     | $9.99 / mois          |
| **Tidio** ou **WhatsApp Chat (Shopify app)** | Bouton WhatsApp flottant + auto-replies | Free                  |
| **Sendvio**                  | Email & SMS automation (relance panier, post-achat) | Free / $15            |
| **Searchanise**              | Recherche & filtres                                 | Free                  |
| **TinyIMG** ou **Crush.pics**| Compression d'images automatique                    | Free                  |
| **Lucky Orange**             | Heatmaps & enregistrements de session pour CRO      | $32                   |

### 7.1 Configuration Releasit COD (priorité haute)
1. Désactiver le checkout Shopify natif.
2. Activer **COD Form on Product Page** + **Quick Order Form**.
3. Champs requis : Nom, Téléphone, Ville, Adresse.
4. Ajouter **upsell pré-achat** : si l'utilisateur commande 1 produit, proposer le Pack Complet à 649 MAD avec une économie de 99 MAD.
5. Activer **Abandoned Checkout SMS** : 1h après, 24h après — message en français.

---

## 8. Pixels & tracking

### 8.1 Meta (Facebook) Pixel
1. Créer un Business Manager + Pixel dédié à VALON.
2. Installer via app officielle **Facebook & Instagram by Meta**.
3. Activer **Conversion API** (CAPI) pour récupérer les conversions iOS 14+.
4. Événements à tracker : `PageView`, `ViewContent`, `AddToCart`, `InitiateCheckout`, `Purchase`, `Lead` (formulaire COD).

### 8.2 TikTok Pixel
Installer via l'app **TikTok**. Suivre les mêmes événements.

### 8.3 Google Analytics 4
Installer via l'app officielle **Google & YouTube**.

### 8.4 Test
Utiliser **Meta Pixel Helper** (extension Chrome) pour vérifier que tous les événements remontent correctement.

---

## 9. Emails transactionnels (Settings → Notifications)

Personnaliser au minimum ces 3 emails (le reste plus tard) :
- **Order confirmation** (confirmation de commande)
- **Order shipped** (commande expédiée)
- **Order delivered** (commande livrée — demande d'avis)

Voir `02-COPYWRITING-FR.md` section « Emails transactionnels ».

---

## 10. Checklist de lancement (avant d'ouvrir le site)

- [ ] Domaine `valon-shop.com` connecté + SSL actif
- [ ] Logo, favicon, couleurs, polices configurés
- [ ] 3 produits créés avec photos, descriptions, prix
- [ ] Pack Complet en featured product
- [ ] Pages About, Contact, FAQ, 4 politiques publiées
- [ ] Menu header + 2 menus footer configurés
- [ ] Paiement = uniquement COD activé
- [ ] Livraison Maroc = 0 MAD
- [ ] Apps Loox/Judge.me + Releasit COD + WhatsApp Chat installées
- [ ] Meta Pixel + CAPI fonctionnels (tester en mode preview)
- [ ] Emails de confirmation en français
- [ ] Test de commande COD complète (de l'ajout au panier à la confirmation)
- [ ] Test mobile (iPhone + Android) toutes pages
- [ ] Vitesse PageSpeed > 75 sur mobile
- [ ] Bouton WhatsApp flottant visible toutes pages
- [ ] Garantie satisfait + COD visibles sur toutes les fiches produit
