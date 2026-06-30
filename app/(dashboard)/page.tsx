import { Sparkles } from "lucide-react";

import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-8 md:p-12">
      <div className="pointer-events-none absolute inset-0 valon-gradient opacity-70" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-start gap-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-valon-gold/20 bg-valon-gold/10 px-3 py-1 text-xs font-medium tracking-wide text-valon-gold uppercase">
          <Sparkles className="size-3.5" />
          Foundation Ready
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Welcome to {APP_NAME}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {APP_DESCRIPTION} The application shell, authentication structure,
            and design system are in place. Feature pages for partners, orders,
            products, sales, and statistics will be added next.
          </p>
        </div>

        <div className="grid w-full gap-3 sm:grid-cols-2">
          {[
            "Responsive sidebar and top navigation",
            "Supabase authentication structure",
            "Dark mode with VALON gold palette",
            "Modular services, hooks, and types",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border/60 bg-background/70 px-4 py-3 text-sm text-muted-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
