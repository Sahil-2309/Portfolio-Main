import React from 'react'
import '../../index.css'
import './services.css'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='services'>
          <div className='services__head'>
            <h3>UI Design</h3>
          </div>
          <p>
            I design and code beautiful and functional websites and applications
            that will impress your users and clients. I have experience with
            HTML, CSS, JavaScript, and React.js, one of the most popular and
            powerful frameworks for web development. I can create responsive,
            accessible, and cross-browser compatible interfaces that match your
            vision and brand. I can also work with backend developers to
            integrate the frontend code with the server-side logic.
          </p>
        </article>
        <article className='services'>
          <div className='services__head'>
            <h3>Data Science Project Co-Creation</h3>
          </div>
          <p>
            If you're looking for a professional to collaborate with on your
            data science projects, I can offer my services. With experience in
            various data science projects, I can work closely with you to
            understand your objectives, identify the data you need, and
            collaborate with you to build solutions that are tailored to your
            specific needs. I can also help you with data cleaning, analysis,
            visualization, and machine learning tasks, and provide guidance and
            support throughout the project. Whether you need assistance with a
            one-time project or are looking for a long-term partnership, I'm
            here to collaborate with you to make your data-driven projects a
            success.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Services
