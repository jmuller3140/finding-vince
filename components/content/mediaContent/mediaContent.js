import React, { Fragment } from 'react'
import { MediaContentMaxComponent, MediaContentMediaComponent } from './index'
import { MediaContentMedia } from './mediaContentMedia'
import Media from 'react-responsive'
import './style.scss'
const MediaContentComponent = () => {

  return (
    <Fragment>
      <Media maxWidth={599}>
        <MediaContentMediaComponent />
      </Media>
      <Media minWidth={600}>
        <MediaContentMaxComponent />
      </Media>
    </Fragment>
  )
}
export default MediaContentComponent