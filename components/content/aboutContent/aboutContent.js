import React from 'react'
import { DescriptionComponent } from '../../description'
import { BannerComponent } from '../../banner'
import SiteInfo from '../../../assets/data/siteInfo'

const AboutContentComponent = () => {
  const { bannerTitle, bannerImg, sections } = SiteInfo.pageInfo['About']
  return (
    <div>
      <div>
        <BannerComponent title={bannerTitle} img={bannerImg} />
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