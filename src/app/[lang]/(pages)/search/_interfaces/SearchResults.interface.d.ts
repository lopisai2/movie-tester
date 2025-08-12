import { MoviesResultI } from "@/_interfaces/movies/Movies.interface";
import { InfiniteData } from "@tanstack/react-query";

export interface SearchResultsComponentI {
    error: Error | null;
    isLoading: boolean;
    sentinelRef: React.RefObject<HTMLDivElement | null>;
    moviesData: InfiniteData<MoviesResultI | undefined, unknown> | undefined;
}