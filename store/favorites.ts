import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Movie } from "@/types/movie";

interface FavoriteStore {
  favorites: Movie[];

  hasHydrated: boolean;

  setHasHydrated: (state: boolean) => void;

  addFavorite: (movie: Movie) => void;

  removeFavorite: (id: number) => void;

  isFavorite: (id: number) => boolean;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      hasHydrated: false,

      setHasHydrated: (state) =>
        set({
          hasHydrated: state,
        }),

      addFavorite: (movie) =>
        set((state) => {
          if (
            state.favorites.some(
              (favorite) => favorite.id === movie.id
            )
          ) {
            return state;
          }

          return {
            favorites: [...state.favorites, movie],
          };
        }),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (movie) => movie.id !== id
          ),
        })),

      isFavorite: (id) =>
        get().favorites.some(
          (movie) => movie.id === id
        ),
    }),
    {
      name: "favorite-movies",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);