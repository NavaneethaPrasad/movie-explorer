import MovieGrid from "../movie/MovieGrid";
import { Movie } from "@/types/movie";

interface SearchResultsProps {
  movies: Movie[];
}

const SearchResults = ({
  movies,
}: SearchResultsProps) => {
  if (movies.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-slate-400">
          Search for a movie to see results.
        </p>
      </div>
    );
  }

  return <MovieGrid movies={movies} />;
};

export default SearchResults;