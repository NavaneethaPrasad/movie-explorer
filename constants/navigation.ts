import {
  Home,
  Search,
  Heart,
  Bookmark,
  Moon,
  CircleHelp,
  User,
} from "lucide-react";

export const navigationItems = [
  {
    icon: Home,
    label: "Home",
    route: "/",
  },
  {
    icon: Search,
    label: "Search",
    route: "/search",
  },
  {
    icon: Heart,
    label: "Favorites",
    route: "/favorites",
  },
  {
    icon: Bookmark,
    label: "Watchlist",
    route: "/watchlist",
  },
];

export const bottomNavigationItems = [
  {
    icon: Moon,
    label: "Dark Mode",
    route: "#",
  },
  {
    icon: User,
    label: "Profile",
    route: "/profile",
  },
  {
    icon: CircleHelp,
    label: "Help",
    route: "/help",
  },
];