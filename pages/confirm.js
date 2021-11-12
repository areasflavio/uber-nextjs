import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import tw from 'tailwind-styled-components';

import Map from './components/Map';
import RideSelector from './components/RideSelector';

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
      <Link href="/search" passHref>
        <ButtonContainer>
          <BackButtonImage
            src="https://img.icons8.com/ios-filled/50/00000/left.png"
            alt="Back"
          />
        </ButtonContainer>
      </Link>

      <Map
        accessToken={accessToken}
        pickupCoords={pickupCoords}
        dropoffCoords={dropoffCoords}
      />

      <ConfirmContainer>
        <RideSelector />

        <ConfirmButtonContainer>
          <ConfirmButton>Confirm</ConfirmButton>
        </ConfirmButtonContainer>
      </ConfirmContainer>
    </Container>
  );
}

const Container = tw.div`
  flex flex-col
  w-full h-screen
  relative
`;

const ButtonContainer = tw.button`
  absolute z-10 drop-shadow
  bg-white rounded-full
  top-4 left-4
`;

const BackButtonImage = tw.img`
  h-12
`;

const ConfirmContainer = tw.section`
  flex flex-col flex-1
  h-1/2

`;

const ConfirmButtonContainer = tw.div`
  border-t-2 flex
`;

const ConfirmButton = tw.button`
  w-full
  mx-2 my-4 px-4 py-4
  text-xl text-white
  bg-black
`;

export async function getStaticProps() {
  const accessToken = process.env.MAPBOX_ACCESSTOKEN;

  return {
    props: { accessToken },
  };
}
