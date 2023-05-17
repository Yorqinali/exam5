import "./Carusel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import like from './images/like.png';
import Napalyon1 from './images/tort1.svg';
import Napalyon2 from './images/tort2.svg';
import Napalyon3 from './images/tort3.svg';
import Napalyon4 from './images/tort4.svg';

export default function Carusel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    miniDesktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 4,
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
    <div className="Carusel">
      <Carousel responsive={responsive}>
        <div className="product-card">
          <img className="card-img" src={Napalyon1} alt="tort" />
          <h3 className="card-h3">Торт "Наполеон" классический</h3>
          <div className="card-text">
            <p className="card-texts">Купили более 300 раз</p>
            <p className="card-number">(96)</p>
            <img className="like-icon" src={like} alt="like" />
          </div>
          <div className="card-price">
            <p className="price"> 1 600 ₽</p>
            <span className="weihgt">1,25 кг.</span>
          </div>
          </div>
          <div className="product-card">
          <img src={Napalyon2} alt="tort" />
          <h3 className="card-h3">Торт "Наполеон" классический</h3>
          <div className="card-text">
            <p className="card-texts">Купили более 300 раз</p>
            <p className="card-number">(96)</p>
            <img className="like-icon" src={like} alt="like" />
          </div>
          <div className="card-price">
            <p className="price"> 1 600 ₽</p>
            <span className="weihgt">1,25 кг.</span>
          </div>
          </div>
          <div className="product-card">
          <img src={Napalyon3} alt="tort" />
          <h3 className="card-h3">Торт "Наполеон" классический</h3>
          <div className="card-text">
            <p className="card-texts">Купили более 300 раз</p>
            <p className="card-number">(96)</p>
            <img className="like-icon" src={like} alt="like" />
          </div>
          <div className="card-price">
            <p className="price"> 1 600 ₽</p>
            <span className="weihgt">1,25 кг.</span>
          </div>
          </div>
          <div className="product-card">
          <img src={Napalyon4} alt="tort" />
          <h3 className="card-h3">Торт "Наполеон" классический</h3>
          <div className="card-text">
            <p className="card-texts">Купили более 300 раз</p>
            <p className="card-number">(96)</p>
            <img className="like-icon" src={like} alt="like" />
          </div>
          <div className="card-price">
            <p className="price"> 1 600 ₽</p>
            <span className="weihgt">1,25 кг.</span>
          </div>
          </div>
          <div className="product-card">
          <img src={Napalyon1} alt="tort" />
          <h3 className="card-h3">Торт "Наполеон" классический</h3>
          <div className="card-text">
            <p className="card-texts">Купили более 300 раз</p>
            <p className="card-number">(96)</p>
            <img className="like-icon" src={like} alt="like" />
          </div>
          <div className="card-price">
            <p className="price"> 1 600 ₽</p>
            <span className="weihgt">1,25 кг.</span>
          </div>
          </div>
          <div className="product-card">
          <img src={Napalyon2} alt="tort" />
          <h3 className="card-h3">Торт "Наполеон" классический</h3>
          <div className="card-text">
            <p className="card-texts">Купили более 300 раз</p>
            <p className="card-number">(96)</p>
            <img className="like-icon" src={like} alt="like" />
          </div>
          <div className="card-price">
            <p className="price"> 1 600 ₽</p>
            <span className="weihgt">1,25 кг.</span>
          </div>
          </div>
          <div className="product-card">
          <img src={Napalyon3} alt="tort" />
          <h3 className="card-h3">Торт "Наполеон" классический</h3>
          <div className="card-text">
            <p className="card-texts">Купили более 300 раз</p>
            <p className="card-number">(96)</p>
            <img className="like-icon" src={like} alt="like" />
          </div>
          <div className="card-price">
            <p className="price"> 1 600 ₽</p>
            <span className="weihgt">1,25 кг.</span>
          </div>
          </div>
          <div className="product-card">
          <img src={Napalyon4} alt="tort" />
          <h3 className="card-h3">Торт "Наполеон" классический</h3>
          <div className="card-text">
            <p className="card-texts">Купили более 300 раз</p>
            <p className="card-number">(96)</p>
            <img className="like-icon" src={like} alt="like" />
          </div>
          <div className="card-price">
            <p className="price"> 1 600 ₽</p>
            <span className="weihgt">1,25 кг.</span>
          </div>
          </div>  
      </Carousel>
    </div>
  );
}
