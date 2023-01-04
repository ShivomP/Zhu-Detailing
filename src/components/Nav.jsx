import React from 'react'
import Logo from '../assets/logo.png'

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
                            <a href="#about" className="nav__link--anchor">
                                About
                            </a>
                        </li>
                        <li className="nav__link">
                            <a href="#services" className="nav__link--anchor">
                                Services
                            </a>
                        </li>
                        <li className="nav__link">
                            <a href="#contact" className="nav__link--anchor">
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
