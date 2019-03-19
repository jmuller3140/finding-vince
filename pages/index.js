import { Fragment } from 'react'
import { NavbarComponent, HeadComponent, HomeContentComponent, FooterComponent } from '../components'
import SiteInfo from '../assets/data/siteInfo'
const Home = () => {
  const { title, description, ogTitle, ogUrl, ogImage, ogType } = SiteInfo.pageInfo['Home']
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
      <HomeContentComponent />
      <FooterComponent />
    </Fragment>
  )
}

export default Home