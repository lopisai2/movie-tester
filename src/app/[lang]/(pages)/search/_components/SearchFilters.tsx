"use client";
import styles from "../styles.module.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/_components/ui/select";
import { Input } from "@/_components/ui/input";
import { useDebounce } from "@/_hooks/useDebounce";
import { FC, useState } from "react";
import { SearchFiltersI } from "../_interfaces/SearchFilters.interface";

const SearchFilters: FC<SearchFiltersI> = ({
  movieFilters,
  handleUpdateFilters,
}) => {
  const [yearInputError, setYearInputError] = useState("");
  const debounceInput = useDebounce(async ({ year }) => {
    const newYear = year as string;
    if (newYear.length !== 0 && newYear.length !== 4) return;
    handleUpdateFilters({
      year: newYear,
    });
  }, 500);

  const handleValidateYearInput = (value: string) => {
    if (value.length !== 0 && value.length !== 4) {
      setYearInputError("Año con formato incorrecto");
      return;
    }
    if (parseInt(value) < 1900 || parseInt(value) > new Date().getFullYear()) {
      setYearInputError("Año fuera de limite");
      return;
    }
    setYearInputError("");
    debounceInput({ year: value });
  };
  return (
    <div className={styles.searchPageMoviesFilters}>
      <h2 className='self-start text-left'>Filtros</h2>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <label className='text-black dark:text-white'>Tipo</label>
        <Select
          onValueChange={(value) => handleUpdateFilters({ type: value })}
          defaultValue={movieFilters.type}
        >
          <SelectTrigger className={styles.searchFiltersSelect}>
            <SelectValue placeholder='Seleccionar un tipo' />
          </SelectTrigger>
          <SelectContent className={styles.searchFiltersSelectItems}>
            <SelectItem value='all'>Todos</SelectItem>
            <SelectItem value='movie'>Peliculas</SelectItem>
            <SelectItem value='series'>Series</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='mb-4'>
        <label className='text-black dark:text-white'>Año</label>
        <Input
          type='number'
          placeholder='Año'
          defaultValue={movieFilters.year}
          max={4}
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
      </div>
    </div>
  );
};

export default SearchFilters;
