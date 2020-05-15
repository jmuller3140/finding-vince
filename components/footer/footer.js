import React, { Fragment } from 'react'
import Media from 'react-responsive'
import { default as FooterMedia } from './footerMedia'
import { default as FooterMax } from './footerMax'
import './style.scss'
import 'normalize.css'

const FooterComponent = () => {

  return (
    <Fragment>
      <Media maxWidth={599}>
        <FooterMedia />
      </Media>
      <Media minWidth={600}>
        <FooterMax />
      </Media>
    </Fragment>
  )
}
export default FooterComponent
