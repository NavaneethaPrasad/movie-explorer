import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?with_genres=${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch movies" },
      { status: 500 }
    );
  }

  const data = await response.json();

  return NextResponse.json(data.results);
}