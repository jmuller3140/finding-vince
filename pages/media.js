import { Fragment } from 'react'
import { NavbarComponent, FilmSelectionComponent, HeadComponent } from '../components'
const Media = () => {
  return (
    <Fragment>
      <HeadComponent title='Media Page' />
      <NavbarComponent />
      <FilmSelectionComponent />
    </Fragment>
  )
}

export default Media