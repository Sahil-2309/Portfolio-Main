import React from 'react'
import CTA from './CTA'
import Socials from './Socials'
import './Header.css'
import MAIN from '../../assets/MAIN.jpeg'
const Header = () => {
  return (
    <>
      <header id='header'>
        <div className='container header__container'>
          <h5>Hello I'm </h5>
          <h1>Sahil Arora</h1>
          <h5 className='text-light'>Software  Developer</h5>
          <CTA />
          <div className='me'>
            <img src={MAIN} alt='Sahil Arora' />
          </div>

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
