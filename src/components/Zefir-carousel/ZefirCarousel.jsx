import React from "react";
import "./zcar.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import keks1 from "./Cake1.png";
import keks2 from "./Cake2.jpg";
import eye from "./eye.png";

const ZefirCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div className="products-card">
        <img className="cards-img" src={keks1} alt="tort" />
        <h3 className="zefir-h3">
          Зефир считается крайне полезным лакомством и рекомендован даже детям
        </h3>
        <div className="zefir-text">
          <p className="zefir-texts">01.02.2022</p>
          <p className="zefir-number">103</p>
          <img className="eye-icon" src={eye} alt="eye" />
        </div>
      </div>
      <div className="products-card">
        <img className="cards-img" src={keks2} alt="tort" />
        <h3 className="zefir-h3">
          Зефир считается крайне полезным лакомством и рекомендован даже детям
        </h3>
        <div className="zefir-text">
          <p className="zefir-texts">01.02.2022</p>
          <p className="zefir-number">103</p>
          <img className="eye-icon" src={eye} alt="eye" />
        </div>
      </div>
      <div className="products-card">
        <img className="cards-img" src={keks1} alt="tort" />
        <h3 className="zefir-h3">
          Зефир считается крайне полезным лакомством и рекомендован даже детям
        </h3>
        <div className="zefir-text">
          <p className="zefir-texts">01.02.2022</p>
          <p className="zefir-number">103</p>
          <img className="eye-icon" src={eye} alt="eye" />
        </div>
      </div>
      <div className="products-card">
        <img className="cards-img" src={keks2} alt="tort" />
        <h3 className="zefir-h3">
          Зефир считается крайне полезным лакомством и рекомендован даже детям
        </h3>
        <div className="zefir-text">
          <p className="zefir-texts">01.02.2022</p>
          <p className="zefir-number">103</p>
          <img className="eye-icon" src={eye} alt="eye" />
        </div>
      </div>
      <div className="products-card">
        <img className="cards-img" src={keks1} alt="tort" />
        <h3 className="zefir-h3">
          Зефир считается крайне полезным лакомством и рекомендован даже детям
        </h3>
        <div className="zefir-text">
          <p className="zefir-texts">01.02.2022</p>
          <p className="zefir-number">103</p>
          <img className="eye-icon" src={eye} alt="eye" />
        </div>
      </div>
      <div className="products-card">
        <img className="cards-img" src={keks2} alt="tort" />
        <h3 className="zefir-h3">
          Зефир считается крайне полезным лакомством и рекомендован даже детям
        </h3>
        <div className="zefir-text">
          <p className="zefir-texts">01.02.2022</p>
          <p className="zefir-number">103</p>
          <img className="eye-icon" src={eye} alt="eye" />
        </div>
      </div>
      <div className="products-card">
        <img className="cards-img" src={keks1} alt="tort" />
        <h3 className="zefir-h3">
          Зефир считается крайне полезным лакомством и рекомендован даже детям
        </h3>
        <div className="zefir-text">
          <p className="zefir-texts">01.02.2022</p>
          <p className="zefir-number">103</p>
          <img className="eye-icon" src={eye} alt="eye" />
        </div>
      </div>
      <div className="products-card">
        <img className="cards-img" src={keks2} alt="tort" />
        <h3 className="zefir-h3">
          Зефир считается крайне полезным лакомством и рекомендован даже детям
        </h3>
        <div className="zefir-text">
          <p className="zefir-texts">01.02.2022</p>
          <p className="zefir-number">103</p>
          <img className="eye-icon" src={eye} alt="eye" />
        </div>
      </div>
    </Carousel>
  );
};

export default ZefirCarousel;
