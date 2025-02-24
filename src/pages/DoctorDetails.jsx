import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AvailableSlots from "../components/AvailableSlots";
import AppointmentForm from "../components/AppointmentForm";

const DoctorDetails = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className="doctor-details d-flex flex-row ">

      <div className="doctor-details-card">      
      <h2>Doctor Details</h2>
      <input type="date" onChange={(e) => setSelectedDate(e.target.value)} />
      {selectedDate && <AvailableSlots doctorId={id} date={selectedDate} onSelectSlot={setSelectedSlot} />}
      {selectedSlot && <AppointmentForm doctorId={id} slot={selectedSlot} />}      
      </div>
      
      <div className='doctors-image'>
        <img src='/assets/doctor-patient.jpeg' className='doctors-img'/>
      </div>

              

      
    </div>
  );
};

export default DoctorDetails;