import React from 'react'
import './style.scss'

const FilmDetailsComponent = ({ title, description, length, video, type, year, country, directed }) => {
  return (
    <div className='details-container'>
      <iframe src={video} width="960" height="540" frameBorder="0" allowFullScreen></iframe>
      <div className=''>
        {title}
        {description}
        {length}
        {year}
        {country}
        {directed}
      </div>
    </div>
  )
}

export default FilmDetailsComponent