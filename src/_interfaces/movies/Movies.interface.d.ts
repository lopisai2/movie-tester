export interface MoviesResultI {
    Search: MoviesResultSearchI[];
    totalResults: string;
    Response: string;
}

export interface MoviesResultSearchI {
    Title: string;
    Year: string;
    imdbID: string;
    Type: Type;
    Poster: string;
}

export enum Type {
    Movie = "movie",
    Series = "series",
}

export type MovieTypeTypes = 'movie' | 'series' | 'episode';

export interface MoviesGetI {
    /**
     * El nombre de la pelicula
     */
    s: string;
    /**
     * El año de la pelicula
     */
    y?: string;
    /**
     * La paginacion para la búsqueda
     */
    page?: number;
    /**
     * El tipo de pelicula: movie, series, episode
     */
    type?: MovieTypeTypes;
}

export interface MoviesGetResponseI {
    data: {
        totalResults: string,
        Search: MoviesResultSearchI[],
    } | null,
    success: boolean,
    status: number | string
}
