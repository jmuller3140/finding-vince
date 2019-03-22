import React from 'react'
import './style.scss'

const BannerComponent = ({ img, title }) => {
  const style = {
    backgroundImage: `url('${img}')`,
    height: '200px'
  }
  return (
    <div style={style} className='flex justify-center align-center h-15'>
      {title}
    </div>
  )
}

export default BannerComponent