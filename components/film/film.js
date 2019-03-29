import React from 'react'
import Link from 'next/link'
import './style.scss'
import Reveal from 'react-reveal/Reveal'
import Zoom from 'react-reveal/Zoom'
const FilmComponent = ({ id, picUrl, title }) => {
  return (
    <Reveal effect="fadeInUp">
      <div className='film-container'>
        <div className='film-content'>
          <Link href={`/film?id=${id}`} as={`/film/${id}`} >
            <div className='overflow-hidden'>
              <img src={picUrl} className='image' />
            </div>
          </Link>
          <div className='title'>
            {title}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default FilmComponent