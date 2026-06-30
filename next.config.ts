import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // typedRoutes is intentionally disabled while the foundation is in place:
  // the sidebar references future routes (/partners, /orders, /products,
  // /sales, /statistics, /settings, /support) that are not built yet.
  typedRoutes: false,
};

export default nextConfig;
