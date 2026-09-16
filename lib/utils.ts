import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImageUrl = (
  path: string,
  size: "w500" | "original" = "w500"
) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};