import React, {Fragment} from 'react'
import { NavbarComponent, FilmSelectionComponent, HeadComponent, FooterComponent } from '../components'
import SiteInfo from '../assets/data/siteInfo'
import '../assets/styles/style.scss'

export default class Media extends React.Component {

  static async getInitialProps({ query }) {
    console.log(query.id)
    return { section: query.id }
  }
  render() {
    const { title, description, ogTitle, ogUrl, ogImage, ogType } = SiteInfo.pageInfo['Media']
    const props = {
      title,
      description,
      ogTitle,
      ogUrl,
      ogImage,
      ogType,
    }
    console.log(this.props.section)
    return (
      <Fragment>
        <HeadComponent {...props} />
        <NavbarComponent />
        <FilmSelectionComponent section={this.props.section} />
        <FooterComponent />
      </Fragment>
    )
  }
}