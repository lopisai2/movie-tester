// src/store/themeStore.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { addRemoveFavoritesThunk } from "./thunks/addRemoveFavoritesThunk";
import { CustomFavoritesState } from "@/_interfaces/Favorites.interface";

/**
 * Obtiene la lista de favoritos de la key movie-tester-favorites en el localStorage
 * siempre y cuando se encuentre en el cliente
 * @returns
 */
const getDefaultFavorites = (): string[] => {
  if (typeof window !== "undefined") {
    const stored = JSON.parse(
      localStorage.getItem("movie-tester-favorites") || "[]"
    );    
    if (stored) return stored;
  }
  // Valor por defecto en el servidor
  return [];
};

export const useFavoritesStore = create<CustomFavoritesState>()(
  devtools(
    (set, get) => ({
      store: { favorites: getDefaultFavorites() },
      addRemoveFavorites: (movieId: string) => {
        addRemoveFavoritesThunk({ set, get, movieId });
      },
    }),
    {
      name: "favorites", // clave de almacenamiento
    }
  )
);
