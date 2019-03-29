import React from 'react'
import './style.scss'
import { BannerComponent } from '../banner'
import Reveal from 'react-reveal/Reveal'
const FilmDetailsComponent = ({ title, description, length, video, type, year, country, directed, bannerUrl }) => {
  return (
    <div className='details-container'>
      <BannerComponent img={bannerUrl} title={title} />
      <div className='details-content'>
        <iframe src={video} width="960" height="540" frameBorder="0" allowFullScreen></iframe>
        <Reveal effect='fadeInUp'>
          <div className='detail-wrapper'>
            <div className='detail detail-left'>
              <h1>{title}</h1>
            </div>
            <div className='detail detail-left'>
              <h3>Synopsis</h3> {description}
            </div>
            <div className='detail'>
              <h4>Movie Length</h4> {length}
            </div>
            <div className='detail'>
              <h4>Year</h4> {year}
            </div>
            <div className='detail'>
              <h4>Country</h4> {country}
            </div>
            <div className='detail'>
              <h4>Directed By</h4> {directed}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default FilmDetailsComponent