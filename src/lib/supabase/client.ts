"use client";

import { createBrowserClient } from "@supabase/ssr";

import { env } from "@/lib/env";

/**
 * Supabase client for the browser (Client Components, hooks).
 * Re-instantiated on every call by design — the underlying client manages
 * its own singleton state internally.
 */
export function createSupabaseBrowserClient() {
  return createBrowserClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);
}
