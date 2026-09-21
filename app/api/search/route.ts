import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query =
    request.nextUrl.searchParams.get("query");

  if (!query) {
    return NextResponse.json([]);
  }

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query
    )}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { message: "Failed to search movies" },
      { status: response.status }
    );
  }

  const data = await response.json();

  return NextResponse.json(data.results);
}