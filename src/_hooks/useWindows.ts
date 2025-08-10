"use client";

import { useState, useEffect } from "react";

export interface MatchWidths {
  [key: number]: boolean;
}

interface UseWindowOptions {
  matchWidths: number[];
}

const useWindow = ({ matchWidths = [400, 640, 768, 1024] }: UseWindowOptions) => {
  const [matches, setMatches] = useState<MatchWidths>(() =>
    matchWidths.reduce((acc, width) => {
      acc[width] = false;
      return acc;
    }, {} as MatchWidths)
  );

  useEffect(() => {
    // Asegurarnos de que `window` existe antes de usar `matchMedia`
    if (typeof window === "undefined") return;

    // Crear una lista de media queries
    const mediaQueries = matchWidths.map((width) =>
      window.matchMedia(`(max-width: ${width}px)`)
    );

    const updateMatches = () => {
      const updatedMatches = mediaQueries.reduce((acc, mq, index) => {
        acc[matchWidths[index]] = mq.matches;
        return acc;
      }, {} as MatchWidths);

      // Solo actualizar si hay cambios en los valores
      setMatches((prevMatches) =>
        matchWidths.some((width) => prevMatches[width] !== updatedMatches[width])
          ? updatedMatches
          : prevMatches
      );
    };

    // Inicializar el estado con los valores actuales
    updateMatches();

    // Agregar listeners para cambios en media queries
    mediaQueries.forEach((mq) => mq.addEventListener("change", updateMatches));

    // Limpiar listeners al desmontar el componente
    return () => {
      mediaQueries.forEach((mq) =>
        mq.removeEventListener("change", updateMatches)
      );
    };
  }, [matchWidths]);

  return { matches };
};

export default useWindow;
