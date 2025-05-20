import React from 'react'
import image1 from '../assets/For 1st Rent.png'
import image2 from '../assets/luxury.png'
import image3 from '../assets/Rental.png'
import '../css/Slider.css';

function SliderCount({slidercount}) {
  <div></div>
    if (slidercount === 1) {
        return (
        <div  className='headerslider'>
          <div className="image">
            <img src={image1} alt="Slider 1" />
          </div>
          </div>
        );
      } else if (slidercount === 2) {
        return (
            <div className='headerslider'>
          <div className="image">
            <img src={image2} alt="Slider 2" />
          </div>
          </div>
        );
      } else if (slidercount === 3) {
        return (
            <div className='headerslider'>
          <div className="image">
            <img src={image3} alt="Slider 3" />
          </div>
          </div>
        );
      }
      return null; 
}

export default SliderCount