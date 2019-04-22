import React, { Fragment } from 'react'
import SiteInfo from '../../../assets/data/siteInfo'
import './style.scss'
import Media from 'react-responsive'
import { ArtistsContentMediaComponent, ArtistsContentMaxComponent } from './index'
const ArtistsContentComponent = () => {

  return (
    <Fragment>
      <Media maxWidth={599}>
        <ArtistsContentMediaComponent />
      </Media>
      <Media minWidth={600}>
        <ArtistsContentMaxComponent />
      </Media>
    </Fragment>
  )
}
export default ArtistsContentComponent

//We spark our imaginations by sharing the charism through creativity that is inspired by the Vincentian mission to globalize charity.