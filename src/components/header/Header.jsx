import { Component } from "react";
import "./Header.scss";
const logo = "./assets/img/logo.png";
const dark = "./assets/img/dark.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      isDarkMode: false,
    };
  }

  // toggleMode = () => {
  //   this.setState((prevState) => ({
  //     isToggle: !prevState.isToggle,
  //   }));
  // };

  // darkMode = () => {
  //   this.setState((prevState) => ({
  //     isDarkMode: !prevState.isDarkMode,
  //   }));
  // };
  btnToggle = () => {
    this.setState((prevState) => ({
      isToggle: !prevState.isToggle,
    }));
  };

  render() {
    function darkMode() {
      document.body.classList.toggle("dark");
    }
    const { isToggle } = this.state;

    return (
        <header>
          <div className="container">
            <nav className="navbar">
              <div className="nav_logo">
                <a href="#">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div className="nav_links">
                <ul>
                  <li>
                    <a id="btnMenu" href="#" onClick={this.btnToggle}>
                      Продукция
                    </a>
                    <div id="menu" className={isToggle ? "drop" : ""}>
                      <a href="">Ламинатные тубы</a>
                      <a href="">Экструзионные тубы</a>
                      <a href="">Другая упаковка</a>
                    </div>
                  </li>
                  <span></span>
                  <li>
                    <a href="#">Сертификаты</a>
                  </li>{" "}
                  <span></span>
                  <li>
                    <a href="#">Наша команда</a>
                  </li>{" "}
                  <span></span>
                  <li>
                    <a href="#">О нас</a>
                  </li>{" "}
                  <span></span>
                  <li>
                    <a href="#">Новости</a>
                  </li>{" "}
                  <span></span>
                  <li>
                    <a href="#">Вакансии</a>
                  </li>{" "}
                  <span></span>
                  <li>
                    <a href="#">Контакты</a>
                  </li>
                </ul>
              </div>
              <div className="action">
                <button onClick={darkMode} className="dark">
                  <img src={dark} alt="dark" />
                </button>
                <div className="btn_menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </nav>

          </div>
        </header>
    );
  }
}

export default Header;
