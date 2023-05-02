import React from 'react'
import '../../index.css'
import './portfolio.css'
import IMG1 from '../../assets/project1/Screenshot 2023-05-01 211811.png'
import IMG2 from '../../assets/project2/Screenshot 2023-05-01 211429.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>MOVIE RECOMMENDER SYSTEM</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Sahil-2309/Movie-Recommender'
              className='btn'
              rel='noreferrer'
            >
              Github
            </a>
            <button className='btn btn-primary'>Expired</button>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>PERSONAL PORTFOLIO WEBSITE</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/Sahil-2309/Portfolio-Main'
              className='btn'
              rel='noreferrer'
            >
              Github
            </a>
            <button className='btn btn-primary'>Not deployed</button>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
