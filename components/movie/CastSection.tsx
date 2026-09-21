import Image from "next/image";
import { Cast } from "@/types/movie";
import { getImageUrl } from "@/lib/utils";

interface CastSectionProps {
  cast: Cast[];
}

const CastSection = ({ cast }: CastSectionProps) => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-white">
        Cast
      </h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {cast.slice(0, 12).map((actor) => (
          <div
            key={actor.id}
            className="overflow-hidden rounded-xl bg-slate-900 transition hover:-translate-y-1"
          >
            <div className="relative h-60">
              <Image
                src={getImageUrl(actor.profile_path)}
                alt={actor.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-3">
              <h3 className="truncate font-semibold text-white">
                {actor.name}
              </h3>

              <p className="truncate text-sm text-gray-400">
                {actor.character}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CastSection;