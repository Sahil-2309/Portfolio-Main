import React from 'react'
import './Navbar.css'
import { FiHome } from 'react-icons/fi'
import { SiAboutdotme } from 'react-icons/si'
import { RiBook2Fill } from 'react-icons/ri'
import { MdHomeRepairService } from 'react-icons/md'
const navbar = () => {
  return (
    <>
      <a href='#about'>
        <SiAboutdotme />
      </a>
      <a href='#'>
        <FiHome />
      </a>
      <a href='#experience'>
        <RiBook2Fill />
      </a>
      <a href='#services'>
        <MdHomeRepairService />
      </a>
      <a href='#portfolio'>
        <FiHome />
      </a>
      <a href='#contact'>
        <FiHome />
      </a>
    </>
  )
}

export default navbar
