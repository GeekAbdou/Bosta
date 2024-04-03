import React, { useState, useEffect } from 'react';
import './Tracking.scss';
import Navbar from '../components/Navbar';
import ShipmentDetails from '../components/ShipmentDetails';
import useShipment from '../hooks/useShipment';
import Cookies from 'js-cookie';

const ShipmentTracker = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [queryId, setQueryId] = useState('');

  const shipmentQuery = useShipment(queryId);
  // const BostaShipmentQuery = useShipment(queryId, true);

  const currentLanguageCode = Cookies.get('i18next') || 'en';

  useEffect(() => {
    if (queryId) {
      console.log('Shipment query ID updated:', queryId);
    }
  }, [queryId]);

  const handleInputChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  const handleSearchClick = () => {
    setQueryId(trackingNumber);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      // 13 key is Enter
      handleSearchClick();
    }
  };

  useEffect(() => {
    if (shipmentQuery.data) {
      console.log('Shipment data:', shipmentQuery.data);
    }
  }, [shipmentQuery.data]);

  return (
    <>
      <Navbar />
      <div className="tracker-input">
        <div
          className={`tracker-input__group ${currentLanguageCode === 'ar' ? 'ardir' : 'endir'}`}
        >
          <input
            placeholder="رقم التتبع"
            className="tracker-input__input"
            type="text"
            value={trackingNumber}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />

          <button
            type="button"
            className="tracker-input__button"
            onClick={handleSearchClick}
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

      {shipmentQuery.isLoading && <div className="loading">Loading...</div>}
      {shipmentQuery.isError && (
        <div className="error">
          An error occurred: {shipmentQuery.error.message}
        </div>
      )}
      {shipmentQuery.data && (
        <ShipmentDetails shipmentData={shipmentQuery.data} />
      )}
    </>
  );
};

export default ShipmentTracker;
