import React from 'react';
import './ShipmentDetails.scss';
import TrackerStatusCard from './TrackerStatusCard';
import TrackerDetailsCard from './TrackerDetailsCard';

const ShipmentDetails = ({ shipmentData, BostaData }) => {
  if (!shipmentData || !shipmentData.TransitEvents) {
    return <div>Loading shipment data...</div>;
  }

  if (!BostaData || !BostaData.CurrentStatus || !BostaData.TransitEvents) {
    return <div>Loading shipment data...</div>;
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
