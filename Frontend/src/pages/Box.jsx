import React from 'react'
import '../css/box.css'
import kia from '../assets/kia.jpg'
import honda from '../assets/honda.jpg'
import maruti from '../assets/maruti.png'
import audi from '../assets/audi.jpg'
import bmw from '../assets/bmw.jpg'
import toyota from '../assets/toyota.jpg'
import 'aos/dist/aos.css'


function Box() {
  return (
    <>
    <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'times new romen', fontWeight: 'bold', color: '#f96d00' }}>Our Brands</h1>
      <div className='box'  data-aos="fade-up">
        <div className='boxs'><img className='images' src={kia} alt='Kiaimage' /></div>
        <div className='boxs'><img className='images' src={honda} alt='hondaimage' /></div>
        <div className='boxs'><img className='images' src={maruti} alt='marutimage' /></div>
        <div className='boxs'><img className='images' src={audi} alt='audimage' /></div>
        <div className='boxs'><img className='images' src={bmw} alt='bmwmage' /></div>
        <div className='boxs'><img className='images' src={toyota} alt='toyotaimage' /></div>
      </div>
    </div>
    </>
  )
}

export default Box