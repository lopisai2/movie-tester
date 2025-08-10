"use client"
import { usePathname, useSearchParams } from 'next/navigation';

export const useCurrentLocation = () => {
  const pathname = usePathname(); // Ruta actual
  const searchParams = useSearchParams(); // Parámetros de búsqueda de la URL actual

  const param = Object.fromEntries(searchParams.entries()); // Convierte los parámetros en un objeto
  const location = pathname + '?' + searchParams.toString(); // Crea la URL completa

  return {
    param,
    location
  };
};

export default useCurrentLocation;
