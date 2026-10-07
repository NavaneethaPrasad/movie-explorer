import { CircleHelp } from "lucide-react";

const HelpHero = () => {
  return (
    <section className="rounded-2xl border border-border bg-card p-10">
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-primary p-3">
          <CircleHelp className="h-8 w-8 text-primary-foreground" />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-foreground">
            Help Center
          </h1>

          <p className="mt-2 text-muted-foreground">
            Find answers to common questions and learn how to use Movie
            Explorer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpHero;