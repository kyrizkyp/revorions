import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "id"];
const defaultLocale = "en";
const cookieName = "i18nlang";
const staticPaths = ["/favicon.ico", "/logo/", "/images/"];
const staticFileExtensions = [".ico", ".jpg", ".jpeg", ".png", ".svg", ".webp", ".woff", ".woff2", ".ttf", ".css", ".js"];

function getLocale(request: NextRequest): string {
  if (request.cookies.has(cookieName))
    return request.cookies.get(cookieName)!.value;

  const acceptLang = request.headers.get("Accept-Language");
  if (!acceptLang) return defaultLocale;

  const headers = { "accept-language": acceptLang };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Lewati aset statis dan berkas yang tidak perlu diproses oleh middleware
  if (
    staticPaths.some((path) => pathname.startsWith(path)) ||
    staticFileExtensions.some((ext) => pathname.endsWith(ext)) ||
    pathname.startsWith("/_next")
  ) {
    const response = NextResponse.next();
    // Tambahkan header cache untuk berkas statis
    if (staticFileExtensions.some((ext) => pathname.endsWith(ext))) {
      response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    }
    return response;
  }

  // Periksa apakah pathname sudah mengandung locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect jika tidak ada locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  const response = NextResponse.redirect(request.nextUrl);

  // Setel cookie locale jika berbeda
  if (request.cookies.get(cookieName)?.value !== locale) {
    response.cookies.set(cookieName, locale);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next).*)",
  ],
};
