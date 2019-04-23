import React, { Fragment } from 'react'
import './style.scss'
import Media from 'react-responsive'
import { FilmDetailsMaxComponent, FilmDetailsMediaComponent } from './index'
const FilmDetailsComponent = (props) => {
  return (
    <Fragment>
      <Media maxWidth={599}>
        <FilmDetailsMediaComponent {...props} />
      </Media>
      <Media minWidth={600}>
        <FilmDetailsMaxComponent {...props} />
      </Media>
    </Fragment>
  )
}

export default FilmDetailsComponent