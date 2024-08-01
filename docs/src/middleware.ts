import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, locale } = request.nextUrl;

  const nextUrl = request.nextUrl.clone();

  if (pathname === '/mobile-demo') {
    return NextResponse.next();
  }

  nextUrl.pathname = `${locale}/_virtual/${locale}${pathname}`;

  return NextResponse.rewrite(nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico).*)', '/'],
};
