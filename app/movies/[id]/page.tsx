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

  const results = await Promise.allSettled([
    getMovieDetails(id),
    getMovieCredits(id),
    getSimilarMovies(id),
  ]);

  const movie =
    results[0].status === "fulfilled"
      ? results[0].value
      : null;

  const credits =
    results[1].status === "fulfilled"
      ? results[1].value
      : { cast: [] };

  const similarMovies =
    results[2].status === "fulfilled"
      ? results[2].value
      : [];

  if (!movie) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020817] text-white">
        <h1 className="text-2xl font-semibold">
          Movie details are currently unavailable.
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen space-y-12 bg-[#020817] p-6">
      <MovieDetailsHero movie={movie} />
      <CastSection cast={credits.cast} />
      <SimilarMovies movies={similarMovies} />
    </main>
  );
}