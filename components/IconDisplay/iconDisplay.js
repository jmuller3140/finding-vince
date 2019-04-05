import React from 'react'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Reveal from 'react-reveal/Reveal'
import Zoom from 'react-reveal/Zoom'

const IconDisplayComponent = ({ icons, statement }) => {
  return (
    <div className='icon-display-container'>
      <div className='icon-display-content'>
        {
          statement && (
            <Zoom>
              <div className='icon-statement'>
                {statement}
              </div>
            </Zoom>
          )
        }
        <div className='icons'>
          {
            icons.map(icon => {
              return (
                <Reveal effect='fadeInDown'>
                  <div className='icon'>
                    <FontAwesomeIcon icon={icon.icon} />
                    <p className='icon-description'>
                      {icon.description}
                    </p>
                  </div>
                </Reveal>
              )
            })
          }</div>
      </div>
    </div>
  )
}

export default IconDisplayComponent