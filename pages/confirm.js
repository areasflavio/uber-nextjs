import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import tw from 'tailwind-styled-components';

import Map from './components/Map';

export default function Confirm({ accessToken }) {
  const [pickupCoords, setPickupCoords] = useState([]);
  const [dropoffCoords, setDropoffCoords] = useState([]);

  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const getCoordinates = async (location) => {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json`,
      {
        params: {
          access_token: String(accessToken),
          limit: 1,
        },
      }
    );

    return response.data.features[0].center;
  };

  useEffect(() => {
    getCoordinates(pickup).then((coords) => setPickupCoords(coords));
    getCoordinates(dropoff).then((coords) => setDropoffCoords(coords));
  }, [dropoff, pickup]);

  return (
    <Container>
      <Map
        accessToken={accessToken}
        pickupCoords={pickupCoords}
        dropoffCoords={dropoffCoords}
      />

      <ConfirmContainer></ConfirmContainer>
    </Container>
  );
}

const Container = tw.div`
  flex flex-col
  w-full h-screen
  bg-gray-200
`;

const ConfirmContainer = tw.section`
  flex flex-1
`;

export async function getStaticProps() {
  const accessToken = process.env.MAPBOX_ACCESSTOKEN;

  return {
    props: { accessToken },
  };
}
