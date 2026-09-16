"use client";

import { Bookmark } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Movie } from "@/types/movie";
import { useWatchlistStore } from "@/store/watchlist";

interface WatchlistButtonProps {
  movie: Movie;
}

const WatchlistButton = ({ movie }: WatchlistButtonProps) => {
  const {
    addWatchlist,
    removeWatchlist,
    isInWatchlist,
    hasHydrated,
  } = useWatchlistStore();

  const inWatchlist =
    hasHydrated && isInWatchlist(movie.id);

  const handleClick = () => {
    if (inWatchlist) {
      removeWatchlist(movie.id);
    } else {
      addWatchlist(movie);
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      className={`h-12 rounded-lg border px-8 transition-all duration-300 ${
        inWatchlist
          ? "border-green-500 bg-green-600 text-white hover:bg-green-700 hover:text-white"
          : "border-white/50 bg-white/10 text-white hover:bg-white hover:text-black"
      }`}
    >
      <Bookmark
        className={`mr-2 h-5 w-5 ${
          inWatchlist ? "fill-white" : ""
        }`}
      />

      {inWatchlist ? "In Watchlist" : "Watchlist"}
    </Button>
  );
};

export default WatchlistButton;