"use client";

import { MovieResultI } from "@/_interfaces/movies/Movie.interface";
import Image from "next/image";
import { FC } from "react";

const MovieDetail: FC<{
  movieData: MovieResultI | null;
}> = ({ movieData }) => {
  const handleAddMovieToFavorites = () => {
    if (!movieData) return;
    const currentFavorites = localStorage.getItem("movie-tester-favorites");
    if (currentFavorites) {
      const movies = JSON.parse(currentFavorites);
      if (movies.includes(movieData.imdbID)) {
        return;
      }
      movies.push(movieData.imdbID);
      return localStorage.setItem(
        "movie-tester-favorites",
        JSON.stringify(movies)
      );
    }
    localStorage.setItem(
      "movie-tester-favorites",
      JSON.stringify([movieData.imdbID])
    );
  };
  return (
    <div>
      <h1>{movieData?.Title}</h1>
      {movieData?.Poster && movieData.Poster !== "N/A" && (
        <Image
          width={200}
          height={300}
          src={movieData?.Poster}
          alt={movieData?.Title}
        />
      )}
      <button onClick={handleAddMovieToFavorites}>Añadir a favoritos</button>
      <p>{movieData?.Plot}</p>
    </div>
  );
};

export default MovieDetail;
