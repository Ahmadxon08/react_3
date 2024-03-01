import { Component } from "react";
import "./Our.scss";

const maze1 = "./assets/img/maze1.png";
const maze2 = "./assets/img/maze2.png";
const maze3 = "./assets/img/maze3.png";
const maze4 = "./assets/img/maze4.png";
const maze5 = "./assets/img/maze5.png";

export class Our extends Component {
  render() {
    return (
      <div className="our">
        <div className="container">
          <div className="our_head">
            <p>
              Наша <span>продукция</span>
            </p>
            <div className="our_btn">
              <a href="">Ламинатные тубы</a>
              <a href="">Экструзионные тубы</a>
              <a href="">Другая упаковка</a>
            </div>
          </div>
          <div className="our_img">
            <img src={maze1} alt="logo" />
            <img src={maze2} alt="logo" />
            <img src={maze3} alt="logo" />
            <img src={maze4} alt="logo" />
            <img src={maze5} alt="logo" />
          </div>
          <div className="our_link">
          <a href="">Перейти в каталог</a>
        </div>
        </div>
      
      </div>
    );
  }
}

export default Our;
