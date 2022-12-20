import React from 'react'
import '../styles/contact.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

// ZfLFA5fTKnVeM9OjE
// template_1apcmqb
// service_rzpiol8

function Contact() {
  const Result = () =>{
    return(
        <p className="form__sent">
            Thanks for the message! I look forward to speaking with you.
        </p>
    )
  }

  const [result, showResult] = useState(false)

  const form = useRef()

  const sendEmail = (event) =>{
    event.preventDefault()
    emailjs.sendForm('service_rzpiol8', 'template_1apcmqb', form.current, 'ZfLFA5fTKnVeM9OjE')
    .then((result) => {
        console.log(result.text)
    }, (error) => {
        console.log(error.text)
    })
    event.target.reset()
    showResult(true)
  }
  return (
    <section id='contact'>
        <div className="container">
            <div className="row">
                <h1 className="section__title">
                    Get in Touch!
                </h1>
                <div className="contact__wrapper">
                  <form ref={form} onSubmit={sendEmail} id="contact__form">
                    <input required type="text" placeholder='Name' className="form__name" name='user_name' />
                    <input required type="email" placeholder='Email' className="form__email" name='user_email' />
                    <textarea required type="text" placeholder='Message' className="form__message" name='message'></textarea>
                    <button type='submit' value="Send" id="contact__submit" className="form__submit">
                      Send it my way!
                    </button>
                    <div className="form__sent--wrapper">
                      {result ? <Result/> : null}
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
