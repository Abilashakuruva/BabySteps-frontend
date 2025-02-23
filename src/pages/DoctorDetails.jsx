import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AvailableSlots from "../components/AvailableSlots";
import AppointmentForm from "../components/AppointmentForm";

const DoctorDetails = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div>
      <h2>Doctor Details</h2>
      <input type="date" onChange={(e) => setSelectedDate(e.target.value)} />
      {selectedDate && <AvailableSlots doctorId={id} date={selectedDate} onSelectSlot={setSelectedSlot} />}
      {selectedSlot && <AppointmentForm doctorId={id} slot={selectedSlot} />}
    </div>
  );
};

export default DoctorDetails;