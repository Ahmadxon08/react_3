import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";
import React, {  } from "react";

const imge1='./assets/img/paper1.png';
const imge2='./assets/img/paper2.png';
const imge3='./assets/img/paper3.png';
const imge4='./assets/img/paper4.png';
const imge5='./assets/img/paper5.png';
class Splider extends React.Component {
  render() {
    return (
      <div>
        <Splide aria-label="My Favorite Images"  options={ {
    rewind: true,
    perPage: 1,
    breakpoints: {
        1024: {
          perPage: 2,
        },
        768: {
          perPage: 3,
        },
        640: {
          perPage: 1,
        },
        
    }
   
   
  } }>
          <SplideSlide>
            <img src={imge1}  alt="Image 1" />
         
            <img src={imge2} alt="Image 1" />
       
            <img src={imge3} alt="Image 1" />
      
            <img src={imge4} alt="Image 1" />
        
            <img src={imge5} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={imge1} alt="Image 1" />
         
            <img src={imge2} alt="Image 1" />
       
            <img src={imge3} alt="Image 1" />
      
            <img src={imge4} alt="Image 1" />
        
            <img src={imge5} alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={imge1} alt="Image 1" />
         
            <img src={imge2} alt="Image 1" />
       
            <img src={imge3} alt="Image 1" />
      
            <img src={imge4} alt="Image 1" />
        
            <img src={imge5} alt="Image 1" />
          </SplideSlide>
          
        </Splide>
      </div>
    );
  }
}

export default Splider;
