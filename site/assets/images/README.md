# VALON — Image Asset Mapping

Drop the original images you uploaded into this folder using these **exact filenames** so the preview site loads them automatically. Each file is also mapped to its destination in the Shopify Admin.

| Filename                  | Original photo                                       | Use on the site (and in Shopify)                                                                                    |
| ------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `hero-bottles.jpg`        | Image 1 — duo black/gold + oil drop + argan nuts     | Homepage hero background, Theme settings → Hero image, About page hero                                              |
| `oil-application.jpg`     | Image 2 — woman applying serum in bathroom           | "How it works" section, Serum product gallery image #2, Bundle page split section                                   |
| `customers-collage.jpg`   | Image 3 — 4-photo collage of customers with VALON    | "Avant / Après" section, Testimonials section, Instagram-style social proof block                                   |
| `gift-box.jpg`            | Image 4 — open white gift box with two products      | Bundle / Pack Complet hero image, Final CTA background, Shopify product image for "Pack VALON Complet"              |
| `products-duo.jpg`        | Image 5 — clean studio shot of both bottles          | Homepage product showcase, Collection thumbnail, Shopify featured product image                                     |

## Recommended export specs

| Asset            | Format        | Size                | Notes                                          |
| ---------------- | ------------- | ------------------- | ---------------------------------------------- |
| Hero / CTA       | JPG (quality 82) | 2400 × 1600 px      | Compress with TinyJPG before upload            |
| Product gallery  | JPG / WebP    | 1600 × 2000 px (4:5)| Use same aspect ratio for all gallery shots    |
| Section splits   | JPG           | 1600 × 1600 px (1:1)| Use the cleanest crop                          |
| Mobile hero      | JPG           | 1080 × 1350 px (4:5)| Optional — Shopify can auto-resize             |

## Placeholders included

Until you upload the originals, the static preview site uses SVG placeholders (`placeholder-*.svg`) so every page still renders cleanly. They are automatically swapped out the moment a matching `.jpg` exists.

## Logo & favicon

Drop your final logo (PNG, transparent, 1000 × 1000 px) as `logo.png` in this folder and the brand mark in the header will switch from the text version to your logo image. Add a `favicon.ico` (32 × 32) to the `/site/` root for the browser tab.
