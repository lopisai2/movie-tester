import { MoviesResultSearchI } from "@/_interfaces/movies/Movies.interface";
import { FC } from "react";
import styles from "./styles.module.css";
import MoviesHomeHeroCarousel from "./components/MoviesHomeHeroCarousel";
import MoviesHomeHeroFeatures from "./components/MoviesHomeHeroFeatures";

export const MoviesHomeHero: FC<{
  movies: MoviesResultSearchI[];
  featuredMovies: MoviesResultSearchI[];
}> = ({ movies, featuredMovies }) => {
  return (
    <div
      className={`${styles.movieHomeCarouselSection} public-section-container`}
    >
      <MoviesHomeHeroCarousel movies={movies} />
      <MoviesHomeHeroFeatures featuredMovies={featuredMovies} />
    </div>
  );
};
