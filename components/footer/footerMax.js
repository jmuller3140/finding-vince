import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitterSquare, faVimeo, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './style.scss'
const FooterMax = () => {
  return (
    <div className='footer-container'>
      <div className='icon-container'>
        <div className='icon-wrapper'>
          <a className='icon' href="https://www.facebook.com/FindingVince/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
          <a className='icon' href="https://www.instagram.com/findingvince400/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </div>
  )
}
export default FooterMax