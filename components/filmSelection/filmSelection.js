import React, { Fragment } from 'react'
import { FilmSelectionMaxComponent, FilmSelectionMediaComponent } from './index'
import Media from 'react-responsive'
import films from '../../assets/data/filmInfo'
import SiteInfo from '../../assets/data/siteInfo'
import { BannerComponent } from '../banner'
import { DescriptionComponent } from '../description'
import { FilmComponent } from '../film'
import './style.scss'
const FilmSelectionComponent = () => {
  return (
    <Fragment>
      <Media maxWidth={599}>
        <FilmSelectionMediaComponent />
      </Media>
      <Media minWidth={600}>
        <FilmSelectionMaxComponent />
      </Media>
    </Fragment>
  )
}

export default FilmSelectionComponent