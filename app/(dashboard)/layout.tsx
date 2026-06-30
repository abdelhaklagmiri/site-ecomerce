import { AppShell } from "@/components/layout/app-shell";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell
      title={APP_NAME}
      description={APP_DESCRIPTION}
    >
      {children}
    </AppShell>
  );
}
