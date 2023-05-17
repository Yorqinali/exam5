import React from 'react'
import arrowRight from '../New/Vector.png';
import Carousel from '../Carusel/Carousel';
import '../New/new.css';

const Deserti = () => {
  return (
    <div className='new'>
      <div className='novinki'>
        <p className='desert'>Десерты в баночках</p>
        <p className='vse'>Bce</p>
        <img src={arrowRight} alt="arrow" className='arrowright' />
      </div>
        <Carousel />
    </div>
  )
}

export default Deserti