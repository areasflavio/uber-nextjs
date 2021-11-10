import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import tw from 'tailwind-styled-components';

import Map from './components/Map';

export default function Home({ accessToken }) {
  return (
    <Container>
      <Map accessToken={accessToken} />
      <ActionContainer>
        <Header>
          <UberLogo
            src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"
            alt="Uber"
          />

          <ProfileContainer>
            <UserName>Flávio Arêas</UserName>
            <UserAvatar
              src="https://github.com/areasflavio.png"
              alt="Flávio Arêas"
            ></UserAvatar>
          </ProfileContainer>
        </Header>

        <ButtonsContainer>
          <Button>
            <ButtonImage
              src="https://i.ibb.co/cyvcpfF/uberx.png"
              alt="uber-x"
            />
            Ride
          </Button>
          <Button>
            <ButtonImage src="https://i.ibb.co/n776JLm/bike.png" alt="uber-x" />
            2-Wheels
          </Button>
          <Button>
            <ButtonImage
              src="https://i.ibb.co/5RjchBg/uberschedule.png"
              alt="uber-x"
            />
            Reserve
          </Button>
        </ButtonsContainer>

        <InputContainer>Where to?</InputContainer>
      </ActionContainer>
    </Container>
  );
}

const Container = tw.div`
  flex flex-col
  w-full h-screen
  bg-white
`;

const ActionContainer = tw.div`
  flex-1 p-4
`;

const Header = tw.header`
  flex justify-between items-center
`;

const UberLogo = tw.img`
  h-28 
`;

const ProfileContainer = tw.div`
  flex flex-1 items-center 
`;

const UserName = tw.div`
  flex-1 text-right
  mr-4 w-20 text-sm 
`;

const UserAvatar = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px
`;

const ButtonsContainer = tw.div`
  flex
`;

const Button = tw.button`
  flex flex-col flex-1 items-center justify-center
  m-1 h-32 rounded-lg
  bg-gray-200 text-xl
  transform hover:scale-105 transition
`;

const ButtonImage = tw.img`
  h-3/5
`;

const InputContainer = tw.div`
  flex items-center
  h-20 p-4 mt-8
  bg-gray-200 text-2xl
`;

export async function getStaticProps() {
  const accessToken = process.env.MAPBOX_ACCESSTOKEN;

  return {
    props: { accessToken },
  };
}
