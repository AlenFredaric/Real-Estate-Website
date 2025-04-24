import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Services />
      <Gallery />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;