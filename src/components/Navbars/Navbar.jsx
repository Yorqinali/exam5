  import React from 'react';
  import './navbar.css';
  import Menu from "./images/menu.png";
  import Logo from "./images/logo.svg";
  import Phone from "./images/phone.png";
  import Search from "./images/search.png";
  import Person from "./images/person.png";
  import Heart from "./images/Heart.png";
  import Bag from "./images/bag.png";
  

  const Navbar = () => {
    return (
      <div className='nav'>
        <div className="pop-up-menu">
        <button className='nav-btn'><img src={Menu} alt="menu" /></button>
        </div>
        <ul className='nav-list'>
          <li>Каталог</li>
          <li>Торты</li>
          <li>Десерты в баночках</li>
          <li>Покупателям</li>
        </ul>
        <div className="logo">
          <img src={Logo} alt="logo" />
          </div>
          <div className="nav-text">
            <strong className='nav-str'>8 800 200-95-70</strong>
            <p className='nav-p'>Ежедневно с 8:00 до 20:00</p>
          </div>
          <div className="nav-icons">
          <button className='nav-btn'><img src={Phone} alt="phone" /></button>
          <button className='nav-btn'><img src={Search} alt="search" /></button>
          <button className='nav-btn'><img src={Person} alt="person" /></button>
          <button className='nav-btn'><img src={Heart} alt="heart" /></button>
          <button className='nav-btn'><img src={Bag} alt="bag" /></button>
          </div>
      </div>
    )
  }

  export default Navbar