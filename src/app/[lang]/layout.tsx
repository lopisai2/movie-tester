import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import { LayoutTransition } from "./layoutTransition";
import PublicLayoutWrapper from "@/_components/public/PublicLayoutWrapper";

export const metadata: Metadata = {
  title: "Movie Tester",
  description: "Web hecha con fines de desafio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "",
    title: "Topia Web",
    description: "Web hecha con fines de desafio",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Topia",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-content",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ id: string; lang: string }>;
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={`antialiased public-container`}>
        <PublicLayoutWrapper params={await params}>
          <LayoutTransition
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            params={await params}
          >
            {children}
          </LayoutTransition>
        </PublicLayoutWrapper>
      </body>
    </html>
  );
}
