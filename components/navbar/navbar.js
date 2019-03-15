import Link from 'next/link'
import { Fragment } from 'react'
import { withRouter } from 'next/router'

const NavbarComponent = withRouter(props => {
  const pages = [
    {
      url: '/',
      title: 'Home'
    },
    {
      url: '/about',
      title: 'About'
    },
    {
      url: '/artists',
      title: 'Artists'
    },
    {
      url: '/contact',
      title: 'Contact'
    },
    {
      url: '/media',
      title: 'Media'
    }
  ]

  return (
    <Fragment>
      {
        pages.map((page, idx) => {
          if (props.router.route === page.url) {
            return (
              <h1>{page.title}</h1>
            )
          }
          else {
            return (
              <Link href={page.url} key={idx}>
                <a>{page.title}</a>
              </Link>
            )
          }
        })
      }
    </Fragment>
  )
})

export default NavbarComponent