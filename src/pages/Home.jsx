import React from 'react'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome to the Appointment Booking System</h1>
      <p>Select a doctor to book an appointment</p>
      <Link to="/doctors">
        <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          View Doctors
        </button>
      </Link>
    </div>
  )
}

export default Home
