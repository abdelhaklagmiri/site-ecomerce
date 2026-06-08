#!/usr/bin/env bash
# Push VALON as a NEW unpublished theme — does NOT touch the live theme.
set -euo pipefail

STORE="0ipcp7-ts.myshopify.com"
THEME_NAME="VALON"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

cd "$ROOT"

export SHOPIFY_CLI_TTY=0
export SHOPIFY_FLAG_FORCE=1

echo "→ Pushing unpublished theme '${THEME_NAME}' to ${STORE}"
echo "→ Live theme will NOT be modified."

npx shopify theme push \
  --store "$STORE" \
  --unpublished \
  --theme "$THEME_NAME" \
  --json

echo ""
echo "→ Verify live theme unchanged:"
npx shopify theme list --store "$STORE"
