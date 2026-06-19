# site-ecomerce

## Cursor Cloud specific instructions

### What this project is
This repository hosts **VALON Hair Care**, a static, multi-page e-commerce storefront
(French / Morocco market, cash-on-delivery). It is plain **HTML + CSS + vanilla JS**
with SVG assets — there is **no build step, no bundler, and no package manager**.
The site lives under `site/` (entry point `site/index.html`, styles in
`site/assets/css/style.css`, interactions in `site/assets/js/main.js`).

> Note: the `main` branch is intentionally near-empty (just `README.md` and
> `.cursor/mcp.json`). The actual storefront and the `docs/` content live on
> feature branches (e.g. `cursor/valon-shopify-store-*`). When developing, work on
> the branch that contains the `site/` directory.

### Running the site (dev)
There are no dependencies to install. Serve the static files with any HTTP server
and open in a browser — do **not** open `file://` paths (relative asset/links and
`fetch`/JS behave better over HTTP):

```
python3 -m http.server 8000 --directory site
# then open http://localhost:8000/index.html
```

### Lint / test / build
There is no configured linter, test suite, or build pipeline. "Build" is a no-op:
the files in `site/` are the deployable artifact (some branches also ship a
`VALON-theme-upload.zip` Shopify theme). If you add tooling, wire it into the
update script and document the commands here.

### Notable behavior
- The order form (`form.order-form`) is handled entirely client-side in
  `main.js`: it validates required fields, shows a "Commande reçue !" confirmation
  overlay, and offers a WhatsApp deep link. There is no backend.
