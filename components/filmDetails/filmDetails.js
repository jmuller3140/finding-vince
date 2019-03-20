import React from 'react'
import './style.scss'

const FilmDetailsComponent = ({ title, description, length, video, type, year, country, directed }) => {
  return (
    <div className=''>
      {title}
      {description}
      {length}
      {video}
      {type}
      {year}
      {country}
      {directed}
    </div>
  )
}

export default FilmDetailsComponent