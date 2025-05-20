import React from "react";
import "../css/Footer.css";
import instagram from  "../assets/instagram.png"
import whatsapp from  "../assets/whatsapp.png"
import facebook from  "../assets/facebook.png"
import x from "../assets/twitter.png"

const Footer = () => {
  return (
    // <footer className="footer">
    //   <div className="footer-container">
    //     <div className="footer-section">
    //       <h3>About Us</h3>
    //       <p>
    //         We provide reliable and affordable rental cars for all your travel needs.
    //         Whether you're exploring the city or planning a road trip, we've got you covered.
    //       </p>
    //     </div>
    //     <div className="footer-section">
    //       <h3>Quick Links</h3>
    //       <ul>
    //         <li><a href="/home">Home</a></li>
    //         <li><a href="/cars">Cars</a></li>
    //         <li><a href="/contact">Contact Us</a></li>
    //         <li><a href="/terms">Terms & Conditions</a></li>
    //       </ul>
    //     </div>
    //     <div className="footer-section">
    //       <h3>Contact</h3>
    //       <p>1234 Rental Cars Ave, Suite 100</p>
    //       <p>City, State, ZIP</p>
    //       <p>Email: support@rentalcars.com</p>
    //       <p>Phone: +1 800-123-4567</p>
    //     </div>
    //   </div>
    //   <div className="footer-bottom">
    //     <p>&copy; 2024 Rental Cars. All rights reserved.</p>
    //     <div className="social-icons">
    //       <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    //         <i className="fab fa-facebook"></i>
    //       </a>
    //       <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    //         <i className="fab fa-twitter"></i>
    //       </a>
    //       <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    //         <i className="fab fa-instagram"></i>
    //       </a>
    //     </div>
    //   </div>
    // </footer>
    <div>
    <footer>
    <div className="footiconsdev" >
    <div>
    <p id="para">Let's Keep in Touch</p>
    </div>
    <div  className="icondev" >
     <img  className="icon"  src={instagram}  alt="Instagram"  />
     <img className="icon" src={whatsapp}  alt="whatsapp"  />
     <img className="icon" src={x}  alt="x" />
     <img className="icon" src={facebook}  alt="facebook"  />
    </div>
    </div>
    <div className="footerContent">
      <div className="footer1">
        <h3>STAY CONNECTED</h3>
      <p>There are 10,000+ people registering to rent a car.</p>
      <div className="footerSignup">
      <input type='email' placeholder="Enter your Email."/>
      <button>SignUp</button>
      </div>
      </div>
      <div className="footer2">
      <h3>QUICK LINKS</h3>
           <ul>
             <li><a href="/">Home</a></li>
             <li><a href="/about">About</a></li>
             <li><a href="/catagory">Catagory</a></li>
           </ul>
      </div>
      <div className="footer3">
         <h3>CONTACT US</h3>
         <p>1234 Rental Cars Ave, Suite 100</p>
         <p>City, State, ZIP</p>
         <p>Email: rental.cars@gmail.com</p>
         <p>Phone:  +91 9345674658</p>
      </div>
    </div>
    <div className="footerLast">
      <h3 className="footname">RENTAL<span className="footname1">CAR'S</span></h3>
       <p className="para">&copy; 2024 Rental Cars. All rights reserved.</p>
    </div>
    </footer>
    </div>
  );
};

export default Footer;
