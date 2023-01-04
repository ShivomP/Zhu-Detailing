import React from 'react'
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
                  Hi, my name is Alan Zhu. I'm an entrepreneur
                  and this car detailing business is just the beginning
                  of my journey. I take great pride in my work which is 
                  why I always make sure to pay attention to detail and 
                  ensure each customer receives my best work. Please 
                  reach out to inquire about my services and prices. I am 
                  also more than willing to provide you with customer reviews 
                  and before/after results.
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
