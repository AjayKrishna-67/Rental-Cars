import React, { useRef } from 'react'; // Import useRef
import Slider from './Slider';
import Details from './Details';
import DetailImg from './DetailImg';
import Box from './Box';
import Data from './Data';

function Home() {
  const detailsRef = useRef(null); // Create a ref for the Details section

  // Function to scroll to the Details section
  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div style={{ position: 'relative', width: '100%' }}>
        <Slider />
      </div>
      <div>
        <Data scrollToDetails={scrollToDetails} /> {/* Pass the scroll function to Data */}
      </div>
      <div
        ref={detailsRef} // Attach the ref to the Details section
        style={{
          marginTop: '90px',
          display: 'flex',
          padding: '30px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <DetailImg />
        <Details />
      </div>
      <div>
        <Box />
      </div>
    </>
  );
}

export default Home;