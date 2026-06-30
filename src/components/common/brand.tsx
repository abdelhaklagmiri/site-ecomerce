import * as React from "react";

import { cn } from "@/lib/utils";

interface BrandProps extends React.HTMLAttributes<HTMLDivElement> {
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}

/**
 * VALON wordmark + monogram. Renders pure SVG so it scales perfectly.
 * Stripe/Linear style: a minimal "V" inside a soft gold ring.
 */
export function Brand({
  showWordmark = true,
  size = "md",
  className,
  ...props
}: BrandProps) {
  const dim = size === "sm" ? 22 : size === "lg" ? 36 : 28;
  return (
    <div className={cn("flex items-center gap-2.5", className)} {...props}>
      <span
        aria-hidden
        className="relative inline-flex items-center justify-center rounded-md"
        style={{ width: dim, height: dim }}
      >
        <svg
          viewBox="0 0 32 32"
          width={dim}
          height={dim}
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_1px_0_rgba(0,0,0,0.05)]"
        >
          <defs>
            <linearGradient id="valon-mark" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#1A1A1A" />
              <stop offset="1" stopColor="#000000" />
            </linearGradient>
          </defs>
          <rect x="0.5" y="0.5" width="31" height="31" rx="8" fill="url(#valon-mark)" />
          <rect x="0.5" y="0.5" width="31" height="31" rx="8" fill="none" stroke="#C9A227" strokeOpacity="0.55" />
          <path
            d="M8.5 9.5 L15.5 22.5 L16.5 22.5 L23.5 9.5"
            fill="none"
            stroke="#C9A227"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showWordmark ? (
        <span
          className={cn(
            "font-semibold tracking-[0.18em]",
            size === "sm" && "text-xs",
            size === "md" && "text-sm",
            size === "lg" && "text-base",
          )}
        >
          VALON
        </span>
      ) : null}
    </div>
  );
}
