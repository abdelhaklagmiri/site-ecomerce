import type { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
  disabled?: boolean;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}
