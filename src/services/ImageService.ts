// ImageService.ts

// Funkcja, która pobiera obrazek i zwraca go jako URL
export const loadImage = (imagePath: string): string => {
  const imageUrl = require(`/public/image/${imagePath}`).default;
  return imageUrl;
};
