import { Fragment } from 'react'
import films from '../../assets/data/filmInfo'
import SiteInfo from '../../assets/data/siteInfo'
import { BannerComponent } from '../banner'
import { FilmComponent } from '../film'
import './style.scss'
const FilmSelectionComponent = () => {
  const { bannerTitle, bannerImg } = SiteInfo.pageInfo['Media']
  return (
    <Fragment>
      <BannerComponent title={bannerTitle} img={bannerImg} />
      {films.filmInfo.map((film, idx) => {
        const values = Object.values(film)[0]
        return (
          <div className='picture-coverage' key={idx}>
            <FilmComponent id={values._id} picUrl={values.picUrl} title={values.title} />
          </div>
        )
      })
      }
    </Fragment>
  )
}

export default FilmSelectionComponent