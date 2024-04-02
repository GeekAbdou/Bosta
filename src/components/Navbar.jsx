/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // For Accessability we need to handle keydown event
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__section navbar__section--left">
          <div className="navbar__item">
            <Link className="navbar__item--logo" to="/">
              <img src={logo} alt="Logo" className="navbar__item--img" />
            </Link>
          </div>
        </div>

        <div className="navbar__section navbar__section--center">
          <div className="navbar__item">
            <Link className="navbar__item--link" to="/">
              الرئيسية
            </Link>
          </div>
          <div className="navbar__item">
            <Link className="navbar__item--link" to="/Prices">
              الأسعار
            </Link>
          </div>
          <div className="navbar__item">
            <Link className="navbar__item--link" to="/Sales">
              كلم المبيعات
            </Link>
          </div>
        </div>

        <div className="navbar__section navbar__section--right">
          <div className="navbar__item">
            <Link
              className="navbar__item--link navbar__item--tracking "
              to="/Tracking"
            >
              تتبع شحنتك
            </Link>
          </div>
          <div className="navbar__item signin-section">
            <Link className="navbar__item--link" to="/SginIn">
              تسجيل الدخول
            </Link>
          </div>

          <div className="navbar__item--language">ENG</div>
        </div>

        <div className="navbar__mobileSection">
          <div className="navbar__mobileItem">
            <a href="#" className="navbar__mobileItem--link">
              تتبع شحنتك
            </a>
          </div>

          <div
            className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
