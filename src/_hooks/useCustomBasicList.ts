import { CustomBasicListI } from "@/_interfaces/CustomBasicList.interface";
import { useEffect, useRef } from "react";

/**
 * Custom hook para llamar un scroll a partir de una referencia de un elemento HTML al final de la lista
 * mediante un observer de IntersectionObserver
 * @param hasMore Si hay mas datos que mostrar
 * @param loading Si se está cargando datos
 * @param loadMoreData La funcion que se ejecuta cuando se hace scroll
 * @returns
 */
export const useCustomBasicList = <T>({
  hasMore,
  loading,
  loadMoreData,
}: CustomBasicListI<T>) => {
  const sentinelRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!sentinelRef.current || loading || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreData();
        }
      },
      { rootMargin: "50px" }
    );

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, loading, loadMoreData]);

  return { sentinelRef };
};
