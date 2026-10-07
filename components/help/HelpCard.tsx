import { LucideIcon } from "lucide-react";

interface HelpCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const HelpCard = ({
  icon: Icon,
  title,
  description,
}: HelpCardProps) => {
  return (
    <div className="rounded-xl border border-border bg-card p-6 transition hover:shadow-lg">
      <Icon className="mb-4 h-8 w-8 text-primary" />

      <h3 className="mb-2 text-xl font-semibold text-foreground">
        {title}
      </h3>

      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default HelpCard;