import React from 'react'
import { DescriptionComponent } from '../../description'
import { BannerComponent } from '../../banner'
import SiteInfo from '../../../assets/data/siteInfo'
import { QuoteComponent } from '../../quote'
import './style.scss'

const AboutContentMediaComponent = () => {
  const { bannerTitle, bannerImg, sections } = SiteInfo.pageInfo['About']
  const pictures = [{
    src: '/static/pics/placeholder-image.jpg',
    alt: 'placeholder',
    height: '150',
    width: '200'
  }, {
    src: '/static/pics/placeholder-image.jpg',
    alt: 'placeholder',
    height: '150',
    width: '200'
  }, {
    src: '/static/pics/placeholder-image.jpg',
    alt: 'placeholder',
    height: '150',
    width: '200'
  }]
  return (
    <div className='about-container'>
    </div>
  )
}
export default AboutContentMediaComponent