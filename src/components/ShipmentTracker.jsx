// ShipmentTracker.jsx

import React from 'react';
import './ShipmentTracker.scss'; // Ensure you create this SCSS file and import it here
import Navbar from './Navbar';

const ShipmentTracker = () => {
  return (
    <>
      <Navbar />
      <div className="tracker-input">
        <div className="tracker-input__group">
          <input
            placeholder="رقم التتبع"
            className="tracker-input__input"
            type="text"
            value=""
          />

          <div className="tracker-input__button">
            <button
              type="button"
              className="tracker-input__button tracker-input__button--primary tracker-input__search-button"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L28 28"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                ></path>
                <circle
                  cx="13"
                  cy="13"
                  r="11"
                  stroke="white"
                  strokeWidth="3"
                ></circle>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShipmentTracker;
