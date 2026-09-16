import Image from "next/image";
import { Star, Calendar, Clock } from "lucide-react";
import { Movie } from "@/types/movie";
import { getImageUrl } from "@/lib/utils";
import FavoriteButton from "./FavoriteButton";
import WatchlistButton from "./WatchlistButton";

interface MovieDetailsHeroProps {
  movie: Movie;
}

const MovieDetailsHero = ({ movie }: MovieDetailsHeroProps) => {
  return (
    <section className="relative overflow-hidden rounded-2xl">
      {/* Backdrop */}
      <div className="relative h-[520px]">
        <Image
          src={getImageUrl(movie.backdrop_path, "original")}
          alt={movie.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

        <div className="relative z-10 flex h-full items-center gap-10 px-10">
          {/* Poster */}
          <div className="relative hidden h-[380px] w-[260px] overflow-hidden rounded-xl shadow-2xl md:block">
            <Image
              src={getImageUrl(movie.poster_path)}
              alt={movie.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-2xl text-white">
            <h1 className="mb-5 text-5xl font-bold">
              {movie.title}
            </h1>

            <div className="mb-5 flex flex-wrap items-center gap-6 text-gray-300">
              <span className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                {movie.vote_average.toFixed(1)}
              </span>

              <span className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {movie.release_date?.split("-")[0]}
              </span>

              {movie.runtime && (
                <span className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {movie.runtime} min
                </span>
              )}
            </div>

            {movie.genres && (
              <div className="mb-6 flex flex-wrap gap-3">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            <p className="mb-8 max-w-xl text-lg leading-8 text-gray-200">
              {movie.overview}
            </p>

            <div className="flex gap-4">
              <FavoriteButton movie={movie} />

              <WatchlistButton movie={movie} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsHero;