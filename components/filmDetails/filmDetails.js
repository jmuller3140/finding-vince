import React from 'react'

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

