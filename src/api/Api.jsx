import axios from "axios";

const API_URL = "http://localhost:5000";
//const API_URL = "http://localhost:5000";

export const getDoctors = async () => {
  const response = await axios.get(`${API_URL}/doctors`);
  return response.data;
};

export const getAvailableSlots = async (doctorId, date) => {
  const response = await axios.get(`${API_URL}/doctors/${doctorId}/slots?date=${date}`);
  return response.data;
};

export const bookAppointment = async (appointmentData) => {
  const response = await axios.post(`${API_URL}/appointments`, appointmentData);
  return response.data;
};