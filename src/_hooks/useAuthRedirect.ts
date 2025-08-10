"use client";
import { useEffect } from "react";
import { useRouter } from "next/compat/router";

export function useAuthRedirect() {
  const router = useRouter();

  useEffect(() => {
    if (!router) return;
    const { pathname } = router;
    const isAuthenticated = false;

    if (!isAuthenticated && pathname.includes("/dashboard")) {
      const locale = pathname.split("/")[1];
      router?.replace(`/${locale}/login`);
    }
  }, [router]);
}
