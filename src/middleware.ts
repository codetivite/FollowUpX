// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // 1. Check for existing theme cookie
  const theme = request.cookies.get('theme')?.value;
  
  // 2. If no cookie, check system preference
  if (!theme) {
    const prefersDark = request.headers.get('sec-ch-prefers-color-scheme') === 'dark';
    response.cookies.set('theme', prefersDark ? 'dark' : 'light');
  }
  
  // 3. Always add the theme class if cookie exists
  if (theme) {
    response.headers.set('x-theme', theme);
  }
  
  return response;
}

// Applies to all routes (optional: filter specific paths)
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};