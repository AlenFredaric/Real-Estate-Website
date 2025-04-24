import React from 'react';
import './Services.css';
import { FaHandshake, FaHome, FaChartLine, FaKey, FaBuilding, FaSearch } from 'react-icons/fa';

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card"><FaHome /><h3>Buy Property</h3></div>
          <div className="service-card"><FaKey /><h3>Sell Property</h3></div>
          <div className="service-card"><FaChartLine /><h3>Investment Advice</h3></div>
          <div className="service-card"><FaHandshake /><h3>Consulting</h3></div>
          <div className="service-card"><FaBuilding /><h3>Property Management</h3></div>
          <div className="service-card"><FaSearch /><h3>Property Search</h3></div>
        </div>
      </div>
    </section>
  );
}

export default Services;