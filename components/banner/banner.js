import React from 'react'
import './style.scss'

const BannerComponent = ({ img, title }) => {
  const style = {
    backgroundImage: `url('${img}')`,
    height: '200px',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }
  return (
    <div style={style} className='flex justify-center align-center w-100 banner'>
      {title}
    </div>
  )
}

export default BannerComponent