import React from 'react';
import './ShipmentDetails.scss';
import TrackerStatusCard from './TrackerStatusCard';
import TrackerDetailsCard from './TrackerDetailsCard';
import ThreeCirclesSpinner from './Layout/ThreeCirclesSpinner';

const ShipmentDetails = ({ shipmentData, BostaData }) => {
  const hasValidData =
    shipmentData?.TransitEvents &&
    BostaData?.CurrentStatus &&
    BostaData?.TransitEvents;

  if (!hasValidData) {
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
