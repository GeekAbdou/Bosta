import React from 'react';
import './Hero.scss'; // Ensure this SCSS file is present in your project and properly linked.
import hero from '../assets/hero.png';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-main home-header">
      <div className="hero__header">
        <h1 className="hero__header__title">{t('HOME_HEAD')}</h1>
        <div className="hero__header__content">
          <p className="hero__header__content__subtitle">
            {t('HOME_SUBTITLE')}
          </p>
          <button type="button" className="hero__header__content__button">
            {t('HOME_BUTTON')}
          </button>
        </div>
      </div>
      <div className="hero__image">
        <img src={hero} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
