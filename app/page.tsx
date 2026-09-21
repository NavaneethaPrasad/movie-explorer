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
  const results = await Promise.allSettled([
  getTrendingMovies(),
  getPopularMovies(),
  getTopRatedMovies(),
]);

const trending =
  results[0].status === "fulfilled"
    ? results[0].value
    : [];

const popular =
  results[1].status === "fulfilled"
    ? results[1].value
    : [];

const topRated =
  results[2].status === "fulfilled"
    ? results[2].value
    : [];

const heroMovie = trending[0];

  const trailer = heroMovie
    ? await getMovieTrailer(heroMovie.id.toString())
    : null;
    
  return (
    <main className="space-y-12">
      <HomeHero movie={movies[0]} />
            <TrendingSection
        title="Trending Movies"
        movies={movies}
      />

      <TrendingSection
        title="Popular Movies"
        movies={popular}
      />

      <TrendingSection
        title="Top Rated Movies"
        movies={topRated}
      />
      <Footer />
    </main>
  );
}