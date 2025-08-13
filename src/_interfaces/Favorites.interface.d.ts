export interface CustomFavoritesInterface {
  favorites: string[];
}

export interface CustomFavoritesState {
  store: CustomFavoritesInterface
  addRemoveFavorites: (movieId: string) => void;
}
