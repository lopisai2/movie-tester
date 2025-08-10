"use client";
import { useRef, useEffect, useCallback } from "react";

type Callback = (args: { [key: string]: unknown }) => Promise<void>;

export const useDebounce = (callback: Callback, delay: number) => {
  // Usar useRef para almacenar el último timeout id
  const timeoutRef = useRef<null | NodeJS.Timeout>(null);

  // Esta es la función que se devuelve y que puede ser llamada múltiples veces
  const debouncedCallback = useCallback(
    (args: { [key: string]: unknown }) => {
      // Si ya hay un temporizador en marcha, lo cancelamos
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Establecer un nuevo temporizador
      timeoutRef.current = setTimeout(() => {
        callback(args);
      }, delay);
    },
    [callback, delay]
  ); // Se volverá a crear si callback o delay cambian

  // Limpieza si el componente se desmonta o si delay cambia
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);

  return debouncedCallback;
};
