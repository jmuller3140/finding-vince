import React from 'react'
import { DescriptionComponent } from '../../description'
import { BannerComponent } from '../../banner'
import SiteInfo from '../../../assets/data/siteInfo'
import './style.scss'
const HomeContentComponent = () => {

  const { bannerTitle, bannerImg, sections } = SiteInfo.pageInfo['Home']
  return (
    <div className='home-container'>
      <BannerComponent title={bannerTitle} img={bannerImg} />
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
export default HomeContentComponent