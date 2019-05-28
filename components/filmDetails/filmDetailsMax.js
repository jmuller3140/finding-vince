import React from 'react'
import './style.scss'
import { BannerComponent } from '../banner'
import Reveal from 'react-reveal/Reveal'
const FilmDetailsMaxComponent = ({ title, description, length, video, type, year, country, directed, bannerUrl }) => {
  const videoUrl = video.replace("watch?v=", "embed/");
  return (
    <div className='details-container'>
      <BannerComponent img={bannerUrl} title={title} />
      <div className='details-content'>
        <iframe src={videoUrl} width="960" height="540" frameBorder="0" allowFullScreen></iframe>
        <div className='detail-wrapper'>
          <div className='detail detail-left'>
            <Reveal effect='fadeInUp'>
              <h1>{title}</h1>
            </Reveal>
          </div>
          <div className='detail detail-left'>
            <Reveal effect='fadeInUp'>
              <h3>Synopsis</h3> {description}
            </Reveal>
          </div>
          <div className='detail'>
            <Reveal effect='fadeInUp'>
              <h4>Movie Length</h4> {length}
            </Reveal>
          </div>
          <div className='detail'>
            <Reveal effect='fadeInUp'>
              <h4>Year</h4> {year}
            </Reveal>
          </div>
          <div className='detail'>
            <Reveal effect='fadeInUp'>
              <h4>Country</h4> {country}
            </Reveal>
          </div>
          <div className='detail'>
            <Reveal effect='fadeInUp'>
              <h4>Directed By</h4> {directed}
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmDetailsMaxComponent