import { cookies } from "next/headers";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

import { env } from "@/lib/env";

interface CookieToSet {
  name: string;
  value: string;
  options?: CookieOptions;
}

/**
 * Supabase client for the Next.js App Router server runtime (RSC, Route
 * Handlers, Server Actions). Reads & writes the auth cookie via `next/headers`.
 */
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: CookieToSet[]) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // The `setAll` method was called from a Server Component. Safe to
          // ignore when middleware refreshes user sessions in parallel.
        }
      },
    },
  });
}
