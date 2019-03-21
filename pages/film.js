import React from 'react'
import { Fragment } from 'react'
import { NavbarComponent, HeadComponent, FilmDetailsComponent, FooterComponent, BannerComponent } from '../components'
import { getFilmInstance } from '../components/utils'
export default class Film extends React.Component {

  static async getInitialProps({ query }) {
    const filmInstance = getFilmInstance(query)
    return { selectedFilm: filmInstance }
  }
  render() {
    let filmObj = {}
    console.log(this.props.selectedFilm)
    if (typeof this.props.selectedFilm !== 'undefined') {
      filmObj = this.props.selectedFilm
    }
    const { siteTitle, title, bannerUrl, description, ogTitle, ogUrl, ogImage, ogType } = filmObj
    const headProps = {
      title: siteTitle,
      description,
      ogTitle,
      ogUrl,
      ogImage,
      ogType,
    }
    const filmProps = {
      title,
      bannerUrl
    }
    return (
      <Fragment>
        <HeadComponent  {...headProps} />
        <NavbarComponent />
        <BannerComponent {...filmProps} />
        <FilmDetailsComponent {...filmObj} />
        <FooterComponent />
      </Fragment>
    )
  }
}