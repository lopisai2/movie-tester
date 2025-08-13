"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import noImageAvailable from "@/_assets/noImageAvailable.jpg";
import { Skeleton } from "@/_components/ui/skeleton";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import { BookmarkMinus } from "lucide-react";
import { MoviesResultGridI } from "./interfaces/MovieResultGrid.interface";

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
        <div className='col-start-1 col-end-5 flex flex-col items-center justify-center h-[300px]'>
          <span>Ocurrió un error: {error?.message}</span>
        </div>
      ) : (
        <ul className={styles.moviesResultGridMoviesResultsList}>
          {moviesData?.map((movie, index) => {
            return (
              <div
                key={index}
                className={styles.moviesResultGridMoviesResultsItem}
              >
                <Link href={`/movie/${movie?.imdbID}`}>
                  {movie?.Poster && movie.Poster !== "N/A" ? (
                    <Image
                      className={styles.moviesResultGridMoviesResultsItemPoster}
                      src={movie.Poster}
                      alt={movie.Title}
                      width={200}
                      height={350}
                    />
                  ) : (
                    <Image
                      className={styles.moviesResultGridMoviesResultsItemPoster}
                      src={noImageAvailable.src}
                      alt={"no-poster"}
                      width={300}
                      height={300}
                    />
                  )}
                  <span>{movie?.Title}</span>
                </Link>
                {removeFavoriteMovie && (
                  <CustomBasicButton
                    onClick={() => removeFavoriteMovie(movie?.imdbID ?? "")}
                    className={styles.moviesResultGridMoviesResultsItemFavorite}
                  >
                    <BookmarkMinus
                      width={32}
                      height={32}
                      fill='var(--warning)'
                    />
                  </CustomBasicButton>
                )}
              </div>
            );
          })}
          {!hasNextPage && !isLoading && (
            <div className={styles.moviesResultGridMoviesNoResults}>
              <span>No hay más resultados</span>
            </div>
          )}
          {(isLoading || hasNextPage) && (
            <>
              <Skeleton
                role='list-item'
                className={styles.moviesResultGridMoviesSkeleton}
              />
              <Skeleton
                role='list-item'
                className={styles.moviesResultGridMoviesSkeleton}
              />
              <Skeleton
                role='list-item'
                className={styles.moviesResultGridMoviesSkeleton}
              />
              <Skeleton
                role='list-item'
                className={styles.moviesResultGridMoviesSkeleton}
              />
            </>
          )}
          <div ref={sentinelRef} />
        </ul>
      )}
    </>
  );
};

export default MoviesResultGrid;
