import { Fragment } from 'react'
import { NavbarComponent, HeadComponent } from '../components'
import SiteInfo from '../assets/data/siteInfo'
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
    </Fragment>
  )
}

export default Contact