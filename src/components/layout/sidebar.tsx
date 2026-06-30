"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronsLeft, ChevronsRight, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { dashboardNav, siteConfig } from "@/config/site";
import { Brand } from "@/components/common/brand";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  className?: string;
  /** When true, hides the collapse toggle (e.g. inside a mobile sheet). */
  hideCollapseToggle?: boolean;
}

/**
 * VALON CRM primary sidebar.
 * - Collapsible to icon-only mode (Linear style).
 * - Section labels, grouped items, hover/active states.
 * - Fully keyboard + screen-reader friendly.
 */
export function Sidebar({
  collapsed,
  onToggle,
  className,
  hideCollapseToggle,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      data-collapsed={collapsed}
      className={cn(
        "group/sidebar flex h-full flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground",
        "transition-[width] duration-200 ease-out",
        collapsed ? "w-[68px]" : "w-[248px]",
        className,
      )}
    >
      {/* Brand */}
      <div
        className={cn(
          "flex h-16 items-center border-b border-sidebar-border px-4",
          collapsed ? "justify-center px-2" : "justify-between",
        )}
      >
        <Link href="/dashboard" className="flex items-center gap-2">
          <Brand showWordmark={!collapsed} size="md" />
        </Link>
        {!collapsed && !hideCollapseToggle ? (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground"
            onClick={onToggle}
            aria-label="Collapse sidebar"
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
        ) : null}
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-2 py-3">
        <nav className="flex flex-col gap-4">
          {dashboardNav.map((section, idx) => (
            <div key={section.title ?? idx} className="flex flex-col gap-1">
              {section.title && !collapsed ? (
                <p className="px-3 pb-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/80">
                  {section.title}
                </p>
              ) : null}
              {section.items.map((item) => {
                const Icon = item.icon;
                const active =
                  pathname === item.href ||
                  pathname?.startsWith(item.href + "/");

                const content = (
                  <Link
                    href={item.href}
                    aria-disabled={item.disabled}
                    onClick={(e) => item.disabled && e.preventDefault()}
                    className={cn(
                      "group/nav relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                      active &&
                        "bg-sidebar-accent text-sidebar-accent-foreground",
                      item.disabled && "cursor-not-allowed opacity-50",
                      collapsed && "justify-center px-0",
                    )}
                  >
                    {active ? (
                      <span
                        aria-hidden
                        className="absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-r-full bg-[color:var(--valon-gold)]"
                      />
                    ) : null}
                    <Icon
                      className={cn(
                        "h-4 w-4 shrink-0",
                        active
                          ? "text-[color:var(--valon-gold)]"
                          : "text-muted-foreground group-hover/nav:text-foreground",
                      )}
                    />
                    {!collapsed ? (
                      <>
                        <span className="truncate">{item.label}</span>
                        {item.badge ? (
                          <Badge variant="gold" className="ml-auto">
                            {item.badge}
                          </Badge>
                        ) : null}
                      </>
                    ) : null}
                  </Link>
                );

                return collapsed ? (
                  <Tooltip key={item.href}>
                    <TooltipTrigger asChild>{content}</TooltipTrigger>
                    <TooltipContent side="right">{item.label}</TooltipContent>
                  </Tooltip>
                ) : (
                  <React.Fragment key={item.href}>{content}</React.Fragment>
                );
              })}
            </div>
          ))}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="mt-auto border-t border-sidebar-border p-3">
        {!collapsed ? (
          <div className="rounded-lg border border-sidebar-border bg-card/40 p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[color:var(--valon-gold)]/15">
                <Sparkles className="h-3.5 w-3.5 text-[color:var(--valon-gold-strong)] dark:text-[color:var(--valon-gold-soft)]" />
              </div>
              <div>
                <p className="text-xs font-semibold">{siteConfig.shortName}</p>
                <p className="text-[11px] text-muted-foreground">
                  Wholesale Operations
                </p>
              </div>
            </div>
            <Separator className="my-3 bg-sidebar-border" />
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              Manage partners, orders, products & sales across Morocco from one
              place.
            </p>
          </div>
        ) : (
          !hideCollapseToggle && (
            <Button
              variant="ghost"
              size="icon"
              className="w-full text-muted-foreground"
              onClick={onToggle}
              aria-label="Expand sidebar"
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          )
        )}
      </div>
    </aside>
  );
}
