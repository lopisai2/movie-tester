import { API_URL } from "@/_config";
import { getMovie } from "@/_services/movies/GET/getMovie";
import { NextResponse } from "next/server";

export async function GET(req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    if (!API_URL) return NextResponse.json({ message: "API_URL no definida" }, { status: 500 })

    const movieData = await getMovie({
        i: id,
    })

    if (!movieData.data) return NextResponse.json({ message: "Pelicula no encontrado" }, { status: 404 })
    return NextResponse.json(movieData)
}