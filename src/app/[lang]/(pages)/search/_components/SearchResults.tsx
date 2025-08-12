"use client";
import styles from "../styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import noImageAvailable from "@/_assets/noImageAvailable.jpg";
import { SearchResultsComponentI } from "../_interfaces/SearchResults.interface";

const SearchResults: FC<SearchResultsComponentI> = ({
  error,
  isLoading,
  sentinelRef,
  moviesData,
}) => {
  return (
    <div className={styles.searchPageMoviesResults}>
      {error ? (
        <div>
          <span>Error: {error.message}</span>
        </div>
      ) : (
        <ul className={styles.searchPageMoviesResultsList}>
          {moviesData?.pages.map((page, index) => {
            if (page?.Search.length === 0)
              return (
                <div key={index}>
                  <span>No se encontraron resultados</span>
                </div>
              );
            return page?.Search.map((movie, index) => (
              <div key={index} className={styles.searchPageMoviesResultsItem}>
                <Link href={`/movie/${movie.imdbID}`}>
                  {movie.Poster && movie.Poster !== "N/A" ? (
                    <Image
                      className={styles.searchPageMoviesResultsItemPoster}
                      src={movie.Poster}
                      alt={movie.Title}
                      width={200}
                      height={350}
                    />
                  ) : (
                    <Image
                      className={styles.searchPageMoviesResultsItemPoster}
                      src={noImageAvailable.src}
                      alt={"no-poster"}
                      width={200}
                      height={300}
                    />
                  )}
                  <span>{movie.Title}</span>
                </Link>
              </div>
            ));
          })}

          {isLoading && <div>Cargando...</div>}
          <div ref={sentinelRef} />
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
