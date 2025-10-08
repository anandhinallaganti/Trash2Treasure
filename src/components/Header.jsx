import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Camera, BarChart3, Gift, HelpCircle, Leaf } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (window.innerWidth > 768 && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <Leaf size={20} />
          </div>
          <span className="logo-text">Trash2Treasure</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/scan" className={`nav-item ${isActive('/scan') ? 'active' : ''}`}>
            <Camera size={18} />
            <span>Scan & Earn</span>
          </Link>
          <Link to="/dashboard" className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}>
            <BarChart3 size={18} />
            <span>Dashboard</span>
          </Link>
          <Link to="/rewards" className={`nav-item ${isActive('/rewards') ? 'active' : ''}`}>
            <Gift size={18} />
            <span>Rewards</span>
          </Link>
          <Link to="/help" className={`nav-item ${isActive('/help') ? 'active' : ''}`}>
            <HelpCircle size={18} />
            <span>Help</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`nav-mobile ${isMobileMenuOpen ? 'show' : ''}`}>
        <Link to="/" className={`nav-item-mobile ${isActive('/') ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <Home size={18} />
          <span>Home</span>
        </Link>
        <Link to="/scan" className={`nav-item-mobile ${isActive('/scan') ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <Camera size={18} />
          <span>Scan & Earn</span>
        </Link>
        <Link to="/dashboard" className={`nav-item-mobile ${isActive('/dashboard') ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <BarChart3 size={18} />
          <span>Dashboard</span>
        </Link>
        <Link to="/rewards" className={`nav-item-mobile ${isActive('/rewards') ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <Gift size={18} />
          <span>Rewards</span>
        </Link>
        <Link to="/help" className={`nav-item-mobile ${isActive('/help') ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <HelpCircle size={18} />
          <span>Help</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;