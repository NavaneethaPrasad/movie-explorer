"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({
  value,
  onChange,
}: SearchBarProps) => {
  return (
    <div className="relative max-w-2xl">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

      <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search movies..."
      className="h-14 rounded-full border-border bg-background pl-12 text-foreground placeholder:text-muted-foreground focus:border-indigo-500"
    />
    </div>
  );
};

export default SearchBar;