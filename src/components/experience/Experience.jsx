import React from 'react'
import '../../index.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiMysql } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { FaPython } from 'react-icons/fa'
const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>MY Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__detials'>
              <AiFillHtml5 />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              <DiCss3 />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              <BsFillBootstrapFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              <FaReact />
              <h4>ReactJS</h4>
              <small className='text-light'>Experienced</small>
              <SiTailwindcss />
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
              <IoLogoJavascript />
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__detials'>
              <FaPython />
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              <SiMongodb />
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              <SiMysql />
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
