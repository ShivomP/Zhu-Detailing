import React from 'react'
import '../styles/about.css'
import Profile from '../assets/profile.png'

function About() {
  return (
    <section id='about'>
      <div className="container">
        <div className="row">
            <h1 className="section__title">
                About
            </h1>
            <div className="about__wrapper">
                <img 
                    src={Profile}
                    alt="" 
                    className="about__img" 
                />
                <div className="about__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Et beatae sint cum ipsum temporibus non, ducimus alias 
                    minus sapiente. Fugiat, voluptate nam doloremque, r
                    epudiandae dolor alias magni aliquam nihil voluptates necessitatibus 
                    dignissimos iure tempore odit tempora a culpa aliquid sunt delectus nisi. 
                    Nesciunt, non assumenda?
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
