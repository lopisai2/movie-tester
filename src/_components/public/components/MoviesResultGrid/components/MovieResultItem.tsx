import React, { FC } from "react";
import styles from "../styles.module.css";
import { BookmarkMinus, Link } from "lucide-react";
import Image from "next/image";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import { MovieResultI } from "@/_interfaces/movies/Movie.interface";
import noImageAvailable from "@/_assets/noImageAvailable.jpg";

const MovieResultItem: FC<{
  movie: MovieResultI;
  removeFavoriteMovie?: (movieId: string) => void;
}> = ({ movie, removeFavoriteMovie }) => {
  return (
    <li role='listitem' className={styles.moviesResultGridMoviesResultsItem}>
      <Link
        href={`/movie/${movie?.imdbID}`}
        aria-label={`Ver detalles de la pelicula ${movie?.Title}`}
      >
        {movie?.Poster && movie.Poster !== "N/A" ? (
          <Image
            className={styles.moviesResultGridMoviesResultsItemPoster}
            src={movie.Poster}
            alt={movie.Title}
            width={200}
            height={350}
            onError={() => noImageAvailable.src}
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
        <h3>{movie?.Title}</h3>
      </Link>
      {removeFavoriteMovie && (
        <CustomBasicButton
          onClick={() => removeFavoriteMovie(movie?.imdbID ?? "")}
          className={styles.moviesResultGridMoviesResultsItemFavorite}
        >
          <BookmarkMinus
            aria-hidden='true'
            width={32}
            height={32}
            fill='var(--warning)'
          />
        </CustomBasicButton>
      )}
    </li>
  );
};

export default MovieResultItem;
