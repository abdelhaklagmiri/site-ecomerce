import { AUTH_ROUTES, PROTECTED_ROUTE_PREFIXES, ROUTES } from "@/lib/constants";

export function isAuthRoute(pathname: string): boolean {
  return AUTH_ROUTES.some((route) => pathname.startsWith(route));
}

export function isProtectedRoute(pathname: string): boolean {
  return PROTECTED_ROUTE_PREFIXES.some((route) => pathname.startsWith(route));
}

export function getAuthRedirectPath(pathname: string): string {
  if (isAuthRoute(pathname)) {
    return ROUTES.home;
  }

  return ROUTES.login;
}
