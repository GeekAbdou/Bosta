import { useQuery } from 'react-query';

const fetchShipment = async (trackingNumber, withHeaders = false) => {
  const headers = withHeaders ? { 'X-Requested-By': 'Bosta' } : {};

  if (!trackingNumber) throw new Error('No tracking number provided');

  const res = await fetch(
    `https://tracking.bosta.co/shipments/track/${trackingNumber}`,
    {
      headers,
    },
  );

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const useShipment = (trackingNumber, withHeaders) => {
  return useQuery(
    ['shipment', trackingNumber, withHeaders],
    () => fetchShipment(trackingNumber, withHeaders),
    {
      enabled: !!trackingNumber,
      staleTime: 600000,
      cacheTime: 3600000,
      refetchOnWindowFocus: false,
    },
  );
};

export default useShipment;
