import React, { useState } from 'react';
function AppointmentBooking() {
 const [appointment, setAppointment] = useState({ patientName: '', doctorName: '', hospitalName: '', date: '', time: '' });
 const handleBook = () => { console.log('Appointment Booked:', appointment); };
 return (<div><h3>Book Appointment</h3><input type='text' placeholder='Patient Name' onChange={(e) => setAppointment({ ...appointment, patientName: e.target.value })} /><input type='text' placeholder='Doctor Name' onChange={(e) => setAppointment({ ...appointment, doctorName: e.target.value })} /><input type='text' placeholder='Hospital Name' onChange={(e) => setAppointment({ ...appointment, hospitalName: e.target.value })} /><input type='date' onChange={(e) => setAppointment({ ...appointment, date: e.target.value })} /><input type='time' onChange={(e) => setAppointment({ ...appointment, time: e.target.value })} /><button onClick={handleBook}>Book Appointment</button></div>);
}
export default AppointmentBooking;