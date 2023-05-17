import React from 'react'
import Cake from './Slider.jpg';


const BasicSlider = () => {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
  
        <div className="item active">
           <img src={Cake} alt="Los Angeles" className='img'/>
          
        </div>
  
        <div className="item">
        <img src={Cake} alt="Los Angeles" />
        </div>
      
        <div className="item">
        <img src={Cake} alt="Los Angeles" />
        </div>
    
      </div>
  
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default BasicSlider