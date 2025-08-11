import { fetchClientCreate } from "@/_config"
import { MovieResultI } from "@/_interfaces/movies/Movie.interface"

export const getMovieClient = async (movieId: string) => {
    const res = await fetchClientCreate.get<MovieResultI>(`/movies/${movieId}`)
    return res.data.data
}