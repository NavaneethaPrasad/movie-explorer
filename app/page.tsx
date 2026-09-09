import Hero from "@/components/layout/Hero";
import TrendingSection from "@/components/movie/TrendingSection";
import { getTrendingMovies } from "@/lib/api/movies";

export default async function Home() {
  const movies = await getTrendingMovies();

  return (
    <>
      <Hero />
      <TrendingSection movies={movies} />
    </>
  );
}