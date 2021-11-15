import axios from 'axios';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';

export const ridesList = [
  {
    imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
    service: 'UberX',
    multiplier: 1,
  },
  {
    imgUrl: 'https://i.ibb.co/YDYMKny/uberxl.png',
    service: 'UberXL',
    multiplier: 1.5,
  },
  {
    imgUrl: 'https://i.ibb.co/Xx4G91m/uberblack.png',
    service: 'Black',
    multiplier: 2,
  },
  {
    imgUrl: 'https://i.ibb.co/cyvcpfF/uberx.png',
    service: 'Comfort',
    multiplier: 1.2,
  },
  {
    imgUrl: ' https://i.ibb.co/1nStPWT/uberblacksuv.png',
    service: 'Black SUV',
    multiplier: 2.8,
  },
];

export default function RideSelector({
  accessToken,
  pickupCoords,
  dropoffCoords,
}) {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoords[0]},${pickupCoords[1]};${dropoffCoords[0]},${dropoffCoords[1]}`,
          {
            params: {
              access_token: String(accessToken),
            },
          }
        )
        .then((response) =>
          setRideDuration(response.data.routes[0]?.duration / 100)
        );
    } catch (err) {
      console.error(err);
    }
  }, [accessToken, pickupCoords, dropoffCoords]);

  return (
    <Container>
      <Title>Choose a ride, or swipe for more</Title>

      <RidesList>
        {ridesList.map((ride) => (
          <Ride key={ride.service}>
            <RideImage src={ride.imgUrl} />

            <RideDetails>
              <RideService>{ride.service}</RideService>
              <RideETA>5 min away</RideETA>
            </RideDetails>

            <RidePrice>
              {'$' + (rideDuration * ride.multiplier).toFixed(2)}
            </RidePrice>
          </Ride>
        ))}
      </RidesList>
    </Container>
  );
}

const Container = tw.div`
  flex flex-col
  w-full h-screen
  overflow-y-scroll
`;

const Title = tw.div`
  py-2 border-b
  text-center text-xs text-gray-500 
`;

const RidesList = tw.ul`
  overflow-y-scroll
`;

const Ride = tw.li`
  flex items-center
  p-4
`;

const RideImage = tw.img`
  h-14 mr-4
`;

const RideDetails = tw.div`
  flex-1
`;

const RideService = tw.h2`
  font-medium
`;

const RideETA = tw.p`
  text-sm text-blue-500
`;

const RidePrice = tw.strong`
  text-sm
`;
