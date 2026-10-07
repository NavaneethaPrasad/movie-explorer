"use client";

import { Genre } from "@/types/genre";

interface Props {
  genres: Genre[];
  selectedGenre: number | null;
  onSelect: (id: number | null) => void;
}

export default function GenreFilter({
  genres,
  selectedGenre,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => onSelect(null)}
        className={`rounded-full border px-5 py-2 transition
        ${
          selectedGenre === null
            ? "bg-indigo-600 border-indigo-600 text-white"
            : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
        }`}
      >
        All
      </button>

      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => onSelect(genre.id)}
          className={`rounded-full border px-5 py-2 transition
          ${
            selectedGenre === genre.id
              ? "bg-indigo-600 border-indigo-600 text-white"
              : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}