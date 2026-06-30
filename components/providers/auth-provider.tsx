"use client";

import * as React from "react";

import { AuthContext, useAuthState } from "@/hooks/use-auth";
import { hasSupabaseConfig } from "@/lib/config/env";
import type { AuthContextValue } from "@/types/auth";

const unconfiguredAuthState: AuthContextValue = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  signOut: async () => undefined,
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const authState = useAuthState();
  const value = hasSupabaseConfig() ? authState : unconfiguredAuthState;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
