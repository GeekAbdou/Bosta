import { useQuery } from 'react-query';

const fetchShipment = async (trackingNumber) => {
  if (!trackingNumber) throw new Error('No tracking number provided');
  const res = await fetch(
    `https://tracking.bosta.co/shipments/track/${trackingNumber}`,
  );
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const useShipment = (trackingNumber) => {
  return useQuery(
    ['shipment', trackingNumber],
    () => fetchShipment(trackingNumber),
    {
      enabled: !!trackingNumber,
      staleTime: 600000,
      cacheTime: 3600000,
      refetchOnWindowFocus: false,
    },
  );
};

export default useShipment;
