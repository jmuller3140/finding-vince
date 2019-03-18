import filmJson from '../assets/data/filmInfo'

export const formatURLString = (url) => {
  return url.title.toLowerCase().replace(/\(|\)|\:|\./g, "").replace(/\s+/g, '-')
}

export const getFilmInstance = (query) => {
  const selectedFilm = filmJson.filmInfo.find(filmObj => {
    const filmValues = Object.values(filmObj)[0]
    return filmValues._id === query.id
  })
  const key = Object.keys(selectedFilm)[0]
  return selectedFilm[key]
}