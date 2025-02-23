import React, { useEffect, useState } from "react";
import { getDoctors } from "../api/api";
import { Link } from "react-router-dom";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors().then(setDoctors).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Doctors</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id}>
            <Link to={`/doctors/${doctor._id}`}>{doctor.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;