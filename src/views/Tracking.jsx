import React, { useState, useEffect } from 'react';
import './Tracking.scss';
import Navbar from '../components/Navbar';
import ShipmentDetails from '../components/ShipmentDetails';
import useShipment from '../hooks/useShipment';

const ShipmentTracker = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [queryId, setQueryId] = useState('');

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
  const shipmentQuery = useShipment(queryId);

  useEffect(() => {
    if (shipmentQuery.data) {
      console.log('Shipment data:', shipmentQuery.data);
    }
  }, [shipmentQuery.data]);

  return (
    <>
      <Navbar />
      <div className="tracker-input">
        <div className="tracker-input__group">
          <input
            placeholder="رقم التتبع"
            className="tracker-input__input"
            type="text"
            value={trackingNumber}
            onChange={handleInputChange}
          />

          <div className="tracker-input__button">
            <button
              type="button"
              className="tracker-input__button tracker-input__button--primary tracker-input__search-button"
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
