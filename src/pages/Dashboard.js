import React from 'react';
import HospitalAdmin from '../components/HospitalAdmin';
import DoctorRegistration from '../components/DoctorRegistration';
import PatientRegistration from '../components/PatientRegistration';
import AppointmentBooking from '../components/AppointmentBooking';
function Dashboard() {
 return (<div><h2>Admin Dashboard</h2><HospitalAdmin /><DoctorRegistration /><PatientRegistration /><AppointmentBooking /></div>);
}
export default Dashboard;