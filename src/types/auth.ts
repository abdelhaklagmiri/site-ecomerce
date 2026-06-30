/**
 * User & session types. Decoupled from Supabase / Prisma to keep the
 * presentation layer transport-agnostic.
 */

export type AppRole = "OWNER" | "ADMIN" | "STAFF" | "VIEWER";

export interface SessionUser {
  id: string;
  email: string;
  fullName?: string | null;
  avatarUrl?: string | null;
  role: AppRole;
}
