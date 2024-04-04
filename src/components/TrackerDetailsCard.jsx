import React from 'react';
import './TrackerDetailsCard.scss';
import Question from '../assets/question.svg';
import { t } from 'i18next';
import Cookies from 'js-cookie';

const TrackerDetailsCard = ({ transitData, BostaData }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (((hours + 11) % 12) + 1)
      .toString()
      .padStart(2, '0');
    return `${formattedHours}:${minutes} ${ampm}`;
  };

  const currentLanguageCode = Cookies.get('i18next') || 'en';

  return (
    <div
      className={`shipmentDetails  ${currentLanguageCode === 'ar' ? 'rtl' : 'ltr'}`}
    >
      <div className="shipmentDetails__Events">
        <span className="shipmentDetails__Events__title">
          {t('SHIPMENT_DETAILS')}
        </span>
        <div className="shipmentDetails__Events__tableContainer">
          <table
            className={`shipmentDetails__Events__tableContainer__table  ${currentLanguageCode === 'ar' ? 'rtl' : 'ltr'}`}
          >
            <thead>
              <tr>
                <th>{t('STATE')}</th>
                <th>{t('DATE')}</th>
                <th>{t('TIME')}</th>
                <th>{t('HUB')}</th>
              </tr>
            </thead>
            <tbody>
              {transitData.map((event, index) => (
                <tr key={index}>
                  <td>{t(event.state)}</td>
                  <td>{formatDate(event.timestamp)}</td>
                  <td>{formatTime(event.timestamp)}</td>
                  <td>{event.hub || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="shipmentDetails__AddressDetails">
        <span className="shipmentDetails__AddressDetails__title">
          {t('DELIVERY_DETAILS')}
        </span>
        <div className="shipmentDetails__AddressDetails__container">
          <div className="shipmentDetails__AddressDetails__container__address">
            {BostaData.DropOffAddress.firstLine}
          </div>
          <div className="shipmentDetails__AddressDetails__container__report">
            <img src={Question} alt="question mark" />
            <div>
              <span>{t('REPORT_TITLE')}</span>
              <button>{t('REPORT_BUTTON')}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackerDetailsCard;
