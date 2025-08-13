import { FC, RefObject } from "react";
import styles from "../styles.module.css";
import { Skeleton } from "@/_components/ui/skeleton";

const MovieMoreItems: FC<{
  hasNextPage: boolean;
  isLoading: boolean;
  sentinelRef: RefObject<HTMLLIElement | null>;
}> = ({ hasNextPage, isLoading, sentinelRef }) => {
  return (
    <>
      {!hasNextPage && !isLoading && (
        <li role='status' className={styles.moviesResultGridMoviesNoResults}>
          <span>No hay más resultados</span>
        </li>
      )}
      {(isLoading || hasNextPage) &&
        Array.from({ length: 4 }).map((_, i) => (
          <li
            key={`skeleton-${i}`}
            className={`${styles.moviesResultGridMoviesSkeleton} ${
              i > 1 ? "max-lg:hidden" : ""
            }`}
            aria-label={i === 0 ? "true" : "false"}
            ref={i === 0 ? sentinelRef : null}
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
