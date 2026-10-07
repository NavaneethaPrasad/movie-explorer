import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list",
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch genres" },
      { status: 500 }
    );
  }

  const data = await response.json();

  return NextResponse.json(data.genres);
}