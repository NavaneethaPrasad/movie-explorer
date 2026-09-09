import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";

import { Movie } from "@/types/movie";
import { getImageUrl } from "@/lib/utils";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="group w-52 overflow-hidden rounded-xl bg-card shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Favourite */}
        <button
          className="absolute right-3 top-3 rounded-full bg-white/20 p-2 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 hover:bg-red-500"
        >
          <Heart size={18} />
        </button>

        {/* View Details */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Link
            href={`/movies/${movie.id}`}
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-gray-200"
          >
            View Details
          </Link>
        </div>
      </div>

      <div className="space-y-2 p-4">
        <h3 className="truncate text-lg font-semibold">
          {movie.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {movie.vote_average.toFixed(1)}
          </span>

          <span>
            {new Date(movie.release_date).getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;