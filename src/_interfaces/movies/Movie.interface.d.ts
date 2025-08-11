export interface MovieResultI {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: RatingI[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

export interface RatingI {
    Source: string;
    Value: string;
}


export interface MovieGetI {
    /**
     * El id de la pelicula
     */
    i: string;
    /**
     * El titulo de la pelicula
     */
    t?: string
    /**
     * La sinopsis de la pelicula
     */
    plot?: 'full' | 'short'
}

export interface MovieGetResponseI {
    data: MovieResultI | null,
    success: boolean,
    status: number | string
}