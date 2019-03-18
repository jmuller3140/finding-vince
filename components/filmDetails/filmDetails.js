import React from 'react'
import filmJson from '../../assets/data/filmInfo'

const FilmDetailsComponent = ({ title, description, length, video, type, year, country, directed }) => {
  return (
    <div>
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

