"use client";
import styles from "../../styles.module.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/_components/ui/select";
import { Input } from "@/_components/ui/input";
import { FC } from "react";
import { SearchFiltersI } from "../../_interfaces/SearchFilters.interface";
import { useSearchFilters } from "./hooks/useSearchFilters";

const SearchFilters: FC<SearchFiltersI> = ({
  movieFilters,
  handleUpdateFilters,
}) => {
  const { yearInputError, handleValidateYearInput } = useSearchFilters({
    handleUpdateFilters,
  });
  return (
    <section
      aria-labelledby='filter-title'
      className={styles.searchPageMoviesFilters}
    >
      <h2 id='filter-title' className='self-start text-left'>
        Filtros
      </h2>
      <fieldset
        style={{
          marginBottom: 16,
        }}
      >
        <legend className='sr-only'>Tipo</legend>
        <label htmlFor='filter-type' className='text-black dark:text-white'>
          Tipo
        </label>
        <Select
          onValueChange={(value) => handleUpdateFilters({ type: value })}
          defaultValue={movieFilters.type}
        >
          <SelectTrigger
            id='filter-type'
            className={styles.searchFiltersSelect}
          >
            <SelectValue placeholder='Seleccionar un tipo' />
          </SelectTrigger>
          <SelectContent className={styles.searchFiltersSelectItems}>
            <SelectItem value='all'>Todos</SelectItem>
            <SelectItem value='movie'>Peliculas</SelectItem>
            <SelectItem value='series'>Series</SelectItem>
          </SelectContent>
        </Select>
      </fieldset>
      <fieldset className='mb-4'>
        <legend className='sr-only'>Año</legend>
        <label htmlFor='year' className='text-black dark:text-white'>
          Año
        </label>
        <Input
          id='year'
          type='number'
          placeholder='Año'
          defaultValue={movieFilters.year}
          maxLength={4}
          className='text-black dark:text-white selection:bg-[var(--primary-color)]'
          onChange={(e) => handleValidateYearInput(e.target.value)}
        />
        {yearInputError && (
          <span
            style={{
              color: "var(--negative)",
              fontWeight: 400,
              fontSize: 12,
            }}
          >
            {yearInputError}
          </span>
        )}
      </fieldset>
    </section>
  );
};

export default SearchFilters;
