import React, { Fragment } from 'react'
import { ContactContentMaxComponent, ContactContentMediaComponent } from './index'
import Media from 'react-responsive'
import './style.scss'
const ContactContentComponent = () => {

  return (
    <Fragment>
      <Media maxWidth={599}>
        <ContactContentMediaComponent />
      </Media>
      <Media minWidth={600}>
        <ContactContentMaxComponent />
      </Media>
    </Fragment>
  )
}
export default ContactContentComponent