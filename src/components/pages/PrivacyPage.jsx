import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf } from 'lucide-react';
import '../../styles/PrivacyPage.css';

const PrivacyPage = () => {
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
          <h1>Privacy Policy</h1>
          <p className="subtitle">Your privacy is important to us. Learn how we protect your data.</p>
        </div>

        <div className="content">
          <div className="highlight">
            <p><strong>Effective Date:</strong> January 1, 2025</p>
            <p><strong>Last Updated:</strong> January 1, 2025</p>
          </div>

          <h2>1. Introduction</h2>
          <p>Welcome to Trash2Treasure ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service").</p>

          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Personal Information</h3>
          <ul>
            <li>Name and contact information (email, phone number)</li>
            <li>Account credentials and profile information</li>
            <li>Location data (when you grant permission)</li>
            <li>Payment information for reward redemptions</li>
          </ul>

          <h3>2.2 Usage Information</h3>
          <ul>
            <li>Photos of waste items you scan</li>
            <li>Scanning history and reward transactions</li>
            <li>Device information and app usage analytics</li>
            <li>IP address and browser information</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our waste scanning and reward services</li>
            <li>Process reward points and redemptions</li>
            <li>Send important updates and promotional communications</li>
            <li>Analyze usage patterns to enhance user experience</li>
            <li>Ensure security and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party companies that help us operate our service</li>
            <li><strong>Reward Partners:</strong> When you redeem rewards, necessary information is shared with partners</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>We implement appropriate security measures to protect your information:</p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security audits and updates</li>
            <li>Access controls and authentication measures</li>
            <li>Secure data centers and infrastructure</li>
          </ul>

          <h2>6. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal information</li>
            <li>Delete your account and associated data</li>
            <li>Opt-out of promotional communications</li>
            <li>Control location data sharing</li>
            <li>Request data portability</li>
          </ul>

          <h2>7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul>
            <li>Email: vishnu.konda40@gmail.com</li>
            <li>Phone: +91 8977570809</li>
            <li>Address: Hyderabad, India</li>
          </ul>

          <div className="highlight">
            <p><strong>Note:</strong> This privacy policy is designed to be transparent and comprehensive. We are committed to protecting your privacy and handling your data responsibly.</p>
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

export default PrivacyPage;