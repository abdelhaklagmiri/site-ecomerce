/**
 * Centralised, type-safe access to runtime environment variables.
 *
 * Keeps the rest of the app free of `process.env` access. We never throw at
 * module-load time so the foundation can boot before Supabase / Database
 * secrets are wired up; consumers should check `isSupabaseConfigured` /
 * `isDatabaseConfigured` before reaching out to external services.
 */
export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME ?? "VALON CRM",

  // Supabase
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",

  // Database (server only)
  DATABASE_URL: process.env.DATABASE_URL ?? "",
  DIRECT_URL: process.env.DIRECT_URL ?? "",
} as const;

export const isSupabaseConfigured = Boolean(
  env.SUPABASE_URL && env.SUPABASE_ANON_KEY,
);

export const isDatabaseConfigured = Boolean(env.DATABASE_URL);

/**
 * Throw a clear, actionable error when a secret is required at runtime
 * (e.g. inside a service method) but isn't configured.
 */
export function requireEnv(name: keyof typeof env): string {
  const value = env[name];
  if (!value) {
    throw new Error(
      `[VALON] Missing required env variable: ${name}. Add it to .env.local — see .env.example.`,
    );
  }
  return value;
}
