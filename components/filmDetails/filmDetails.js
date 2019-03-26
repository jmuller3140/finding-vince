import React from 'react'
import './style.scss'
import { BannerComponent } from '../banner'

const FilmDetailsComponent = ({ title, description, length, video, type, year, country, directed, bannerUrl }) => {
  return (
    <div className='details-container'>
      <BannerComponent img={bannerUrl} title={title} />
      <iframe src={video} width="960" height="540" frameBorder="0" allowFullScreen></iframe>
      <div className='detail-wrapper'>
        <div className='detail'>
          <h1>{title}</h1>
        </div>
        <div className='detail'>
          <h3>Synopsis:</h3> {description}
        </div>
        <div className='detail'>
          <h4>Movie Length:</h4> {length}
        </div>
        <div className='detail'>
          <h4>Year:</h4> {year}
        </div>
        <div className='detail'>
          <h4>Country:</h4> {country}
        </div>
        <div className='detail'>
          <h4>Directed By:</h4> {directed}
        </div>
      </div>
    </div>
  )
}

export default FilmDetailsComponent