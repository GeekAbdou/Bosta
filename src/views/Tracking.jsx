import React, { useState, useEffect } from 'react';
import './Tracking.scss';
import ShipmentDetails from '../components/ShipmentDetails';
import useShipment from '../hooks/useShipment';
import Cookies from 'js-cookie';
import { t } from 'i18next';
import Loader from '../components/Loader';
import { useLocation, useNavigate } from 'react-router-dom';

const ShipmentTracker = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const shipmentNumber = searchParams.get('shipment-number');
  const navigate = useNavigate();

  const [trackingNumber, setTrackingNumber] = useState(shipmentNumber || '');
  const [queryId, setQueryId] = useState(shipmentNumber || '');

  const shipmentQuery = useShipment(queryId);
  const BostaShipmentQuery = useShipment(queryId, true);

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
    // Redirect to the desired URL with the shipment number as query parameter
    navigate(`/Tracking/?shipment-number=${trackingNumber}`);
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

  useEffect(() => {
    if (BostaShipmentQuery.data) {
      console.log('Shipment data:', BostaShipmentQuery.data);
    }
  }, [BostaShipmentQuery.data]);

  return (
    <div className="tracking-container">
      <div className="tracker-input">
        <div
          className={`tracker-input__group ${currentLanguageCode === 'ar' ? 'rtl' : 'ltr'}`}
        >
          <input
            placeholder={t('TRACKING_NUMBER')}
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

      {shipmentQuery.isLoading && (
        <div className="shipment-loader-container">
          <Loader />
        </div>
      )}
      {shipmentQuery.isError && (
        <div className="error-wrong-tracking">{t('WRONG_TRACKING_NUMBER')}</div>
      )}
      {shipmentQuery.data && (
        <ShipmentDetails
          shipmentData={shipmentQuery.data}
          BostaData={BostaShipmentQuery.data}
        />
      )}
    </div>
  );
};

export default ShipmentTracker;
