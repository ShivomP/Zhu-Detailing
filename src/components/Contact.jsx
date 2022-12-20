import React from 'react'
import '../styles/contact.css'

function Contact() {
  return (
    <section id='contact'>
        <div className="container">
            <div className="row">
                <h1 className="section__title">
                    Get in Touch!
                </h1>
                <div className="contact__wrapper">
                  <form id="contact__form">
                    <input required type="text" placeholder='Name' className="form__name" name='user_name' />
                    <input required type="email" placeholder='Email' className="form__email" name='user_email' />
                    <textarea required type="text" placeholder='Message' className="form__message" name='message'></textarea>
                    <button type='submit' value="Send" id="contact__submit" className="form__submit">
                      Send it my way!
                    </button>
                    <div className="form__sent--wrapper">
                      
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
