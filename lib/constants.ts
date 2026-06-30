export const APP_NAME = "VALON";
export const APP_DESCRIPTION =
  "Wholesale CRM for managing partners, orders, products, and sales.";

export const ROUTES = {
  home: "/",
  login: "/login",
  register: "/register",
  partners: "/partners",
  orders: "/orders",
  products: "/products",
  sales: "/sales",
  statistics: "/statistics",
  settings: "/settings",
} as const;

export const AUTH_ROUTES = [ROUTES.login, ROUTES.register] as const;

export const PROTECTED_ROUTE_PREFIXES = [
  ROUTES.partners,
  ROUTES.orders,
  ROUTES.products,
  ROUTES.sales,
  ROUTES.statistics,
  ROUTES.settings,
] as const;

export const BRAND = {
  gold: "#C9A227",
  black: "#0A0A0A",
  white: "#FFFFFF",
} as const;
