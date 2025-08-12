"use client";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useAddRemoveFavorites } from "./hooks/useAddRemoveFavorites";
import { FC } from "react";
import styles from "./styles.module.css";

const AddMovieToFavorites: FC<{
  movieId: string;
  width?: number;
  height?: number;
  className?: string;
}> = ({ movieId, className, width = 24, height = 24 }) => {
  const { handleAddRemoveFavorites, currentFavorites } = useAddRemoveFavorites({
    movieId,
  });
  return (
    <CustomBasicButton
      onClick={handleAddRemoveFavorites}
      className={`${styles.addMovieToFavoritesButton} ${className ?? ""}`}
    >
      {currentFavorites.includes(movieId) ? (
        <BookmarkCheck width={width} height={height} />
      ) : (
        <Bookmark width={width} height={height} />
      )}
    </CustomBasicButton>
  );
};

export default AddMovieToFavorites;
