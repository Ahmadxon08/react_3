import { Component } from "react";
import "./Company.scss";
const video = "./assets/img/video.png";

export class Company extends Component {
  render() {
    return (
      <>
        <div className="company">
          <div className="container">
            <div className="company_head">
              <p>
                О компании<span>LEANGROUP</span>
              </p>
            </div>
            <div className="company_content">
              <div className="company_img">
                <img src={video} alt="lgog" />
              </div>
              <div className="company_text">
                <p>
                  Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году
                  и на сегодняшний день является ведущей компанией по
                  производству ламинатных и экструзионных туб.
                </p>
                <p>
                  Имея две технологии – для производства ламинатных и
                  экструзионных туб, мы предлагаем вам широкий спектр
                  возможностей. Большим преимуществом является собственный
                  печатный цех в ламинате и in-line печать в экструзии с
                  возможностью различных дополнительных опций декора. Особое
                  внимание уделяется работе с поставщиками для контроля и
                  поддержания качества производимой нами продукции.
                </p>
                <p>
                  С января 2018 года компания стала членом Европейской
                  Ассоциации производителей туб (ETMA), что подтверждает сильную
                  позицию бренда и на рынке Европы.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Company;
