import React from 'react'
import { DescriptionComponent } from '../../description'
import { BannerComponent } from '../../banner'
import SiteInfo from '../../../assets/data/siteInfo'
import './style.scss'
const ContactContentMediaComponent = () => {

  const { bannerTitle, bannerImg, sections } = SiteInfo.pageInfo['Contact']
  return (
    <div className='contact-container'>
    </div>
  )
}
export default ContactContentMediaComponent