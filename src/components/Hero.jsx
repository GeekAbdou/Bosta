// HeroSection.jsx

import React from 'react';
import './Hero.scss'; // Ensure this SCSS file is present in your project and properly linked.
import hero from '../assets/hero.png';
const HeroSection = () => {
  return (
    <section className="hero-main home-header">
      <div className="hero__header">
        <h1 className="hero__header__title">
          انضم إلى جيل جديد من الخدمات اللوجستية!
        </h1>
        <div className="hero__header__content">
          <p className="hero__header__content__subtitle">
            مفهوم جديد للشحن والتتبع والتجميع والتوصيل، كل ذلك من خلال حلول
            تقنية مبتكرة وعمليات فعالة.
          </p>
          <button type="button" className="hero__header__content__button">
            ابدأ الآن
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
