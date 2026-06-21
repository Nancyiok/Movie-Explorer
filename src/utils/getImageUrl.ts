export const getImageUrl = (relativePath: string | null, imageWidth: string = 'w500') => {
  const imageBase = import.meta.env.VITE_TMDB_IMAGE_BASE_PATH
  return relativePath ? `${imageBase}${imageWidth}${relativePath}` : ''
}
