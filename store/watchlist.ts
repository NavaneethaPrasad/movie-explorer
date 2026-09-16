import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Movie } from "@/types/movie";

interface WatchlistStore {
  watchlist: Movie[];

  hasHydrated: boolean;

  setHasHydrated: (state: boolean) => void;

  addWatchlist: (movie: Movie) => void;

  removeWatchlist: (id: number) => void;

  isInWatchlist: (id: number) => boolean;
}

export const useWatchlistStore = create<WatchlistStore>()(
  persist(
    (set, get) => ({
      watchlist: [],

      hasHydrated: false,

      setHasHydrated: (state) =>
        set({
          hasHydrated: state,
        }),

      addWatchlist: (movie) =>
        set((state) => {
          if (
            state.watchlist.some(
              (watchlistMovie) => watchlistMovie.id === movie.id
            )
          ) {
            return state;
          }

          return {
            watchlist: [...state.watchlist, movie],
          };
        }),

      removeWatchlist: (id) =>
        set((state) => ({
          watchlist: state.watchlist.filter(
            (movie) => movie.id !== id
          ),
        })),

      isInWatchlist: (id) =>
        get().watchlist.some(
          (movie) => movie.id === id
        ),
    }),
    {
      name: "watchlist-movies",

      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);