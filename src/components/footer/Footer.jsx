import React from 'react'
import '../../index.css'
import { ImLinkedin } from 'react-icons/im'
import { VscGithubInverted } from 'react-icons/vsc'
import { RiInstagramLine } from 'react-icons/ri'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        SAHIL
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#header'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#service'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a
          href='https://www.linkedin.com/in/sahil-arora-b1436b170/'
          target='_blank'
          rel='noreferrer'
        >
          <ImLinkedin />
        </a>
        <a
          href='https://github.com/Sahil-2309'
          target='_blank'
          rel='noreferrer'
        >
          <VscGithubInverted />
        </a>
        <a
          href='https://www.instagram.com/a._.sahil/'
          target='_blank'
          rel='noreferrer'
        >
          <RiInstagramLine />
        </a>
      </div>
    </footer>
  )
}

export default Footer
