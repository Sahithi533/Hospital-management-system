import React, { useState } from 'react';
function HospitalAdmin() {
 const [hospital, setHospital] = useState({ name: '', location: '' });
 const handleRegister = () => { console.log('Hospital Registered:', hospital); };
 return (<div><h3>Hospital Registration</h3><input type='text' placeholder='Hospital Name' onChange={(e) => setHospital({ ...hospital, name: e.target.value })} /><input type='text' placeholder='Location' onChange={(e) => setHospital({ ...hospital, location: e.target.value })} /><button onClick={handleRegister}>Register Hospital</button></div>);
}
export default HospitalAdmin;