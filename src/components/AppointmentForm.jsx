import React, { useState } from "react";
import { bookAppointment } from "../api/api";

const AppointmentForm = ({ doctorId, slot }) => {
  const [patientName, setPatientName] = useState("");
  const [appointmentType, setAppointmentType] = useState("Routine Check-Up");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = {
      doctorId,
      date: slot,
      duration: 30,
      appointmentType,
      patientName,
    };
    try {
      await bookAppointment(appointmentData);
      alert("Appointment booked!");
    } catch (error) {
      alert("Error booking appointment");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Book Appointment for {slot}</h3>
      <input value={patientName} onChange={(e) => setPatientName(e.target.value)} placeholder="Patient Name" required />
      <select value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)}>
        <option value="Routine Check-Up">Routine Check-Up</option>
        <option value="Ultrasound">Ultrasound</option>
      </select>
      <button type="submit">Book</button>
    </form>
  );
};

export default AppointmentForm;