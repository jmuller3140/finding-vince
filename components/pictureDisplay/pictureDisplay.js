import React from 'react'
import './style.scss'

const PictureDisplayComponent = ({ pictures }) => {
  return (
    <div className='picture-display-container'>
      <div className='picture-display-content'>
        {
          pictures.map((picture, idx) => {
            return (
              <img className='picture' src={picture.src} alt={picture.alt} height={picture.height} width={picture.width} key={idx} />
            )
          })
        }
      </div>
    </div>
  )
}

export default PictureDisplayComponent