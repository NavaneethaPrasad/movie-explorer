import Image from "next/image";
import { Movie } from "@/types/movie";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  movie: Movie;
  trailer?: {
    key: string;
  };
}

const Hero = ({ movie, trailer }: HeroProps) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <section className="relative h-[450px] overflow-hidden rounded-xl">
      <Image
        src={imageUrl}
        alt={movie.title}
        fill
        priority
        className="object-cover object-top"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      <div className="relative flex h-full max-w-2xl flex-col justify-center px-10 text-white">
      <h1 className="mb-4 text-6xl font-extrabold uppercase tracking-wide">
        {movie.title}
      </h1>

      <div className="mb-5 flex items-center gap-5 text-lg text-gray-200">
        <span className="flex items-center gap-1">
          ⭐ {movie.vote_average.toFixed(1)}
        </span>

        <span>{movie.release_date?.split("-")[0]}</span>
      </div>

      <p className="mb-8 max-w-xl text-lg leading-8 text-gray-200">
        {movie.overview}
      </p>

      <div className="flex gap-4">
        <a
          href={
            trailer
              ? `https://www.youtube.com/watch?v=${trailer.key}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="h-12 bg-indigo-600 px-8 text-base hover:bg-indigo-700">
            Watch Trailer
          </Button>
        </a>

      <Link href={`/movies/${movie.id}`}>
        <Button
          variant="secondary"
          className="h-12 rounded-lg bg-white px-8 text-base font-semibold text-black hover:bg-gray-200"
        >
          View Details
        </Button>
      </Link> 
      </div>
    </div>
    </section>
  );
};

export default Hero;