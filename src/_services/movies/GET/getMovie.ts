import { fetchServerCreate, OMDB_API_KEY } from "@/_config"
import { MovieGetI, MovieGetResponseI, MovieResultI } from "@/_interfaces/movies/Movie.interface"

/**
 * Se recupera la informacion completa de una pelicula a partir de su id o titulo
 * @param obj los parametros para la búsqueda
 * @returns 
 */
export const getMovie = async ({
    t,
    i,
    plot = 'short',
}: MovieGetI): Promise<MovieGetResponseI> => {
    try {

        const res = await fetchServerCreate.get<unknown>("", {
            params: {
                apiKey: OMDB_API_KEY,
                t,
                i,
                plot,
            }
        })

        const movieData = res.data.data as unknown as MovieResultI       

        const mappedData: MovieResultI = {
            Title: movieData.Title,
            Year: movieData.Year,
            Rated: movieData.Rated,
            Released: movieData.Released,
            Runtime: movieData.Runtime,
            Genre: movieData.Genre,
            Director: movieData.Director,
            Writer: movieData.Writer,
            Actors: movieData.Actors,
            Plot: movieData.Plot,
            Language: movieData.Language,
            Country: movieData.Country,
            Awards: movieData.Awards,
            Poster: movieData.Poster,
            Ratings: movieData.Ratings,
            Metascore: movieData.Metascore,
            imdbRating: movieData.imdbRating,
            imdbVotes: movieData.imdbVotes,
            imdbID: movieData.imdbID,
            Type: movieData.Type,
            DVD: movieData.DVD,
            BoxOffice: movieData.BoxOffice,
            Production: movieData.Production,
            Website: movieData.Website,
            Response: movieData.Response,
        }

        return {
            data: mappedData,
            success: res.success,
            status: res.status,
        }
    } catch (error) {
        console.error(error)
        return {
            data: null,
            success: false,
            status: 400,
        }
    }
}