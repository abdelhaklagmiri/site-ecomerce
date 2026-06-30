"use client";

import * as React from "react";
import type { User } from "@supabase/supabase-js";

import { createClient } from "@/lib/supabase/client";
import { hasSupabaseConfig } from "@/lib/config/env";
import type { AuthContextValue } from "@/types/auth";

const AuthContext = React.createContext<AuthContextValue | null>(null);

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export function useAuthState(): AuthContextValue {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (!hasSupabaseConfig()) {
      setIsLoading(false);
      return;
    }

    let isMounted = true;

    async function initAuth() {
      try {
        const supabase = createClient();
        const {
          data: { user: currentUser },
        } = await supabase.auth.getUser();

        if (isMounted) {
          setUser(currentUser);
        }

        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
          if (isMounted) {
            setUser(session?.user ?? null);
          }
        });

        return () => {
          subscription.unsubscribe();
        };
      } catch {
        if (isMounted) {
          setUser(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    const cleanupPromise = initAuth();

    return () => {
      isMounted = false;
      void cleanupPromise;
    };
  }, []);

  const signOut = React.useCallback(async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
  }, []);

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    signOut,
  };
}

export { AuthContext };
