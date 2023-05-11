import React from 'react'
import CTA from './CTA'
import Socials from './Socials'
import './Header.css'
const Header = () => {
  return (
    <>
      <header id='header'>
        <div className='container header__container'>
          <h5>Hello I'm </h5>
          <h1>Sahil Arora</h1>
          <h5 className='text-light'>Frontend Developer</h5>
          <CTA />
          <Socials />
          <a href='#contact' className='scroll__down'>
            Scroll Down
          </a>
        </div>
      </header>
    </>
  )
}

export default Header
