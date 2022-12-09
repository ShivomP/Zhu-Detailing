import React from 'react'
import Logo from '../assets/logo.png'
import '../styles/nav.css'

function Nav() {
  return (
    <section id='nav-bar'>
        <div className="container container__nav">
            <div className="row">
                <div className="nav__wrapper">
                    <figure>
                        <img src={Logo} alt="" id="personal-logo" />
                    </figure>
                    <ul className="nav__link--list">
                        <li className="nav__link">
                            <a href="#about" className="nav__link--ancho">
                                About
                            </a>
                            <a href="#services" className="nav__link--ancho">
                                Services
                            </a>
                            <a href="#bookings" className="nav__link--ancho">
                                Bookings
                            </a>
                            <a href="#contact" className="nav__link--ancho">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Nav
