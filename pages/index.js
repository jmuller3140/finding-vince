import { Fragment } from 'react'
import { NavbarComponent, HeadComponent } from '../components'
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
    </Fragment>
  )
}

export default Home