import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const getImageUrl = (path: string) =>
  `${IMAGE_BASE_URL}${path}`;