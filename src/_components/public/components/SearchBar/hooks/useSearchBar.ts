import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useSearchBar = () => {
  const searchParams = useSearchParams();
  const [searchInputError, setSearchInputError] = useState("");
  const [movieTerm, setMovieTerm] = useState("");
  const router = useRouter();

  const handleSearchMovie = (e: React.FormEvent) => {
    e.preventDefault();
    if (!movieTerm || !movieTerm.trim()) return setSearchInputError("Escibe un termino para buscar");
    if (movieTerm.length < 3)
      return setSearchInputError("La busqueda debe tener al menos 3 letras");
    setSearchInputError("");
    router.push(`/search?q=${encodeURIComponent(movieTerm)}`);
  };

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setMovieTerm(q);
  }, [searchParams]);

  return {
    movieTerm,
    searchInputError,
    setMovieTerm,
    handleSearchMovie,
  };
};
