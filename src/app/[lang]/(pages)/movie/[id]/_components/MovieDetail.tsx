"use client";
import { MovieResultI } from "@/_interfaces/movies/Movie.interface";
import Image from "next/image";
import { FC } from "react";
import styles from "../styles.module.css";
import AddMovieToFavorites from "@/_components/public/components/AddMovieToFavorites/AddMovieToFavorites";

const MovieDetail: FC<{
  movieData: MovieResultI | null;
}> = ({ movieData }) => {
  return (
    <div className={`public-section-container ${styles.movieDetalContainer}`}>
      {movieData?.Poster && movieData.Poster !== "N/A" && (
        <Image
          width={300}
          height={400}
          src={movieData?.Poster}
          alt={movieData?.Title}
        />
      )}
      <div className={styles.movieDetailInfo}>
        <div className={styles.movieDetailTitle}>
          <h1
            style={{
              marginBottom: 0,
            }}
          >
            {movieData?.Title}
          </h1>
          <AddMovieToFavorites
            movieId={movieData?.imdbID ?? ""}
            width={40}
            height={40}
          />
        </div>
        <p>{movieData?.Plot}</p>
        <h2
          style={{
            marginTop: 24,
          }}
        >
          Datos tecnicos
        </h2>
        <div className='flex flex-row gap-2'>
          <span>Clasificación: </span>
          <p>{movieData?.imdbRating}/10</p>
        </div>
        <div className='flex flex-row gap-2'>
          <span>Año: </span>
          <p>{movieData?.Released}</p>
        </div>
        <div className='flex flex-row gap-2'>
          <span>Duración: </span>
          <p>{movieData?.Runtime}</p>
        </div>
        <div className='flex flex-row gap-2'>
          <span>Género: </span>
          <p>{movieData?.Genre}</p>
        </div>
        <div className='flex flex-row gap-2'>
          <span>Director: </span>
          <p>{movieData?.Director}</p>
        </div>
        <div className='flex flex-row gap-2'>
          <span>Escritor: </span>
          <p>{movieData?.Writer}</p>
        </div>
        <div className='flex flex-row gap-2'>
          <span>Actores: </span>
          <p>{movieData?.Actors}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
