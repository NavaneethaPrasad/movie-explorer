import Link from "next/link";
import { Film } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  navigationItems,
  bottomNavigationItems,
} from "@/constants/navigation";
import ThemeToggle from "@/components/theme/ThemeToggle";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-border bg-card">
      {/* Logo */}
      <div className="border-b border-border px-6 py-8">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-red-500 p-2">
            <Film className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-foreground">
              Movie Explorer
            </h1>

            <p className="text-sm text-muted-foreground">
              Discover Movies
            </p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col gap-2 px-4 py-6">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.route}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              <Icon className="h-5 w-5" />

              <span className="font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="mt-auto px-4 pb-6">
        <Separator className="mb-5" />
        <div className="mb-4">
          <ThemeToggle />
        </div>
        <nav className="flex flex-col gap-2">
          {bottomNavigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.route}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-5 w-5" />

                <span className="font-medium">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;