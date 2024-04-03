import React from 'react';
import './ShipmentDetails.scss';
import TrackerStatusCard from './TrackerStatusCard';
import ShipmentDetailsCard from './ShipmentDetailsCard';

const ShipmentDetails = ({ shipmentData, BostaData }) => {
  if (
    !shipmentData ||
    !shipmentData.CurrentStatus ||
    !shipmentData.TransitEvents
  ) {
    return <div>Loading shipment data...</div>;
  }

  if (!BostaData || !BostaData.CurrentStatus || !BostaData.TransitEvents) {
    return <div>Loading shipment data...</div>;
  }

  const { CurrentStatus, TransitEvents } = shipmentData;

  return (
    <>
      <TrackerStatusCard statusData={CurrentStatus} />
      <ShipmentDetailsCard transitData={TransitEvents} BostaData={BostaData} />
    </>
  );
};

export default ShipmentDetails;

/*
{

  <div className="shipment-timeline shipment-timeline__status">
  <h2>Current Status: {CurrentStatus.state}</h2>
  <p>
    Last Updated: {new Date(CurrentStatus.timestamp).toLocaleString()}
  </p>
</div>

<div className="shipment-timeline">
  <div className="shipment-timeline__events">
    {TransitEvents.map((event, index) => (
      <div
        key={index}
        className={`shipment-timeline__event ${event.state.toLowerCase().replace(/_/g, '-')}`}
      >
        <div className="shipment-timeline__event-icon"></div>
        <div className="shipment-timeline__event-info">
          <p className="shipment-timeline__event-date">
            {new Date(event.timestamp).toLocaleDateString()}
          </p>
          <p className="shipment-timeline__event-state">
            {event.state.replace(/_/g, ' ')}
            {event.hub && ` at ${event.hub}`}
          </p>
          {event.reason && (
            <p className="shipment-timeline__event-reason">
              {event.reason}
            </p>
          )}
        </div>
        {index < TransitEvents.length - 1 && (
          <div className="shipment-timeline__event-line"></div>
        )}
      </div>
    ))}
  </div>
</div>
}*/
