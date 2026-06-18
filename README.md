# Smitha Valon Hair — Site Professionnel

Site web et kit de marque pour **Smitha Valon Hair**, salon de coiffure premium.

## Contenu

- `index.html` — Site vitrine (services, galerie, contact, réservation WhatsApp)
- `instagram-guide.html` — Guide pour professionnaliser la page Instagram
- `assets/logo.png` — Logo de la marque
- `js/config.js` — Configuration (Instagram, WhatsApp, adresse)

## Personnalisation

Modifiez `js/config.js` avec vos informations :

```js
const BRAND_CONFIG = {
  instagram: {
    handle: '@votre_compte',
    url: 'https://instagram.com/votre_compte'
  },
  whatsapp: {
    number: '2126XXXXXXXX',
    display: '+212 6 XX XX XX XX'
  },
  location: 'Votre ville, Maroc'
};
```

## Lancer en local

```bash
python3 -m http.server 8080
```

Puis ouvrez `http://localhost:8080`

## Déploiement

Déployez sur [Netlify](https://netlify.com), [Vercel](https://vercel.com) ou [GitHub Pages](https://pages.github.com) et ajoutez le lien dans la bio Instagram.
