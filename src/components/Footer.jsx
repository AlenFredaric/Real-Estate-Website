import React from 'react';
import logo from '../assets/Logo.png';
import './Footer.css'; 

function Footer() {
    return (
        <footer className="footer-page">
            <div className="footer-content">
                <div className="footer-section footer-logo-section">
                    <img src={logo} alt="HazeBuilders Logo" className="footer-logo" />
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>123 Main Street, Kochi, Kerala, India</p>
                    <p>Email: info@hazebuilders.com</p>
                    <p>Phone: +91 9876543210</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <a href="https://facebook.com" className="social-icon">Facebook</a>
                    <a href="https://x.com/" className="social-icon">Twitter</a>
                    <a href="https://instagram.com" className="social-icon">Instagram</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} HazeBuilders. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;