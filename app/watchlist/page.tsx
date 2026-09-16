"use client";

import MovieGrid from "@/components/movie/MovieGrid";
import { useWatchlistStore } from "@/store/watchlist";

export default function WatchlistPage() {
  const { watchlist, hasHydrated } = useWatchlistStore();

  if (!hasHydrated) {
    return (
      <main className="space-y-8 p-6">
        <h1 className="text-4xl font-bold text-white">
          Watchlist
        </h1>

        <p className="text-slate-400">
          Loading...
        </p>
      </main>
    );
  }

  return (
    <main className="space-y-8 p-6">
      <h1 className="text-4xl font-bold text-white">
        Watchlist
      </h1>

      {watchlist.length > 0 ? (
        <MovieGrid movies={watchlist} />
      ) : (
        <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-slate-700">
          <p className="text-lg text-slate-400">
            Your watchlist is empty.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Add movies from the details page to watch later.
          </p>
        </div>
      )}
    </main>
  );
}