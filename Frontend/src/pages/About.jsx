import React from 'react'
import '../css/about.css'
import { useEffect } from 'react'
import no1 from '../assets/About1.jpg'
import no2 from '../assets/About2.png'
import no3 from '../assets/About3.jpeg'
import no4 from '../assets/About4.jpeg'
import no5 from '../assets/About5.jpg'
import no6 from '../assets/About6.jpg'
// import AOS from 'aos';

export default function About() {
  // useEffect(() => {
  //     AOS.init();
  //   }, [])
  return (
    <>
    <div className='about1'>
    <div className='no1'>
    <div className='no1-text'>
        <h3>Convenience and Flexibility</h3>
        <p>Renting a car allows you to have control over your itinerary. Unlike relying on public transportation or taxi services, with a rental car, you’re free to explore at your own pace, without the constraints of fixed schedules. You can go wherever you want, whenever you want, whether it’s a scenic drive along the coast or a last-minute detour to check out a local landmark.</p>
    </div>
      <img src={no1} alt="Car Rental"/>
    </div>
    
    <div className='no2'>
    <div>
    <img src={no2} alt="Car Rental"/>
    </div>
    <div className='no2-text'>
    <h3>Variety of Options</h3>
    <p>Rental car companies offer a wide range of vehicles to suit every need. From compact cars for solo travelers or couples, to spacious SUVs and minivans for families or groups, there’s a vehicle for every occasion. Need a luxury car for a special event or a 4x4 for a rugged adventure? Rental services have you covered with various models, from economy to high-end cars, allowing you to choose one that fits your budget and lifestyle.</p><br/>
    </div>
    </div>

    <div className='no1'>
    <div className='no1-text'>
    <h3>Cost-Effective</h3>
    <p>For many travelers, renting a car is often more cost-effective than relying on taxis or ride-sharing services, especially for long-term rentals. Daily or weekly rates can offer significant savings compared to the recurring costs of using taxis or rideshares for every trip. Plus, with options like fuel-efficient cars or hybrid models, you can reduce the overall cost of your rental.</p><br/>
    </div>
    <img src={no3} alt="Car Rental"/>
    </div>
    
    <div className='no2'>
    <div>
    <img src={no4} alt="Car Rental"/>
    </div>
    <div className='no2-text'>
    <h3>Freedom to Explore</h3>
    <p>Having access to a rental car means the freedom to explore beyond popular tourist areas. You can venture off the beaten path and visit less accessible spots—hidden gems that might be harder to reach via public transport. Whether you’re exploring countryside roads, national parks, or remote villages, a rental car opens up a world of possibilities.</p><br/>
    </div>
    </div>

    <div className='no1'>
    <div className='no1-text'>
    <h3>Seamless Experience</h3>
    <p>Rental car companies now offer convenient booking options online, where you can reserve a car before you arrive at your destination. Many also provide the option to pick up and drop off vehicles at different locations, making it easier than ever to plan your travel.</p><br/>
     </div>
    <img src={no5} alt="Car Rental"/>
    </div>

 
    <div className='no2'>
    <div>
    <img src={no6} alt="Car Rental"/>
    </div>
    <div className='no2-text'>
    <h3>Sustainable Choices</h3>
    <p>If you’re environmentally conscious, many car rental companies are now offering electric or hybrid vehicle options, allowing you to reduce your carbon footprint while traveling. These options provide a green alternative for those looking to make eco-friendly choices without sacrificing the convenience and freedom of driving a rental car.</p><br/>
   </div>
    </div>
   </div>
    </>
  )
}
