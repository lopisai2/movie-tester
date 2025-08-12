"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const FAVORITES_STORAGE_KEY = "movie-tester-favorites";

export const useFavorites = () => {

    const [favoritesMovies, setFavoritesMovies] = useState<string[]>([]);

    const removeFavoriteMovie = (movieId: string) => {
        setFavoritesMovies((prev) => {
            const updatedFavoritesMovies = prev.filter((movie) => movie !== movieId);
            localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updatedFavoritesMovies));
            return updatedFavoritesMovies;
        })
        toast("Pelicula eliminada de tus favoritos")
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