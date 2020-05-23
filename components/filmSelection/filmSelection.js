import React, { Fragment } from 'react'
import { FilmSelectionMaxComponent, FilmSelectionMediaComponent } from './index'
import Media from 'react-responsive'
import films from '../../assets/data/filmInfo'
import SiteInfo from '../../assets/data/siteInfo'
import { BannerComponent } from '../banner'
import { DescriptionComponent } from '../description'
import { FilmComponent } from '../film'
import './style.scss'
const FilmSelectionComponent = (props) => {
  return (
    <Fragment>
      <Media maxWidth={599}>
        <FilmSelectionMediaComponent { ...props }/>
      </Media>
      <Media minWidth={600}>
        <FilmSelectionMaxComponent { ...props }/>
      </Media>
    </Fragment>
  )
}

export default FilmSelectionComponent