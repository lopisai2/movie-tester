import { useEffect, useState } from "react";

const FAVORITES_STORAGE_KEY = "movie-tester-favorites";


export const useFavorites = () => {

    const [favoritesMovies, setFavoritesMovies] = useState<string[]>([]);

    const removeFavoriteMovie = (movieId: string) => {
        setFavoritesMovies((prev) => {
            const updatedFavoritesMovies = prev.filter((movie) => movie !== movieId);
            localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updatedFavoritesMovies));
            return updatedFavoritesMovies;
        })
    }

    useEffect(() => {
        const favoritesMovies = localStorage.getItem(FAVORITES_STORAGE_KEY);
        if (favoritesMovies) {
            setFavoritesMovies(JSON.parse(favoritesMovies));
        }
    }, []);

    return {
        favoritesMovies,
        removeFavoriteMovie
    }
}