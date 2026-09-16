import { Movie } from "@/types/movie";
import MovieGrid from "./MovieGrid";

interface SimilarMoviesProps {
  movies: Movie[];
}

const SimilarMovies = ({ movies }: SimilarMoviesProps) => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-white">
        Similar Movies
      </h2>

      <MovieGrid movies={movies} />
    </section>
  );
};

export default SimilarMovies;