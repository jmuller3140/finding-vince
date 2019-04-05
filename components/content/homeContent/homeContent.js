import React from 'react'
import SiteInfo from '../../../assets/data/siteInfo'
import './style.scss'
import { PictureDisplayComponent } from '../../pictureDisplay'
import Zoom from 'react-reveal/Zoom'
import Reveal from 'react-reveal/Reveal'
const HomeContentComponent = () => {

  const pictures = [{
    src: '/static/pics/placeholder-image.jpg',
    alt: 'placeholder',
    height: '150',
    width: '200'
  }, {
    src: '/static/pics/placeholder-image.jpg',
    alt: 'placeholder',
    height: '150',
    width: '200'
  }, {
    src: '/static/pics/placeholder-image.jpg',
    alt: 'placeholder',
    height: '150',
    width: '200'
  }]
  return (
    <div className='home-container'>
      <div className='home-content-container'>
        <div className='first-panel'>
          <img src='/static/pics/five-virtues.jpg' alt="fv400" />
          <Reveal effect="fadeInUp">
            <div id='first-panel-description'>Finding Vince is a free film arts festival where anyone can attend. Come see a personal diverse program of international stories that will change your perspective on poverty.</div>
          </Reveal>
          <div className='right-content'>
          </div>
        </div>
        <div className='second-panel'>
          <Zoom>
            <div className='des'>
              We want to champion twenty-first century storytellers and challenge audiences with films that change our perspective on poverty in our communities.
          </div>
          </Zoom>
          <Zoom>
            <PictureDisplayComponent pictures={pictures} />
          </Zoom>
          <Zoom>
            <div className='video-showcase'>
              <iframe src="https://player.vimeo.com/video/283313298" width="716" height="402" allowFullScreen />
              <div>
                <iframe src="https://player.vimeo.com/video/288107537" width="358" height="201" allowFullScreen></iframe>
                <iframe src="https://www.youtube.com/embed/RxmNCEIbs-c" width="358" height="201" allowFullScreen />
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  )
}
export default HomeContentComponent

//We spark our imaginations by sharing the charism through creativity that is inspired by the Vincentian mission to globalize charity.