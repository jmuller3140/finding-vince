import React from 'react'
import { DescriptionComponent } from '../../description'
import { BannerComponent } from '../../banner'
import SiteInfo from '../../../assets/data/siteInfo'
import './style.scss'

const AboutContentComponent = () => {
  const { bannerTitle, bannerImg, sections } = SiteInfo.pageInfo['About']
  return (
    <div className='about-container'>
      <BannerComponent title={bannerTitle} img={bannerImg} />
      <div className='picture-holder'>
        <img src='/static/pics/placeholder-image.jpg' alt='place-holder' height='150' width='200' />
        <img src='/static/pics/placeholder-image.jpg' alt='place-holder' height='150' width='200' />
        <img src='/static/pics/placeholder-image.jpg' alt='place-holder' height='150' width='200' />
      </div>
      <div className='content-container'>
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
export default AboutContentComponent