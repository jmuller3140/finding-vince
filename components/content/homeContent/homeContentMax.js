import React from 'react'
import { PictureDisplayComponent } from '../../pictureDisplay'
import Zoom from 'react-reveal/Zoom'
import Reveal from 'react-reveal/Reveal'

const HomeContentMax = ({ pictures }) => {
  return (
    <div className='home-container'>
      <div className='home-content-container'>
        <div className='first-panel'>
          <img src='/static/pics/five-virtues.jpg' alt="fv400" />
          <Reveal effect="fadeInUp">
            <div id='first-panel-description'>
              Welcome to VinFlix.net! Come see a wide diversity of media, creatively
              exploring the Vincentian call to globalize charity. Here we continue to tell
              the stories that will change our perspective on poverty.
            </div>
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
          {/* <Zoom>
            <div className='video-showcase'>
              <iframe src="https://player.vimeo.com/video/283313298" width="716" height="402" allowFullScreen />
              <div>
                <iframe src="https://player.vimeo.com/video/288107537" width="358" height="201" allowFullScreen></iframe>
                <iframe src="https://www.youtube.com/embed/RxmNCEIbs-c" width="358" height="201" allowFullScreen />
              </div>
            </div>
          </Zoom> */}
        </div>
      </div>
    </div>
  )
}
export default HomeContentMax