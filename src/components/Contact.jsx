import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;