import films from '../../assets/data/filmInfo'
import Link from 'next/link'
const FilmSelectionComponent = () => {
  return (
    films.filmInfo.map(film => {
      const values = Object.values(film)[0]
      return (
        <div className='d-flex align-items-start w-25 flex-direction-column'>
          <div height='200px' width='200px'>{values.title}</div>
        </div>
      )
    })
  )
}

export default FilmSelectionComponent