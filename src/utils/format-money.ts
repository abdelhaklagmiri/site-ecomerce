/**
 * Format an integer "cents" amount using Intl. Defaults to MAD (Morocco).
 * Keeps a single source of truth for money rendering across the app.
 */
export function formatMoney(
  amountCents: number,
  currency: string = "MAD",
  locale: string = "fr-MA",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amountCents / 100);
}

export function centsFromAmount(amount: number): number {
  return Math.round(amount * 100);
}
