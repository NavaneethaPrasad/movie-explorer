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
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

      <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search movies..."
      className="h-14 rounded-full border border-slate-600 bg-[#0f172a] pl-12 text-white placeholder:text-slate-400 focus:border-indigo-500"
    />
    </div>
  );
};

export default SearchBar;