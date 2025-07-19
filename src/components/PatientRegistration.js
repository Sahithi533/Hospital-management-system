import React, { useState } from 'react';
function PatientRegistration() {
 const [patient, setPatient] = useState({ name: '', gender: '', dob: '', uniqueId: '' });
 const handleRegister = () => { console.log('Patient Registered:', patient); };
 return (<div><h3>Patient Registration</h3><input type='text' placeholder='Name' onChange={(e) => setPatient({ ...patient, name: e.target.value })} /><input type='text' placeholder='Gender' onChange={(e) => setPatient({ ...patient, gender: e.target.value })} /><input type='date' onChange={(e) => setPatient({ ...patient, dob: e.target.value })} /><input type='text' placeholder='Unique ID' onChange={(e) => setPatient({ ...patient, uniqueId: e.target.value })} /><button onClick={handleRegister}>Register Patient</button></div>);
}
export default PatientRegistration;