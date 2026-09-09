import Link from "next/link";
import { Film } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  navigationItems,
  bottomNavigationItems,
} from "@/constants/navigation";

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-background p-6">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-2">
        <Film className="h-7 w-7 text-red-500" />
        <h1 className="text-xl font-bold">Movie Explorer</h1>
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col gap-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.route}
              className="flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-muted"
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <Separator className="my-5" />

        <nav className="flex flex-col gap-2">
          {bottomNavigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.route}
                className="flex items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-muted"
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;