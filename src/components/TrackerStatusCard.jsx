import './TrackerStatusCard.scss';
import { ReactComponent as RightIcon } from '../assets/right.svg';
// import { ReactComponent as Created } from '../assets/order-created.svg';
// import { ReactComponent as Pickup } from '../assets/order-pickup.svg';
// import { ReactComponent as Delivery } from '../assets/order-delivery.svg';
// import { ReactComponent as Delivered } from '../assets/order-delivered.svg';

const TrackerStatusCard = () => {
  const trackingNumber = '3155151';
  const lastUpdate = 'Monday May. 24, 2021 12:00 PM';
  const merchant = 'Souq.com';
  const deliveryEstimate = '3rd Jan 2022';
  const status = 'Delivered';

  return (
    <div className="shipment-card">
      <div className="shipment-card__info">
        <div className="shipment-card__tracking-number">
          <span>Tracking Number #{trackingNumber}</span>
          <div className="shipment-card__status">{status}</div>
        </div>

        <div className="shipment-card__last-update">
          <span>Last Update</span>
          <div>{lastUpdate}</div>
        </div>

        <div className="shipment-card__merchant">
          <span>Merchant</span>
          <div>{merchant}</div>
        </div>

        <div className="shipment-card__delivery">
          <span>Delivery in </span>
          <div>{deliveryEstimate}</div>
        </div>
      </div>

      <div className="shipment-card__timeline">
        <div className="shipment-card__timeline__created">
          <div className="shipment-card__timeline__created--icon">
            <RightIcon />
          </div>
          <div className="shipment-card__timeline__created--title">
            Shipment Created
          </div>
        </div>

        <div className="shipment-card__timeline__picked">
          <div className="shipment-card__timeline__picked--icon">
            <RightIcon />
          </div>
          <div className="shipment-card__timeline__picked--title">
            Picked Up
          </div>
        </div>

        <div className="shipment-card__timeline__delivery">
          <div className="shipment-card__timeline__delivery--icon">
            <RightIcon />
          </div>
          <div className="shipment-card__timeline__delivery--title">
            Out For Delivery
          </div>
        </div>

        <div className="shipment-card__timeline__delivered">
          <div className="shipment-card__timeline__delivered--icon">
            <RightIcon />
          </div>
          <div className="shipment-card__timeline__delivered--title">
            Delivered
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackerStatusCard;
