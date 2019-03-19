import { Fragment } from 'react'
import { NavbarComponent, FilmSelectionComponent, HeadComponent } from '../components'
import SiteInfo from '../assets/data/siteInfo'
const Media = () => {
  const { title, description, ogTitle, ogUrl, ogImage, ogType } = SiteInfo.pageInfo['Media']
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
      <FilmSelectionComponent />
    </Fragment>
  )
}

export default Media