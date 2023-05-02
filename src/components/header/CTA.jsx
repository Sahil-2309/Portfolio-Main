import React from 'react'
import Sahil from '../../assets/Sahil.pdf'
import '../../index.css'
const CTA = () => {
  return (
    <>
      <div className='cta'>
        <a href={Sahil} download className='btn' rel='noreferrer'>
          Download CV
        </a>
        <a href='#contact' className='btn btn-primary' rel='noreferrer'>
          Lets's Talk
        </a>
      </div>
    </>
  )
}

export default CTA
