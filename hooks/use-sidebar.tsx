"use client";

import * as React from "react";

interface SidebarContextValue {
  isOpen: boolean;
  isCollapsed: boolean;
  setIsOpen: (open: boolean) => void;
  setIsCollapsed: (collapsed: boolean) => void;
  toggle: () => void;
  toggleCollapsed: () => void;
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const value = React.useMemo(
    () => ({
      isOpen,
      isCollapsed,
      setIsOpen,
      setIsCollapsed,
      toggle: () => setIsOpen((prev) => !prev),
      toggleCollapsed: () => setIsCollapsed((prev) => !prev),
    }),
    [isOpen, isCollapsed],
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = React.useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}
