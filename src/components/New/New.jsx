import React from 'react';
import './new.css';
import arrowRight from './Vector.png';
import Carousel from '../Carusel/Carousel';

const New = () => {
  return (
    <div className='new'>
      <div className='novinki'>
        <p className='yangi-p'>Новинки</p>
        <p className='vse'>Bce</p>
        <img src={arrowRight} alt="arrow" className='arrowright' />
      </div>
        <Carousel />
    </div>
  )
}

export default New;