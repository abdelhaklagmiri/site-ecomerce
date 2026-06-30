"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/components/layout/brand-logo";
import { cn } from "@/lib/utils";
import { mainNavigation } from "@/lib/navigation";
import type { NavItem } from "@/types/navigation";

interface SidebarNavProps {
  collapsed?: boolean;
  onNavigate?: () => void;
}

function NavLink({
  item,
  isActive,
  collapsed,
  onNavigate,
}: {
  item: NavItem;
  isActive: boolean;
  collapsed?: boolean;
  onNavigate?: () => void;
}) {
  const Icon = item.icon;

  const content = (
    <>
      <Icon
        className={cn(
          "size-4 shrink-0",
          isActive ? "text-valon-gold" : "text-muted-foreground",
        )}
      />
      {!collapsed && (
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate">{item.title}</span>
          {item.description && (
            <span className="truncate text-[11px] text-muted-foreground">
              {item.description}
            </span>
          )}
        </div>
      )}
    </>
  );

  const className = cn(
    "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
    collapsed && "justify-center px-2",
    item.disabled && "pointer-events-none opacity-50",
    isActive
      ? "bg-valon-gold/10 text-foreground ring-1 ring-valon-gold/20"
      : "text-muted-foreground hover:bg-muted/80 hover:text-foreground",
  );

  if (item.disabled) {
    return (
      <div className={className} aria-disabled="true">
        {content}
      </div>
    );
  }

  return (
    <Link href={item.href} className={className} onClick={onNavigate}>
      {content}
    </Link>
  );
}

export function SidebarNav({ collapsed, onNavigate }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1 flex-col gap-6 px-3 py-4">
      {mainNavigation.map((group) => (
        <div key={group.label} className="space-y-1">
          {!collapsed && (
            <p className="px-3 text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
              {group.label}
            </p>
          )}
          <div className="space-y-1">
            {group.items.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                isActive={pathname === item.href}
                collapsed={collapsed}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

export function SidebarHeader({ collapsed }: { collapsed?: boolean }) {
  return (
    <div
      className={cn(
        "flex h-16 items-center border-b border-border/60 px-4",
        collapsed && "justify-center px-2",
      )}
    >
      <BrandLogo compact={collapsed} showTagline={!collapsed} />
    </div>
  );
}
