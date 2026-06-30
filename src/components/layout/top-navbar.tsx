"use client";

import * as React from "react";
import Link from "next/link";
import { Bell, ChevronDown, LogOut, Menu, Search, Settings, User } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Brand } from "@/components/common/brand";

interface TopNavbarProps {
  onMobileMenuClick: () => void;
  className?: string;
}

/**
 * VALON CRM top navigation bar.
 * - Global search (cmd+k placeholder)
 * - Notifications
 * - Theme toggle
 * - User menu (Supabase auth wiring lives in `/services/auth`)
 */
export function TopNavbar({ onMobileMenuClick, className }: TopNavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-30 flex h-16 items-center gap-2 border-b border-border bg-background/80 px-3 backdrop-blur-md md:px-6",
        className,
      )}
    >
      {/* Mobile: open sidebar */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={onMobileMenuClick}
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Mobile brand */}
      <Link href="/dashboard" className="md:hidden">
        <Brand showWordmark size="sm" />
      </Link>

      {/* Search (desktop) */}
      <div className="ml-2 hidden flex-1 max-w-md md:flex">
        <div className="relative w-full">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search partners, orders, products…"
            className="h-9 pl-9 pr-16"
          />
          <kbd className="pointer-events-none absolute right-2 top-1/2 hidden h-5 -translate-y-1/2 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
            <span className="text-[10px]">⌘</span>K
          </kbd>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-1.5">
        <Button
          variant="ghost"
          size="icon"
          className="relative text-muted-foreground hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[color:var(--valon-gold)]" />
        </Button>

        <ThemeToggle />

        <Separator orientation="vertical" className="mx-1 h-6" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-9 gap-2 pl-1.5 pr-2 hover:bg-accent/10"
            >
              <Avatar className="h-7 w-7 ring-1 ring-border">
                <AvatarFallback className="bg-[color:var(--valon-gold)]/15 text-[color:var(--valon-gold-strong)] dark:text-[color:var(--valon-gold-soft)]">
                  VA
                </AvatarFallback>
              </Avatar>
              <div className="hidden flex-col items-start leading-tight lg:flex">
                <span className="text-sm font-medium">VALON Admin</span>
                <span className="text-[11px] text-muted-foreground">
                  admin@valon.ma
                </span>
              </div>
              <ChevronDown className="hidden h-4 w-4 text-muted-foreground lg:block" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="flex items-center justify-between">
              <span>Account</span>
              <Badge variant="gold">Owner</Badge>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive focus:text-destructive">
              <LogOut className="h-4 w-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
