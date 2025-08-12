"use client";
import styles from "./styles.module.css";
import { useSearch } from "./_hooks/useSearch";
import SearchFilters from "./_components/SearchFilters";
import SearchResults from "./_components/SearchResults";

const SearchPageClient = () => {
  const {
    query,
    moviesData,
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
          <SearchResults
            error={error}
            isLoading={isLoading}
            sentinelRef={sentinelRef}
            moviesData={moviesData}
          />
        </div>
      </div>
    </section>
  );
};

export default SearchPageClient;
