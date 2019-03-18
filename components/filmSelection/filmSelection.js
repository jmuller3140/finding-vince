import films from '../../assets/data/filmInfo'
import Link from 'next/link'
import { formatURLString } from '../utils'
const FilmSelectionComponent = () => {
  return (
    films.filmInfo.map(film => {
      const values = Object.values(film)[0]
      return (
        <Link href={`/film?id=${values._id}`} as={`/film/${values._id}`}>
          <div>
            <div height='200px' width='200px'>{values.title}</div>
          </div>
        </Link>
      )
    })
  )
}

export default FilmSelectionComponent