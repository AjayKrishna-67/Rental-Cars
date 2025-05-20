import React from 'react';
import image from '../assets/rental_image.jpg';
import '../css/detailImg.css';
import 'aos/dist/aos.css'
import AOS from 'aos';
import { useEffect } from 'react';

function DetailImg() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <div >
        <div className='sideimage'  data-aos="fade-up" data-aos-anchor-placement="top-center" >
            <img src={image} alt='sideimage' />
        </div>
        <div className='detailtextdiv'  style={{width:'70%',marginLeft:'15%',textAlign:'center',fontWeight:'bolder'}} data-aos="fade-up" >
          <br/><p>Here you can book a car for rent. Please enter your details carefully. Once your booking is confirmed, the car will be delivered to your address. </p>
          <p>You can rent only one car at a time. Once your booking is confirmed, you will receive the car within 24 hours</p>
        </div>
    </div>
    </>
  )
}

export default DetailImg