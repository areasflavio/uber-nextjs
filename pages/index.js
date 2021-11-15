import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import tw from 'tailwind-styled-components';
import { signOut, onAuthStateChanged } from 'firebase/auth';

import { auth } from '../firebase';

import Map from './components/Map';

export default function Home({ accessToken }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          avatar_url: user.photoURL,
        });
      } else {
        setUser(null);
        router.push('/login');
      }
    });
  }, [router, user]);

  return (
    <Container>
      <Map accessToken={accessToken} />
      <ActionContainer>
        <Header>
          <UberLogo
            src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"
            alt="Uber"
          />

          {user && (
            <ProfileContainer>
              <UserName>{user.name}</UserName>
              <UserAvatar
                src={user.avatar_url}
                alt={user.name}
                onClick={() => signOut(auth)}
              ></UserAvatar>
            </ProfileContainer>
          )}
        </Header>

        <ButtonsContainer>
          <Link href="/search" passHref>
            <Button>
              <ButtonImage
                src="https://i.ibb.co/cyvcpfF/uberx.png"
                alt="uber-x"
              />
              Ride
            </Button>
          </Link>
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
  cursor-pointer
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
