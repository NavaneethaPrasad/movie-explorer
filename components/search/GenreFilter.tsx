"use client";

const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Animation",
  "Crime",
  "Family",
  "Romance",
  "Sci-Fi",
  "Thriller",
];

const GenreFilter = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {genres.map((genre) => (
        <button
          key={genre}
          className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-sm text-white transition hover:border-indigo-500 hover:bg-indigo-600"
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;