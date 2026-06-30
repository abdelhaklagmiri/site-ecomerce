import { NextResponse, type NextRequest } from "next/server";

import { updateSupabaseSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return (await updateSupabaseSession(request)) ?? NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run on all paths except:
     * - _next/static, _next/image, favicon
     * - Common static asset extensions
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico)$).*)",
  ],
};
