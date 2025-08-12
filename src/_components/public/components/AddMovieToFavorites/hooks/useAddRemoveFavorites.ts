"use client";
import { useState } from "react"
import { toast } from "sonner"

export const useAddRemoveFavorites = ({
    movieId
}: {
    movieId: string
}) => {
    const [currentFavorites, setCurrentFavorites] = useState<string[]>(() => {
        if (typeof window !== "undefined") {
            try {
                return JSON.parse(localStorage.getItem("movie-tester-favorites") ?? "[]");
            } catch {
                return [];
            }
        }
        return [];
    });

    const handleAddRemoveFavorites = () => {
        //Verificar si el movieId ya está en la lista de favoritos
        //Si está, eliminarlo
        //Si no, añadirlo
        if (!currentFavorites.length) {
            const newFavorites = [movieId]
            localStorage.setItem("movie-tester-favorites", JSON.stringify(newFavorites))
            setCurrentFavorites(newFavorites)
            return toast("Pelicula añadida a tus favoritos")
        }
        if (currentFavorites.includes(movieId)) {
            //Eliminar el movieId de la lista de favoritos
            const newFavorites = currentFavorites.filter(movie => movie !== movieId)
            localStorage.setItem("movie-tester-favorites", JSON.stringify(newFavorites))
            setCurrentFavorites(newFavorites)
            return toast("La pelicula ha sido eliminada de tus favoritos")
        }
        //Añadir el movieId a la lista de favoritos
        const newMovies = [...currentFavorites, movieId]
        localStorage.setItem("movie-tester-favorites", JSON.stringify(newMovies))
        setCurrentFavorites(newMovies)
        return toast("Pelicula añadida a tus favoritos")
    }

    return {
        handleAddRemoveFavorites,
        currentFavorites
    }
}