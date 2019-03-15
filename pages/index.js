import { Fragment } from 'react'
import { NavbarComponent, HeadComponent } from '../components'
const Home = () => {
  return (
    <Fragment>
      <HeadComponent title='Home Page' />
      <NavbarComponent />
    </Fragment>
  )
}

export default Home