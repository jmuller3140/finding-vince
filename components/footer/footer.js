import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitterSquare, faVimeo, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './style.scss'
import 'normalize.css'

const FooterComponent = () => {

  return (
    <div>
      <div className='icon-container'>
        <div className='icon-wrapper'>
          <a className='icon' href="https://www.facebook.com/jimmy.muller.7140" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
          <a className='icon' href="https://twitter.com/jmuller3140" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} /></a>
          <a className='icon' href="http://www.linkedin.com/in/james-muller3140" target="_blank"><FontAwesomeIcon icon={faVimeo} /></a>
          <a className='icon' href="https://github.com/jmuller3140" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
          <a className='icon' href="https://github.com/jmuller3140" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div>
          Made in 2018 <FontAwesomeIcon icon={faCopyright} />
        </div>
      </div>
    </div>
  )
}
export default FooterComponent