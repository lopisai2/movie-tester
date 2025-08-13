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
    <article
      aria-labelledby='movie-detail-title'
      className={`public-section-container ${styles.movieDetalContainer}`}
    >
      {movieData?.Poster && movieData.Poster !== "N/A" && (
        <Image
          width={300}
          height={400}
          src={movieData?.Poster}
          alt={movieData?.Title}
          aria-label='none'
        />
      )}
      <div className={styles.movieDetailInfo}>
        <header className={styles.movieDetailTitle}>
          <h1
            id='movie-detail-title'
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
        </header>
        <p>{movieData?.Plot}</p>
        <section aria-labelledby='technical-data-title'>
          <h2
            id='technical-data-title'
            style={{
              marginTop: 24,
            }}
          >
            Datos tecnicos
          </h2>
          <dl>
            <div className='flex flex-row gap-2'>
              <dt className='text-black dark:text-white'>Clasificación: </dt>
              <dd className='text-black dark:text-white'>
                {movieData?.imdbRating}/10
              </dd>
            </div>
            <div className='flex flex-row gap-2'>
              <dt className='text-black dark:text-white'>Año: </dt>
              <dd className='text-black dark:text-white'>
                {movieData?.Released}
              </dd>
            </div>
            <div className='flex flex-row gap-2'>
              <dt className='text-black dark:text-white'>Duración: </dt>
              <dd className='text-black dark:text-white'>
                {movieData?.Runtime}
              </dd>
            </div>
            <div className='flex flex-row gap-2'>
              <dt className='text-black dark:text-white'>Género: </dt>
              <dd className='text-black dark:text-white'>{movieData?.Genre}</dd>
            </div>
            <div className='flex flex-row gap-2'>
              <dt className='text-black dark:text-white'>Director: </dt>
              <dd className='text-black dark:text-white'>
                {movieData?.Director}
              </dd>
            </div>
            <div className='flex flex-row gap-2'>
              <dt className='text-black dark:text-white'>Escritor: </dt>
              <dd className='text-black dark:text-white'>
                {movieData?.Writer}
              </dd>
            </div>
            <div className='flex flex-row gap-2'>
              <dt className='text-black dark:text-white'>Actores: </dt>
              <dd className='text-black dark:text-white'>
                {movieData?.Actors}
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </article>
  );
};

export default MovieDetail;
