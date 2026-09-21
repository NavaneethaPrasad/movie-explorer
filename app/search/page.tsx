"use client";

import { useEffect, useState } from "react";

import SearchBar from "@/components/search/SearchBar";
import GenreFilter from "@/components/search/GenreFilter";
import SearchResults from "@/components/search/SearchResults";

import { searchMovies } from "@/lib/api/movies";
import { Movie } from "@/types/movie";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (!query.trim()) return;

    const fetchMovies = async () => {
      try {
        const results = await searchMovies(query);
        setMovies(results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [query]);

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
          if (!value.trim()) {
            setMovies([]);
          }
        }}
      />

      <GenreFilter />

      <SearchResults movies={movies} />
    </main>
  );
}