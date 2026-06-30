import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Palette,
  Database,
  Component,
  KeyRound,
  Sparkles,
} from "lucide-react";

import { Brand } from "@/components/common/brand";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { siteConfig } from "@/config/site";

/**
 * Foundation landing page. This is intentionally not the dashboard — it
 * documents the scaffolded foundation so we can verify the design system,
 * dark mode and component primitives without building product pages yet.
 */
const pillars = [
  {
    icon: Layers,
    title: "Modular by design",
    description:
      "Clean separation between app, components, services, hooks, lib, types and utils.",
  },
  {
    icon: Palette,
    title: "Premium design system",
    description:
      "Black, White and Gold #C9A227. Inspired by Stripe, Linear and Notion.",
  },
  {
    icon: ShieldCheck,
    title: "Auth-ready",
    description:
      "Supabase Auth wired through middleware, server and browser clients.",
  },
  {
    icon: Database,
    title: "Scalable schema",
    description:
      "Prisma + Postgres modelling Barbers today, Salons & Pharmacies tomorrow.",
  },
  {
    icon: Component,
    title: "shadcn primitives",
    description:
      "Buttons, cards, dropdowns, sheets, tooltips — all themed for VALON.",
  },
  {
    icon: KeyRound,
    title: "Type-safe everywhere",
    description:
      "TypeScript strict, Zod validation and React Hook Form ready to ship.",
  },
];

export default function FoundationPage() {
  return (
    <div className="relative min-h-svh overflow-hidden bg-background">
      {/* Ambient gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, color-mix(in oklch, #C9A227 22%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%)",
        }}
      />

      {/* Top bar */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Brand size="md" />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" variant="gold">
            <Link href="/dashboard">
              Open CRM
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10 md:pb-24 md:pt-20">
        <div className="flex flex-col items-center text-center">
          <Badge variant="gold" className="mb-5">
            <Sparkles className="mr-1.5 h-3 w-3" />
            Foundation v0.1 · {siteConfig.name}
          </Badge>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            A premium CRM, crafted for{" "}
            <span className="valon-gradient-text">VALON</span>.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            The foundation of a scalable wholesale CRM for barbers across
            Morocco — and, tomorrow, for salons, pharmacies and cosmetic stores.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <Button asChild size="lg" variant="gold">
              <Link href="/dashboard">
                Enter the dashboard
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Pillars */}
        <div className="mx-auto mt-20 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="group/card relative overflow-hidden border-border/70 transition-colors hover:border-[color:var(--valon-gold)]/40"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--valon-gold)]/40 to-transparent opacity-0 transition-opacity group-hover/card:opacity-100"
              />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[color:var(--valon-gold)]/12 text-[color:var(--valon-gold-strong)] dark:text-[color:var(--valon-gold-soft)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-6 py-8 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} VALON · Wholesale CRM</p>
        <p>
          Built with Next.js 15 · Supabase · Prisma · Tailwind · shadcn/ui
        </p>
      </footer>
    </div>
  );
}
