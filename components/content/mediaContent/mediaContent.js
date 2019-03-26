import React from 'react'
import { DescriptionComponent } from '../../description'
import { BannerComponent } from '../../banner'
import SiteInfo from '../../../assets/data/siteInfo'
import './style.scss'
const MediaContentComponent = () => {

  const { bannerTitle, bannerImg, sections } = SiteInfo.pageInfo['Media']
  return (
    <div className='media-container'>
      <BannerComponent title={bannerTitle} img={bannerImg} />
      <div className='media-content-container'>
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
export default MediaContentComponent