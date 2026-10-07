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
            ? "bg-primary border-primary text-primary-foreground"
            : "bg-card border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"
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
              ? "bg-primary border-primary text-primary-foreground"
              : "bg-card border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}