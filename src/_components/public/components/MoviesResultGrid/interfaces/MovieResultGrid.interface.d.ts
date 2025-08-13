import { MovieResultI } from "@/_interfaces/movies/Movie.interface";

export interface MoviesResultGridI {
  error: Error | null;
  isLoading: boolean;
  hasNextPage: boolean;
  sentinelRef: React.RefObject<HTMLDivElement | null>;
  moviesData?: (MoviesResultSearchI | undefined)[] | (MovieResultI | undefined)[] | undefined;  
  removeFavoriteMovie?: (movieId: string) => void;
}
