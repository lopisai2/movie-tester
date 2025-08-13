"use client";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FC, useState } from "react";
import styles from "./styles.module.css";
import { Input } from "@/_components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchBar: FC = () => {
  const searchParams = useSearchParams();
  const [movieTerm, setMovieTerm] = useState(searchParams.get("q") || "");
  const router = useRouter();

  const handleSearchMovie = (e: React.FormEvent) => {
    e.preventDefault();
    if (!movieTerm || !movieTerm.trim()) return;
    router.push(`/search?q=${encodeURIComponent(movieTerm)}`);
  };
  return (
    <form
      id='search-bar'
      name='search-bar'
      className={styles.searcBarForm}
      onSubmit={handleSearchMovie}
    >
      <div className={styles.searchInputContainer}>
        <Input
          type='text'
          placeholder='Buscar Avengers, Batman...'
          className={`${styles.searchInput} bg-white dark:bg-[#252525] text-black dark:text-white border-zinc-400`}
          value={movieTerm}
          onChange={(e) => setMovieTerm(e.target.value)}
        />
        <CustomBasicButton className={styles.searcBarButton}>
          <SearchIcon />
        </CustomBasicButton>
      </div>
    </form>
  );
};

SearchBar.displayName = "Global SearchBar";

export default SearchBar;
