import {
  BarChart3,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Store,
  TrendingUp,
} from "lucide-react";

import { ROUTES } from "@/lib/constants";
import type { NavGroup } from "@/types/navigation";

export const mainNavigation: NavGroup[] = [
  {
    label: "Overview",
    items: [
      {
        title: "Dashboard",
        href: ROUTES.home,
        icon: LayoutDashboard,
        description: "Business overview",
      },
      {
        title: "Statistics",
        href: ROUTES.statistics,
        icon: BarChart3,
        description: "Performance insights",
        disabled: true,
      },
    ],
  },
  {
    label: "Operations",
    items: [
      {
        title: "Partners",
        href: ROUTES.partners,
        icon: Store,
        description: "Barbers and future partner types",
        disabled: true,
      },
      {
        title: "Orders",
        href: ROUTES.orders,
        icon: ShoppingCart,
        description: "Wholesale order management",
        disabled: true,
      },
      {
        title: "Products",
        href: ROUTES.products,
        icon: Package,
        description: "Product catalog",
        disabled: true,
      },
      {
        title: "Sales",
        href: ROUTES.sales,
        icon: TrendingUp,
        description: "Sales tracking",
        disabled: true,
      },
    ],
  },
  {
    label: "System",
    items: [
      {
        title: "Settings",
        href: ROUTES.settings,
        icon: Settings,
        description: "Account and preferences",
        disabled: true,
      },
    ],
  },
];
