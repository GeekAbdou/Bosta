import React from 'react';
import './ShipmentDetailsCard.scss';
import Question from '../assets/question.svg';
import { t } from 'i18next';

const TransitDataTable = ({ transitData, BostaData }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  let isRtl = true;

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

  // Add a className based on the isRtl prop to control the text direction
  const tableClassName = `shipmentDetails__Events__tableContainer__table ${isRtl ? 'rtl' : 'ltr'}`;

  return (
    <div className={`shipmentDetails ${isRtl ? 'rtl' : 'ltr'}`}>
      <div className="shipmentDetails__Events">
        <h3 className="shipmentDetails__Events__title">shipment Details</h3>
        <div className="shipmentDetails__Events__tableContainer">
          <table className={tableClassName}>
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
      <div className="shipmentDetails__Address">
        <h3 className="shipmentDetails__Address__title">Delivery Address</h3>
        <div className="shipmentDetails__Address__addressDetails">
          {BostaData.DropOffAddress.firstLine}
        </div>
        <div className="shipmentDetails__Address__report">
          <img src={Question} alt="question mark" />
          <div>
            <span>{t('REPORT_TITLE')}</span>
            <button>{t('REPORT_BUTTON')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransitDataTable;
