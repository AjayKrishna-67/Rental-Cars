import React, { useState } from "react";
import '../css/details.css';
// import { useNavigate } from 'react-router-dom';


function Details() {
  const [form,setForm] = useState({
    name:"",
    email:"",
    number:"",
    rental_days:"",
    address:""
  });

  const [messages,setMessages] = useState("");

  const handleChange= (e) =>{
     const {name,value} = e.target;
     setForm({...form,[name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/booking/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
          const result = await response.json();
          setMessages("Booking is confirmed. Select the car.");
          setForm({
            name: "",
            email: "",
            number: "",
            rental_days: "",
            address: ""
          });
      } else {
        setMessages("Failed to submit booking.")
      }
    } catch(error) {
        console.error("Error:", error);
        setMessages("An error occurred while submitting your booking.");
    }
  };

  return (
    <div className="details">
      
      <form  onSubmit={handleSubmit}>
      <h2 style={{color:'#f96d00',textAlign:'center'}}>Car Booking</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Enter the name" required />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required />
        </div>

        <div>
          <label htmlFor="number">Number:</label>
          <input type="tel" id="number" name="number" value={form.number} onChange={handleChange} placeholder="Enter your number" required />
        </div>

        <div>
          <label htmlFor="rentalDays">Rental Days:</label>
          <input type="number" id="rentalDays" name="rental_days" value={form.rental_days} onChange={handleChange}  placeholder="Number of days" required />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <textarea id="address" name="address" value={form.address} onChange={handleChange}  placeholder="Enter your address" required></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Details;
