import React from 'react'
import Link from 'next/link'
import './style.scss'
import Reveal from 'react-reveal/Reveal'
import Zoom from 'react-reveal/Zoom'
const YoutubeComponent = ({ id, picUrl, title }) => {
  return (
    <Reveal effect="fadeInUp">
      <div className='film-container-youtube'>
        <div className='film-content-youtube'>
            <div className='overflow-hidden-youtube'>
                <iframe src={picUrl} width="280" height="158" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          <div className='title-youtube'>
            {title}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default YoutubeComponent