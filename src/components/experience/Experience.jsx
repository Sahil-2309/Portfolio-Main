import React from 'react'
import '../../index.css'
import './experience.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { FaPython } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>MY Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillHtml5 className='experience__deatils-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiCss3 className='experience__deatils-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBootstrapFill className='experience__deatils-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__deatils-icon' />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTailwindcss className='experience__deatils-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoJavascript className='experience__deatils-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaPython className='experience__deatils-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__deatils-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <GrMysql className='experience__deatils-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
