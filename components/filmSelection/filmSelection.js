import { Fragment } from 'react'
import films from '../../assets/data/filmInfo'
import SiteInfo from '../../assets/data/siteInfo'
import { BannerComponent } from '../banner'
import { FilmComponent } from '../film'
import './style.scss'
const FilmSelectionComponent = () => {
  const { bannerTitle, bannerImg } = SiteInfo.pageInfo['Media']
  return (
    <div className='films-container'>
      <BannerComponent title={bannerTitle} img={bannerImg} />
      <div className='films-content-container'>
        {films.filmInfo.map((film, idx) => {
          const values = Object.values(film)[0]
          return (
            <FilmComponent id={values._id} picUrl={values.picUrl} title={values.title} key={idx} />
          )
        })
        }
      </div>
    </div>
  )
}

export default FilmSelectionComponent