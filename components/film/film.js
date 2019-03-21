import React from 'react'
import Link from 'next/link'

const FilmComponent = ({ id, picUrl, title }) => {
  return (
    <Link href={`/film?id=${id}`} as={`/film/${id}`} >
      <div>
        <img src={picUrl} height='200px' width='200px' />
        {title}
      </div>
    </Link>
  )
}

export default FilmComponent