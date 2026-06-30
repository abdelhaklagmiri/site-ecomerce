# VALON CRM

Premium wholesale CRM for **VALON** — built to manage barbers across Morocco,
designed to scale to beauty salons, pharmacies and cosmetic stores.

> Status: **Foundation v0.1**. This commit ships the architecture, design
> system, layout shell and authentication scaffolding. Product modules
> (Partners, Orders, Products, Sales, Statistics) are next.

---

## Tech stack

| Layer            | Choice                                                 |
| ---------------- | ------------------------------------------------------ |
| Framework        | Next.js 15 (App Router) · React 19 · TypeScript strict |
| Styling          | Tailwind CSS v4 · shadcn/ui · `next-themes`            |
| UI primitives    | Radix UI · Lucide Icons                                |
| Forms            | React Hook Form · Zod                                  |
| Charts           | Recharts                                               |
| Auth             | Supabase Auth (email/password) via `@supabase/ssr`     |
| Database / ORM   | Postgres (Supabase) · Prisma                           |
| Theming          | Black · White · Gold `#C9A227`                         |

## Folder structure

```
src/
├─ app/                # App Router (root + (dashboard) route group)
├─ components/
│  ├─ ui/              # shadcn primitives (button, card, dropdown, sheet…)
│  ├─ layout/          # Sidebar, TopNavbar, DashboardShell
│  ├─ auth/            # AuthShell
│  ├─ common/          # Brand, ThemeToggle
│  └─ providers/       # AppProviders (theme + tooltip)
├─ config/             # siteConfig, dashboardNav, verticals
├─ hooks/              # useDebouncedValue, useMediaQuery
├─ lib/                # utils, env, prisma, supabase/, validations/
├─ services/           # auth · partner · order · product · sales · stats
├─ styles/             # globals.css (design tokens, dark mode)
├─ types/              # SessionUser, common types
├─ utils/              # formatMoney, formatDate
└─ middleware.ts       # Supabase session refresh + route protection
prisma/
└─ schema.prisma       # Multi-vertical schema (Partners, Products, Orders…)
```

## Local development

```bash
cp .env.example .env.local   # fill in Supabase + Database URLs
npm install
npm run dev                  # http://localhost:3000
```

Useful scripts:

| Script                  | Purpose                                  |
| ----------------------- | ---------------------------------------- |
| `npm run dev`           | Start the Next.js dev server             |
| `npm run build`         | Production build                         |
| `npm run start`         | Run the production build                 |
| `npm run lint`          | ESLint (`next/core-web-vitals`)          |
| `npm run typecheck`     | `tsc --noEmit` strict typecheck          |
| `npm run prisma:generate` | Generate the Prisma client             |
| `npm run prisma:migrate`  | Run Prisma migrations in development   |
| `npm run prisma:studio`   | Open Prisma Studio                     |

## Design system

The palette and tokens live in [`src/styles/globals.css`](src/styles/globals.css)
and follow shadcn's `cssVariables` convention so primitives stay theme-aware
in both light and dark mode.

- **Brand gold** — `#C9A227`
- **Black** — pure `oklch(0.145 0 0)` for primary surfaces in light mode
- **White** — `oklch(1 0 0)` for cards & popovers
- **Inter** — typography, with rendering tuned for premium feel

## What's wired

- Reusable **DashboardShell** with collapsible Sidebar (persisted) + sticky TopNavbar.
- **Mobile drawer** sidebar via Radix Dialog (Sheet).
- **Dark mode** via `next-themes`, tri-state toggle (Light / Dark / System).
- **AuthShell** for upcoming login / register / reset pages.
- **Supabase** browser, server and middleware clients.
- **Prisma schema** modelling Partners (multi-vertical), Products, Orders,
  Order Items and Payments with MAD pricing in cents.
- **Services layer** exposing typed contracts for the upcoming pages.

## Roadmap (foundation → product)

1. `/auth/login`, `/auth/register`, `/auth/forgot-password`
2. `/partners` — Barbers CRUD with table + filters
3. `/products` — catalogue with stock tracking
4. `/orders` — lifecycle DRAFT → FULFILLED with payments
5. `/sales` — sales ledger
6. `/statistics` — KPIs + Recharts dashboard
7. Multi-vertical activation (Salons, Pharmacies, Cosmetic Stores)
