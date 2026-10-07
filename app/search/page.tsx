"use client";

import { useEffect, useState } from "react";

import SearchBar from "@/components/search/SearchBar";
import GenreFilter from "@/components/search/GenreFilter";
import SearchResults from "@/components/search/SearchResults";

import { Movie } from "@/types/movie";
import { Genre } from "@/types/genre";

import {
  searchMovies,
  getGenres,
  getMoviesByGenre,
  getTrendingMoviesClient,
} from "@/lib/api/movies";

import useDebounce from "@/hooks/useDebounce";


export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenre, setSelectedGenre] =
    useState<number | null>(null);

  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);  

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await getGenres();
        setGenres(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadGenres();
  }, []);

  useEffect(() => {
    const loadTrending = async () => {
      const data = await getTrendingMoviesClient();
      setTrendingMovies(data);
    };

    loadTrending();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (debouncedQuery.trim()) {
          const data = await searchMovies(debouncedQuery);
          setMovies(data);
          return;
        }

        if (selectedGenre !== null) {
          const data = await getMoviesByGenre(
            selectedGenre
          );
          setMovies(data);
          return;
        }

        setMovies([]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [debouncedQuery, selectedGenre]);

  const displayedMovies =
    query.trim() || selectedGenre !== null
      ? movies
      : trendingMovies;

  return (
    <main className="space-y-10">
      <div>
        <h1 className="mb-2 text-4xl font-bold">Search Movies</h1>

        <p className="text-muted-foreground">
          Search your favorite movies or browse by genre.
        </p>
      </div>

      <SearchBar
        value={query}
        onChange={(value) => {
          setQuery(value);

          if (value.trim()) {
            setSelectedGenre(null);
          }

          if (!value.trim() && selectedGenre === null) {
            setMovies([]);
          }
        }}
      />

      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={(id) => {
          setSelectedGenre(id);

          if (id !== null) {
            setQuery("");
          }
        }}
      />

      <SearchResults movies={displayedMovies} />
    </main>
  );
}