"use client";

import MovieGrid from "@/components/movie/MovieGrid";
import { useFavoriteStore } from "@/store/favorites";

export default function FavoritesPage() {
  const favorites = useFavoriteStore((state) => state.favorites);

  return (
    <main className="space-y-8 p-6">
      <h1 className="text-4xl font-bold text-foreground">
        Favorites
      </h1>

      {favorites.length > 0 ? (
        <MovieGrid movies={favorites} />
      ) : (
        <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card">
          <p className="text-lg text-foreground">
            No favorite movies yet.
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            Add movies to your favorites from the details page.
          </p>
        </div>
      )}
    </main>
  );
}