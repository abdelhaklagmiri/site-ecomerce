import { Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Placeholder /dashboard route so the dashboard shell can be previewed and
 * the navigation links don't 404. Real dashboard widgets will replace this
 * page once data services are implemented.
 */
export default function DashboardPlaceholderPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="gold">
            <Sparkles className="mr-1.5 h-3 w-3" />
            Foundation ready
          </Badge>
          <span className="text-xs text-muted-foreground">v0.1</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Welcome to <span className="valon-gradient-text">VALON CRM</span>
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          The dashboard shell, sidebar, navbar, theming and authentication
          scaffolding are in place. Product modules — Partners, Orders,
          Products, Sales and Statistics — will be built on top of this
          foundation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Partners", body: "Manage barbers today; salons, pharmacies and cosmetic stores tomorrow." },
          { title: "Orders & Sales", body: "Track every order from draft to fulfilment, with payment status and totals in MAD." },
          { title: "Products", body: "Catalogue, pricing in cents, stock and reorder thresholds — multi-vertical ready." },
          { title: "Statistics", body: "KPIs, revenue timeseries and product mix via Recharts." },
          { title: "Authentication", body: "Supabase email/password with middleware-protected routes." },
          { title: "Design system", body: "Black, White, Gold (#C9A227). Dark mode, responsive, accessible." },
        ].map((card) => (
          <Card key={card.title}>
            <CardHeader>
              <CardTitle className="text-base">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{card.body}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
