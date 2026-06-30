import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  compact?: boolean;
}

export function BrandLogo({
  className,
  showTagline = false,
  compact = false,
}: BrandLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl border border-valon-gold/20 bg-valon-gold/10",
          compact ? "size-8" : "size-10",
        )}
      >
        <span
          className={cn(
            "font-semibold tracking-tight text-valon-gold",
            compact ? "text-sm" : "text-base",
          )}
        >
          V
        </span>
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-valon-gold/10" />
      </div>

      {!compact && (
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-[0.2em] text-foreground">
            {APP_NAME}
          </span>
          {showTagline && (
            <span className="text-xs text-muted-foreground">
              Wholesale CRM
            </span>
          )}
        </div>
      )}
    </div>
  );
}
