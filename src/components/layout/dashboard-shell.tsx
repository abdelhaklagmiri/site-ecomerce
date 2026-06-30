"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNavbar } from "@/components/layout/top-navbar";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

const STORAGE_KEY = "valon:sidebar-collapsed";

interface DashboardShellProps {
  children: React.ReactNode;
}

/**
 * Reusable dashboard layout shell.
 * - Persistent collapsible sidebar (desktop)
 * - Drawer-based sidebar (mobile, via Sheet)
 * - Sticky top navbar
 * - Scrollable, centered main area
 */
export function DashboardShell({ children }: DashboardShellProps) {
  const [collapsed, setCollapsed] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored != null) setCollapsed(stored === "1");
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const toggle = React.useCallback(() => {
    setCollapsed((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return (
    <div className="flex min-h-svh w-full bg-background">
      {/* Desktop sidebar */}
      <div className="hidden md:flex">
        <Sidebar collapsed={collapsed} onToggle={toggle} />
      </div>

      {/* Mobile sidebar */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <Sidebar
            collapsed={false}
            onToggle={() => setMobileOpen(false)}
            hideCollapseToggle
            className="w-full border-r-0"
          />
        </SheetContent>
      </Sheet>

      {/* Content column */}
      <div className={cn("flex min-w-0 flex-1 flex-col")}>
        <TopNavbar onMobileMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1 overflow-x-hidden">
          <div className="mx-auto w-full max-w-7xl px-4 py-6 md:px-8 md:py-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
