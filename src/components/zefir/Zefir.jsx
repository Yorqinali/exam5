import React from 'react';
import './zefir.css'
import arrowRight from '../New/Vector.png';
import ZefirCarousel from '../Zefir-carousel/ZefirCarousel';

const Zefir = () => {
  return (
    <div className='new'>
      <div className='novinki'>
        <p className='yangi-p'>Новинки</p>
        <p className='vse'>Bce</p>
        <img src={arrowRight} alt="arrow" className='arrowright' />
      </div>
        <ZefirCarousel />
    </div>
  )
}

export default Zefir