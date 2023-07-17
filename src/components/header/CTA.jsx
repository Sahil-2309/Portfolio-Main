import React from 'react'
import Sahil from '../../assets/Sahil-Recent.pdf'
import '../../index.css'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Sahil} download className='btn' rel='noreferrer'>
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary' rel='noreferrer'>
        Let's Talk
      </a>
    </div>
  )
}

export default CTA
