# VALON CRM

Production-ready wholesale CRM foundation for managing barbers and future partner types (salons, pharmacies, cosmetic stores) in Morocco.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui**
- **Supabase** (authentication)
- **Prisma** (database ORM)
- **React Hook Form + Zod**
- **Lucide Icons**
- **Recharts** (ready for statistics modules)
- **next-themes** (dark mode)

## Project Structure

```
app/
  (auth)/          # Authentication route group
  (dashboard)/     # Main application shell
components/
  auth/            # Auth UI building blocks
  layout/          # Sidebar, navbar, app shell
  providers/       # Theme, auth, and app providers
  theme/           # Theme toggle
  ui/              # shadcn/ui primitives
hooks/             # Shared React hooks
lib/
  auth/            # Auth helpers and route guards
  config/          # Environment validation
  supabase/        # Supabase clients
services/          # Domain service layer
types/             # Shared TypeScript types
utils/             # Formatting and validation helpers
prisma/            # Database schema
```

## Getting Started

1. Copy environment variables:

```bash
cp .env.example .env.local
```

2. Install dependencies:

```bash
npm install
```

3. Generate Prisma client:

```bash
npx prisma generate
```

4. Start the development server:

```bash
npm run dev
```

## Design System

- **Black** `#0A0A0A`
- **White** `#FFFFFF`
- **Gold** `#C9A227`

Premium, minimal aesthetic inspired by Stripe, Linear, and Notion.

## Foundation Status

- [x] Modular folder architecture
- [x] Responsive sidebar + top navbar
- [x] Dark mode support
- [x] Supabase auth structure (middleware, providers, session helpers)
- [x] Prisma schema scaffolding
- [x] Reusable login form component (no auth pages yet)
- [ ] Feature pages (partners, orders, products, sales, statistics)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push Prisma schema to database |
