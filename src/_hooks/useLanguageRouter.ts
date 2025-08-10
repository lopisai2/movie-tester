"use client";
import { useEffect } from "react";
import { useRouter } from "next/compat/router";

const supportedLanguages = ["es", "en"];
const defaultLanguage = "es";

export function useLanguageRedirect() {
  const router = useRouter();
  useEffect(() => {
    if (!router) return;
    const { pathname } = router;
    const segments = pathname.split("/");
    const locale = segments[1];

    if (!supportedLanguages.includes(locale)) {
      router!.replace(`/${defaultLanguage}${pathname}`);
    }
  }, [router]);
}
