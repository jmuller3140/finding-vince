import Link from 'next/link'
import { withRouter } from 'next/router'
import './style.scss'
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
    <div className='flex align-center'>
      <div className='flex justify-center w-50'>
        LOGO
      </div>
      <div className='flex justify-between align-center w-50'>
        {
          pages.map((page, idx) => {
            if (props.router.route === page.url) {
              return (
                <h1 key={idx}>{page.title}</h1>
              )
            }
            else {
              return (
                <Link prefetch href={page.url} key={idx} passHref>
                  <a>{page.title}</a>
                </Link>
              )
            }
          })
        }
      </div>
    </div>
  )
})

export default NavbarComponent

