import React, {Fragment} from 'react'
import Link from 'next/link'
import './navbar.scss'

const NavbarMedia = (props) => {
    return(
        <Fragment>
        <div className='flex align-center w-100 navbar background-white border-bottom mobile-nav z-index padding-top-1'>
        <div className='flex justify-center w-100'>
          <div className='flex align-center justify-center '>
            <div>Finding Vince Film Festival October, 2020</div>
          </div>
        </div>
        <div className='flex justify-around align-center w-100'>
          {
            props.pages.map((page, idx) => {
              if (props.router.route === page.url) {
                return (
                  <h3 className='mobile-nav' key={idx}>{page.title}</h3>
                )
              }
              else {
                return (
                  <Link prefetch href={page.url} key={idx} passHref>
                    <a className='mobile-nav'><h3>{page.title}</h3></a>
                  </Link>
                )
              }
            })
          }
        </div>
      </div>
        </Fragment>
    )
}
export default NavbarMedia