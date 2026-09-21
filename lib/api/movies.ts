import { Movie } from "@/types/movie";

export const getTrendingMovies = async (): Promise<Movie[]> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week",
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
      next: {
        revalidate: 3600,
      }
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies");
  }

  const data = await response.json();

  return data.results;
};

export const getMovieDetails = async (id: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
      next: {
        revalidate: 3600,
      }
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie");
  }

  return response.json();
};

export const getMovieCredits = async (id: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
      next: {
        revalidate: 3600,
      }
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch movie credits");
  }

  return response.json();
};
export const getSimilarMovies = async (id: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
      next: {
        revalidate: 3600,
      }
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch similar movies");
  }

  const data = await response.json();

  return data.results;
};

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular",
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
      next: {
        revalidate: 3600,
      }
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  const data = await response.json();

  return data.results;
};

export const getTopRatedMovies = async (): Promise<Movie[]> => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated",
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
      next: {
        revalidate: 3600,
      }
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch top rated movies");
  }

  const data = await response.json();

  return data.results;
};

export const getMovieTrailer = async (id: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
        accept: "application/json",
      },
      next: {
        revalidate: 3600,
      }
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trailer");
  }

  const data = await response.json();

  const trailer = data.results.find(
    (video: {
      type: string;
      site: string;
    }) =>
      video.type === "Trailer" &&
      video.site === "YouTube"
  );

  return trailer;
};

export const searchMovies = async (
  query: string
): Promise<Movie[]> => {
  if (!query.trim()) {
    return [];
  }

  const response = await fetch(
    `/api/search?query=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    console.error(await response.text());
    return [];
  }

  return response.json();
};