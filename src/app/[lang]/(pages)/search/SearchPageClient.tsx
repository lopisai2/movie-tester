"use client";
import styles from "./styles.module.css";
import { useSearch } from "./_hooks/useSearch";
import SearchFilters from "./_components/SearchFilters";
import MoviesResultGrid from "@/_components/public/components/MoviesResultGrid/MoviesResultGrid";

const SearchPageClient = () => {
  const {
    query,
    moviesData,
    hasNextPage,
    isLoading,
    error,
    sentinelRef,
    movieFilters,
    handleUpdateFilters,
  } = useSearch();

  return (
    <section className='public-section-wrapper'>
      <div className={`public-section-container ${styles.seachPageContainer}`}>
        <h1
          className=' self-start'
          style={{
            marginBottom: 40,
          }}
        >
          Resultados de la busqueda: {query}
        </h1>
        <div className={styles.searchPageMovies}>
          <SearchFilters
            movieFilters={movieFilters}
            handleUpdateFilters={handleUpdateFilters}
          />
          <div className={styles.searchPageMoviesResults}>
            <MoviesResultGrid
              error={error}
              hasNextPage={hasNextPage}
              isLoading={isLoading}
              sentinelRef={sentinelRef}
              moviesData={moviesData?.pages.flatMap((page) => page?.Search)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchPageClient;
