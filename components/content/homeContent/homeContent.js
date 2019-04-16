import React, {Fragment} from 'react'
import SiteInfo from '../../../assets/data/siteInfo'
import './style.scss'
import Media from 'react-responsive'
import {default as HomeContentMedia} from './homeContentMedia';
import {default as HomeContentMax} from './homeContentMax'
const HomeContentComponent = () => {

  const pictures = [{
    src: '/static/pics/placeholder-image.jpg',
    alt: 'placeholder',
    height: '150',
    width: '200'
  }, {
    src: '/static/pics/placeholder-image.jpg',
    alt: 'placeholder',
    height: '150',
    width: '200'
  }, {
    src: '/static/pics/placeholder-image.jpg',
    alt: 'placeholder',
    height: '150',
    width: '200'
  }]
  const props ={pictures}
  return (
    <Fragment>
      <Media maxWidth={599}>
        <HomeContentMedia {...props} />
      </Media>
     <Media minWidth={600}>
      <HomeContentMax {...props}/>
      </Media>
    </Fragment>   
  )
}
export default HomeContentComponent

//We spark our imaginations by sharing the charism through creativity that is inspired by the Vincentian mission to globalize charity.