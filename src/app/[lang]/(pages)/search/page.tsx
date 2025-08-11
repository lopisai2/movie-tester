"use client";
import { useSearchParams } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getMoviesClient } from "./_services/GET/getMoviesClient";
import Link from "next/link";
import { useCustomBasicList } from "@/_hooks/useCustomBasicList";
import { MovieResultI } from "@/_interfaces/movies/Movie.interface";

const SearchPage = () => {
  const params = useSearchParams();
  const query = params.get("q") ?? "";

  const {
    data: moviesData,
    fetchNextPage,
    hasNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["search", query],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const res = await getMoviesClient({
        searchTerm: query,
        page: pageParam,
      });
      return res;
    },
    getNextPageParam: (data, pages) => {
      const totalItems = parseInt(data?.totalResults || "0", 10);
      if (pages.length * 10 < totalItems) return pages.length + 1;
      return undefined;
    },
    enabled: !!query,
  });

  const { sentinelRef } = useCustomBasicList<MovieResultI>({
    hasMore: hasNextPage,
    loading: isLoading,
    loadMoreData: fetchNextPage,
  });

  return (
    <section className='public-section-wrapper'>
      {error ? (
        <div>
          <span>Error: {error.message}</span>
        </div>
      ) : (
        <ul
          style={{
            maxHeight: "250px",
            overflowY: "auto",
          }}
        >
          {moviesData?.pages.map((page) =>
            page?.Search.map((movie, index) => (
              <div key={index}>
                <span>{movie.Title}</span>
                <Link href={`/movie/${movie.imdbID}`}>Ver detalles</Link>
              </div>
            ))
          )}
          {isLoading && <div>Cargando...</div>}
          <div ref={sentinelRef} />
        </ul>
      )}
    </section>
  );
};

export default SearchPage;
