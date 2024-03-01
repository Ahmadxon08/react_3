import { Component } from "react";

import Splider from "../home/Splide";
import './Paper.scss'

export class Paper extends Component {
  render() {
    return (
      <div className="paper">
        <div className="container">
          <div className="paper_head">
            <p>
              Качество продукции подтверждают <span>сертификаты</span>
            </p>
          </div>
          <Splider />
        
        </div>
      </div>
    );
  }
}

export default Paper;
