import CastSection from "@/components/movie/CastSection";
import {
  getMovieCredits,
  getMovieDetails,
  getSimilarMovies,
} from "@/lib/api/movies";
import MovieDetailsHero from "@/components/movie/MovieDetailsHero";
import SimilarMovies from "@/components/movie/SimilarMovies";


interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MovieDetails({
  params,
}: PageProps) {
  const { id } = await params;
  const [movie, credits,similarMovies] = await Promise.all([
    getMovieDetails(id),
    getMovieCredits(id),
    getSimilarMovies(id),
  ]);

  return (
    <main className="min-h-screen space-y-12 bg-[#020817] p-6">
      <MovieDetailsHero movie={movie} />
      <CastSection cast={credits.cast} />
      <SimilarMovies movies={similarMovies} />
      {/* We'll add these next */}
      {/* Overview */}
      {/* Similar Movies */}
    </main>
  );
}