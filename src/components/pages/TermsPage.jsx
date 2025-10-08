import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf } from 'lucide-react';
import '../../styles/TermsPage.css';

const TermsPage = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <div className="header">
          <div className="logo">
            <div className="logo-icon">
              <Leaf size={20} />
            </div>
            <span className="logo-text">Trash2Treasure</span>
          </div>
          <h1>Terms of Service</h1>
          <p className="subtitle">Please read these terms carefully before using our service.</p>
        </div>

        <div className="content">
          <div className="highlight">
            <p><strong>Effective Date:</strong> January 1, 2025</p>
            <p><strong>Last Updated:</strong> January 1, 2025</p>
          </div>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using Trash2Treasure ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.</p>

          <h2>2. Description of Service</h2>
          <p>Trash2Treasure is a platform that allows users to:</p>
          <ul>
            <li>Scan and identify recyclable waste items</li>
            <li>Earn reward points for environmental actions</li>
            <li>Redeem points for various rewards and discounts</li>
            <li>Track their environmental impact</li>
            <li>Participate in eco-friendly challenges</li>
          </ul>

          <h2>3. User Accounts</h2>
          <h3>3.1 Account Creation</h3>
          <ul>
            <li>You must provide accurate and complete information</li>
            <li>You are responsible for maintaining account security</li>
            <li>One account per person is allowed</li>
            <li>You must be at least 13 years old to create an account</li>
          </ul>

          <h2>4. Acceptable Use</h2>
          <h3>4.1 Permitted Uses</h3>
          <ul>
            <li>Scan genuine waste items for recycling</li>
            <li>Participate honestly in reward programs</li>
            <li>Use the service for personal, non-commercial purposes</li>
          </ul>

          <h3>4.2 Prohibited Activities</h3>
          <ul>
            <li>Submitting false or misleading information</li>
            <li>Attempting to manipulate the reward system</li>
            <li>Using automated tools or bots</li>
            <li>Violating any applicable laws or regulations</li>
          </ul>

          <div className="warning">
            <p><strong>Warning:</strong> Violation of these terms may result in account suspension or termination without notice.</p>
          </div>

          <h2>5. Reward System</h2>
          <h3>5.1 Earning Points</h3>
          <ul>
            <li>Points are awarded based on verified waste scanning</li>
            <li>Point values may change without notice</li>
            <li>We reserve the right to verify all submissions</li>
            <li>Fraudulent activities will result in point forfeiture</li>
          </ul>

          <h2>6. Contact Information</h2>
          <p>For questions about these Terms of Service, please contact us:</p>
          <ul>
            <li>Email: vishnu.konda40@gmail.com</li>
            <li>Phone: +91 8977570809</li>
            <li>Address: Hyderabad, India</li>
          </ul>

          <div className="highlight">
            <p><strong>Important:</strong> These terms constitute the entire agreement between you and Trash2Treasure regarding the use of our service.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/" className="back-btn">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>

        <p className="last-updated">Last updated: January 1, 2025</p>
      </div>
    </div>
  );
};

export default TermsPage;