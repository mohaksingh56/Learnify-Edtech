import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section brand">
          <h2><span className="highlight">L</span>earnify</h2>
          <p>
            Build your network, share skills, and grow together on the Learnify
            platform where you can be your whole self <span className="forward-arrow">→</span>
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Team & Careers</li>
            <li>Our Solutions</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>Learning Paths</h3>
          <ul>
            <li>AI-Powered Learning Paths</li>
            <li>Career-Ready Skill Tracks</li>
            <li>Smart Leadership Modules</li>
            <li>Auto-Guided Tech Courses</li>
          </ul>

        </div>

        <div className="footer-section contact">
          <h3>Get in Touch</h3>
          <div className="contact-info">
            <p><span className="contact-icon">📞</span> +(91)8591513828</p>
            <p><span className="contact-icon">✉️</span> <a href="hackhaccino@gmail.com">contact@learnify.com</a></p>
          </div>
          <div className="social-icons">
            <div className="icon">f</div>
            <div className="icon">t</div>
            <div className="icon">in</div>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="copyright">Copyright © 2025 Learnify <span className="link">learning platform</span> | All rights reserved.</p>
        <div className="footer-policy">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;