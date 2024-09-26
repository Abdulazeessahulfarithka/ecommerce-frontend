import React from 'react';
import './Dashboard.css'; // Ensure to import the CSS file
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <div className='content-box'>
        <h1>Shop Online Save Big!</h1>
        <Link to="/shop-now"  className='shop-button'>Shop Now</Link>
      </div>
    </div>
  );
}

export default Dashboard;
