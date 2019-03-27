import { Fragment } from 'react'
import { NavbarComponent, HeadComponent, ArtistsContentComponent, FooterComponent } from '../components'
import SiteInfo from '../assets/data/siteInfo'
import '../assets/styles/style.scss'
const Artists = () => {
  const { title, description, ogTitle, ogUrl, ogImage, ogType } = SiteInfo.pageInfo['Artists']
  const props = {
    title,
    description,
    ogTitle,
    ogUrl,
    ogImage,
    ogType
  }
  return (
    <Fragment>
      <HeadComponent {...props} />
      <NavbarComponent />
      <ArtistsContentComponent />
      <FooterComponent />
    </Fragment>
  )
}

export default Artists