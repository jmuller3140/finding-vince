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
    <div className='flex align-center w-100 navbar background-white border-bottom z-index'>
      <div className='flex justify-center w-50'>
        <img src='/static/pics/front.png' alt='logo' />
        <div className='flex align-center direction-column justify-center '>
          <div>Finding Vince</div>
          <div>Film Festival</div>
          <div>October, 2020</div>
        </div>
      </div>

      <div className='flex justify-around align-center w-50'>
        {
          pages.map((page, idx) => {
            if (props.router.route === page.url) {
              return (
                <h3 key={idx}>{page.title}</h3>
              )
            }
            else {
              return (
                <Link prefetch href={page.url} key={idx} passHref>
                  <a><h3>{page.title}</h3></a>
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

