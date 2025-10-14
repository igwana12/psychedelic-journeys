import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if user has valid session cookie
  const isAuthenticated = request.cookies.get('site-auth')?.value === 'authenticated';

  // If not authenticated, redirect to password page
  if (!isAuthenticated) {
    // Allow access to the password check API and password page
    if (request.nextUrl.pathname === '/api/check-password' || request.nextUrl.pathname === '/password') {
      return NextResponse.next();
    }

    // Redirect to password page
    return NextResponse.redirect(new URL('/password', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - password (password page itself)
     * - api/check-password (password check endpoint)
     */
    '/((?!_next/static|_next/image|favicon.ico|password|api/check-password).*)',
  ],
};
