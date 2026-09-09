import { Movie } from "@/types/movie";
import MovieGrid from "./MovieGrid";

interface TrendingSectionProps {
  movies: Movie[];
}

const TrendingSection = ({ movies }: TrendingSectionProps) => {
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-3xl font-bold">
        Trending Movies
      </h2>

      <MovieGrid movies={movies} />
    </section>
  );
};

export default TrendingSection;