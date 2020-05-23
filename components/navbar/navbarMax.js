import React, { Fragment } from 'react'
import Link from 'next/link'
import { mediaLinks } from '../../assets/data/mediaLinks'
import './navbar.scss'
import Reveal from 'react-reveal/Reveal'

export default class NavbarMax extends React.Component {
  constructor() {
    super()
    this.state = { showDropdown: false }
  }

  onClickHandler() {
    this.setState({showDropdown: !this.state.showDropdown})

  }

  render() {
    return (
      <div className='flex align-center w-100 navbar background-white border-bottom z-index flex-wrap'>
        <div className='d-flex justify-content-center w-25 flex-column ml-3'>
          <Link prefetch href='/' passHref>
            <a className='direction-row flex'>
              <img src='/static/pics/front.png' alt='logo' width="75px" height="75px"/>
              <div className='flex align-center direction-column justify-center ml-1 mr-1'>
                <div className="Navbar__Link">VinFlix</div>
              </div>
              <img src='/static/pics/famvin-logo-round-300.png' width="70px" height="70px" alt='famVin logo' />
            </a>
          </Link>
        </div>
        <div className='flex justify-around align-center w-50'>
          {
            this.props.pages.map((page, idx) => {
              console.log(page.url)
              console.log(this.props.router)
              if (this.props.router.route === page.url && this.props.router.route !== '/media') {
                return (
                  <h3 key={idx}>{page.title}</h3>
                )
              }
              if(page.url === "/media") {
                return (
                    <div className="Navbar__Link" onClick={() => this.onClickHandler.call(this)}>Media</div>
                )
              }
              else {
                return (
                  <Link prefetch href={page.url} key={idx} passHref>
                    <a className="Navbar__Link"><h3>{page.title}</h3></a>
                  </Link>
                )
              }
            })
          }
          {
            this.state.showDropdown && (
              <Reveal effect='fadeInDown'>
                <div className='Navbar__Container'>
                  <ul className="Navbar__Dropdown d-flex justify-content-around w-50 mt-2">
                    {
                      mediaLinks.map((link, idx) => (
                        <Link prefetch href={link.url} key={idx} passHref>
                          <a><h5 className="d-flex align-items-center mt-2 Navbar__Link">{link.title}</h5></a>
                        </Link>
                      ))
                    }
                  </ul>
                </div>
              </Reveal>
            )
          }
          </div>
      </div>)
  }
}