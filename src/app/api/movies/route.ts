import { API_URL } from "@/_config";
import { MovieTypeTypes } from "@/_interfaces/movies/Movies.interface";
import { getMovies } from "@/_services/movies/GET/getMovies";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

    const { searchParams } = new URL(req.url);

    const searchTerm = searchParams.get("searchTerm");
    const page = Number(searchParams.get("page") || 1);
    const year = searchParams.get("year") ?? undefined;
    const type = searchParams.get("type") ?? undefined;
    if (!searchTerm) return NextResponse.json({ message: "Parámetro no definido" }, { status: 400 })
    if (typeof year !== 'undefined' && typeof year !== 'string') return NextResponse.json({ message: "Año con formato incorrecto" }, { status: 400 })
    if (typeof type !== 'undefined' && typeof type !== 'string') return NextResponse.json({ message: "Tipo con formato incorrecto" }, { status: 400 })

    if (!API_URL) return NextResponse.json({ message: "API_URL no definida" }, { status: 500 })

    const movieData = await getMovies({
        s: searchTerm,
        y: year,
        type: type as MovieTypeTypes,
        page,
    })

    if (!movieData.data) return NextResponse.json({ message: "Pelicula no encontrado" }, { status: 404 })
    return NextResponse.json(movieData)
}