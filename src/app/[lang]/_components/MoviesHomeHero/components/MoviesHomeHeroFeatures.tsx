import styles from "../styles.module.css";
import { MoviesResultSearchI } from "@/_interfaces/movies/Movies.interface";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import AddMovieToFavorites from "@/_components/public/components/AddMovieToFavorites/AddMovieToFavorites";
import noImageAvailable from "@/_assets/noImageAvailable.jpg";

const MoviesHomeHeroFeatures: FC<{
  featuredMovies: MoviesResultSearchI[];
}> = ({ featuredMovies }) => {
  return (
    <div role='region' className={styles.movieHomeFeaturedSection}>
      <h1 className={styles.movieHomeFeaturedTitle}>Destacados</h1>
      <ul role='list' className={styles.movieHomeFeaturedList}>
        {featuredMovies?.map((movie, index) => (
          <li
            key={index}
            className={styles.movieHomeFeaturedItem}
            role='listitem'
          >
            <article
              aria-labelledby={`movie-title-${index}`}
              aria-describedby={`movie-year-${index}`}
              tabIndex={0}
              className={styles.movieHomeFeaturePoster}
            >
              {movie.Poster && movie.Poster !== "N/A" ? (
                <Image
                  src={movie.Poster}
                  alt={movie.Title}
                  width={150}
                  height={200}
                />
              ) : (
                <Image
                  src={noImageAvailable.src}
                  alt={"no-poster"}
                  width={150}
                  height={200}
                />
              )}
              <AddMovieToFavorites
                movieId={movie.imdbID}
                className={styles.movieHomeFeatureBookMark}
              />
            </article>
            <div>
              <span>{movie.Title}</span>
              <p>{movie.Year}</p>
              <Link
                href={`/movie/${movie.imdbID}`}
                className={styles.movieHomeFeaturedLink}
                aria-label={`Ver detalles de la pelicula ${movie.Title}`}
              >
                Ver detalles
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesHomeHeroFeatures;
