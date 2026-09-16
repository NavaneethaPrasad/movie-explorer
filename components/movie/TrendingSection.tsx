import { Movie } from "@/types/movie";
import MovieGrid from "./MovieGrid";

interface TrendingSectionProps {
  title: string;
  movies: Movie[];
}

const TrendingSection = ({ title,movies, }: TrendingSectionProps) => {
  return (
    <section className="mt-12">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-indigo-500" />

        <h2 className="text-3xl font-bold tracking-tight text-white">
          {title}
        </h2>
      </div>
      <div className="mx-auto w-full">
        <MovieGrid movies={movies} />
      </div>
    </section>
  );
};

export default TrendingSection;