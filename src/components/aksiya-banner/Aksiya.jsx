import React from 'react'
import "./aksiya.css"
import APhoto from "./aksiya-cake.png"

const Aksiya = () => {
  return (
    <div className="aksiya">
    <div className='aksiya-text'>
      <p className="aksiya-p">Акция дня</p>
      <h1 className='aksiya-h1'>ТРИ ШОКОЛАДА B БАНОЧКЕ CO СКИДКОЙ 30%</h1>
    </div>
    <div className="aksiya-img">
      <img src={APhoto} alt="cake" />
    </div>
    </div>
  )
}

export default Aksiya