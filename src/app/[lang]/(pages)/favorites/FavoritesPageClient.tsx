"use client";
import { useQueries } from "@tanstack/react-query";
import { useFavorites } from "./_hooks/useFavorites";
import { getMovieClient } from "./_services/GET/getMovieClient";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import noImageAvailable from "@/_assets/noImageAvailable.jpg";

import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import { BookmarkMinus } from "lucide-react";

const FavoritesPageClient = () => {
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
      <div className='public-section-container'>
        <h1 className='self-start'>Mis Favoritos</h1>
        {isError && (
          <div>
            <span>
              Error:{" "}
              {
                favoritesMoviesData.find((movieData) => movieData.isError)
                  ?.error?.message
              }
            </span>
          </div>
        )}
        {isLoading && <div>Cargando...</div>}
        <ul className={styles.favoritesPageMoviesResultsList}>
          {favoritesMoviesData.map(({ data: movie }, index) =>
            movie ? (
              <li key={index} className={styles.favoritesPageMoviesResultsItem}>
                <Link href={`/movie/${movie.imdbID}`}>
                  {movie.Poster && movie.Poster !== "N/A" ? (
                    <Image
                      className={styles.favoritesPageMoviesResultsItemPoster}
                      src={movie.Poster}
                      alt={movie.Title}
                      width={200}
                      height={350}
                    />
                  ) : (
                    <Image
                      className={styles.favoritesPageMoviesResultsItemPoster}
                      src={noImageAvailable.src}
                      alt={"no-poster"}
                      width={200}
                      height={300}
                    />
                  )}
                  <span>{movie.Title}</span>
                </Link>
                <CustomBasicButton
                  onClick={() => removeFavoriteMovie(movie.imdbID)}
                  className={styles.favoritesPageMoviesResultsItemFavorite}
                >
                  <BookmarkMinus width={32} height={32} fill='var(--warning)' />
                </CustomBasicButton>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </section>
  );
};

export default FavoritesPageClient;
