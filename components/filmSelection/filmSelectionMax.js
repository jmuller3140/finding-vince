import { Fragment } from 'react'
import films from '../../assets/data/filmInfo'
import SiteInfo from '../../assets/data/siteInfo'
import { youtubeLinks } from '../../assets/data/youtubeInfo'
import { BannerComponent } from '../banner'
import { DescriptionComponent } from '../description'
import { FilmComponent } from '../film'
import { YoutubeComponent } from '../youtube'
import './style.scss'
import Film from '../../pages/film'
const FilmSelectionMaxComponent = ({ section }) => {
  const { bannerTitle, bannerImg } = SiteInfo.pageInfo['Media']
  let featureFilms = [];
  let shortFilms = [];
  let youtubeFilms = [];
  films.filmInfo.forEach((film, idx) => {
    const values = Object.values(film)[0]
    if (typeof values.type !== 'undefined') {
      if (values.type.toLowerCase() === 'short film') {
        shortFilms.push(<FilmComponent id={values._id} picUrl={values.picUrl} title={values.title} key={idx} />)
      }
      else if (values.type.toLowerCase() === 'feature film') {
        featureFilms.push(<FilmComponent id={values._id} picUrl={values.picUrl} title={values.title} key={idx} />)
      }
    }
  })

  youtubeLinks.forEach((link, idx) => {
    youtubeFilms.push(<YoutubeComponent id={idx} picUrl={link.link} title={link.title} key={idx} />)
  })
  console.log(section)
  return (
    <div className='films-container'>
      <BannerComponent title={bannerTitle} img={bannerImg} />
      <div className='films-content-container'>
        {
          section === "features" && (
            <DescriptionComponent title='Feature Films' description={featureFilms} style='up' />
          )
        }
        {
          section === "examples" && (
            <DescriptionComponent title='Example Films' description={youtubeFilms} style='up' />
          )
        }
        {
          section === "shorts" && (
            <DescriptionComponent title='Short Films' description={shortFilms} style='up' />
          )
        }
      </div>
    </div>
  )
}

export default FilmSelectionMaxComponent