import React from 'react'
import { Fragment } from 'react'
import { NavbarComponent, HeadComponent, FilmDetailsComponent } from '../components'
import filmJson from '../assets/data/filmInfo'
export default class Film extends React.Component {

  static async getInitialProps({ query }) {
    const selectedFilm = filmJson.filmInfo.find(filmObj => {
      const filmValues = Object.values(filmObj)
      return filmValues[0]._id === query.id
    })
    const key = Object.keys(selectedFilm)[0]
    return { selectedFilm: selectedFilm[key] }
  }
  render() {
    let filmObj = {}
    if (typeof this.props.selectedFilm !== 'undefined') {
      filmObj = this.props.selectedFilm
    }
    return (
      <Fragment>
        <HeadComponent title='Film Page' />
        <NavbarComponent />
        <FilmDetailsComponent {...filmObj} />
      </Fragment>
    )
  }
}