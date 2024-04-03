/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';

const Navbar = () => {
  const { t, i18n } = useTranslation();

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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguageCode = cookies.get('i18next') || 'en';

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
              {t('NAV_HOME')}
            </Link>
          </div>
          <div className="navbar__item">
            <Link className="navbar__item--link" to="/Prices">
              {t('NAV_PRICES')}
            </Link>
          </div>
          <div className="navbar__item">
            <Link className="navbar__item--link" to="/Sales">
              {t('NAV_SALES')}
            </Link>
          </div>
        </div>

        <div className="navbar__section navbar__section--right">
          <div className="navbar__item">
            <Link
              className="navbar__item--link navbar__item--tracking "
              to="/Tracking"
            >
              {t('NAV_TRACKING')}
            </Link>
          </div>
          <div className="navbar__item signin-section">
            <Link className="navbar__item--link" to="/SginIn">
              {t('NAV_SIGNIN')}
            </Link>
          </div>

          {currentLanguageCode !== 'ar' && (
            <div
              className="navbar__item--language"
              onClick={() => changeLanguage('ar')}
              role="button"
              tabIndex={0}
            >
              عربي
            </div>
          )}
          {currentLanguageCode !== 'en' && (
            <div
              className="navbar__item--language"
              onClick={() => changeLanguage('en')}
              role="button"
              tabIndex={0}
            >
              ENG
            </div>
          )}
        </div>

        <div className="navbar__mobileSection">
          <div className="navbar__mobileItem">
            <Link
              className="navbar__item--link navbar__mobileItem--link "
              to="/Tracking"
            >
              {t('NAV_TRACKING')}
            </Link>
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
