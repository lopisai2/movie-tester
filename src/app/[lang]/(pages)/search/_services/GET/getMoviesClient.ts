import { fetchClientCreate } from "@/_config"
import { MoviesResultI } from "@/_interfaces/movies/Movies.interface"

export const getMoviesClient = async ({
    searchTerm,
    page,
}: {
    searchTerm: string,
    page: number
}) => {
    const res = await fetchClientCreate.get<MoviesResultI>(`/movies`, {
        params: {
            searchTerm,
            page,
        }
    })
    return res.data.data
}