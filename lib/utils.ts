import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const getImageUrl = (
  path?: string | null,
  size = "w500"
) => {
  if (!path) return "/placeholder.png";

  return `https://image.tmdb.org/t/p/${size}${path}`;
};