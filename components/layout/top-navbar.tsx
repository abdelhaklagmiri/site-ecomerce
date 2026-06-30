"use client";

import { LogOut, User } from "lucide-react";

import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/use-auth";
import { APP_NAME } from "@/lib/constants";
import { getInitials } from "@/utils/format";

interface TopNavbarProps {
  title?: string;
  description?: string;
}

export function TopNavbar({ title, description }: TopNavbarProps) {
  const { user, isLoading, isAuthenticated, signOut } = useAuth();

  const displayName =
    user?.user_metadata?.full_name ?? user?.email?.split("@")[0] ?? "User";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <MobileSidebar />
          <div className="min-w-0 md:hidden">
            <p className="truncate text-sm font-semibold tracking-[0.18em] uppercase">
              {APP_NAME}
            </p>
          </div>
          {(title || description) && (
            <div className="hidden min-w-0 md:block">
              {title && (
                <h1 className="truncate text-base font-semibold">{title}</h1>
              )}
              {description && (
                <p className="truncate text-sm text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Separator orientation="vertical" className="hidden h-6 sm:block" />

          {isLoading ? (
            <Skeleton className="size-9 rounded-full" />
          ) : isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="ghost"
                    className="relative size-9 rounded-full p-0"
                    aria-label="Open user menu"
                  />
                }
              >
                <Avatar className="size-9">
                  <AvatarFallback className="bg-valon-gold/15 text-xs font-medium text-valon-gold">
                    {getInitials(displayName)}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{displayName}</p>
                    <p className="text-xs text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>
                  <User className="size-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => void signOut()}>
                  <LogOut className="size-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" size="sm" disabled>
              Sign in
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
