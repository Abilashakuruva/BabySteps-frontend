import React, { useState } from "react";
import { bookAppointment } from "../api/api";
import moment from "moment";

const AppointmentForm = ({ doctorId, slot }) => {
  const [patientName, setPatientName] = useState("");
  const [appointmentType, setAppointmentType] = useState("Routine Check-Up");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const date = moment().format("YYYY-MM-DD"); // Get today's date
    const formattedDate = moment(`${date} ${slot}`, "YYYY-MM-DD HH:mm").toISOString();


    const appointmentData = {
      doctorId,
      date: formattedDate,
      duration: 30,
      appointmentType,
      patientName,
    };



    try {
      await bookAppointment(appointmentData);
      alert("Appointment booked!");
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Error booking appointment");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="booktitle">Book Appointment for {slot}</h3>
      <input value={patientName} onChange={(e) => setPatientName(e.target.value)} placeholder="Patient Name" required className="patientname" />
      <select value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)}>
        <option value="Routine Check-Up">Routine Check-Up</option>
        <option value="Ultrasound">Ultrasound</option>
        <option value="Scanning">Scanning</option>
        <option value="Thyroid">Thyroid</option>
        <option value=" Abdominal Pregnancy Ultrasound">Abdominal Pregnancy Ultrasound</option>
        <option value="Bone fracture Ultrasound">Bone fracture Ultrasound</option>
        <option value="Care & Services">Care & Services</option>
        <option value="Early Pregnancy Tips">Early Pregnancy Tips</option>
        <option value="ENT">ENT</option>
      </select>
      <button type="submit" className="bookbtn">Book</button>
    </form>
  );
};

export default AppointmentForm;