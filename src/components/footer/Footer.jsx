import { Component } from "react";
import "./Footer.scss";
const logo = "./assets/img/logo.png";
const media1 = "./assets/img/media1.png";
const media2 = "./assets/img/media2.png";
const media3 = "./assets/img/media3.png";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="footer_content">
              <div className="footer_head">
                <div className="footer_logo">
                  <a href="#">
                    <img src={logo} alt="logo" />
                  </a>
                </div>
                <div className="footer_media">
                  <a target="blank" href="http://twitter.com">
                    <img src={media1} alt="" />
                  </a>
                  <a target="blank" href="http://facebook.com">
                    <img src={media2} alt="" />
                  </a>
                  <a target="blank" href="">
                    <img src={media3} alt="" />
                  </a>
                </div>
              </div>
              <div className="line"></div>
              <div className="footer_menu">
                <div className="links">
                  <div className="link">
                    <h1>Продукция</h1>
                    <a href="">
                      {" "}
                      <p>Ламинатные тубы</p>
                    </a>

                    <a href="">
                      {" "}
                      <p>Экструзионные тубы</p>
                    </a>

                    <a href="">
                      {" "}
                      <p>Другая упаковка</p>
                    </a>
                  </div>
                  <div className="link">
                    <h1>Компания</h1>
                    <a href="">
                      {" "}
                      <p>О нас</p>
                    </a>

                    <a href="">
                      {" "}
                      <p>Наша команда</p>
                    </a>

                    <a href="">
                      {" "}
                      <p>Сертификаты</p>
                    </a>
                  </div>
                  <div className="link">
                    <h1>Продукция</h1>
                    <a href="">
                      <p>Контакты</p>
                    </a>
                    <a href="">
                      <p>Новости</p>
                    </a>
                    <a href="">
                      <p>Вакансии</p>
                    </a>
                  </div>
                </div>
                <div className="numbers">
                  <div className="fisrt">
                    <div className="number">
                      <h1>Беларусь</h1>
                      <span>+375 (17) 270 53 77</span>
                      <span>+375 (17) 270 53 78</span>
                    </div>
                    <div className="number">
                      <h1>Москва</h1>
                      <span>+7 (495) 280 73 44</span>
                      <span>+7 (495) 280 73 44</span>
                    </div>
                  </div>
                  <div className="fisrt">
                    <div className="number">
                      <h1>Европа</h1>
                      <span>+48 73 1111 044</span>
                    </div>
                    <div className="number">
                      <h1>Екатеринбург</h1>
                      <span>+7 (343) 346 82 06</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text">
                <p>
                  © 2022 Leangroup. All Rights Reserved. Разработка и
                  продвижение сайтов SkyWeb.by
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
