import { useInfiniteQuery } from "@tanstack/react-query";
import { useFavorites } from "./useFavorites";
import { getMovieClient } from "../_services/GET/getMovieClient";
import { useCustomBasicList } from "@/_hooks/useCustomBasicList";
import { MovieResultI } from "@/_interfaces/movies/Movie.interface";

const QUERY_PAGE_SIZE = 20;

/**
 * Permite obtener los peliculas favoritas de la aplicación en forma de scroll infinito
 * para evitar cargas pesadas en la red
 * @returns
 */
export const useInfiniteFavorites = () => {
  const { favoritesMovies, removeFavoriteMovie } = useFavorites();

  const { data, fetchNextPage, hasNextPage, isFetching, error } =
    useInfiniteQuery({
      queryKey: ["favorites", favoritesMovies],
      initialPageParam: 0,
      queryFn: async ({ pageParam = 0 }) => {
        const start = pageParam * QUERY_PAGE_SIZE;
        const end = start + QUERY_PAGE_SIZE;
        const idsBatch = favoritesMovies.slice(start, end);
        const res = await Promise.all(
          idsBatch.map((movieId) => getMovieClient(movieId))
        );
        return {
          results: res,
          nextPage: pageParam + 1,
        };
      },
      getNextPageParam: (data, pages) => {
        const loaded = pages.length * QUERY_PAGE_SIZE;
        return loaded < favoritesMovies.length ? data.nextPage : undefined;
      },
      enabled: !!favoritesMovies.length,
    });

  const { sentinelRef } = useCustomBasicList<MovieResultI>({
    hasMore: hasNextPage,
    loading: isFetching,
    loadMoreData: fetchNextPage,
  });

  return {
    removeFavoriteMovie,
    fetchNextPage,
    sentinelRef,
    favoritesMovies,
    isLoading: isFetching,
    error,
    data,
    hasNextPage,
  };
};
