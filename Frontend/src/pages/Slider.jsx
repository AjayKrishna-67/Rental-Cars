import React, { useState,useEffect } from 'react';
import arrowright from '../assets/arrow right.png';
import arrowleft from '../assets/left-arrow.png';
import '../css/Slider.css';
import SliderCount from './SliderCount';



function Slider() {

  const [slidercount,setSlidercount] = useState(3)
  useEffect(() => {
    setInterval(() =>{
        setSlidercount(count => count === 3 ? 1 : count+1 )
    },7000)

  },[])
  
  // function click1(){
         
  //         setSlidercount(3)
  // }
  const click1 = () => {
    setSlidercount(3)
  }
  const click2 = () => {
    setSlidercount(2)
  }
  const click3 = () => {
    setSlidercount(1)
  }

  const arrowLeft = () => {
    setSlidercount(count => count === 3 ? 1 : count+1)
  }
 
  const arrowRight = () => {
    setSlidercount(count => count === 1 ? 3 : count-1)
  }
 

  return (
    <>
      <div  style={{width:'100%'}}  >
        <div > 
        <SliderCount  slidercount={slidercount}   />
        </div>
        <div>
        {/* <ul   style={{marginTop:'540px',marginLeft:'48%',position:'absolute',zIndex:'1',display:'flex'}}>
            <li className={slidercount === 3?'buttoncolor':'button'} onClick={click1}></li>
            <li className={slidercount === 2?'buttoncolor':'button'} onClick={click2}></li>
            <li className={slidercount === 1?'buttoncolor':'button'} onClick={click3}></li>
          </ul> */}
          <ul className="slider-dots">
            <li
              className={slidercount === 3 ? 'buttoncolor' : 'button'}
              onClick={click1}
              aria-label="Slide 1"
            ></li>
            <li
              className={slidercount === 2 ? 'buttoncolor' : 'button'}
              onClick={click2}
              aria-label="Slide 2"
            ></li>
            <li
              className={slidercount === 1 ? 'buttoncolor' : 'button'}
              onClick={click3}
              aria-label="Slide 3"
            ></li>
          </ul>

        </div>
        <div   style={{width:'100%',display:'flex',justifyContent:'space-between',position:'absolute',marginTop:'250px'}}>
            
        <div className='arrow'>
          <img onClick={arrowLeft}  src={arrowleft} />
        </div>
        <div className='arrow'>
          <img onClick={arrowRight} src={arrowright} />
        </div>

        </div>
       
          
      </div>
    </>
  )
}

export default Slider