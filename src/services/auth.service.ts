/**
 * Authentication service.
 *
 * The CRM uses Supabase Auth (email/password + magic link ready).
 * This module wraps Supabase calls so route handlers, server actions
 * and React hooks share a single, typed surface.
 *
 * Pages aren't built yet — these functions are the contract that the
 * upcoming /auth/login, /auth/register and /auth/forgot-password pages
 * will call.
 */

import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { SessionUser } from "@/types/auth";
import type {
  ForgotPasswordInput,
  LoginInput,
  RegisterInput,
} from "@/lib/validations/auth";

// ---- Browser ---------------------------------------------------------------

export async function signInWithPassword(input: LoginInput) {
  const supabase = createSupabaseBrowserClient();
  return supabase.auth.signInWithPassword({
    email: input.email,
    password: input.password,
  });
}

export async function signUpWithPassword(input: RegisterInput) {
  const supabase = createSupabaseBrowserClient();
  return supabase.auth.signUp({
    email: input.email,
    password: input.password,
    options: {
      data: { full_name: input.fullName },
    },
  });
}

export async function requestPasswordReset(input: ForgotPasswordInput) {
  const supabase = createSupabaseBrowserClient();
  return supabase.auth.resetPasswordForEmail(input.email);
}

export async function signOut() {
  const supabase = createSupabaseBrowserClient();
  return supabase.auth.signOut();
}

// ---- Server ----------------------------------------------------------------

/**
 * Fetch the currently authenticated user from the server. Returns `null` if
 * the visitor is anonymous. Safe to call from RSC, Route Handlers and Actions.
 */
export async function getServerUser(): Promise<SessionUser | null> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  return {
    id: user.id,
    email: user.email ?? "",
    fullName: (user.user_metadata?.full_name as string | undefined) ?? null,
    avatarUrl: (user.user_metadata?.avatar_url as string | undefined) ?? null,
    role: "OWNER",
  };
}
