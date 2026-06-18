# VALON Hair Care — Shopify Store Build

> Boutique e-commerce **luxe** pour la marque **VALON Hair Care**.
> Marché : **Maroc** · Langue : **Français** · Paiement : **COD (paiement à la livraison)** · Support : **WhatsApp**
> Domaine : [valon-shop.com](https://valon-shop.com)

Le repo contient **deux livrables côte à côte** :

1. **`/site/`** — Un site web statique haute fidélité qui visualise l'intégralité du store (homepage, bundle, produits, à propos, contact, FAQ, 4 pages de politiques). Vous pouvez l'ouvrir directement dans un navigateur pour voir le rendu final, et l'utiliser comme **référence 1:1** pour la configuration Shopify.
2. **`/docs/`** — Les **playbooks d'implémentation** : guide de setup Shopify Admin, copy complète en français, marketing & ad angles, audit CRO. Tout est prêt à être copié-collé dans Shopify.

---

## 🚀 Comment voir le site

```bash
# depuis la racine du repo
cd site
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

Ou simplement double-cliquer sur `site/index.html`.

---

## 📁 Structure du repo

```
.
├── site/                              # Aperçu visuel haute fidélité (HTML/CSS/JS)
│   ├── index.html                     # Homepage complète
│   ├── pack-complet.html              # Page Bundle (le convertisseur principal — 649 MAD)
│   ├── serum.html                     # Page produit Sérum 60ml
│   ├── shampooing.html                # Page produit Shampooing 200ml
│   ├── about.html                     # Notre histoire (Istanbul × Maroc)
│   ├── contact.html                   # Contact + WhatsApp
│   ├── faq.html                       # FAQ complète
│   ├── politique-livraison.html
│   ├── politique-remboursement.html
│   ├── politique-confidentialite.html
│   ├── conditions-generales.html
│   └── assets/
│       ├── css/style.css              # Design system noir / or / blanc
│       ├── js/main.js                 # Drawer, gallery, COD form, sticky cart, scroll reveal
│       └── images/                    # Placeholders SVG + README de mapping
│
├── docs/                              # Playbooks d'implémentation Shopify
│   ├── 01-SHOPIFY-SETUP.md            # Configuration Shopify pas à pas
│   ├── 02-COPYWRITING-FR.md           # Toute la copy en français
│   ├── 03-MARKETING-PLAYBOOK.md       # Ad angles, CRO, upsells, taux conf/livraison
│   └── 04-CRO-AUDIT.md                # Audit critique et améliorations
│
└── README.md                          # ce fichier
```

---

## 🎯 Roadmap d'implémentation (résumé exécutif)

| Étape | Action                                                                 | Doc                |
| ----- | ---------------------------------------------------------------------- | ------------------ |
| 1     | Ouvrir un compte Shopify Basic, brancher `valon-shop.com`             | `01-SHOPIFY-SETUP` |
| 2     | Installer le thème **Dawn** (gratuit) ou **Impulse** (payant, luxe)   | `01-SHOPIFY-SETUP` |
| 3     | Configurer les couleurs (`#0a0a0a`, `#c9a96e`, `#ffffff`), polices    | `01-SHOPIFY-SETUP` |
| 4     | Uploader le logo et les 5 photos produits                              | `site/assets/images/README.md` |
| 5     | Créer les 3 produits (Sérum 399 MAD, Shampooing 349 MAD, Pack 649 MAD) | `01-SHOPIFY-SETUP` + `02-COPYWRITING-FR` |
| 6     | Créer les 7 pages (About, Contact, FAQ, 4 politiques)                  | `02-COPYWRITING-FR` |
| 7     | Configurer le menu + footer                                            | `01-SHOPIFY-SETUP` |
| 8     | Activer le paiement COD uniquement, livraison Maroc = 0 MAD            | `01-SHOPIFY-SETUP` |
| 9     | Installer Releasit COD + WhatsApp Chat + Loox + Vitals                 | `01-SHOPIFY-SETUP` |
| 10    | Configurer Meta Pixel + CAPI + TikTok Pixel + GA4                      | `01-SHOPIFY-SETUP` |
| 11    | Personnaliser les 3 emails transactionnels (confirmation, expédition, livraison) | `02-COPYWRITING-FR` |
| 12    | Lancer 2 angles Meta différents à 100 MAD/jour chacun                  | `03-MARKETING-PLAYBOOK` |
| 13    | Suivre les KPIs hebdomadaires (taux conf, livraison, ROAS)             | `03-MARKETING-PLAYBOOK` |

---

## 🎨 Design system

| Token              | Valeur                                                  |
| ------------------ | ------------------------------------------------------- |
| Couleur principale | `#0a0a0a` Noir profond                                  |
| Couleur accent     | `#c9a96e` Or (`#e6c787` clair, `#9a7f48` foncé)         |
| Couleur fond clair | `#faf6ee` Crème                                         |
| Police titres      | **Cormorant Garamond** (serif élégant)                  |
| Police corps       | **Inter** (sans-serif moderne)                          |
| Largeur conteneur  | 1240 px                                                 |
| Coins arrondis     | 4 px (boutons) / 10 px (cartes)                         |

---

## 📊 Stratégie commerciale en 1 phrase

> *Positionner VALON comme le luxe capillaire turc accessible aux femmes marocaines, vendu en COD via une expérience d'achat ultra-rassurante (WhatsApp 7j/7, paiement à la réception, garantie satisfait ou remboursé), avec un produit signature (Pack Complet 649 MAD) qui concentre la promesse et maximise le panier moyen.*

---

## 🇲🇦 Spécificités marché Maroc intégrées partout

- ✅ Paiement à la livraison (COD) exclusif
- ✅ Service client WhatsApp 7j/7 (+212 716 27 16 04)
- ✅ Livraison gratuite + délai 24–48h
- ✅ Témoignages clients de villes marocaines réelles (Casa, Rabat, Marrakech, Tanger, Fès, Agadir, Meknès...)
- ✅ Quelques touches de darija dans les avis pour l'authenticité
- ✅ Optimisation mobile-first (90% du trafic Maroc)
- ✅ Scripts d'appel de confirmation et de relance optimisés pour maximiser conf rate + delivery rate
- ✅ Trust badges culturellement adaptés (cash, livreur, vérification avant paiement)

---

## 🇹🇷 Angle "Importé de Turquie" intégré partout

Sur l'ensemble du site et des supports marketing, l'origine turque est mise en avant comme un **différenciant premium** :

- Tagline systématique : *« Importé de Turquie · Istanbul »* / *« Made in Türkiye »*
- Storytelling "À propos" : Istanbul est positionnée comme **capitale mondiale du soin capillaire** (référence aux séries TV turques très populaires au Maroc)
- Section "Pourquoi VALON" : *« Formulé dans les laboratoires d'Istanbul, importé directement, sans intermédiaire »*
- Hero badge : *« Importé de Turquie · Istanbul »*
- Description produit : *« Formule signature turque »*
- Ad angle #1 (le plus fort) : *« Le secret des cheveux longs et brillants des Turques arrive enfin au Maroc »*
- Footer : *« Importé de Turquie · Distribué au Maroc »*

---

## 📞 Contact opérationnel

- **WhatsApp** : +212 716 27 16 04
- **Email** : valon.lagmiri@gmail.com
- **Site** : [valon-shop.com](https://valon-shop.com)
