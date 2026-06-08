# VALON Hair Care — Stratégie Upsell & Cross-Sell

**Objectif :** Augmenter l'AOV (panier moyen) de 299 DH à 450+ DH
**Marché :** Maroc — COD dominant

---

## Architecture des Offres

```
NIVEAU 1 — Entry (149-299 DH)
├── Sérum Capillaire — 299 DH (hero)
├── Huile Argan Pure — 179 DH
└── Sleep Mask / Accessoire — 149 DH (si applicable)

NIVEAU 2 — Core (189-249 DH)
├── Shampoing Nourrissant — 189 DH
└── Masque Capillaire — 249 DH

NIVEAU 3 — Bundle (549-749 DH)
├── Duo Sérum + Shampoing — 449 DH (économie 39 DH)
├── Trio Rituel — 649 DH (économie 88 DH)
└── Coffret Premium — 749 DH (économie 120 DH)
```

---

## Upsells (Montée en gamme)

### Upsell 1 : Page Produit — Avant ajout au panier
**Trigger :** Client sur page Sérum (299 DH)
**Offre :** « Passez au Kit Rituel Complet pour seulement +350 DH de plus et économisez 88 DH »
**Affichage :** Toggle ou carte comparative sous le bouton « Ajouter au panier »
**Taux de conversion cible :** 12-18%

```
┌─────────────────────────────────────────┐
│  🔥 OFFRE RECOMMANDÉE                   │
│                                         │
│  Kit Rituel Complet VALON               │
│  Sérum + Shampoing + Masque + Guide     │
│                                         │
│  649 DH  ~~737 DH~~  (Économisez 88 DH) │
│  + Livraison GRATUITE incluse           │
│                                         │
│  [Ajouter le Kit Complet]               │
│  Non merci, sérum seul (299 DH)         │
└─────────────────────────────────────────┘
```

### Upsell 2 : Panier — Avant checkout
**Trigger :** Panier contient 1 produit
**Offre dynamique :**
- Si Sérum seul → Proposer Shampoing (+189 DH)
- Si Shampoing seul → Proposer Sérum (+299 DH)
- Si 2 produits → Proposer le 3ème à -15%

**Message :** « Complétez votre rituel capillaire et économisez 15% »

### Upsell 3 : Post-achat (One-Click Upsell)
**Trigger :** Immédiatement après confirmation de commande
**Offre :** « Ajoutez le Masque Capillaire à votre commande pour seulement 199 DH (au lieu de 249 DH) — livré dans le même colis »
**Avantage :** Pas de frais de livraison supplémentaires
**Taux de conversion cible :** 8-12%

### Upsell 4 : WhatsApp Confirmation
**Trigger :** Appel/message de confirmation COD
**Script agent :**
```
« Merci pour votre commande du sérum VALON ! 
Beaucoup de nos clientes ajoutent le shampoing pour 
un résultat complet. Je peux l'ajouter à votre colis 
pour 189 DH — livré en même temps. Ça vous intéresse ? »
```
**Taux de conversion cible :** 15-25% (le plus efficace au Maroc)

---

## Cross-Sells (Produits complémentaires)

### Cross-Sell 1 : « Souvent achetés ensemble »
**Sur page Sérum, afficher :**
| Produit | Prix | Action |
|---------|------|--------|
| Shampoing Nourrissant | 189 DH | Ajouter |
| Masque Capillaire | 249 DH | Ajouter |
| Huile Argan Pure | 179 DH | Ajouter |

**Bundle automatique :** Cocher les 3 → Prix bundle 649 DH

### Cross-Sell 2 : Post-livraison (J+7 email)
**Offre :** « Vous aimez le sérum ? Le masque hebdomadaire amplifie les résultats »
**Code :** MASK15 (-15% sur le masque)

### Cross-Sell 3 : Saisonnier
| Saison | Cross-sell | Angle |
|--------|-----------|-------|
| Été | Huile protectrice soleil | Protection UV capillaire |
| Hiver | Masque nourrissant | Cheveux secs par le froid |
| Ramadan | Kit cadeau | Coffret pour la famille |
| Mariage | Coffret Premium | Cadeau mariée |

---

## Bundles Détaillés

### Bundle 1 : Duo Essentiel — 449 DH (valeur 488 DH)
- 1x Sérum Capillaire (299 DH)
- 1x Shampoing Nourrissant (189 DH)
- **Économie : 39 DH**
- Livraison gratuite incluse
- **Positionnement :** Offre principale dans les ads

### Bundle 2 : Kit Rituel Complet — 649 DH (valeur 737 DH) ⭐ BESTSELLER
- 1x Sérum Capillaire (299 DH)
- 1x Shampoing Nourrissant (189 DH)
- 1x Masque Capillaire (249 DH)
- 1x Guide d'utilisation
- **Économie : 88 DH**
- Livraison gratuite incluse
- **Positionnement :** Upsell principal, offre Ramadan/Aïd

### Bundle 3 : Coffret Premium Cadeau — 749 DH (valeur 869 DH)
- Kit Rituel Complet
- 1x Huile Argan Pure (179 DH)
- Packaging cadeau premium
- Carte personnalisée
- **Économie : 120 DH**
- **Positionnement :** Fêtes, mariages, cadeaux

### Bundle 4 : Duo Partenaire — 529 DH (valeur 598 DH)
- 2x Sérum Capillaire
- **Économie : 69 DH**
- **Angle :** « Un pour vous, un pour votre sœur/mère/amie »

---

## Implémentation Shopify

### Applications recommandées
| App | Usage | Coût |
|-----|-------|------|
| **ReConvert** | Post-purchase upsell | ~$7.99/mois |
| **Bundler** ou **Pumper** | Bundles avec réduction | Gratuit-$9/mois |
| **Cart Upsell** | In-cart cross-sell | Gratuit-$4.99/mois |
| **Wide Bundles** | Product page bundles | $19/mois |

### Configuration Shopify native (sans app)
1. **Créer les bundles** comme produits séparés (Kit Rituel = 1 produit)
2. **Utiliser les tags** : `bundle`, `upsell`, `cross-sell`
3. **Collections** : « Complétez votre rituel » avec produits liés
4. **Thème** : Section « Souvent achetés ensemble » sur product page

---

## Psychologie des Prix (Maroc)

| Technique | Application VALON |
|-----------|-------------------|
| **Ancrage** | Afficher prix barré (399 → 299 DH) |
| **Économie visible** | « Économisez 88 DH » en orange |
| **Seuil livraison gratuite** | « Plus que XX DH pour la livraison gratuite » |
| **COD rassurance** | « Payez à la réception — zéro risque » |
| **Social proof** | « 73% choisissent le Kit Complet » |
| **Urgence douce** | « Stock limité — saison été » |

---

## Projections AOV

| Scénario | AOV | % Clients |
|----------|-----|-----------|
| Produit seul (sérum) | 299 DH | 40% |
| Duo Essentiel | 449 DH | 25% |
| Kit Rituel Complet | 649 DH | 25% |
| Coffret Premium | 749 DH | 10% |
| **AOV moyen pondéré** | **~455 DH** | 100% |

**Avec upsells WhatsApp (+15% conversion vers bundle) :**
**AOV cible : 480-520 DH**

---

## KPIs Upsell/Cross-sell

| Métrique | Cible |
|----------|-------|
| Taux d'upsell page produit | > 12% |
| Taux d'upsell panier | > 8% |
| Taux d'upsell post-achat | > 8% |
| Taux d'upsell WhatsApp | > 15% |
| AOV global | > 450 DH |
| % commandes bundle | > 35% |
| Taux de réachat (60j) | > 20% |
