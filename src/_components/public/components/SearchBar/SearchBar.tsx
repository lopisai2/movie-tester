"use client";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import React, { FC } from "react";
import styles from "./styles.module.css";
import { Input } from "@/_components/ui/input";
import { SearchIcon } from "lucide-react";
import { useSearchBar } from "./hooks/useSearchBar";

const SearchBar: FC = () => {
  const { movieTerm, searchInputError, handleSearchMovie, setMovieTerm } =
    useSearchBar();

  return (
    <form
      id='search-bar'
      name='search-bar'
      className={`${styles.searcBarForm} ${
        searchInputError ? "max-lg:pt-12 pt-2" : ""
      }`}
      onSubmit={handleSearchMovie}
    >
      <fieldset className={styles.searchInputContainer}>
        <legend className="sr-only">Buscar</legend>
        <Input
          type='text'
          placeholder='Buscar Avengers, Batman...'
          className={`${styles.searchInput} bg-white dark:bg-[#252525] text-black dark:text-white border-zinc-400 selection:bg-[var(--primary-color)]`}
          value={movieTerm}
          onChange={(e) => setMovieTerm(e.target.value)}
        />
        <CustomBasicButton className={styles.searcBarButton}>
          <SearchIcon />
        </CustomBasicButton>
      </fieldset>
      {searchInputError && (
        <span
          className='max-lg:mt-3'
          style={{
            color: "var(--negative)",
            fontWeight: 400,
            fontSize: 12,
          }}
        >
          {searchInputError}
        </span>
      )}
    </form>
  );
};

SearchBar.displayName = "Global SearchBar";

export default SearchBar;
