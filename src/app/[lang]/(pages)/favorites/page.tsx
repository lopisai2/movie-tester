"use client";
import { useQueries } from "@tanstack/react-query";
import { useFavorites } from "./_hooks/useFavorites";
import { getMovieClient } from "./_services/GET/getMovieClient";
import Link from "next/link";

const FavoritesPage = () => {
  const { favoritesMovies, removeFavoriteMovie } = useFavorites();

  const favoritesMoviesData = useQueries({
    queries: favoritesMovies.map((movieId) => ({
      queryKey: ["movie", movieId],
      queryFn: async () => {
        const res = await getMovieClient(movieId);
        return res;
      },
      enabled: !!movieId,
    })),
  });
  const isLoading = favoritesMoviesData.some(
    (movieData) => movieData.isLoading
  );
  const isError = favoritesMoviesData.some((movieData) => movieData.isError);
  return (
    <section className='public-section-wrapper'>
      <h1>Favoritos</h1>
      <ul>
        {favoritesMoviesData.map((movieData, index) =>
          movieData.data ? (
            <li key={index}>
              {movieData?.data?.Title}
              <Link href={`/movie/${movieData?.data?.imdbID}`}>
                Ver detalles
              </Link>
              <button
                onClick={() =>
                  removeFavoriteMovie(movieData?.data?.imdbID ?? "")
                }
              >
                Eliminar
              </button>
            </li>
          ) : null
        )}
      </ul>
    </section>
  );
};

export default FavoritesPage;
