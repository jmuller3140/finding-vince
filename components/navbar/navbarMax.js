import React, { Fragment } from 'react'
import Link from 'next/link'
import './navbar.scss'
const NavbarMax = (props) => {
  return (
    <div className='flex align-center w-100 navbar background-white border-bottom z-index'>
      <div className='flex justify-center w-50'>
        <Link prefetch href='/' passHref>
          <a className='direction-row flex'>
            <img src='/static/pics/front.png' alt='logo' />
            <div className='flex align-center direction-column justify-center '>
              <div>Finding Vince</div>
              <div>Film Festival</div>
              <div>October, 2020</div>
            </div>
          </a>
        </Link>
      </div>
      <div className='flex justify-around align-center w-50'>
        {
          props.pages.map((page, idx) => {
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
    </div>)
}
export default NavbarMax