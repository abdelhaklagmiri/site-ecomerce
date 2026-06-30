import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Brand } from "@/components/common/brand";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <Brand size="lg" />
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--valon-gold-strong)] dark:text-[color:var(--valon-gold-soft)]">
          404 · Not found
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          This page hasn&apos;t been built yet.
        </h1>
        <p className="max-w-md text-sm text-muted-foreground">
          The VALON CRM foundation is in place — product pages are coming next.
        </p>
      </div>
      <Button asChild variant="gold">
        <Link href="/">Back home</Link>
      </Button>
    </main>
  );
}
