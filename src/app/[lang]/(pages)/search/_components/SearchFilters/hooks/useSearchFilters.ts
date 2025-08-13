import { useDebounce } from "@/_hooks/useDebounce";
import { useState } from "react";
import { SearchFiltersI } from "../../../_interfaces/SearchFilters.interface";

/**
 * Permite manejar los filtros de año aplicando un debounce y mostrar mensajes de error
 * @returns 
 */
export const useSearchFilters = ({
  handleUpdateFilters,
}: Pick<SearchFiltersI, "handleUpdateFilters">) => {
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
  return {
    yearInputError,
    handleValidateYearInput,
  };
};
