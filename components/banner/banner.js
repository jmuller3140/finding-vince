import React from 'react'
import './style.scss'

const BannerComponent = ({ bannerUrl, title }) => {
  const style = {
    backgroundImage: `url('${bannerUrl}')`,
    height: '200px'
  }
  return (
    <div style={style} className='flex justify-center align-center h-15'>
      {title}
    </div>
  )
}

export default BannerComponent