import { NextResponse } from "next/server";

// Password gate removed 2026-07-07 (Niko) — page is public.
export function middleware() {
  return NextResponse.next();
}

export const config = { matcher: [] };
