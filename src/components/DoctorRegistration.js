import React, { useState } from 'react';
function DoctorRegistration() {
 const [doctor, setDoctor] = useState({ name: '', qualification: '', specialization: '', experience: '' });
 const handleRegister = () => { console.log('Doctor Registered:', doctor); };
 return (<div><h3>Doctor Registration</h3><input type='text' placeholder='Name' onChange={(e) => setDoctor({ ...doctor, name: e.target.value })} /><input type='text' placeholder='Qualification' onChange={(e) => setDoctor({ ...doctor, qualification: e.target.value })} /><input type='text' placeholder='Specialization' onChange={(e) => setDoctor({ ...doctor, specialization: e.target.value })} /><input type='number' placeholder='Years of Experience' onChange={(e) => setDoctor({ ...doctor, experience: e.target.value })} /><button onClick={handleRegister}>Register Doctor</button></div>);
}
export default DoctorRegistration;