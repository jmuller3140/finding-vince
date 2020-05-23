import React, { Fragment } from 'react'
import './style.scss'
import Reveal from 'react-reveal/Reveal'
import { getEffect } from '../utils'
const DescriptionComponent = ({ title, description, desciption2, style }) => {
  const effect = getEffect(style)
  return (
    <Reveal effect={effect}>
      <div className='description-container'>
        <h1 className='description-title'>{title}</h1>
        <div className='description-content'>
          {description}
          {
            desciption2 && (
              <p>{ desciption2 }</p>
            )
          }
        </div>
      </div>
    </Reveal>
  )
}

export default DescriptionComponent