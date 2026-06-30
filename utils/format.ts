const MOROCCO_LOCALE = "fr-MA";
const DEFAULT_CURRENCY = "MAD";

export function formatCurrency(
  amount: number,
  currency: string = DEFAULT_CURRENCY,
): string {
  return new Intl.NumberFormat(MOROCCO_LOCALE, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(
  date: Date | string,
  options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  },
): string {
  const value = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(MOROCCO_LOCALE, options).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat(MOROCCO_LOCALE).format(value);
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
