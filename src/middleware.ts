// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLanguages = ["es", "en"];
const defaultLanguage = "es";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Excluir rutas estáticas de public y Next.js
  if (
    pathname.startsWith("/_next") || // Archivos de Next.js
    pathname.startsWith("/favicon.ico") || // Favicon
    pathname.startsWith("/robots.txt") || // Robots.txt
    pathname.startsWith("/scripts") || // Scripts
    pathname.startsWith("/images") || // Imágenes
    pathname.startsWith("/api") // Rutas de API
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const locale = segments[1];

  // Detecta si el primer segmento de la URL es un idioma soportado
  if (!supportedLanguages.includes(locale)) {
    request.nextUrl.pathname = `/${defaultLanguage}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // Proteger rutas específicas a partir del token
  const isAuthenticated = request.cookies.get("authToken");
  if (!isAuthenticated && pathname.startsWith(`/${locale}/dashboard`)) {
    return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  }

  return NextResponse.next();
}

// Configuración del middleware
export const config = {
  matcher: [
    "/((?!_next|favicon.ico|robots.txt|scripts|images|styles|fonts|services|api).*)", // Excluir rutas estáticas
  ],
};
