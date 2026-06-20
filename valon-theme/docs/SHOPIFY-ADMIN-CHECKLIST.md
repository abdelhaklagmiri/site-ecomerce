# VALON — Checklist Shopify Admin (étape par étape)

Guide complet pour transformer le thème VALON en boutique prête à vendre sur **valon-shop.com**.

**Temps estimé total :** 2 à 3 heures  
**Prérequis :** Fichier `valon-theme-final.zip` + accès admin Shopify

---

## PHASE 1 — Importer et publier le thème (10 min)

### Étape 1.1 — Se connecter

| Champ | Valeur |
|-------|--------|
| **Où cliquer** | Navigateur → `https://valon-shop.com/admin` |
| **Identifiants** | Ton email + mot de passe Shopify |

### Étape 1.2 — Importer le thème

| Action | Détail |
|--------|--------|
| **Où cliquer** | Menu gauche → **Boutique en ligne** → **Thèmes** |
| **Bouton** | **Importer** (en haut à droite, ou dans « Bibliothèque de thèmes ») |
| **Fichier** | Sélectionner `valon-theme-final.zip` |
| **Attendre** | 30 à 60 secondes — message « Thème importé » |
| **Vérifier** | Le thème **VALON Luxury** apparaît dans la liste |

### Étape 1.3 — Publier le thème

| Action | Détail |
|--------|--------|
| **Où cliquer** | Sur la carte **VALON Luxury** → bouton **…** (trois points) |
| **Choisir** | **Publier** |
| **Confirmer** | **Publier** dans la fenêtre de confirmation |
| **Résultat** | valon-shop.com affiche le design VALON (noir/or) |

### Étape 1.4 — Paramètres du thème

| Action | Détail |
|--------|--------|
| **Où cliquer** | Thèmes → **Personnaliser** (sur VALON Luxury) |
| **Où cliquer** | Icône **⚙️ Paramètres du thème** (barre latérale gauche, en bas) |
| **Section Marque** | Remplir : |

| Paramètre | Valeur à coller |
|-----------|-----------------|
| Logo VALON | Uploader ton logo packaging (PNG transparent) — optionnel |
| Favicon | Uploader favicon 32×32 — optionnel |
| Numéro WhatsApp | `212716271604` |
| Message WhatsApp | `Bonjour VALON, je souhaite commander le Pack Complet à 649 MAD.` |
| Email de contact | `valon.lagmiri@gmail.com` |
| Seuil livraison gratuite | `399` |
| Garantie satisfaction | `40` |

| Action | Détail |
|--------|--------|
| **Bouton** | **Enregistrer** (en haut à droite) |

---

## PHASE 2 — Paramètres généraux de la boutique (10 min)

### Étape 2.1 — Informations boutique

| Action | Détail |
|--------|--------|
| **Où cliquer** | Menu gauche → **Paramètres** (⚙️ en bas) → **Général** |

| Champ | Valeur |
|-------|--------|
| Nom de la boutique | `VALON Hair Care` |
| Email de la boutique | `valon.lagmiri@gmail.com` |
| Téléphone | `+212 716 271 604` |
| Adresse | Ta ville, Maroc (ex. Casablanca) |

| **Bouton** | **Enregistrer** |

### Étape 2.2 — Langue française

| Action | Détail |
|--------|--------|
| **Où cliquer** | Paramètres → **Langues** |
| **Vérifier** | **Français** est la langue par défaut de la boutique |
| **Si arabe/anglais actif** | Cliquer **…** sur Français → **Publier** comme langue par défaut |
| **Désactiver** (optionnel) | Langues inutiles pour éviter confusion |

### Étape 2.3 — Devise

| Action | Détail |
|--------|--------|
| **Où cliquer** | Paramètres → **Marchés** ou **Paiements** → devise |
| **Vérifier** | **MAD (Dirham marocain)** |

---

## PHASE 3 — Produits (45 min)

> Tous les textes à copier-coller sont dans **`docs/TEXTES-COPIER-COLLER.md`**

### Étape 3.1 — Corriger le Pack Complet (produit existant)

| Action | Détail |
|--------|--------|
| **Où cliquer** | Menu gauche → **Produits** → **Tous les produits** |
| **Cliquer** | **VALON Hair Care Pack** (ou créer si absent) |

| Champ | Valeur |
|-------|--------|
| **Titre** | `Pack Complet VALON Hair Care` |
| **Description** | Copier la section **PRODUIT 1** depuis `TEXTES-COPIER-COLLER.md` |
| **Prix** | `649.00` |
| **Coût par article** | (optionnel) ton coût d'achat |
| **Suivre la quantité** | ✅ Activé |
| **Continuer à vendre en rupture** | ❌ Désactivé |

| Action | Détail |
|--------|--------|
| **Où cliquer** | Section **Médias** → **Ajouter des fichiers** |
| **Uploader** | Photos pack (unboxing, splash, produits) — 4 à 6 images |
| **Ordre** | Glisser la meilleure photo en **1ère position** |

| Action | Détail |
|--------|--------|
| **Où cliquer** | Tout en bas → **Aperçu des moteurs de recherche** → **Modifier** |

| Champ SEO | Valeur |
|-----------|--------|
| Titre de la page | `Pack Complet VALON \| Huile + Shampooing + Coffret — 649 MAD` |
| Meta description | Copier depuis TEXTES-COPIER-COLLER.md |
| **Handle (URL)** | `valon-hair-care-pack` ← **NE PAS CHANGER** |

| Action | Détail |
|--------|--------|
| **Où cliquer** | Colonne droite → **Modèle de thème** |
| **Choisir** | `valon` (ou `product` si `valon` absent) |
| **Statut** | **Actif** |
| **Bouton** | **Enregistrer** |

### Étape 3.2 — Créer Huile Capillaire 60ml

| Action | Détail |
|--------|--------|
| **Où cliquer** | Produits → **Ajouter un produit** |

| Champ | Valeur |
|-------|--------|
| **Titre** | `Huile Capillaire VALON — Nourrissante 60ml` |
| **Description** | Copier **PRODUIT 2** depuis TEXTES-COPIER-COLLER.md |
| **Prix** | `399.00` |
| **Médias** | Uploader `valon-products-dark-1.jpg` + photo application |
| **Handle** | `huile-capillaire-valon` |
| **Modèle de thème** | `product` (défaut) |
| **Statut** | **Actif** |

### Étape 3.3 — Créer Shampooing 200ml

| Action | Détail |
|--------|--------|
| **Où cliquer** | Produits → **Ajouter un produit** |

| Champ | Valeur |
|-------|--------|
| **Titre** | `Shampooing VALON — Naturel Purifiant 200ml` |
| **Description** | Copier **PRODUIT 3** depuis TEXTES-COPIER-COLLER.md |
| **Prix** | `349.00` |
| **Médias** | Uploader `valon-products-dark-2.jpg` |
| **Handle** | `shampooing-valon` |
| **Modèle de thème** | `product` |
| **Statut** | **Actif** |

### Étape 3.4 — Collection « Tous les produits »

| Action | Détail |
|--------|--------|
| **Où cliquer** | Produits → **Collections** → **Créer une collection** |

| Champ | Valeur |
|-------|--------|
| **Titre** | `Tous les produits VALON` |
| **Handle** | `all` (ou vérifier que `/collections/all` existe) |
| **Type** | **Manuelle** |
| **Ajouter** | Les 3 produits |
| **Bouton** | **Enregistrer** |

> Shopify crée souvent `all` automatiquement. Si `/collections/all` fonctionne déjà, passer cette étape.

---

## PHASE 4 — Pages (30 min)

> Le contenu des pages est **déjà dans le thème** via les templates. Tu crées des pages vides avec le bon handle et le bon template.

### Pour CHAQUE page, répéter ce processus :

| Action | Détail |
|--------|--------|
| **Où cliquer** | Boutique en ligne → **Pages** → **Ajouter une page** |

---

### Page 1 — Pack Complet

| Champ | Valeur |
|-------|--------|
| **Titre** | `Pack Complet` |
| **Contenu** | Laisser **vide** (le thème injecte le contenu) |
| **Modèle de thème** | `page.bundle` |
| **Visibilité** | Visible |
| **Handle** | `pack-complet` |

### Page 2 — À Propos

| Champ | Valeur |
|-------|--------|
| **Titre** | `À Propos` |
| **Modèle** | `page.about` |
| **Handle** | `a-propos` |

### Page 3 — Contact

| Champ | Valeur |
|-------|--------|
| **Titre** | `Contact` |
| **Modèle** | `page.contact` |
| **Handle** | `contact` |

### Page 4 — FAQ

| Champ | Valeur |
|-------|--------|
| **Titre** | `FAQ` |
| **Modèle** | `page.faq` |
| **Handle** | `faq` |

### Page 5 — Livraison

| Champ | Valeur |
|-------|--------|
| **Titre** | `Politique de Livraison` |
| **Modèle** | `page.shipping-policy` |
| **Handle** | `livraison` |

### Page 6 — Remboursement

| Champ | Valeur |
|-------|--------|
| **Titre** | `Politique de Remboursement` |
| **Modèle** | `page.refund-policy` |
| **Handle** | `politique-remboursement` |

### Page 7 — Confidentialité

| Champ | Valeur |
|-------|--------|
| **Titre** | `Politique de Confidentialité` |
| **Modèle** | `page.privacy-policy` |
| **Handle** | `politique-confidentialite` |

### Page 8 — Conditions générales

| Champ | Valeur |
|-------|--------|
| **Titre** | `Conditions Générales de Vente` |
| **Modèle** | `page.terms` |
| **Handle** | `conditions-generales` |

### Étape 4.9 — Supprimer les anciennes pages arabes (optionnel)

| Action | Détail |
|--------|--------|
| **Où cliquer** | Pages → supprimer ou masquer : `من-نحن`, `merci`, ancienne `contact` en arabe |
| **Pourquoi** | Éviter confusion et doublons |

---

## PHASE 5 — Paiement COD (15 min)

### Étape 5.1 — Activer paiement à la livraison

| Action | Détail |
|--------|--------|
| **Où cliquer** | Paramètres → **Paiements** |
| **Section** | **Modes de paiement manuels** (ou « Paiement à la livraison ») |
| **Bouton** | **Activer** ou **Configurer** |

| Champ | Valeur |
|-------|--------|
| **Nom affiché** | `Paiement à la livraison` |
| **Instructions** | `Payez en espèces directement au livreur à la réception de votre colis. Aucun paiement en avance requis.` |

| **Bouton** | **Enregistrer** |

### Étape 5.2 — Désactiver paiements en ligne (si 100 % COD)

| Action | Détail |
|--------|--------|
| **Où cliquer** | Paramètres → Paiements → **Shopify Payments** ou autres |
| **Action** | **Désactiver** les paiements par carte si tu ne les utilises pas |

---

## PHASE 6 — Livraison (20 min)

### Étape 6.1 — Créer le profil d'expédition

| Action | Détail |
|--------|--------|
| **Où cliquer** | Paramètres → **Expédition et livraison** |
| **Section** | **Profils d'expédition** → **Général** → **Modifier** |

### Étape 6.2 — Zone Maroc

| Action | Détail |
|--------|--------|
| **Où cliquer** | **Ajouter une zone d'expédition** |
| **Nom** | `Maroc` |
| **Pays** | Cocher **Maroc** uniquement |
| **Enregistrer** |

### Étape 6.3 — Tarif livraison gratuite dès 399 MAD

| Action | Détail |
|--------|--------|
| **Où cliquer** | Dans la zone Maroc → **Ajouter un tarif** |

| Paramètre | Valeur |
|-----------|--------|
| **Nom** | `Livraison gratuite` |
| **Type** | **Prix fixe** → `0,00 MAD` |
| **Condition** | **Basé sur le prix de la commande** |
| **Minimum** | `399,00 MAD` |

### Étape 6.4 — Tarif standard (< 399 MAD)

| Action | Détail |
|--------|--------|
| **Ajouter un tarif** | |

| Paramètre | Valeur |
|-----------|--------|
| **Nom** | `Livraison standard` |
| **Prix** | `30,00 MAD` |
| **Condition** | Commandes **inférieures** à 399 MAD (ou sans condition si un seul tarif payant) |

| **Bouton** | **Enregistrer** |

---

## PHASE 7 — Politiques Shopify officielles (10 min)

| Action | Détail |
|--------|--------|
| **Où cliquer** | Paramètres → **Politiques** |

| Politique | Lier à la page |
|-----------|----------------|
| Politique de remboursement | `politique-remboursement` |
| Politique de confidentialité | `politique-confidentialite` |
| Conditions de service | `conditions-generales` |
| Politique d'expédition | `livraison` |

---

## PHASE 8 — Page d'accueil (5 min)

| Action | Détail |
|--------|--------|
| **Où cliquer** | Boutique en ligne → **Pages** → **Préférences** (ou Thèmes → Personnaliser) |
| **Page d'accueil** | Sélectionner **Page d'accueil par défaut** (accueil du thème) |
| **Vérifier** | `valon-shop.com` affiche Hero VALON + sections |

---

## PHASE 9 — Test commande (15 min)

### Checklist de test

| # | Test | Résultat attendu |
|---|------|------------------|
| 1 | Ouvrir `valon-shop.com` sur mobile | Design noir/or, hero avec photo |
| 2 | Cliquer **Pack Complet** dans le menu | Page `/pages/pack-complet` s'affiche |
| 3 | Cliquer **Commander — 649 MAD** | Fiche produit pack |
| 4 | **Ajouter au panier** | Produit dans le panier |
| 5 | Aller au **Checkout** | Option « Paiement à la livraison » visible |
| 6 | Compléter commande test | Confirmation reçue |
| 7 | Cliquer **WhatsApp** flottant | Ouvre WhatsApp avec message prérempli |
| 8 | Tester liens footer | Aucun lien 404 |

---

## PHASE 10 — Facebook Ads (optionnel, 30 min)

| Action | Détail |
|--------|--------|
| **Où cliquer** | Paramètres → **Applications et canaux de vente** → **Ajouter** → Facebook |
| **Connecter** | Meta Business Manager |
| **Installer** | Meta Pixel sur la boutique |
| **Catalogue** | Sync les 3 produits |
| **Guide ads** | Voir `docs/FACEBOOK-ADS.md` |

---

## Récapitulatif des handles (NE PAS SE TROMPER)

| Type | Handle exact | URL finale |
|------|--------------|------------|
| Pack | `valon-hair-care-pack` | `/products/valon-hair-care-pack` |
| Huile | `huile-capillaire-valon` | `/products/huile-capillaire-valon` |
| Shampooing | `shampooing-valon` | `/products/shampooing-valon` |
| Page Pack | `pack-complet` | `/pages/pack-complet` |
| À Propos | `a-propos` | `/pages/a-propos` |
| Contact | `contact` | `/pages/contact` |
| FAQ | `faq` | `/pages/faq` |
| Livraison | `livraison` | `/pages/livraison` |

---

## En cas de problème

| Problème | Solution |
|----------|----------|
| ZIP refusé par Shopify | Vérifier que `layout/theme.liquid` est à la racine du ZIP |
| Page 404 | Vérifier le **handle** exact de la page |
| Produit sans design VALON | Vérifier que le thème VALON est **publié** |
| Pas d'option COD au checkout | Réactiver paiement manuel dans Paramètres → Paiements |
| Description en arabe | Remplacer par texte de TEXTES-COPIER-COLLER.md |
