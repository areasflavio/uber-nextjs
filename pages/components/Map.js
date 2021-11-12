import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from '!mapbox-gl';

export default function Map({ accessToken, pickupCoords, dropoffCoords }) {
  mapboxgl.accessToken = accessToken;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      // style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    if (pickupCoords.length > 0 && dropoffCoords.length > 0) {
      addMarker(map, pickupCoords);
      addMarker(map, dropoffCoords);

      map.fitBounds([pickupCoords, dropoffCoords], {
        padding: 50,
      });
    }
  }, [dropoffCoords, pickupCoords]);

  const addMarker = (map, coords) => {
    new mapboxgl.Marker().setLngLat(coords).addTo(map);
  };

  return <Container id="map">Map</Container>;
}

const Container = tw.div`
  flex-1
`;
