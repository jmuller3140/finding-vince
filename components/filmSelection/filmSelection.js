import { Fragment } from 'react'
import films from '../../assets/data/filmInfo'
import SiteInfo from '../../assets/data/siteInfo'
import Link from 'next/link'
import { BannerComponent } from '../banner'
import './style.scss'
const FilmSelectionComponent = () => {
  const { bannerTitle, bannerImg } = SiteInfo.pageInfo['Media']
  return (
    <Fragment>
      <BannerComponent title={bannerTitle} img={bannerImg} />
      {films.filmInfo.map((film, idx) => {
        const values = Object.values(film)[0]
        return (
          <Link href={`/film?id=${values._id}`} as={`/film/${values._id}`} key={idx}>
            <div>
              <div height='200px' width='200px'>{values.title}</div>
            </div>
          </Link>
        )
      })
      }
    </Fragment>
  )
}

export default FilmSelectionComponent