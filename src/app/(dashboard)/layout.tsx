import { DashboardShell } from "@/components/layout/dashboard-shell";

/**
 * Route group layout for every authenticated CRM page. Wraps children in the
 * Sidebar + TopNavbar shell. Individual pages (Partners, Orders, Products,
 * Sales, Statistics) will be added later under this group.
 */
export default function DashboardGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
