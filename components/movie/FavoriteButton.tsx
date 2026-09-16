"use client";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Movie } from "@/types/movie";
import { useFavoriteStore } from "@/store/favorites";

interface FavoriteButtonProps {
  movie: Movie;
}

const FavoriteButton = ({ movie }: FavoriteButtonProps) => {
  const {
    addFavorite,
    removeFavorite,
    isFavorite,
    hasHydrated,
  } = useFavoriteStore();

  const favorite =
  hasHydrated && isFavorite(movie.id);

  const handleClick = () => {
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={`h-12 rounded-lg px-8 ${
        favorite
          ? "bg-red-600 hover:bg-red-700"
          : "bg-indigo-600 hover:bg-indigo-700"
      }`}
    >
      <Heart
        className={`mr-2 h-5 w-5 ${
          favorite ? "fill-white" : ""
        }`}
      />

      {favorite ? "Favorited" : "Favorite"}
    </Button>
  );
};

export default FavoriteButton;