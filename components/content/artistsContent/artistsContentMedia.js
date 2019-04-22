import React from 'react'
import { DescriptionComponent } from '../../description'
import { BannerComponent } from '../../banner'
import { QuoteComponent } from '../../quote'
import { IconDisplayComponent } from '../../IconDisplay'
import Zoom from 'react-reveal/Zoom'
import Media from 'react-responsive'
import SiteInfo from '../../../assets/data/siteInfo'
import './style.scss'
import { faPenFancy, faFilm, faPalette } from '@fortawesome/free-solid-svg-icons'
const ArtistsContentMediaComponent = () => {

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
    <div>

    </div>
  )
}
export default ArtistsContentMediaComponent