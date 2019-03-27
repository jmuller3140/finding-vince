import { Fragment } from 'react'
import { NavbarComponent, HeadComponent, ContactContentComponent, FooterComponent } from '../components'
import SiteInfo from '../assets/data/siteInfo'
import '../assets/styles/style.scss'
const Contact = () => {
  const { title, description, ogTitle, ogUrl, ogImage, ogType } = SiteInfo.pageInfo['Contact']
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
      <ContactContentComponent />
      <FooterComponent />
    </Fragment>
  )
}

export default Contact