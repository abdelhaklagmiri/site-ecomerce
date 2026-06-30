import { Sidebar } from "@/components/layout/sidebar";
import { TopNavbar } from "@/components/layout/top-navbar";
import { cn } from "@/lib/utils";

interface AppShellProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export function AppShell({
  children,
  title,
  description,
  className,
}: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopNavbar title={title} description={description} />
        <main className={cn("flex-1 px-4 py-6 md:px-8 md:py-8", className)}>
          {children}
        </main>
      </div>
    </div>
  );
}
