import React from 'react'
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem", backgroundColor:"lightgreen", height:"100vh" }}>
      <h1 style={{color:'red'}}>Welcome to the BabySteps Hospital</h1><br/>
      <p style={{fontSize:'large', color:'black'}}>Select a doctor to book an appointment</p><br/>
      <Link to="/doctors">
        <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor:"orange", color:'white' }}>
          View Doctors
        </button>
      </Link><br/>
      <div className='image'>
      <img src='/assets/hospital.jpg' className='image'/>
      </div>
    </div>
  )
}

export default Home
