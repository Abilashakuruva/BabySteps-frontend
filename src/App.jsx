import React from 'react'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import DoctorList from './components/DoctorList'
import DoctorDetails from './pages/DoctorDetails'

import './App.css'

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
      </Routes>
      
    
  )
}

export default App
