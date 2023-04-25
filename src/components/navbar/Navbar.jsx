import React from 'react'
import './Navbar.css'
import { FiHome } from 'react-icons/fi'
import { SiAboutdotme } from 'react-icons/si'
import { RiBook2Fill } from 'react-icons/ri'
import { MdHomeRepairService } from 'react-icons/md'
import { IoMdContact } from 'react-icons/io'
import { AiOutlineUser } from 'react-icons/ai'
const navbar = () => {
  return (
    <nav>
      <div className='nav'>
        <a href='#'>
          <FiHome />
        </a>
        <a href='#about'>
          <SiAboutdotme />
        </a>
        <a href='#experience'>
          <RiBook2Fill />
        </a>
        <a href='#services'>
          <MdHomeRepairService />
        </a>
        <a href='#portfolio'>
          <AiOutlineUser />
        </a>
        <a href='#contact'>
          <IoMdContact />
        </a>
      </div>
    </nav>
  )
}

export default navbar
