import React, { Fragment } from 'react'
import Media from 'react-responsive'
import { AboutContentMaxComponent, AboutContentMediaComponent } from './index'
import './style.scss'

const AboutContentComponent = () => {
  return (
    <Fragment>
      <Media maxWidth={599}>
        <AboutContentMediaComponent />
      </Media>
      <Media minWidth={600}>
        <AboutContentMaxComponent />
      </Media>
    </Fragment>
  )
}
export default AboutContentComponent