import { API_URL } from "@/_config";
import { getMovies } from "@/_services/movies/GET/getMovies";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

    const { searchParams } = new URL(req.url);

    const searchTerm = searchParams.get("searchTerm");
    const page = Number(searchParams.get("page") || 1);
    if (!searchTerm) return NextResponse.json({ message: "Parámetro no definido" }, { status: 400 })

    if (!API_URL) return NextResponse.json({ message: "API_URL no definida" }, { status: 500 })

    const movieData = await getMovies({
        s: searchTerm,
        page,
    })

    if (!movieData.data) return NextResponse.json({ message: "Pelicula no encontrado" }, { status: 404 })
    return NextResponse.json(movieData)
}