import React from 'react'
import { PictureDisplayComponent } from '../../pictureDisplay'
const HomeContentMedia = ({pictures}) => {
    return(
        <div className='home-container'>
      <div className='home-content-container'>
        <div id='first-panel-description'>Finding Vince is a free film arts festival where anyone can attend. Come see a personal diverse program of international stories that will change your perspective on poverty.</div>
        <div className='second-panel'>
            <div>
              We want to champion twenty-first century storytellers and challenge audiences with films that change our perspective on poverty in our communities.
          </div>
            <div className='video-showcase'>
              <iframe src="https://player.vimeo.com/video/283313298" width="358" height="201" allowFullScreen />
                <iframe src="https://player.vimeo.com/video/288107537" width="358" height="201" allowFullScreen></iframe>
                <iframe src="https://www.youtube.com/embed/RxmNCEIbs-c" width="358" height="201" allowFullScreen />
            </div>
        </div>
      </div>
    </div>
    )
}
export default HomeContentMedia
