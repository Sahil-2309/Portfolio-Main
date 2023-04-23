import React from 'react'
import './Navbar.css'
import { FiHome } from 'react-icons/fi'
import { SiAboutdotme } from 'react-icons/si'
import { RiBook2Fill } from 'react-icons/ri'
import { MdHomeRepairService } from 'react-icons/md'
import { RiContactsFill } from 'react-icons/ri'
const navbar = () => {
  return (
    <nav>
      <div className='nav'>
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
          <RiContactsFill />
        </a>
      </div>
    </nav>
  )
}

export default navbar
