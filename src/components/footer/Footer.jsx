import React from "react";
import "./footrer.css";
import masterC from './images/Mastercard.png';
import face from './images/facebook.png';
import insta from './images/instagram.png';
import vk from './images/vk.png';
import youTube from './images/youtube.png';
import tele from './images/tele.png';


const Footer = () => {
  return (
    <div className="footer">
      <ul className="tab">
        <li>
          <ul className="tab2">
            <li>
              <h2 className="footer-h2">ПОКУПАТЕЛЯМ</h2>
            </li>
            <li className="footer-li">Доставка</li>
            <li className="footer-li">Оплата</li>
            <li className="footer-li">Возврат</li>
            <li className="footer-li">Отзывы</li>
            <li className="footer-li">Вопросы и ответы</li>
          </ul>
        </li>
        <li>
          <ul className="tab2">
            <li>
              <h2 className="footer-h2">ОКОМПАНИИ</h2>
            </li>
            <li className="footer-li">О Нас</li>
            <li className="footer-li">Пресса о нас</li>
            <li className="footer-li">Вакансии</li>
            <li className="footer-li">Контакты</li>
            <li className="footer-li">Кафе партнеры</li>
          </ul>
        </li>
        <li>
          <ul className="tab3">
            <li>
              <h2 className="footer-h2">НОВОСТИ</h2>
            </li>
            <li className="footer-li">Новинки, акции, рецепты и полезные советы</li>
            <li><input className="footer-inp" type="text" placeholder="Введите ваш e-mail" />
            <button className="footer-btn">click</button></li>
            <li className="footer-p">Подписываясь на рассылку, вы соглашаетесь c условиями. Политики конфиденциальности.</li>
            <li className="footer-img"><img src={masterC} alt="mastercard" /></li>
          </ul>
        </li>
        <li>
          <ul className="tab3">
            <li>
              <h2 className="footer-h2">КОНТАКТЫ</h2>
            </li>
            <li>
              <div className="social-media">
                <img src={tele} alt="telegram" />
                <img src={face} alt="facebook" />
                <img src={insta} alt="instagramm" />
                <img src={vk} alt="vk" />
                <img src={youTube} alt="youTube" />
              </div>
            </li>
            <li>
              <strong className="footer-str">8 800 200-95-70</strong>
              <span className="footer-sp">Бесплатный звонок по Москве и МО c 8:00 до 20:00</span>
            </li>
            <li>
              <strong className="footer-str">8 495 128-95-70</strong>
            <strong className="footer-str">8 495 128-95-70</strong></li>
            <li><p className="kontact-p">mail@napoleoncake.ru</p>
            <span className="kontact-sp">Написать нам</span>
            </li>
            <li><p className="kontact-p">125438, г. Москва, Лихоборская набережная, 14</p>
            <span className="kontact-spa">Смотреть на карте</span>
            </li>
            <li><p className="end">© Кондитерская NapoleonCake, 2015 - 2022</p></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
