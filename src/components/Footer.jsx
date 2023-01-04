import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Logo from '../assets/logo.png'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
            <a href="#" className="footer__anchor">
                <figure className="footer__logo">
                    <img src={Logo} alt="personal logo" className="footer__logo--img" />
                </figure>
                <span className="footer__logo--popper">
                    Top
                    <ArrowCircleUpIcon/>
                </span>
            </a>
            <div className="footer__social--list">
                <a  href="https://www.linkedin.com/in/alan-zhu-453a52196/" 
                    target="_blank"
                    className="
                    footer__social--link 
                    link__hover-effect 
                    ">
                        Linked-In
                </a>
                <a  href="#about" 
                    className="
                    footer__social--link 
                    link__hover-effect 
                    ">
                        About
                </a>
                <a  href="#services" 
                    className="
                    footer__social--link 
                    link__hover-effect 
                    ">
                        Services
                </a>
                <a  href="#contact" 
                    className="
                    footer__social--link 
                    link__hover-effect 
                    ">
                        Contact
                </a>
            </div>
            <div className="footer__copyright">
                © 2022 Alan Zhu
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
