import React from 'react'
import './bento.css'
import bento from './bento.png'

const Bento = () => {
  return (
    <div className='bento'>
      <div className="text">
        <h1 className="bento-t">БЕНТО ДЕСЕРТЫ  B БАНОЧКЕ</h1>
      </div>
      <div className="bento-img">
        <img src={bento} alt="cake" />
      </div>
    </div>
  )
}

export default Bento