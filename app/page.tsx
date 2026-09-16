import HomeHero from "@/components/layout/HomeHero";
import TrendingSection from "@/components/movie/TrendingSection";
import { 
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getMovieTrailer 
} from "@/lib/api/movies";
import Footer from "@/components/layout/Footer";

export default async function Home() {
  const movies = await getTrendingMovies();
  const [trendingMovies, popularMovies, topRatedMovies] =
  await Promise.all([
    getTrendingMovies(),
    getPopularMovies(),
    getTopRatedMovies(),
  ]);

const heroMovie = trendingMovies[0];

const trailer = await getMovieTrailer(
  heroMovie.id.toString()
);
  return (
    <main className="space-y-12">
      <HomeHero movie={movies[0]} />
            <TrendingSection
        title="Trending Movies"
        movies={movies}
      />

      <TrendingSection
        title="Popular Movies"
        movies={popularMovies}
      />

      <TrendingSection
        title="Top Rated Movies"
        movies={topRatedMovies}
      />
      <Footer />
    </main>
  );
}