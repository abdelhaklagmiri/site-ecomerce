"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

import { TooltipProvider } from "@/components/ui/tooltip";

/**
 * Application-wide client providers. Wraps every page rendered through the
 * root layout. Add new providers (Query, Toast, etc.) here as the app grows.
 */
export function AppProviders({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <TooltipProvider delayDuration={120}>{children}</TooltipProvider>
    </NextThemesProvider>
  );
}
