import { CustomFavoritesState } from "@/_interfaces/Favorites.interface";
import { toast } from "sonner";
import { StoreApi } from "zustand";

interface AddRemoveFavoriteThunkInteface {
  set: StoreApi<CustomFavoritesState>["setState"];
  get: StoreApi<CustomFavoritesState>["getState"];
  movieId: string;
}

/**
 * Permite añadir o eliminar una película de la lista de favoritos en el localStorage de manera global
 * en caso de no existir ningun favorito, se crea la key en el localStorage
 * @returns 
 */
export const addRemoveFavoritesThunk = async ({
  get,
  set,
  movieId,
}: AddRemoveFavoriteThunkInteface): Promise<void> => {
  const currentFavorites = get().store.favorites;
  if (!currentFavorites.length) {
    const newFavorites = [movieId];
    localStorage.setItem(
      "movie-tester-favorites",
      JSON.stringify(newFavorites)
    );
    set({
      store: {
        favorites: newFavorites,
      },
    });
    toast("Pelicula añadida a tus favoritos");
    return;
  }
  if (currentFavorites.includes(movieId)) {
    //Eliminar el movieId de la lista de favoritos
    const newFavorites = currentFavorites.filter((movie) => movie !== movieId);
    localStorage.setItem(
      "movie-tester-favorites",
      JSON.stringify(newFavorites)
    );
    set({
      store: {
        favorites: newFavorites,
      },
    });
    toast("La pelicula ha sido eliminada de tus favoritos");
    return;
  }
  //Añadir el movieId a la lista de favoritos
  const newMovies = [...currentFavorites, movieId];
  localStorage.setItem("movie-tester-favorites", JSON.stringify(newMovies));
  set({
    store: {
      favorites: newMovies,
    },
  });
  toast("Pelicula añadida a tus favoritos");
  return;
};
