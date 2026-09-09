import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-20 text-center text-white">
      <h1 className="mb-4 text-5xl font-bold">
        Discover Your Next Favorite Movie
      </h1>

      <p className="mb-8 max-w-2xl text-slate-300">
        Explore trending, popular and top-rated movies from around the world.
      </p>

      <div className="relative w-full max-w-xl">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

        <Input
          placeholder="Search movies..."
          className="h-12 rounded-full pl-12 text-black"
        />
      </div>
    </section>
  );
};

export default Hero;