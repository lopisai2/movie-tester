"use client";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { FC } from "react";
import styles from "./styles.module.css";
import { useFavoritesStore } from "@/_store/favorites/favorites";

const AddMovieToFavorites: FC<{
  movieId: string;
  width?: number;
  height?: number;
  className?: string;
}> = ({ movieId, className, width = 24, height = 24 }) => {
  const currentFavorites = useFavoritesStore((state) => state.store.favorites);
  const addRemoveFavorites = useFavoritesStore(
    (state) => state.addRemoveFavorites
  );
  return (
    <CustomBasicButton
      onClick={() => addRemoveFavorites(movieId)}
      className={`${styles.addMovieToFavoritesButton} ${className ?? ""}`}
    >
      {currentFavorites.includes(movieId) ? (
        <BookmarkCheck
          width={width}
          height={height}
          className='text-black dark:text-white'
        />
      ) : (
        <Bookmark
          width={width}
          height={height}
          className='text-black dark:text-white'
        />
      )}
    </CustomBasicButton>
  );
};

export default AddMovieToFavorites;
