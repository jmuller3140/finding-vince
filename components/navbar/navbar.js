import { Fragment } from 'react'
import { withRouter } from 'next/router'
import './navbar.scss'
import Media from 'react-responsive'
import { default as NavbarMedia } from './navbarMedia'
import { default as NavbarMax } from './navbarMax'
const NavbarComponent = withRouter(props => {
  const pages = [
    {
      url: '/artists',
      title: 'Artists'
    },
    {
      url: '/media',
      title: 'Media'
    },
    {
      url: '/about',
      title: 'About'
    },
    {
      url: '/contact',
      title: 'Contact'
    }
  ]

  return (
    <Fragment>
      <Media maxWidth={599}>
        <NavbarMedia pages={pages} {...props} />
      </Media>
      <Media minWidth={600}>
        <NavbarMax pages={pages} {...props} />
      </Media>
    </Fragment>
  )
})

export default NavbarComponent

