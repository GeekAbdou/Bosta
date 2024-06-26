/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useState } from 'react';
import './Navbar.scss';
import ARLogo from '../../../assets/ar-logo.svg';
import ENLogo from '../../../assets/en-logo.svg';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import NavigationLinks from './NavigationLinks';
import SearchComponet from './SearchComponent';
import Dropdown from './Dropdown';
import AuthButtons from './AuthButtons';
import LangNavbarItem from './LangNavbarItem';
import HamburgerIcon from './HamburgerIcon';

const Navbar = () => {
  const { t } = useTranslation();
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
  // eslint-disable-next-line no-unused-vars
  const [trackingNumber, setTrackingNumber] = useState('');
  const navigate = useNavigate();

  const handleTrackingNumberChange = (selectedTrackingNumber) => {
    setTrackingNumber(selectedTrackingNumber);
    navigate(`/tracking/${selectedTrackingNumber}`); // Assuming '/tracking/:number' is your route
  };
  const currentLanguageCode = cookies.get('i18next') || 'en';

  return (
    <header >
      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__section navbar__section--left">
            <div className="navbar__item borderless">
              <Link className="navbar__item--logo" to="/">
                { ['ar', 'en'].includes(currentLanguageCode) && (
                  <img
                    src={ currentLanguageCode == 'ar' ? ARLogo : ENLogo }
                    alt="Logo"
                    className="navbar__item--img"
                  />
                ) }
              </Link>
            </div>
          </div>

          <NavigationLinks className="navbar__section navbar__section--center" />

          <div className="navbar__section navbar__section--right">
            <div className="navbar__item--tracking">
              <div className="navbar__item borderless">
                <Dropdown
                  onSelection={ handleTrackingNumberChange }
                  parentElement={
                    <p
                      key="search-orders__dropdown"
                      className="navbar__item--link "
                    >
                      { t('NAV_TRACKING') }
                    </p>
                  }
                >
                  { [
                    <div
                      key="search-orders__container"
                      className="dropdown-search-orders"
                    >
                      <div className="search-orders__container">
                        <p className="search-orders__title">
                          { t('TRACKING_TITLE') }
                        </p>
                        <SearchComponet />
                      </div>
                    </div>,
                  ] }
                </Dropdown>
              </div>
            </div>
            <LangNavbarItem />
            <AuthButtons />
          </div>
          <HamburgerIcon
            isOpen={ isOpen }
            onClick={ toggleMenu }
            onKeyDown={ handleKeyDown }
          />
        </div>
      </nav>
      <div className="navbar__mobileSection">
        <div
          className={ `navbar__mobileSection-links navbar__mobileSection-links${isOpen ? '--open' : ''}` }
        >
          <NavigationLinks className="navbar__links" />
          <LangNavbarItem />
          <AuthButtons className="signin-section--mobile" />
        </div>
      </div>
    </header >
  );
};

export default Navbar;
