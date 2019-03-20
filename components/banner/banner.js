import React from 'react'
import './style.scss'

const BannerComponent = ({ img, title }) => {
  const style = {
    backgroundImage: img
  }
  return (
    <div style={style}>
      {title}
    </div>
  )
}

export default BannerComponent