import React from 'react'
import '../../index.css'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
const contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail />
            <h4>Email</h4>
            <h5>Sahil.2723.a@gmail.com</h5>
            <a
              href='mailto:sahil.2723.a@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              Send a Mail
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp />
            <h4>Whatsapp</h4>
            <h5>9870118809</h5>
            <a
              href='https://wa.me/919870118809'
              target='_blank'
              rel='noreferrer'
            >
              Send WhatsApp message
            </a>
          </article>
        </div>
        <form action=''>
          <input type='text' name='name' placeholder='Your Name' required />
          <input type='text' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default contact
