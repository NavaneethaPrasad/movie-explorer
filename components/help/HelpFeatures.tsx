import {
  Film,
  Search,
  Heart,
  Bookmark,
} from "lucide-react";

import HelpCard from "./HelpCard";

const HelpFeatures = () => {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold text-foreground">
        Getting Started
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <HelpCard
          icon={Film}
          title="Browse Movies"
          description="Explore trending, popular and top-rated movies."
        />

        <HelpCard
          icon={Search}
          title="Search Movies"
          description="Search movies instantly by title or browse by genre."
        />

        <HelpCard
          icon={Heart}
          title="Favorites"
          description="Save your favorite movies for quick access."
        />

        <HelpCard
          icon={Bookmark}
          title="Watchlist"
          description="Create a watchlist of movies you plan to watch later."
        />
      </div>
    </section>
  );
};

export default HelpFeatures;