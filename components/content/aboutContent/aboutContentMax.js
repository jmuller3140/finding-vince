import React from 'react'
import { DescriptionComponent } from '../../description'
import { BannerComponent } from '../../banner'
import SiteInfo from '../../../assets/data/siteInfo'
import { QuoteComponent } from '../../quote'
import './style.scss'

const AboutContentMaxComponent = () => {
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
      {/* <BannerComponent title={bannerTitle} img={bannerImg} /> */}
      <div className='content-container'>
        <QuoteComponent quote='We believe artists can make a positive change in this world' style='up' />
        {
          sections.map((section, idx) => {
            return (
              <DescriptionComponent title={section.title} description={section.description} key={idx} />
            )
          })
        }
      </div>
    </div>
  )
}
export default AboutContentMaxComponent