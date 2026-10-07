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
      className={`h-12 rounded-lg border px-8 text-white transition-all duration-300 ${
        inWatchlist
          ? "border-green-500 bg-green-600 hover:bg-green-700"
          : "border-white/40 bg-white/10 hover:bg-white/20"
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