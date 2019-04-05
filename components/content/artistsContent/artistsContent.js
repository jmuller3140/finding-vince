import React from 'react'
import { DescriptionComponent } from '../../description'
import { BannerComponent } from '../../banner'
import { QuoteComponent } from '../../quote'
import { IconDisplayComponent } from '../../IconDisplay'
import Zoom from 'react-reveal/Zoom'
import SiteInfo from '../../../assets/data/siteInfo'
import './style.scss'
import { faPenFancy, faFilm, faPalette } from '@fortawesome/free-solid-svg-icons'
const ArtistsContentComponent = () => {

  const { bannerTitle, bannerImg, sections } = SiteInfo.pageInfo['Artists']
  const icons = [{
    icon: faPalette,
    description: 'Static'
  },
  {
    icon: faFilm,
    description: 'Film'
  },
  {
    icon: faPenFancy,
    description: 'Write'
  }]

  return (
    <div className='artists-container'>
      <BannerComponent title={bannerTitle} img={bannerImg} />
      <div className='artists-content-container'>
        <QuoteComponent quote='We believe that artists can change the world for the better' effect='up' />
        <IconDisplayComponent icons={icons} statement='So we have designed opportunities for your art to make a difference' />
        <div className='w-65'>
          {
            sections.map((section, idx) => {
              let style = ''
              if (idx % 2 === 0) {
                style = 'left'
              } else {
                style = 'right'
              }
              return (
                <DescriptionComponent title={section.title} description={section.description} key={idx} style={style} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
export default ArtistsContentComponent