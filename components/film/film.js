import React from 'react'
import Link from 'next/link'
import './style.scss'
const FilmComponent = ({ id, picUrl, title }) => {
  return (
    <div className='link-container'>
      <Link href={`/film?id=${id}`} as={`/film/${id}`} >
        <div className='image-container'>
          <img src={picUrl} className='image' height='200px' width='200px' />
          {title}
        </div>
      </Link>
    </div>
  )
}

export default FilmComponent