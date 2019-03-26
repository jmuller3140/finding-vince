import React from 'react'
import Link from 'next/link'
import './style.scss'
const FilmComponent = ({ id, picUrl, title }) => {
  return (
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
  )
}

export default FilmComponent