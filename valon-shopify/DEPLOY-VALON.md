# Deploy VALON Theme (Unpublished — Live Theme Safe)

This uploads a **new unpublished theme** named **VALON**. Your current live theme is **not** modified.

## Prerequisites

- Shopify CLI installed (`npx shopify` works in this repo)
- Store owner login or Theme Access password
- Themes access enabled in Shopify Admin

## Step 1 — Authenticate

```bash
cd /workspace/valon-shopify
npx shopify auth login --store YOUR-STORE.myshopify.com
```

## Step 2 — Push as new unpublished theme (safe)

```bash
npx shopify theme push \
  --store YOUR-STORE.myshopify.com \
  --unpublished \
  --theme "VALON" \
  --json
```

Save the `preview_url` and `editor_url` from the JSON output.

## Step 3 — Preview (do NOT publish yet)

Open the `preview_url` in your browser, or in Admin:

**Online Store → Themes → Theme library → VALON → Preview**

## Step 4 — Verify live theme unchanged

```bash
npx shopify theme list --store YOUR-STORE.myshopify.com
```

Your existing theme should still show `[live]`. VALON should show `unpublished`.

## Step 5 — Publish only when ready

```bash
npx shopify theme publish \
  --store YOUR-STORE.myshopify.com \
  --theme VALON \
  --force
```

## Theme Access (headless / no browser)

```bash
npx shopify theme push \
  --store YOUR-STORE.myshopify.com \
  --password YOUR_THEME_ACCESS_PASSWORD \
  --unpublished \
  --theme "VALON" \
  --json
```

## Pull live theme for comparison (optional)

```bash
npx shopify theme pull \
  --store YOUR-STORE.myshopify.com \
  --live \
  --path ./live-theme-backup
```
