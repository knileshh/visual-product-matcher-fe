import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatSimilarity(similarity) {
  return `${(similarity * 100).toFixed(1)}%`;
}

export function truncateText(text, maxLength = 50) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export function getImageUrl(imagePath) {
  // If it's already a full URL, return as is
  if (imagePath?.startsWith('http')) {
    return imagePath;
  }
  // Otherwise, construct the full URL with API base
  const apiBase = import.meta.env.VITE_API_BASE_URL || 'https://vsearch.knileshh.com';
  return `${apiBase}/${imagePath}`;
}
