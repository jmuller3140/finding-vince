export const formatURLString = (url) => {
  return url.title.toLowerCase().replace(/\(|\)|\:|\./g, "").replace(/\s+/g, '-')
}