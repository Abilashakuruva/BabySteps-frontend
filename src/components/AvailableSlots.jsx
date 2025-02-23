import React, { useEffect, useState } from "react";
import { getAvailableSlots } from "../api/api";

const AvailableSlots = ({ doctorId, date, onSelectSlot }) => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    if (doctorId && date) {
      getAvailableSlots(doctorId, date).then(setSlots).catch(console.error);
    }
  }, [doctorId, date]);

  return (
    <div>
      <h3>Available Slots</h3>
      {slots.length > 0 ? (
        slots.map((slot) => (
          <button key={slot} onClick={() => onSelectSlot(slot)}>
            {slot}
          </button>
        ))
      ) : (
        <p>No available slots</p>
      )}
    </div>
  );
};

export default AvailableSlots;