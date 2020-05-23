import React from 'react'
import { DescriptionComponent } from '../../description'
import { BannerComponent } from '../../banner'
import SiteInfo from '../../../assets/data/siteInfo'
import './style.scss'
const ContactContentMaxComponent = () => {

  const { bannerTitle, bannerImg, sections } = SiteInfo.pageInfo['Contact']
  return (
    <div className='contact-container'>
      <BannerComponent title={bannerTitle} img={bannerImg} />
      <div className='content-container'>
        {
          sections.map((section, idx) => {
            return (
              <DescriptionComponent title={section.title} description={section.description} key={idx} />
            )
          })
        }
        <p>To upload a film, piece of art, or short story to this site, please send it to:</p>
        <br/>
        <a href="mailto:vinflix@famvin.org">vinflix@famvin.org</a>
        <br/>
        <h5>Along with the following information:</h5>
        <ul className="list-group list-group-flush list-unstyled">
          <li className="mt-2">Name of art piece: </li>
          <li className="mt-2">Name of Submitter: </li>
          <li className="mt-2">Email address:</li>
        </ul>
      </div>
    </div>
  )
}
export default ContactContentMaxComponent