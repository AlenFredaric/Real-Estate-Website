import React from 'react';
import './Gallery.css';
import image1 from '../assets/gallery1.png';
import image2 from '../assets/gallery2.jpg';
import image3 from '../assets/gallery3.jpg';
import image4 from '../assets/gallery4.jpg';
import image5 from '../assets/gallery5.avif';
import image6 from '../assets/gallery6.avif';

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <p>Explore our beautiful projects and architecture.</p>
        <div className="gallery-grid">
          <div className="card">
            <img src={image1} alt="Gallery 1" />
            <h3>Modern Villa</h3>
            <p>Sleek design with expansive glass and open spaces.</p>
          </div>
          <div className="card">
            <img src={image2} alt="Gallery 2" />
            <h3>Contemporary Residence</h3>
            <p>Bold architectural forms and innovative materials.</p>
          </div>
          <div className="card">
            <img src={image3} alt="Gallery 3" />
            <h3>Urban Loft</h3>
            <p>Stylish city living with industrial-chic elements.</p>
          </div>
          <div className="card">
            <img src={image4} alt="Gallery 4" />
            <h3>Seaside Escape</h3>
            <p>Tranquil retreat with stunning ocean views.</p>
          </div>
          <div className="card">
            <img src={image5} alt="Gallery 5" />
            <h3>Mountain Chalet</h3>
            <p>Cozy and luxurious living amidst nature's beauty.</p>
          </div>
          <div className="card">
            <img src={image6} alt="Gallery 6" />
            <h3>Minimalist Home</h3>
            <p>Clean lines and functional design for modern living.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;