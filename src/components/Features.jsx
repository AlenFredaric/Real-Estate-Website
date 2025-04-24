import React from 'react';
import './Features.css';
import { FaShieldAlt, FaHandshake, FaLeaf} from 'react-icons/fa';

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Features</h2>
        <div className="feature-list">
        <div className="promise-cards">
          <div className="promise-card">
            <FaShieldAlt className="icon" />
            <h3>Secure Deals</h3>
            <p>End-to-end secure and verified transactions.</p>
          </div>
          <div className="promise-card">
            <FaHandshake className="icon" />
            <h3>Trustworthy Agents</h3>
            <p>Work only with certified professionals.</p>
          </div>
          <div className="promise-card">
            <FaLeaf className="icon" />
            <h3>Eco-Friendly Options</h3>
            <p>Choose from a range of green properties.</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Features;