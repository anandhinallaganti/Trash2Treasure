import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, CheckCircle, Coins, Leaf, Recycle } from 'lucide-react';
import '../../styles/HomePage.css';

const HomePage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, index * 200);
        }
      });
    }, { threshold: 0.3 });
    
    document.querySelectorAll('.step-card').forEach(card => {
      card.classList.remove('animate');
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Turn <span className="text-gradient-green">Trash</span> into <span className="text-gradient-orange">Treasure</span>
              </h1>
              <p className="hero-description">
                Transform your waste into rewards! Scan, dispose responsibly, and earn credits for a cleaner planet and your wallet.
              </p>
              <div className="hero-buttons">
                <Link to="/scan" className="btn-primary">
                  Get Started
                  <ArrowRight size={20} />
                </Link>
                <button className="btn-secondary">
                  Watch Demo
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Happy Users</div>
                </div>
                <div className="stat">
                  <div className="stat-number">1M+</div>
                  <div className="stat-label">Items Recycled</div>
                </div>
                <div className="stat">
                  <div className="stat-number">₹10L+</div>
                  <div className="stat-label">Rewards Given</div>
                </div>
              </div>
            </div>
            <div className="hero-animation">
              <div className="animation-container">
                <div className="animation-bg"></div>
                <div className="animation-elements">
                  <div className="trash-icon">
                    <Recycle size={32} />
                  </div>
                  <div className="arrow-icon">
                    <ArrowRight size={24} />
                  </div>
                  <div className="coins-icon">
                    <Coins size={24} />
                  </div>
                </div>
                <div className="environmental-section">
                  <div className="environmental-image">
                    <img src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Beautiful green forest representing environmental conservation" className="nature-bg" />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <Leaf size={24} />
                        <span>Protecting Our Planet</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Three simple steps to turn your waste into valuable rewards</p>
            <div className="section-divider"></div>
          </div>
          <div className="steps-grid">
            <Link to="/scan" className="step-card" data-step="1">
              <div className="step-number">1</div>
              <div className="step-icon">
                <Camera size={24} />
              </div>
              <h3>Collect & Scan</h3>
              <p>Take a photo of your waste item using your camera.</p>
            </Link>
            <Link to="/scan" className="step-card" data-step="2">
              <div className="step-number">2</div>
              <div className="step-icon">
                <CheckCircle size={24} />
              </div>
              <h3>Verify & Submit</h3>
              <p>Our AI verifies your waste type and calculates reward points automatically.</p>
            </Link>
            <Link to="/rewards" className="step-card" data-step="3">
              <div className="step-number">3</div>
              <div className="step-icon">
                <Coins size={24} />
              </div>
              <h3>Earn Rewards</h3>
              <p>Get instant credits in your wallet and redeem for exciting rewards!</p>
            </Link>
          </div>
          <div className="cta-section">
            <div className="cta-badge">
              <Leaf size={20} />
              <span>Start earning rewards today!</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;