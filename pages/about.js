import { Fragment } from 'react'
import { NavbarComponent, HeadComponent, AboutContentComponent, FooterComponent } from '../components'
import SiteInfo from '../assets/data/siteInfo'
import '../assets/styles/style.scss'
const About = () => {
  const { title, description, ogTitle, ogUrl, ogImage, ogType } = SiteInfo.pageInfo['About']
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
      <AboutContentComponent />
      <FooterComponent />
    </Fragment>
  )
}

export default About