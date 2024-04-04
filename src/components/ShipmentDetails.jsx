import React from 'react';
import './ShipmentDetails.scss';
import TrackerStatusCard from './TrackerStatusCard';
import TrackerDetailsCard from './TrackerDetailsCard';
import ThreeCirclesSpinner from './ThreeCirclesSpinner';

const ShipmentDetails = ({ shipmentData, BostaData }) => {
  if (!shipmentData || !shipmentData.TransitEvents) {
    return (
      <div className="shipment-loader-container">
        <ThreeCirclesSpinner />
      </div>
    );
  }

  if (!BostaData || !BostaData.CurrentStatus || !BostaData.TransitEvents) {
    return (
      <div className="shipment-loader-container">
        <ThreeCirclesSpinner />
      </div>
    );
  }

  const { TransitEvents } = shipmentData;

  return (
    <>
      <TrackerStatusCard BostaData={BostaData} />
      <TrackerDetailsCard transitData={TransitEvents} BostaData={BostaData} />
    </>
  );
};

export default ShipmentDetails;
