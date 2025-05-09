/**
 * Utility functions for image processing and optimization
 */

/**
 * Creates a path to the WebP version of an image
 * @param jpgPath Path to the original JPG image
 * @returns Path to the WebP version
 */
export const getWebpPath = (jpgPath: string): string => {
  if (!jpgPath) return '';
  const basePath = jpgPath.substring(0, jpgPath.lastIndexOf('.'));
  const fileName = basePath.substring(basePath.lastIndexOf('/') + 1);
  return `/images/webp/${fileName}.webp`;
};

/**
 * Transforms a regular image path to a tiny placeholder path
 * This would typically be a very small, blurred version of the image
 * @param imagePath Path to the original image
 * @returns Path to the placeholder image
 */
export const getPlaceholderPath = (imagePath: string): string => {
  // For now this is a simple transformation
  // In a real implementation, you would have a set of actual tiny placeholder images
  if (!imagePath) return '';
  const basePath = imagePath.substring(0, imagePath.lastIndexOf('.'));
  return `${basePath}-placeholder.jpg`;
}; 