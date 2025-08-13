"use client";
import styles from "./styles.module.css";
import { FC } from "react";
import { MoviesResultGridI } from "./interfaces/MovieResultGrid.interface";
import MovieResultItem from "./components/MovieResultItem";
import MovieMoreItems from "./components/MovieMoreItems";

const MoviesResultGrid: FC<MoviesResultGridI> = ({
  moviesData,
  isLoading,
  error,
  sentinelRef,
  hasNextPage,
  removeFavoriteMovie,
}) => {
  return (
    <>
      {error ? (
        <section
          role='alert'
          className='col-start-1 col-end-5 flex flex-col items-center justify-center h-[300px]'
        >
          <span>Ocurrió un error: {error?.message}</span>
        </section>
      ) : (
        <ul
          role='list'
          aria-label='Listado de peliculas'
          className={styles.moviesResultGridMoviesResultsList}
        >
          {moviesData?.map((movie, index) => (
            <MovieResultItem
              key={index}
              movie={movie}
              removeFavoriteMovie={removeFavoriteMovie}
            />
          ))}
          <MovieMoreItems
            hasNextPage={hasNextPage}
            isLoading={isLoading}
            sentinelRef={sentinelRef}
          />
        </ul>
      )}
    </>
  );
};

export default MoviesResultGrid;
