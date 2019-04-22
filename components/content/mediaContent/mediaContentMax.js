import React from 'react'
import { BannerComponent } from '../../banner'
import { DescriptionComponent } from '../../description'
import SiteInfo from '../../../assets/data/siteInfo'
const MediaContentMax = () => {
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

export default MediaContentMax