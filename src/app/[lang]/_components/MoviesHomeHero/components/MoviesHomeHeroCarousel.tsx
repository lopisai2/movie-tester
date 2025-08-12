import styles from "../styles.module.css";
import { MoviesResultSearchI } from "@/_interfaces/movies/Movies.interface";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/_components/ui/carousel";
import AddMovieToFavorites from "@/_components/public/components/AddMovieToFavorites/AddMovieToFavorites";
import noImageAvailable from "@/_assets/noImageAvailable.jpg";

const MoviesHomeHeroCarousel: FC<{
  movies: MoviesResultSearchI[];
}> = ({ movies }) => {
  return (
    <div className={styles.movieHomeCarousel}>
      <h1 className={styles.movieHomeCarouselTitle}>Lo más populares</h1>
      <Carousel>
        <CarouselContent>
          {movies.map((movie, index) => (
            <CarouselItem
              className={`${styles.movieCarouselItem} lg:basis-1/2`}
              key={index}
            >
              <div className='relative h-full'>
                <Link
                  className='cursor-pointer'
                  href={`/movie/${movie.imdbID}`}
                >
                  {movie.Poster && movie.Poster !== "N/A" ? (
                    <Image
                      className={styles.movieCarouselItemImage}
                      src={movie.Poster}
                      alt={movie.Title}
                      width={400}
                      height={550}
                    />
                  ) : (
                    <Image
                      src={noImageAvailable.src}
                      alt={"no-poster"}
                      width={100}
                      height={150}
                    />
                  )}
                </Link>
                <AddMovieToFavorites
                  movieId={movie.imdbID}
                  className={styles.movieHomeFeatureBookMark}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MoviesHomeHeroCarousel;
