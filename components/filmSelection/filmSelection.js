import { Fragment } from 'react'
import films from '../../assets/data/filmInfo'
import SiteInfo from '../../assets/data/siteInfo'
import { BannerComponent } from '../banner'
import { DescriptionComponent } from '../description'
import { FilmComponent } from '../film'
import './style.scss'
const FilmSelectionComponent = () => {
  const { bannerTitle, bannerImg } = SiteInfo.pageInfo['Media']
  let featureFilms = [];
  let shortFilms = [];
  films.filmInfo.forEach((film, idx) => {
    const values = Object.values(film)[0]
    if (typeof values.type !== 'undefined') {
      if (values.type.toLowerCase() === 'short film') {
        shortFilms.push(<FilmComponent id={values._id} picUrl={values.picUrl} title={values.title} />)
      }
      else if (values.type.toLowerCase() === 'feature film') {
        featureFilms.push(<FilmComponent id={values._id} picUrl={values.picUrl} title={values.title} />)
      }
    }
  })
  return (
    <div className='films-container'>
      <BannerComponent title={bannerTitle} img={bannerImg} />
      <div className='films-content-container'>
        <DescriptionComponent title='Feature Films' description={featureFilms} style='up' />
        <DescriptionComponent title='Short Films' description={shortFilms} style='up' />
      </div>
    </div>
  )
}

export default FilmSelectionComponent