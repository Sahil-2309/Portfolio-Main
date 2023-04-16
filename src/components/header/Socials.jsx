import React from 'react'
import { ImLinkedin } from 'react-icons/im'
import { VscGithubInverted } from 'react-icons/vsc'
import { RiInstagramLine } from 'react-icons/ri'
const Socials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/sahil-arora-b1436b170/'
        target='_blank'
      >
        <ImLinkedin />
      </a>
      <a href='https://github.com/Sahil-2309' target='_blank'>
        <VscGithubInverted />
      </a>
      <a href='https://www.instagram.com/a._.sahil/' target='_blank'>
        <RiInstagramLine />
      </a>
    </div>
  )
}

export default Socials
