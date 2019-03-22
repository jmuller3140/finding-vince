import React from 'react'
import { DescriptionComponent } from '../../description'
import { BannerComponent } from '../../banner'
import SiteInfo from '../../../assets/data/siteInfo'
const ArtistsContentComponent = () => {

  const { bannerTitle, bannerImg, sections } = SiteInfo.pageInfo['Artists']
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
export default ArtistsContentComponent