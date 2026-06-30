import * as React from "react";
import Link from "next/link";

import { Brand } from "@/components/common/brand";
import { ThemeToggle } from "@/components/common/theme-toggle";

interface AuthShellProps {
  title: string;
  subtitle?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Reusable shell for all auth pages (login / register / forgot password).
 * Split layout: brand panel + form panel. Premium, minimal, on-brand.
 */
export function AuthShell({ title, subtitle, footer, children }: AuthShellProps) {
  return (
    <div className="grid min-h-svh w-full grid-cols-1 lg:grid-cols-2">
      {/* Brand / hero panel */}
      <aside className="relative hidden overflow-hidden bg-black text-white lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(800px 400px at 20% 10%, #C9A227 0%, transparent 60%), radial-gradient(600px 300px at 80% 80%, #C9A227 0%, transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <div className="relative z-10">
          <Link href="/" className="inline-block">
            <Brand size="lg" />
          </Link>
        </div>

        <div className="relative z-10 max-w-md space-y-4">
          <h2 className="text-3xl font-semibold leading-tight">
            Premium wholesale, <span className="valon-gradient-text">orchestrated</span>.
          </h2>
          <p className="text-sm leading-relaxed text-white/70">
            VALON CRM brings every barber partner, order and product line into
            one elegant workspace — designed for the standards of Morocco&apos;s
            finest professionals.
          </p>
        </div>

        <p className="relative z-10 text-xs text-white/40">
          © {new Date().getFullYear()} VALON. All rights reserved.
        </p>
      </aside>

      {/* Form panel */}
      <section className="relative flex min-h-svh items-center justify-center px-4 py-10 md:px-8">
        <div className="absolute right-4 top-4">
          <ThemeToggle />
        </div>

        <div className="lg:hidden absolute left-4 top-4">
          <Brand size="md" />
        </div>

        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-1.5">
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            {subtitle ? (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            ) : null}
          </div>
          {children}
          {footer ? (
            <div className="pt-2 text-center text-sm text-muted-foreground">
              {footer}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
