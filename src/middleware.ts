import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Redirect root to /en
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }
  
  // Redirect any /he routes to /en
  if (pathname.startsWith('/he')) {
    const newPath = pathname.replace('/he', '/en');
    return NextResponse.redirect(new URL(newPath, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/(he|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};