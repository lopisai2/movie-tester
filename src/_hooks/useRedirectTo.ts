"use client";
import { useRouter, usePathname } from "next/navigation";
import { useDirectionsStore } from "@/_store/directions/directions";

export const useRedirectTo = () => {
  const router = useRouter();
  const pathname = usePathname();
  const setDirection = useDirectionsStore((state) => state.changeDirection);
  // Obtiene el idioma actual desde el pathname
  const currentLocale = pathname?.split("/")[1] || "es";
  const pathWithoutLocale =
    pathname?.replace(`/${currentLocale}`, "").slice(0, -1) || "/";

  const handleRedirectTo = async (
    url: string | -1,
    defaultUrl?: boolean,
    forceBack?: boolean
  ) => {
    if (url === pathname) return;

    if (url === -1 || forceBack) {
      setDirection("left");
      router.back();
    } else {
      setDirection("right");

      const localizedUrl = defaultUrl ? url : `/${currentLocale}${url}`;
      await router.prefetch(localizedUrl); // Prefetch para mejorar el rendimiento
      router.push(localizedUrl);
    }
  };

  return {
    handleRedirectTo,
    pathWithoutLocale,
  };
};

export default useRedirectTo;
