"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";

import { Movie } from "@/types/movie";
import { getImageUrl } from "@/lib/utils";
import { useFavoriteStore } from "@/store/favorites";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const {
  addFavorite,
  removeFavorite,
  isFavorite,
  hasHydrated,
} = useFavoriteStore();

const favorite =
  hasHydrated && isFavorite(movie.id);

const handleFavorite = () => {
  if (favorite) {
    removeFavorite(movie.id);
  } else {
    addFavorite(movie);
  }
};
  return (
   <div className="group w-full overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-[285px] overflow-hidden">
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
          onClick={handleFavorite}
          className={`absolute right-3 top-3 rounded-full p-2 backdrop-blur transition-all duration-300
            ${
              favorite
                ? "bg-red-500 text-white opacity-100"
                : "bg-white/20 text-white opacity-0 group-hover:opacity-100 hover:bg-red-500"
            }`}
        >
          <Heart
            size={18}
            className={favorite ? "fill-white" : ""}
          />
        </button>

        {/* View Details */}
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Link
            href={`/movies/${movie.id}`}
            className="inline-flex items-center justify-center rounded-full border border-white bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
          >
            View Details
          </Link>
        </div>
      </div>

      <div className="space-y-2 p-3">
        <h3 className="truncate text-base font-semibold text-gray-900">
          {movie.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            {movie.vote_average.toFixed(1)}
          </span>Step 4

          <span>
            {new Date(movie.release_date).getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;