import React from 'react'
import famcar from '../assets/Family_cars.png'
import ecmcar from '../assets/Economy_cars.png'
import luxcar from '../assets/Luxury_cars.png'
import '../css/Data.css'

function Data() {
  return (
    <>
    <div className='car_name'>
    <p>Best Car Rental In India</p>
    <div className='car_cat'>
      
        <div className='family'>
           <h2>Family</h2>
           <img src={famcar}/>
           <div className='carshort'>
            <p>12,000/day</p>
            <button onClick={() => window.location.href = '/catagory'}>Book Now</button>
           </div>
        </div>
          
        <div className='economy'>
         <h2>Economy</h2>
           <img src={ecmcar}/>
           <div className='carshort'>
            <p>10,000/day</p>
            <button onClick={() => window.location.href = '/catagory'}>Book Now</button>
           </div>
        </div>

  
        <div className='luxury'>
         <h2>Luxury</h2>
           <img src={luxcar}/>
           <div className='carshort'>
            <p>18,000/day</p>
            <button onClick={() => window.location.href = '/catagory'}>Book Now</button>
           </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Data