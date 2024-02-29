import { Component } from "react";
import "./Home.scss";
const media1 = "./assets/img/media1.png";
const media2 = "./assets/img/media2.png";
const media3 = "./assets/img/media3.png";

export class Home extends Component {
  render() {
    return (
      <>
        <div className="home">
          <div className="container">
            <div className="home_content">
              <div className="home-info">
                <h2>LEANGROUP - тубы и этикетки</h2>
                <h1>Ламинатные тубы</h1>
                <p>
                  Используются для производства зубных паст. Широко применяются
                  в сегменте косметики, пищевой индустрии, парафармацевтике,
                  бытовой химии и DIY (Do-it-Yourself).
                </p>
                <a href="">
                Каталог
                </a>
              </div>
              <div className="home_links">
                <a href="">
                    <img src={media1} alt="logo" />
                </a>
                <a href="">
                    <img src={media2} alt="logo" />
                </a>
                <a href="">
                    <img src={media3} alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
