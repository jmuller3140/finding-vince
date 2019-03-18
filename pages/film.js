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
    return (
      <Fragment>
        <HeadComponent title={`Film | ${filmObj.title}`} />
        <NavbarComponent />
        <FilmDetailsComponent {...filmObj} />
      </Fragment>
    )
  }
}