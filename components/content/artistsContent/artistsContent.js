import React from 'react'
import { DescriptionComponent } from '../../description'
import { BannerComponent } from '../../banner'
import SiteInfo from '../../../assets/data/siteInfo'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenFancy, faFilm, faPalette } from '@fortawesome/free-solid-svg-icons'
const ArtistsContentComponent = () => {

  const { bannerTitle, bannerImg, sections } = SiteInfo.pageInfo['Artists']
  return (
    <div className='artists-container'>
      <BannerComponent title={bannerTitle} img={bannerImg} />
      <div className='artists-content-container'>
        <div className='artists-icon-container'>
          <div className='artists-icon'><FontAwesomeIcon icon={faPalette} />Static</div>
          <div className='artists-icon'><FontAwesomeIcon icon={faPenFancy} />Screenwriting</div>
          <div className='artists-icon'><FontAwesomeIcon icon={faFilm} />Film</div>
        </div>
        <div className='w-65'>
          {
            sections.map((section, idx) => {
              return (
                <DescriptionComponent title={section.title} description={section.description} key={idx} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
export default ArtistsContentComponent