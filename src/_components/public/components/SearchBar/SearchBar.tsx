"use client";
import CustomBasicButton from "@/_UI/Basic/CustomBasicButton/CustomBasicButton";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import styles from "./styles.module.css";

const SearchBar: FC = () => {
  const [movieTerm, setMovieTerm] = useState("");
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
      <input
        type='text'
        placeholder='Avengers, Batman...'
        value={movieTerm}
        onChange={(e) => setMovieTerm(e.target.value)}
      />
      <CustomBasicButton>Buscar</CustomBasicButton>
    </form>
  );
};

SearchBar.displayName = "Global SearchBar";

export default SearchBar;
