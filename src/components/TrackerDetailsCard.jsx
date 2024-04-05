import React, { useMemo } from 'react';
import './TrackerDetailsCard.scss';
import Question from '../assets/question.svg';
import { t } from 'i18next';
import Cookies from 'js-cookie';
import { formatDate, formatTime } from '../utils/utilsfn';

const TableRow = ({ event }) => (
  <tr>
    <td> {t(event.hub) ? t(event.hub) : 'N/A'}</td>
    <td>{formatDate(event.timestamp)}</td>
    <td>{formatTime(event.timestamp)}</td>
    <td>{t(event.state)}</td>
  </tr>
);
const TrackerDetailsCard = ({ transitData, BostaData }) => {
  const currentLanguageCode = Cookies.get('i18next') || 'en';
  const directionClass = useMemo(
    () => (currentLanguageCode === 'ar' ? 'rtl' : 'ltr'),
    [currentLanguageCode],
  );

  if (!transitData || !BostaData) {
    return <div>{t('ERROR_MESSAGE')}</div>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const processedTransitData = useMemo(() => {
    let lastValidHub = t('Shipment Created');
    return (transitData || []).map((event) => {
      if (event.hub) {
        lastValidHub = event.hub;
      } else {
        event = { ...event, hub: lastValidHub };
      }
      return event;
    });
  }, [transitData]);

  return (
    <div className={`shipmentDetails ${directionClass}`}>
      <div className="shipmentDetails__Events">
        <span className="shipmentDetails__Events__title">
          {t('SHIPMENT_DETAILS')}
        </span>
        <div className="shipmentDetails__Events__tableContainer">
          <table
            className={`shipmentDetails__Events__tableContainer__table ${directionClass}`}
          >
            <thead>
              <tr>
                <th>{t('HUB')}</th>
                <th>{t('DATE')}</th>
                <th>{t('TIME')}</th>
                <th>{t('STATE')}</th>
              </tr>
            </thead>
            <tbody>
              {processedTransitData.map((event, index) => (
                <TableRow key={index} event={event} />
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
