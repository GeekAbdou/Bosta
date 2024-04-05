import './TrackerStatusCard.scss';
import { ReactComponent as RightIcon } from '../assets/right.svg';
import { t } from 'i18next';
import Cookies from 'js-cookie';
import { ReactComponent as Created } from '../assets/order-created.svg';
import { ReactComponent as Pickup } from '../assets/order-pickup.svg';
import { ReactComponent as Delivery } from '../assets/order-delivery.svg';
import { ReactComponent as Delivered } from '../assets/order-delivered.svg';
import {
  formatDateTime,
  capitalizeFirstLetter,
  normalizeString,
  formatDateMonth,
} from '../utils/utilsfn';

const TrackerStatusCard = ({ BostaData }) => {
  const trackingNumber = BostaData.TrackingNumber;
  const lastUpdate = BostaData.PromisedDate;
  const Provider = BostaData.provider;
  const deliveryEstimate = BostaData.ScheduleDate;
  const status = BostaData.CurrentStatus.state;
  const currentLanguageCode = Cookies.get('i18next') || 'en';

  // TODO: formatDateTime , formatDateMonth ,formatDateMonth capitalizeFirstLetter improved with useMemo

  return (
    <div className="shipment-card">
      <div className="shipment-card__info">
        <div className="shipment-card__tracking-number">
          <span>
            {t('TRACKING_NUMBER')} #{trackingNumber}
          </span>
          <div className={`shipment-card__status__${normalizeString(status)}`}>
            {t(capitalizeFirstLetter(status))}
          </div>
        </div>

        <div className="shipment-card__last-update">
          <span>{t('LAST_UPDATE')}</span>
          <div>{formatDateTime(lastUpdate)}</div>
        </div>

        <div className="shipment-card__merchant">
          <span>{t('PROVIDER')}</span>
          <div>{t(Provider)}</div>
        </div>

        <div className="shipment-card__delivery">
          <span>{t('DELIVERY_DATE')}</span>
          <div>{formatDateMonth(deliveryEstimate)}</div>
        </div>
      </div>

      <div
        className={`shipment-card__timeline ${currentLanguageCode === 'ar' ? 'rtl' : 'ltr'}`}
      >
        {
          // TODO: cleaning jsx by removing logic outside the layout
        }
        <div className="shipment-card__timeline__created">
          <div
            className={`shipment-card__timeline__created--${normalizeString(status)}-icon`}
          >
            {normalizeString(status) === 'preparing-for-shipment' ? (
              <Created />
            ) : (
              <RightIcon />
            )}
          </div>
          <div className="shipment-card__timeline__created--title">
            {t('Shipment Created')}
          </div>
        </div>
        <div className="shipment-card__timeline__picked">
          <div
            className={`shipment-card__timeline__picked--${normalizeString(status)}-icon`}
          >
            {normalizeString(status) === 'preparing-for-shipment' ? (
              <Pickup />
            ) : normalizeString(status) === 'in-transit' ? (
              <Pickup />
            ) : (
              <RightIcon />
            )}
          </div>
          <div className="shipment-card__timeline__picked--title">
            {t(capitalizeFirstLetter(status)) !== t('In Transit')
              ? t('Picked Up')
              : t(capitalizeFirstLetter(status))}
          </div>
        </div>
        <div className="shipment-card__timeline__delivery">
          <div
            className={`shipment-card__timeline__delivery--${normalizeString(status)}-icon`}
          >
            {normalizeString(status) === 'returned' ? (
              <RightIcon />
            ) : normalizeString(status) === 'delivered' ? (
              <RightIcon />
            ) : (
              <Delivery />
            )}
          </div>
          <div className="shipment-card__timeline__delivery--title">
            {t('Out For Delivery')}
          </div>
        </div>
        <div className="shipment-card__timeline__delivered">
          <div
            className={`shipment-card__timeline__delivered--${normalizeString(status)}-icon`}
          >
            {normalizeString(status) === 'returned' ? (
              <RightIcon />
            ) : normalizeString(status) === 'delivered' ? (
              <RightIcon />
            ) : (
              <Delivered />
            )}
          </div>
          <div className="shipment-card__timeline__delivered--title">
            {status === 'Returned' ? t('Returned') : t('Delivered')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackerStatusCard;
