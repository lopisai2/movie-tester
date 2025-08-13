import React, { FC } from "react";
import styles from "../styles.module.css";
import { Skeleton } from "@/_components/ui/skeleton";

const MovieMoreItems: FC<{
  hasNextPage: boolean;
  isLoading: boolean;
  sentinelRef: React.RefObject<HTMLLIElement | null>;
}> = ({ hasNextPage, isLoading, sentinelRef }) => {
  return (
    <>
      {!hasNextPage && !isLoading && (
        <li role='status' className={styles.moviesResultGridMoviesNoResults}>
          <span>No hay más resultados</span>
        </li>
      )}
      <li
        aria-hidden='true'
        className='absolute bottom-0 max-lg:h-[1500px] w-full h-[300px]'
        ref={sentinelRef}
      />
      {(isLoading || hasNextPage) &&
        Array.from({ length: 4 }).map((_, i) => (
          <li
            key={`skeleton-${i}`}
            className={`${styles.moviesResultGridMoviesSkeleton} ${
              i > 1 ? "max-lg:hidden" : ""
            }`}
          >
            <Skeleton
              role='list-item'
              className={styles.moviesResultGridMoviesSkeleton}
            />
          </li>
        ))}
    </>
  );
};

export default MovieMoreItems;
