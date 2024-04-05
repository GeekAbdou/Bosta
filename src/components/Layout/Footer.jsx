import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ARLogo from '../../assets/ar-logo.svg';
import ENLogo from '../../assets/en-logo.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import './Footer.scss';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__section">
          <img
            src={i18n.language === 'ar' ? ARLogo : ENLogo}
            alt="logo"
            className="footer__section__logo"
          />
          <p className="footer__section__help-email">help@bosta.co</p>
          <ul className="footer__section__social-list">
            <li className="footer__section__social-list--item">
              <a
                href="https://www.facebook.com"
                className="footer__social-link"
              >
                <img
                  src={facebook}
                  alt="facebook-icon"
                  className="footer__social-icon"
                />
              </a>
            </li>
            <li className="footer__section__social-list--item">
              <a href="https://www.twitter.com" className="footer__social-link">
                <img
                  src={twitter}
                  alt="twitter-icon"
                  className="footer__social-icon"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <p className="footer__section__title">{t('FOOTER_TITLE')}</p>
          <ul className="footer__section__nav-list">
            <li className="footer__section__nav-list--item">
              <Link to="/pricing" className="footer__nav-link">
                {t('FOOTER_PRICES')}
              </Link>
            </li>
            <li className="footer__section__nav-list--item">
              <Link to="/tracking-shipment" className="footer__nav-link">
                {t('FOOTER_TRACKING')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copy-right">
        <p>{t('FOOTER_COPYRIGHTS')}</p>
      </div>
    </footer>
  );
};

export default Footer;
