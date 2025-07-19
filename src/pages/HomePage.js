import React from 'react';
import { Link } from 'react-router-dom';
function HomePage() {
 return (<div><h1>Hospital & Appointment Management System</h1><Link to='/dashboard'>Go to Dashboard</Link></div>);
}
export default HomePage;