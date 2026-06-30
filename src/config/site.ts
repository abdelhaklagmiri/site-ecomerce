/**
 * Centralised, type-safe application configuration.
 * Single source of truth for branding, navigation and feature toggles.
 */

import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  Package,
  BarChart3,
  Receipt,
  Settings,
  LifeBuoy,
} from "lucide-react";

export type VerticalKey = "barbers" | "salons" | "pharmacies" | "cosmetics";

export interface Vertical {
  key: VerticalKey;
  label: string;
  enabled: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
  /** When set, the link is rendered but disabled (coming soon). */
  disabled?: boolean;
}

export interface NavSection {
  title?: string;
  items: NavItem[];
}

export const siteConfig = {
  name: "VALON",
  shortName: "VALON CRM",
  description:
    "Premium wholesale CRM for VALON — manage barbers, orders, products, sales and statistics.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  locale: "en",
  defaultTheme: "system" as const,
  brand: {
    gold: "#C9A227",
    black: "#000000",
    white: "#FFFFFF",
  },
} as const;

/**
 * Business verticals. Today only `barbers` is active.
 * Architecture is multi-vertical so we can flip the switches later.
 */
export const verticals: Vertical[] = [
  { key: "barbers", label: "Barbers", enabled: true },
  { key: "salons", label: "Beauty Salons", enabled: false },
  { key: "pharmacies", label: "Pharmacies", enabled: false },
  { key: "cosmetics", label: "Cosmetic Stores", enabled: false },
];

/**
 * Sidebar navigation. Routes are declared but pages are NOT built yet.
 */
export const dashboardNav: NavSection[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { label: "Statistics", href: "/statistics", icon: BarChart3 },
    ],
  },
  {
    title: "Operations",
    items: [
      { label: "Partners", href: "/partners", icon: Users },
      { label: "Orders", href: "/orders", icon: ShoppingBag },
      { label: "Products", href: "/products", icon: Package },
      { label: "Sales", href: "/sales", icon: Receipt },
    ],
  },
  {
    title: "Account",
    items: [
      { label: "Settings", href: "/settings", icon: Settings },
      { label: "Support", href: "/support", icon: LifeBuoy },
    ],
  },
];
