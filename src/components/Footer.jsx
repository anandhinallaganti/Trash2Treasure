import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-icon">
              <span>T2T</span>
            </div>
            <span className="logo-text">Trash2Treasure</span>
          </div>
          <p className="footer-desc">
            Transforming waste into rewards while creating a sustainable future for everyone.
          </p>
          <div className="footer-copyright">
            © 2025 Trash2Treasure. All rights reserved.
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/scan">Scan & Earn</Link></li>
            <li><Link to="/rewards">Rewards</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
        <div className="footer-support">
          <h4>Support</h4>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><a href="#">Download App</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;