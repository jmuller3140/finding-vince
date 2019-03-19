import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitterSquare, faVimeo, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = () => {

  return (
    <div>
      <div>
        <div>
          <a href="https://www.facebook.com/jimmy.muller.7140" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://twitter.com/jmuller3140" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} /></a>
          <a href="http://www.linkedin.com/in/james-muller3140" target="_blank"><FontAwesomeIcon icon={faVimeo} /></a>
          <a href="https://github.com/jmuller3140" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://github.com/jmuller3140" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div>
          Made in 2018 <FontAwesomeIcon icon={faCopyright} />
        </div>
      </div>
    </div>
  )
}
export default FooterComponent
