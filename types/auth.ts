export type { User, Session } from "@supabase/supabase-js";

export interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: import("@supabase/supabase-js").User | null;
}

export interface AuthContextValue extends AuthState {
  signOut: () => Promise<void>;
}
