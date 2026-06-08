# Guide de Publication Rapide — VALON Shopify

Ce guide vous permet de publier la boutique VALON en moins de 2 heures.

---

## 1. Homepage — Déjà configurée ✅

Le fichier `templates/index.json` assemble automatiquement :

1. **Hero** — « Révélez la beauté de vos cheveux » + CTA + trust badges COD
2. **Trust Bar** — Livraison gratuite, COD, satisfait 14j, sans sulfates
3. **Benefits** — 6 cartes (ingrédients Maroc, formules testées, résultats, COD, premium, WhatsApp)
4. **Before/After** — Comparaison + stats 94%/87%/91%
5. **Reviews** — 6 témoignages marocains (Casa, Rabat, Marrakech, Tanger, Agadir, Fès)
6. **FAQ** — 7 questions (COD, livraison, types de cheveux, résultats, retours, naturel, contact)
7. **CTA** — « Prête à transformer vos cheveux ? » + bouton commander

**Action requise :** Uploadez une image hero et des photos avant/après dans l'éditeur de thème.

---

## 2. Page Produit — Déjà configurée ✅

Le template `product.json` inclut :
- Galerie avec miniatures
- Badge bestseller + note 4.9
- Prix avec prix barré
- **Badge COD proéminent**
- 6 bénéfices avec checkmarks
- 4 trust badges (COD, livraison, satisfait, avis)
- Bouton « Ajouter au panier — Paiement à la livraison »
- Bouton WhatsApp
- 4 onglets : Description, Ingrédients, Mode d'emploi, FAQ

**Action requise :** Créez le produit Sérum et assignez des photos.

---

## 3. Pages à Créer dans Shopify Admin

### Page : Notre Histoire
- **URL :** `/pages/notre-histoire`
- **Template :** `page.brand-story`
- **Contenu :** Copier `content/pages/notre-histoire.html`

### Page : Contact
- **URL :** `/pages/contact`
- **Template :** `page.contact`
- **Contenu :** Copier `content/pages/contact.html`

### Page : Livraison
- **URL :** `/pages/livraison`
- **Template :** `page.shipping`
- **Contenu :** Copier `content/pages/livraison.html`

### Page : Retours
- **URL :** `/pages/retours`
- **Template :** `page.returns`
- **Contenu :** Copier `content/pages/retours.html`

### Page : Confidentialité
- **URL :** `/pages/confidentialite`
- **Template :** `page.privacy`
- **Contenu :** Copier `content/pages/confidentialite.html`

### Page : Conditions Générales
- **URL :** `/pages/conditions`
- **Template :** `page.terms`
- **Contenu :** Copier `content/pages/conditions.html`

---

## 4. Navigation (Menu)

**Shopify Admin → Boutique en ligne → Navigation → Menu principal**

| Libellé | Lien |
|---------|------|
| Accueil | / |
| Produits | /collections/all |
| Notre Histoire | /pages/notre-histoire |
| Contact | /pages/contact |

**Menu pied de page :**
- Livraison → /pages/livraison
- Retours → /pages/retours
- Confidentialité → /pages/confidentialite
- Conditions → /pages/conditions

---

## 5. Collections

| Collection | Handle | Produits |
|------------|--------|----------|
| Tous les produits | `all` | Tous |
| Soins Capillaires | `soins-capillaires` | Sérum, Shampoing, Masque, Huile |
| Kits & Coffrets | `kits` | Kit Rituel, Coffret Premium |

---

## 6. Paramètres Boutique

| Paramètre | Valeur |
|-----------|--------|
| Nom | VALON Hair Care |
| Email | contact@valon.ma |
| Devise | MAD (Dirham marocain) |
| Pays | Maroc |
| Format adresse | Ville, Quartier, Adresse détaillée |
| Téléphone obligatoire | Oui |
| Email obligatoire | Non |

---

## 7. SEO par Page

| Page | Title Tag | Meta Description |
|------|-----------|------------------|
| Accueil | VALON — Soins Capillaires Premium Maroc \| Paiement à la Livraison | Découvrez VALON, la marque capillaire premium n°1 au Maroc. Argan bio, figue de barbarie, résultats en 21 jours. Livraison 48h, paiement à la livraison. |
| Sérum | Sérum Capillaire VALON — Argan & Figue de Barbarie \| 299 DH COD | Le sérum capillaire premium à l'argan bio. Cheveux plus forts, plus brillants en 21 jours. 299 DH, paiement à la livraison, livraison gratuite dès 399 DH. |
| Notre Histoire | Notre Histoire — VALON Hair Care Maroc | Découvrez l'histoire de VALON, marque capillaire premium née à Casablanca. Mission, vision et valeurs. |
| Contact | Contact — VALON Hair Care | Contactez l'équipe VALON par WhatsApp, email ou formulaire. Service client en français et darija, 7j/7. |

---

## 8. Après Publication

1. **Tester une commande COD** de bout en bout
2. **Configurer la confirmation WhatsApp** (app eGrow ou manuel)
3. **Lancer les Facebook Ads** (voir `marketing/facebook-ads-angles.md`)
4. **Activer les email flows** dans Klaviyo (voir `marketing/email-flows.md`)
5. **Configurer les bundles** (voir `marketing/upsell-cross-sell-strategy.md`)
