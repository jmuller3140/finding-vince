import React, { Fragment } from 'react'
import './style.scss'
const DescriptionComponent = ({ title, description }) => {
  return (
    <div className='description-container'>
      <h1 className='description-title'>{title}</h1>
      <div className='description-content'>
        {description}
      </div>
    </div>
  )
}

export default DescriptionComponent