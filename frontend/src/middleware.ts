import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n } from './i18n.config';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { getUserCookies } from './cookies/cookies';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  const locale = getLocale(request);

  console.log('token:', !request.cookies.get('user_data'));
  console.log('Pathname:', pathname);
  console.log('Locale:', locale);

  // Define public and private paths
  const publicPaths = [`/${locale}/login`]; // Public paths accessible to all
  const privatePaths = [`/${locale}/sales-representative`, `/${locale}/`]; // Private paths accessible only to authenticated users

  // Check if the user is not authenticated and trying to access private paths
  if (
    !request.cookies.get('user_data') &&
    !publicPaths.includes(pathname)
    // &&
    // !publicPaths.includes(pathname)
  ) {
    // return NextResponse.redirect(new URL(`/${locale}/login`));
    return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  }

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  }

  // Check if the user is authenticated and trying to access public paths
  if (request.cookies.get('user_data') && publicPaths.includes(pathname)) {
    
    // return NextResponse.redirect('en/'); // Redirect authenticated user to dashboard
    return NextResponse.redirect(new URL(`/${locale}/`, request.url));
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
