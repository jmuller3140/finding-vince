import React from 'react'
import { Fragment } from 'react'
import { NavbarComponent, HeadComponent, FilmDetailsComponent } from '../components'
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
    const { siteTitle, description, ogTitle, ogUrl, ogImage, ogType } = filmObj
    const props = {
      title: siteTitle,
      description,
      ogTitle,
      ogUrl,
      ogImage,
      ogType
    }
    return (
      <Fragment>
        <HeadComponent  {...props} />
        <NavbarComponent />
        <FilmDetailsComponent {...filmObj} />
      </Fragment>
    )
  }
}