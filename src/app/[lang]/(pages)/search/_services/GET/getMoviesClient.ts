import { fetchClientCreate } from "@/_config"
import { MoviesResultI } from "@/_interfaces/movies/Movies.interface"

export const getMoviesClient = async ({
    searchTerm,
    page,
    year,
    type,
}: {
    searchTerm: string,
    year?: string,
    type?: string,
    page: number
}) => {    
    const res = await fetchClientCreate.get<MoviesResultI>(`/movies`, {
        params: {
            searchTerm,
            page,
            year: year || undefined,
            type: type || undefined,
        }
    })
    return res.data.data
}