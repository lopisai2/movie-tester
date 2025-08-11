import { fetchServerCreate, OMDB_API_KEY } from "@/_config"
import { MoviesGetI, MoviesGetResponseI, MoviesResultI, MoviesResultSearchI } from "@/_interfaces/movies/Movies.interface"

/**
 * Se recupera un arreglo de las peliculas que coincidan con los parametros de búsqueda 
 * y ademas el total de coincidencias
 * @param obj los parametros para la búsqueda
 * @returns 
 */
export const getMovies = async ({
    s,
    y,
    type,
    page = 1,
}: MoviesGetI): Promise<MoviesGetResponseI> => {
    const res = await fetchServerCreate.get<unknown[]>("", {
        params: {
            apikey: OMDB_API_KEY,
            s,
            y,
            page,
            type,
        }
    })

    const moviesData = res.data.data as unknown as Partial<MoviesResultI>

    const mappedSearchData = moviesData?.Search?.map((item) => {
        const newItem = item as unknown as MoviesResultSearchI
        return {
            Title: newItem.Title,
            Year: newItem.Year,
            Poster: newItem.Poster,
            imdbID: newItem.imdbID,
            Type: newItem.Type,
        }
    }) ?? []

    return {
        data: {
            totalResults: moviesData.totalResults ?? "0",
            Search: mappedSearchData,
        },
        success: res.success,
        status: res.status,
    }
}