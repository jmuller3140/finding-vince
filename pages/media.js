import { Fragment } from 'react'
import { NavbarComponent, FilmSelectionComponent, HeadComponent } from '../components'
const Media = () => {
  return (
    <Fragment>
      <HeadComponent title='Media' />
      <NavbarComponent />
      <FilmSelectionComponent />
    </Fragment>
  )
}

export default Media