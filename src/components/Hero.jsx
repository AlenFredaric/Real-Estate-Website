import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content container">
        <h1>Welcome to Haze Builders</h1>
        <p>Discover our amazing features and services</p>
        <a href="#features" className="hero-btn">Explore More</a>
      </div>
    </section>
  );
}

export default Hero;