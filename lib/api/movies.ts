import { Movie } from "@/types/movie";

export const getTrendingMovies = async (): Promise<Movie[]> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week",
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
      cache: "no-store", // for development
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  const data = await response.json();

  return data.results;
};