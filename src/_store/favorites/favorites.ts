// src/store/themeStore.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { addRemoveFavoritesThunk } from "./thunks/addRemoveFavoritesThunk";
import { CustomFavoritesState } from "@/_interfaces/Favorites.interface";
import { useEffect } from "react";

export const useFavoritesStore = create<CustomFavoritesState>()(
  devtools(
    (set, get) => ({
      store: { favorites: [] },
      addRemoveFavorites: (movieId: string) => {
        addRemoveFavoritesThunk({ set, get, movieId });
      },
      hydrateFavorites: () => {
        const stored = JSON.parse(
          localStorage.getItem("movie-tester-favorites") || "[]"
        );
        if (stored) set({ store: { favorites: stored } });
        return stored;
      },
    }),
    {
      name: "favorites", // clave de almacenamiento
    }
  )
);

/**
 * Obtiene la lista de favoritos de la key movie-tester-favorites en el localStorage
 * siempre y cuando se encuentre en el cliente
 */
export const useHydrateFavoritesOnClient = () => {
  const hydrateFavorites = useFavoritesStore((state) => state.hydrateFavorites);

  useEffect(() => {
    hydrateFavorites();
  }, [hydrateFavorites]);
};
