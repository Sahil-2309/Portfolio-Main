import React from 'react'
import '../../index.css'
import './about.css'
import { TbBrandCpp } from 'react-icons/tb'
import { IoLogoPython } from 'react-icons/io'
import { GrReactjs } from 'react-icons/gr'
import ME from '../../assets/ME.jpg'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about__me'></img>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <TbBrandCpp className='about__icon' />
              <h5>C plus plus</h5>
              <small>3+ Years </small>
            </article>
            <article className='about__card'>
              <IoLogoPython className='about__icon' />
              <h5>Python</h5>
              <small>2+ Years</small>
            </article>
            <article className='about__card'>
              <GrReactjs className='about__icon' />
              <h5>ReactJS</h5>
              <small>1+ Years Working</small>
            </article>
          </div>
          <p>
            I am a passionate and versatile frontend engineer with a background
            in data science and competitive programming. I started my coding
            journey with C++, where I solved over 500 data structures and
            algorithms problems and developed my logical thinking and
            problem-solving skills. Then I switched to Python and fell in love
            with data science. I built several projects using various libraries
            and frameworks such as pandas, numpy, scikit-learn, matplotlib,
            seaborn, and tensorflow. I also learned JavaScript and React.js to
            create dynamic and interactive web applications. I enjoy learning
            new technologies and applying them to real-world scenarios. I am
            always eager to take on new challenges and collaborate with other
            developers.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default about
