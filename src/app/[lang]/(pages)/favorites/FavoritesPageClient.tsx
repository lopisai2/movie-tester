"use client";
import { useInfiniteFavorites } from "./_hooks/useInfiniteFavorites";
import MoviesResultGrid from "@/_components/public/components/MoviesResultGrid/MoviesResultGrid";

const FavoritesPageClient = () => {
  const {
    data: favoritesMoviesData,
    isLoading,
    error,
    sentinelRef,
    hasNextPage,
    removeFavoriteMovie,
  } = useInfiniteFavorites();

  return (
    <section className='public-section-wrapper'>
      <div className='public-section-container'>
        <h1 className='self-start'>Mis Favoritos</h1>
        <div className="w-full">
          <MoviesResultGrid
            moviesData={favoritesMoviesData?.pages?.flatMap(
              (page) => page?.results
            )}
            hasNextPage={hasNextPage}
            removeFavoriteMovie={removeFavoriteMovie}
            isLoading={isLoading}
            error={error}
            sentinelRef={sentinelRef}
          />
        </div>
      </div>
    </section>
  );
};

export default FavoritesPageClient;
