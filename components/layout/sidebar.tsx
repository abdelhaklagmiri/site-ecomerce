"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { SidebarHeader, SidebarNav } from "@/components/layout/sidebar-nav";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/hooks/use-sidebar";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const { isCollapsed, toggleCollapsed } = useSidebar();

  return (
    <aside
      className={cn(
        "hidden h-full flex-col border-r border-border/60 bg-sidebar/80 backdrop-blur-xl md:flex",
        isCollapsed ? "w-[72px]" : "w-72",
        className,
      )}
    >
      <SidebarHeader collapsed={isCollapsed} />

      <ScrollArea className="flex-1">
        <SidebarNav collapsed={isCollapsed} />
      </ScrollArea>

      <div className="border-t border-border/60 p-3">
        <Button
          variant="ghost"
          size={isCollapsed ? "icon" : "default"}
          className={cn("w-full", isCollapsed && "size-9")}
          onClick={toggleCollapsed}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <PanelLeftOpen className="size-4" />
          ) : (
            <>
              <PanelLeftClose className="size-4" />
              <span>Collapse</span>
            </>
          )}
        </Button>
      </div>
    </aside>
  );
}

export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col">
      <SidebarHeader />
      <Separator />
      <ScrollArea className="flex-1">
        <SidebarNav onNavigate={onNavigate} />
      </ScrollArea>
    </div>
  );
}
