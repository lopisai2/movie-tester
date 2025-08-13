import { fetchClientCreate } from "@/_config";
import { MoviesResultI } from "@/_interfaces/movies/Movies.interface";

interface GetMoviesClientI {
  searchTerm: string;
  year?: string;
  type?: string;
  page: number;
}

export const getMoviesClient = async ({
  searchTerm,
  page,
  year,
  type,
}: GetMoviesClientI) => {
  const res = await fetchClientCreate.get<MoviesResultI>(`/movies`, {
    params: {
      searchTerm,
      page,
      year: year || undefined,
      type: type || undefined,
    },
  });
  return res.data.data;
};
